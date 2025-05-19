package main

import (
	"context"
	"fmt"
	"log"
	"os"
	"os/signal"
	"time"

	"website-penyuratan-smk-kartoharjo/config"
	"website-penyuratan-smk-kartoharjo/internal/builder"
	"website-penyuratan-smk-kartoharjo/pkg/database"
	"website-penyuratan-smk-kartoharjo/pkg/server"
)

func main() {
	//load configuration via env
	cfg, err := config.NewConfig(".env")
	checkError(err)
	db, err := database.InitDatabase(cfg.MySQLConfig)
	checkError(err)
	//init & start db
	publicRoutes := builder.BuildPublicRoutes(cfg, db)
	// privateRoutes := builder.BuildPrivateRoutes(cfg, db)


	//init server
	srv := server.NewServer(cfg, publicRoutes)
	runServer(srv, cfg.PORT)
	waitForShutdown(srv)
	//start server
}

func waitForShutdown(srv *server.Server){
	quit := make(chan os.Signal, 1)

	signal.Notify(quit, os.Interrupt)
	<-quit

	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()

	go func(){
		if err := srv.Shutdown(ctx); err != nil{
			srv.Logger.Fatal(err)
		}
	}()
}

func runServer(srv *server.Server, port string) {
	go func(){
		err := srv.Start(fmt.Sprintf(":%s", port))
		log.Fatal(err)
	}()
}

func checkError(err error){
	if err != nil{
		panic(err)
	}
}
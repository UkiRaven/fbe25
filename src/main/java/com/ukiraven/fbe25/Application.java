package com.ukiraven.fbe25;



import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.boot.autoconfigure.session.SessionAutoConfiguration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;


/**
 * Created by lastc on 26.02.2017.
 */
@SpringBootApplication(exclude = SessionAutoConfiguration.class)
public class Application {

    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }

}


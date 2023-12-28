package com.example.bd4.config;

import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.orm.hibernate5.LocalSessionFactoryBean;

@Configuration
@ComponentScan(basePackages = {
        "com.example.bd4.controller",
        "com.example.bd4.model",
        "com.example.bd4.data",
        "com.example.bd4.service"
})

@EnableJpaRepositories("com.example.bd4.**")
//@EntityScan(basePackages = {"com.example.bd4.data"})
public class AppConfiguration {
}

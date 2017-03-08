package com.ukiraven.fbe25.controllers;

import com.ukiraven.fbe25.entity.Account;
import com.ukiraven.fbe25.service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * Created by lastc on 08.03.2017.
 */
@RestController
public class AccountController {

    private final AccountService service;

    @Autowired
    public AccountController(AccountService service) {
        this.service = service;
    }

    @RequestMapping("user")
    public List<Account> getUsers() {
        return service.getAll();
    }

    @RequestMapping("user/{id}")
    public Account getUser(@PathVariable("id") long id) {
        return service.getById(id);
    }
}

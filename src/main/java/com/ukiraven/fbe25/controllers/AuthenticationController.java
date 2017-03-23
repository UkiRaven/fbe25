package com.ukiraven.fbe25.controllers;

import com.ukiraven.fbe25.entity.Account;
import com.ukiraven.fbe25.entity.Credentials;
import com.ukiraven.fbe25.entity.Role;
import com.ukiraven.fbe25.repository.AccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;
import java.util.Collections;
import java.util.Enumeration;

/**
 * Created by lastc on 21.03.2017.
 */
@RestController
@RequestMapping("api/session")
public class AuthenticationController {
    private final
    AuthenticationManager authenticationManager;
    private final
    AccountRepository repository;

    @Autowired
    public AuthenticationController(AuthenticationManager authenticationManager, AccountRepository repository) {
        this.authenticationManager = authenticationManager;
        this.repository = repository;
    }

    @RequestMapping(method = RequestMethod.GET)
    public Account session(HttpSession session) {
        System.out.println(session.getAttribute("user"));
        return (Account) session.getAttribute("user");
    }

    @RequestMapping(method = RequestMethod.POST)
    public Account login(@RequestBody Credentials credentials, HttpSession httpSession) {
        Authentication authentication = new UsernamePasswordAuthenticationToken(credentials.getUsername(), credentials.getPassword());
        SecurityContextHolder.getContext().setAuthentication(authenticationManager.authenticate(authentication));


        Account account = repository.findByNickname(credentials.getUsername());
        account.setToken(httpSession.getId());
        account.setAuthenticated(true);
        httpSession.setAttribute("user", account);

        return account;

    }

    @RequestMapping(method = RequestMethod.DELETE)
    public void logout(HttpSession session) {
        session.invalidate();
    }
}

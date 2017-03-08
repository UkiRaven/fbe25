package com.ukiraven.fbe25.service;

import com.ukiraven.fbe25.entity.Account;
import com.ukiraven.fbe25.repository.AccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by lastc on 05.03.2017.
 */
@Service
public class AccountServiceImpl implements AccountService {
    private final AccountRepository repository;

    @Autowired
    public AccountServiceImpl(AccountRepository repository) {
        this.repository = repository;
    }

    @Override
    public List<Account> getAll() {
        return repository.findAll();
    }

    @Override
    public Account getById(long id) {
        return repository.getOne(id);
    }

    @Override
    public void delete(long id) {
        repository.delete(id);
    }

    @Override
    public Account save(Account account) {
        return repository.saveAndFlush(account);
    }
}

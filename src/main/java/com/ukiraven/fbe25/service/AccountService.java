package com.ukiraven.fbe25.service;

import com.ukiraven.fbe25.entity.Account;

import java.util.List;

/**
 * Created by lastc on 05.03.2017.
 */

public interface AccountService {
    List<Account> getAll();
    Account getById(long id);
    void delete(long id);
    Account save(Account account);
}

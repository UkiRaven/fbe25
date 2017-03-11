package com.ukiraven.fbe25.repository;

import com.ukiraven.fbe25.entity.Account;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

/**
 * Created by lastc on 05.03.2017.
 */
public interface AccountRepository extends CrudRepository<Account, Long> {
    Account findByNickname(String name);
}

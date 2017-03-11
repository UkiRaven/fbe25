package com.ukiraven.fbe25.repository;

import com.ukiraven.fbe25.entity.Article;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.PagingAndSortingRepository;

/**
 * Created by lastc on 26.02.2017.
 */
public interface ArticleRepository extends PagingAndSortingRepository<Article, Long> {
}

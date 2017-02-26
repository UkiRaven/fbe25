package com.ukiraven.fbe25.repository;

import com.ukiraven.fbe25.entity.Article;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Created by lastc on 26.02.2017.
 */
public interface ArticleRepository extends JpaRepository<Article, Long> {
}

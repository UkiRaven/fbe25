package com.ukiraven.fbe25.controllers;

import com.ukiraven.fbe25.entity.Article;
import com.ukiraven.fbe25.service.ArticleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * Created by lastc on 26.02.2017.
 */
@RestController
public class ArticleController {

    private final ArticleService service;

    @Autowired
    public ArticleController(ArticleService service) {
        this.service = service;
    }

    @RequestMapping("/article/{id}")
    public Article getArticle(@PathVariable("id") long id) {
        return service.getById(id);
    }

    @RequestMapping("/article")
    public List<Article> getAllArticles() {
        return service.getAll();
    }
}

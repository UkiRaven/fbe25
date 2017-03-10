package com.ukiraven.fbe25.controllers;

import com.ukiraven.fbe25.entity.Article;
import com.ukiraven.fbe25.service.ArticleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
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

    @RequestMapping(value = "/article/{id}", method = RequestMethod.GET)
    public Article getArticle(@PathVariable("id") long id) {
        return service.getById(id);
    }

    @RequestMapping(value = "/article/{id}", method = RequestMethod.DELETE)
    public void deleteArticle(@PathVariable("id") long id) {
        service.delete(id);
    }

    @RequestMapping("/article")
    public List<Article> getAllArticles() {
        return service.getAll();
    }

    @RequestMapping(value = "article", method = RequestMethod.POST)
    public Article saveArticle(@RequestBody Article article) {
        article.setCreationDate(new Date());
        return service.save(article);
    }
}

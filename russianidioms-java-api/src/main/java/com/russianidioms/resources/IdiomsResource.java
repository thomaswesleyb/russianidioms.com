package com.russianidioms.resources;

import com.russianidioms.model.Idiom;
import com.russianidioms.service.IdiomService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/idioms")
public class IdiomsResource {

    @Autowired
    private IdiomService idiomService;

    @GetMapping
    public List<Idiom> getIdioms() {
        return idiomService.getIdioms();
    }

    @GetMapping("/{id}")
    public Idiom getIdiomById(String id) {
        return idiomService.getIdiomById(id);
    }

    @PostMapping
    public Idiom addIdiom(@RequestBody Idiom idiom) {
        return idiomService.addIdiom(idiom);
    }
}
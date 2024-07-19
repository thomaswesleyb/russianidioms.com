package com.russianidioms.service;

import com.russianidioms.mapper.IdiomMapper;
import com.russianidioms.model.Idiom;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class IdiomService {

    @Autowired
    private IdiomMapper idiomMapper;

    public List<Idiom> getIdioms() {
        return idiomMapper.getIdioms();
    }

    public Idiom getIdiomById(String id) {
        return idiomMapper.getIdiomById(id);
    }

    public Idiom addIdiom(Idiom idiom) {
        return idiomMapper.addIdiom(idiom);
    }

    public Idiom updateIdiom(Idiom idiom) {
        if (idiom != null && idiom.getId() != null && !idiom.getId().isEmpty()) {
            idiomMapper.updateIdiom(idiom);
            return idiom;
        } else {
            return null;
        }
    }

    public void deleteIdiom(String id) {
        idiomMapper.deleteIdiom(id);
    }
}

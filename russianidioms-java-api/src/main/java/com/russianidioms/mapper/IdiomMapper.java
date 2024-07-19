package com.russianidioms.mapper;

import com.russianidioms.model.Idiom;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Options;
import org.apache.ibatis.annotations.Select;


import java.util.List;

@Mapper
public interface IdiomMapper {
    @Select("SELECT * FROM idioms")
    List<Idiom> getIdioms();

    @Select("SELECT * FROM idioms WHERE id = #{id}")
    Idiom getIdiomById(String id);

    @Insert("INSERT INTO idioms (id, idiom, english, example, description, added_date, added_by) VALUES (#{id}, #{idiom}, #{english}, #{example}, #{description}, CURRENT_DATE, CURRENT_USER)")
    @Options(useGeneratedKeys = true, keyProperty = "id")
    Idiom addIdiom(Idiom idiom);

    @Insert("UPDATE idioms SET idiom = #{idiom}, meaning = #{meaning}, example = #{example} WHERE id = #{id}")
    void updateIdiom(Idiom idiom);

    @Insert("DELETE FROM idioms WHERE id = #{id}")
    void deleteIdiom(String id);
}

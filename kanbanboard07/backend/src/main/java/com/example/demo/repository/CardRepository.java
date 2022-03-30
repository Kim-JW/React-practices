package com.example.demo.repository;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.example.vo.CardVo;
import com.example.vo.TaskVo;

@Repository
public class CardRepository {

	@Autowired
	private SqlSession sqlSession;

	public List<CardVo> findAll() {
		return sqlSession.selectList("card.findAll");
	}

	public boolean insert(TaskVo vo) {
		return sqlSession.insert("task.addTask", vo) == 1;
	}
	
	public boolean delete(Long no) {
		return sqlSession.delete("task.deleteTask", no) == 1;
	}
}

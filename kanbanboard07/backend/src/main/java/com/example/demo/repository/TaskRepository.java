package com.example.demo.repository;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.example.vo.TaskVo;

@Repository
public class TaskRepository {
	
	@Autowired
	private SqlSession sqlSession;
	
	public List<TaskVo> findAll(Long no) {
		return sqlSession.selectList("task.findAll", no);
	}

	public Boolean changeTaskDone(TaskVo vo) {
		return sqlSession.update("task.update", vo) == 1;
	}
}

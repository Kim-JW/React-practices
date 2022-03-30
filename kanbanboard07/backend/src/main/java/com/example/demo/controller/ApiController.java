package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.JsonResult;
import com.example.demo.repository.CardRepository;
import com.example.demo.repository.TaskRepository;
import com.example.vo.TaskVo;


// @CrossOrigin(origins = {"http://localhost:9999"}, allowedHeaders = "*", allowCredentials="false", methods={RequestMethod.GET})

@RestController
@RequestMapping("/api")
public class ApiController {
	
	@Autowired
	private CardRepository cardRepository;
	
	@Autowired
	private TaskRepository taskRepository;
	
	@GetMapping("/card")
	public ResponseEntity<JsonResult> readCard() {
		return ResponseEntity.status(HttpStatus.OK).body(JsonResult.success(cardRepository.findAll()));
	}
	
	@GetMapping("/task")
	public ResponseEntity<JsonResult> readTask(@RequestParam(value="no", required =true, defaultValue = "") Long no) {
		return ResponseEntity.status(HttpStatus.OK).body(JsonResult.success(taskRepository.findAll(no)));
	}
	
	@PostMapping("/taskDone")
	public ResponseEntity<JsonResult> ChangeTaskDone(@RequestBody TaskVo vo) {
		taskRepository.changeTaskDone(vo);
		return ResponseEntity.status(HttpStatus.OK).body(JsonResult.success(vo));
	}
	
	@PostMapping("/addTask")
	public ResponseEntity<JsonResult> create(@RequestBody TaskVo vo) {
		cardRepository.insert(vo);
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(JsonResult.success(vo));
	}
	
	@PostMapping("/delete")
	public ResponseEntity<JsonResult> delete(@RequestBody TaskVo vo) {
		cardRepository.delete(vo.getNo());
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(JsonResult.success(vo));
	}
	
//	@Autowired
//	private EmaillistRepository emaillistRepository;
//	
//	@GetMapping("/api")
//	public ResponseEntity<JsonResult> read(@RequestParam(value="kw", required=true, defaultValue="") String keyword) {
//		return ResponseEntity
//				.status(HttpStatus.OK)
//				.body(JsonResult.success(emaillistRepository.findAll(keyword)));
//	}
//	
//	@PutMapping("/api")
//	public ResponseEntity<JsonResult> create(@RequestBody EmaillistVo vo) {
//		return ResponseEntity
//				.status(HttpStatus.OK)
//				.body(JsonResult.success(emaillistRepository.insert(vo)));
//	}
}

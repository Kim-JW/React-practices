package com.example.vo;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class TaskVo {
	private Long no;
	private String name;
	private String done;
	private Long card_no;
}

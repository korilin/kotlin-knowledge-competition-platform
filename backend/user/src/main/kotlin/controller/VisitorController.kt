package com.korilin.controller

import com.korilin.IResponseBody
import com.korilin.UserModuleApiPrefix
import com.korilin.annotations.ExceptionMessageHandler
import com.korilin.model.ContestRecordDetail
import com.korilin.service.VisitorService
import com.korilin.domain.table.Contest
import com.korilin.model.ContestRecordInfo
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping(UserModuleApiPrefix.VISITOR_PREFIX)
class VisitorController(
    private val visitorService: VisitorService
) {

    @GetMapping("/query/contest/release")
    @ExceptionMessageHandler
    suspend fun getReleaseContest(): IResponseBody<Contest> {
        val contest = visitorService.getReleaseContest()
        return IResponseBody.success(data = contest)
    }

    @GetMapping("/query/contest/records")
    @ExceptionMessageHandler
    suspend fun getContestRecords(): IResponseBody<Array<ContestRecordInfo>> {
        val data = visitorService.getPublishContests()
        return IResponseBody.success(data = data)
    }

    @GetMapping("/query/contest/record/detail")
    @ExceptionMessageHandler
    suspend fun getRecordDetail(contestId: Int): IResponseBody<ContestRecordDetail> {
        val detail = visitorService.getRecordDetail(contestId)
        return IResponseBody(status = detail != null, message = "找不到对应的公开的竞赛", data = detail)
    }
}
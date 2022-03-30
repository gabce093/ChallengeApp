import React, { useState } from "react";

var type = "distance";
var distance_goal = 100;
var elapsed_distance = 0;
var total_time = "null";
var challenge_time = "null";
var completed = false;

export function getType(){

    return type;
}

export function getTotalTime() {

    return total_time;
}

export function getChallengeTime() {

    return challenge_time;
}

export function getDistanceGoal() {

    return distance_goal;
}

export function checkCompleted(){

    return completed;
}

export function getElapsedDistance(){

    return elapsed_distance;
}

export function setDistanceGoal(goal: any){
    distance_goal = goal;
}

export function setElapsedDistance(dist: any){
    elapsed_distance = dist;
}

export function setTotalTime(t: any){
    total_time = t;
}

export function setChallengeTime(t: any){
    challenge_time = t;
}

export function CompleteChallenge(){
    completed = true;
}


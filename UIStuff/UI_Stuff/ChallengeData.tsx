import React, { useState } from "react";

var type = "distance";
var distance_goal = 1000;
var elapsed_distance = 0;
var time = "null";
var completed = false;

export function getType(){

    return type;
}

export function getTime() {

    return time;
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

export function setTime(t: any){
    time = t;
}

export function CompleteChallenge(){
    completed = true;
}


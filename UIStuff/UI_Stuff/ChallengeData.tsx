import React, { useState } from "react";
import { addEXP, getPlayerId, getTotalExp } from "./PlayerData";

var type = "distance";
var distance_goal = 5000;
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

export function getPace(distance: any, time: string) {

    var temp = time.split(':');
    
    var total_seconds = parseInt(temp[0])*3600 + parseInt(temp[1])*60 + parseInt(temp[2]);

    var seconds_per_km = total_seconds / (distance/1000);

    var minutes = Math.floor(seconds_per_km / 60);

    var seconds = Math.floor((seconds_per_km - minutes*60));

    if(10>seconds){
        var pace = minutes + ":" + '0' + seconds;
    }
    else {
        var pace = minutes + ":" + seconds;
    }
    
    return pace;
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

export function calculateXP(){
    var xp_earned = 100*(5000 / 1000)+ 50*((5339-5000)/1000)
    return xp_earned;
}

export function getMinPerK(){
    var temp = challenge_time.split(':');
    var total_seconds = parseInt(temp[0])*3600 + parseInt(temp[1])*60 + parseInt(temp[2]);
    var seconds_per_km = total_seconds / (distance_goal/1000);
    return seconds_per_km/60;
}


export function calculateCoins(){
    
    
    

   
}
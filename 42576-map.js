//https://programmers.co.kr/learn/courses/30/lessons/42576

function solution(participant, completion) {
    participant.sort();
    completion.sort();

    const [p] = participant.filter((name, index) => name != completion[index]);
    return p;
}

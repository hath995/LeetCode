// https://leetcode.com/problems/find-the-highest-altitude

type Pair = [max: number, sum: number];
function largestAltitude(gain: number[]): number {
    return gain.reduce<Pair>((pair: Pair, cur: number): Pair => [Math.max(pair[0], pair[1]+cur), pair[1]+cur], [0, 0] as Pair)[0];
};
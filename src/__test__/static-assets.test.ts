import Grid from '../learning-ts/static-assets';

describe('testing static-assests.ts', () => {
   test('that grid1 is equal to correct result', () => {
       let grid1 = new Grid(1.0);  // 1x scale
       const result = grid1.calculateDistanceFromOrigin({x: 10, y: 10});
       // we are working with a 1.0 scale, meaning the division performed left
       // original square root result unchanged
       expect(result).toEqual(14.142135623730951);
   });
   test('that grid2 is equal to correct result', () => {
       let grid2 = new Grid(5.0);  // 5x scale
       const result = grid2.calculateDistanceFromOrigin({x: 10, y: 10});
       expect(result).toEqual(2.8284271247461903)
   });
});

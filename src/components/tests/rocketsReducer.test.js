import rocketsReducer, { reserveRocket } from '../../redux/rockets/rocketsReducer';

describe('Inital state of the reducer', () => {
  test('test intial state: ', () => {
    expect(rocketsReducer(undefined, {})).toEqual([]);
  });
});

describe('Reserve rocket test', () => {
  test('should return rocket.reserved as false: ', () => {
    const exampleInitialState = [
      {
        id: '1',
        reserved: false,
      },
    ]
    expect(rocketsReducer(exampleInitialState, reserveRocket('1'))).toEqual([
      {
        id: '1',
        reserved: true,
      },
    ],
    );
  });
});
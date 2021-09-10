import missionsReducer, { missionReserve } from '../../redux/missions/missions';

describe('Inital state of the reducer', () => {
  test('test intial state: ', () => {
    expect(missionsReducer(undefined, {})).toEqual({
      missions: [],
    });
  });
});

describe('Reserve mission test', () => {
  test('should return missions.reserved as false: ', () => {
    const exampleInitialState = {
      missions: [
        {
          id: '9D1B7E0',
          reserved: true,
        },
      ],
    };
    expect(missionsReducer(exampleInitialState, missionReserve('9D1B7E0'))).toEqual(
      {
        missions: [
          {
            id: '9D1B7E0',
            reserved: false,
          },
        ],
      },
    );
  });
});

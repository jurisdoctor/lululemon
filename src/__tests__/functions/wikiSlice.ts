import { WikiState, WikiStateAPI } from '../../store/wiki/types';
import { wikiActions, wikiReducer } from '../../store/wiki/wikiSlice';

export const mockWikiDetailsResponse: WikiStateAPI = {
  births: [
    { pages: [{}], text: 'Madisyn Shipman, American actress', year: 2002 },
  ],
  deaths: [],
  events: [],
  holidays: [],
  selected: [],
};

test('should return the initial state', () => {
  expect(wikiReducer(undefined, { type: undefined })).toEqual({
    births: [],
    error: null,
    status: 'idle',
  });
});

test('should handle a todo being added to an empty list', () => {
  const previousState: WikiState = { births: [], error: null, status: 'idle' };

  expect(
    wikiReducer(
      previousState,
      wikiActions.setWikiDetails(mockWikiDetailsResponse)
    )
  ).toEqual({
    births: [
      { pages: [{}], text: 'Madisyn Shipman, American actress', year: 2002 },
    ],
    error: null,
    status: 'idle',
  });
});

// test('should handle a todo being added to an existing list', () => {
//   const previousState: WikiState = {
//     error: null,
//     status: 'idle',
//     births: [
//       { pages: [{}], text: 'Madisyn Shipman, American actress', year: 2002 },
//     ],
//   };

//   expect(
//     wikiReducer(
//       previousState,
//       wikiActions.setWikiDetails({
//         births: [
//           {
//             pages: [{}],
//             text: 'Connie Talbot, English singer-songwriter',
//             year: 2000,
//           },
//         ],
//       })
//     )
//   ).toEqual({
//     error: null,
//     status: 'idle',
//     births: [
//       { pages: [{}], text: 'Madisyn Shipman, American actress', year: 2002 },
//       {
//         pages: [{}],
//         text: 'Connie Talbot, English singer-songwriter',
//         year: 2000,
//       },
//     ],
//   });
// });

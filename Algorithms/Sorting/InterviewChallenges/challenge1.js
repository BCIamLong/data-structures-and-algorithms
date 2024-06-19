// #1 - Sort 10 schools around your house by distance: Insertion Sort porque es un tamaño de entrada pequeño, y en estos casos este algoritmo es muy eficaz, además si la entrada está (o casi) ordenada será aún más rápido.

const insertionSortForSchools = function (schools) {
  const len = schools.length;

  // let look = 0;
  for (let i = 0; i < len; i++) {
    // * [4,6,5,2] 2 < 4 => [2,4,6,5] and then we continue do the job, but if the item is less than the first item we don't need to loop and swap instead we swap it immediately and don't need to perform some redundant (du thua) works
    // * issue that when the element is the last element when we swap it can be problem if it's average number and not a biggest number then after because we have no iterative therefore it will swap and don't do anything which is not good
    // * because it can be smaller the previous numbers
    //  [1,2,5,7,0] => [0,2,5,7,1] so it's problem because we don't have the next iterative and loop another for to sort the order again
    // * the solution that we only do this check bellow here when the item is not the last one
    if (schools[i].distance < schools[0].distance && i !== schools.length - 1) {
      const tmp = schools[0];
      schools[0] = schools[i];
      schools[i] = tmp;
      continue;
    }

    for (let j = i - 1; j >= 0; j--) {
      if (schools[j + 1].distance < schools[j].distance) {
        const tmp = schools[j + 1];
        schools[j + 1] = schools[j];
        schools[j] = tmp;
      }
    }
  }
};

const schools = [
  {
    name: "School 1",
    distance: 1.5,
  },
  {
    name: "School 2",
    distance: 2.3,
  },
  {
    name: "School 3",
    distance: 0.8,
  },
  {
    name: "School 4",
    distance: 3.1,
  },
  {
    name: "School 5",
    distance: 1.9,
  },
  {
    name: "School 6",
    distance: 2.7,
  },
  {
    name: "School 7",
    distance: 1.2,
  },
  {
    name: "School 8",
    distance: 4.0,
  },
  {
    name: "School 9",
    distance: 2.4,
  },
  {
    name: "School 10",
    distance: 0.6,
  },
];

insertionSortForSchools(schools);
console.log(schools);

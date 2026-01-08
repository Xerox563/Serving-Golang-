const odds = new Set([1, 2, 3, 4, 5]);
const squares = new Set([1, 4, 9, 16]);

// intersection() : returns the new set containing the common elements from both the sets
const int_ans = odds.intersection(squares);
console.log("intersection : ", int_ans);

// union() : returns a new set containing all elements of the both sets
const union_ans = odds.union(squares);
console.log("union : ", union_ans);

// symmetricDifference() : returns a new set containing elements that are in either this set or the given set, but not in both.
// Basically it returns all the elements of both the sets except the common elements .
const sym_ans = odds.symmetricDifference(squares);
console.log("symmetricDifference : ", sym_ans);

// difference() : returns a new set containing the elements that are in this set but not in the given set
const diff_ans = odds.difference(squares);
console.log("difference : ", diff_ans);

// isSubsetOf() : checks wheather all elements of this set are in the given set
const isSubsetOf_ans = odds.isSubsetOf(squares);
console.log("isSubsetOf : ", isSubsetOf_ans);

// isSupersetsetOf() : checks wheather all elements of given set are in the this set
const isSuperset_ans = odds.isSupersetOf(squares);
console.log("isSubsetOf : ", isSuperset_ans);

// isDisjointForm() : checks wheather all elements of both are common or not : If common -> not isDisjointForm else both sets are disDisjointForm
const isDisjointForm_ans = odds.isDisjointFrom(squares);
console.log("isDisjointForm : ", isDisjointForm_ans);

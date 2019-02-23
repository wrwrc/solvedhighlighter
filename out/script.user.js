// ==UserScript==
// @name New Script
// @namespace Violentmonkey Scripts
// @include https://leetcode.com/problemset/*
// ==/UserScript==
const urls = new Set([
  "/problems/3sum",
  "/problems/add-two-numbers",
  "/problems/best-time-to-buy-and-sell-stock",
  "/problems/best-time-to-buy-and-sell-stock-ii",
  "/problems/best-time-to-buy-and-sell-stock-iii",
  "/problems/binary-tree-inorder-traversal",
  "/problems/binary-tree-maximum-path-sum",
  "/problems/binary-tree-postorder-traversal",
  "/problems/binary-tree-preorder-traversal",
  "/problems/candy",
  "/problems/combination-sum",
  "/problems/combination-sum-ii",
  "/problems/container-with-most-water",
  "/problems/count-and-say",
  "/problems/first-unique-character-in-a-string",
  "/problems/generate-parentheses",
  "/problems/house-robber",
  "/problems/implement-queue-using-stacks",
  "/problems/interleaving-string",
  "/problems/kth-largest-element-in-an-array",
  "/problems/largest-divisible-subset",
  "/problems/letter-combinations-of-a-phone-number",
  "/problems/longest-common-prefix",
  "/problems/longest-palindromic-substring",
  "/problems/longest-substring-without-repeating-characters",
  "/problems/majority-element",
  "/problems/maximum-subarray",
  "/problems/median-of-two-sorted-arrays",
  "/problems/merge-sorted-array",
  "/problems/merge-two-sorted-lists",
  "/problems/min-stack",
  "/problems/missing-number",
  "/problems/n-queens",
  "/problems/n-queens-ii",
  "/problems/network-delay-time",
  "/problems/palindromic-substrings",
  "/problems/permutations",
  "/problems/permutations-ii",
  "/problems/regular-expression-matching",
  "/problems/remove-duplicates-from-sorted-array",
  "/problems/remove-nth-node-from-end-of-list",
  "/problems/reverse-integer",
  "/problems/roman-to-integer",
  "/problems/self-dividing-numbers",
  "/problems/single-number",
  "/problems/string-to-integer-atoi",
  "/problems/subsets",
  "/problems/subsets-ii",
  "/problems/sum-of-two-integers",
  "/problems/symmetric-tree",
  "/problems/task-scheduler",
  "/problems/trapping-rain-water",
  "/problems/triangle",
  "/problems/two-sum",
  "/problems/valid-parentheses"
]);
const sleepTime = 500;

function func1(tbody) {
  console.log('refresh');
  let rows = tbody.getElementsByTagName("tr");
  for (let i = 0; i < rows.length; i++) {
    let anchors = rows[i].getElementsByTagName("a");
    if (anchors.length === 0) continue;

    let anchor = anchors[0];
    if (urls.has(anchor.getAttribute('href')) && !rows[i].firstElementChild.hasChildNodes()) {
      let span = document.createElement("span");
      span.className = "text-warning fa fa-check";
      rows[i].firstElementChild.appendChild(span);
      console.log('match "' + anchor.getAttribute('href') + '" matched.');
    }
  }
}

function func2() {
  try {
    let tables = document.getElementsByClassName("question-list-table");
    if (tables.length === 0) throw "div.question-list-table not found.";
    let table = tables[0];

    let tbodies = table.getElementsByTagName("tbody");
    if (tbodies.length === 0) throw "div.question-list-table>tbody not found.";
    let tbody = tbodies[0];

    const MutationObserver = window.MutationObserver || window.WebKitMutationObserver;
    if (MutationObserver) {
      // define a new observer
      let obs = new MutationObserver(function (mutations, observer) {
        func1(tbody);
      })
      // have the observer observe foo for changes in children
      obs.observe(tbody, { childList: true, subtree: true });
    }

    func1(tbody);
    console.log('Done!')
  } catch (e) {
    console.log(e + " Retry in 0.5s.");
    setTimeout(func2, sleepTime);
  }
}

console.log('script starts.')
setTimeout(func2, sleepTime);

import React from "react";
import Head from "next/head";
import NavBar from "../../components/NavBar/NavBar";
import ToolStart from "../../components/ToolStart/ToolStart";

/**
 * Potential changes for future:
 * Do not update after comma but after value
 * Incorrect output when element is set with commas
 */

// for html format
const S = <span className="mathStyle">S</span>;
const N = <span className="mathStyle">N</span>;
const PS = (
  <>
    <span className="mathStyle">P</span>(<span className="mathStyle">S</span>)
  </>
);
const SUB = (
  <span style={{ fontSize: "calc(var(--bs-body-font-size) * 1.3)" }}>
    &#8838;
  </span>
);

const tabs = [
  {
    id: 0,
    label: "Before you dive in",
    description: (
      <>
        <p>
          The following articles will be of use to have a fuller understanding
          of this tool:
        </p>
        <ul>
          <li>Sets</li>
          <li>Set operations (especially section about subsets)</li>
          <li>Set builder notation</li>
          <li>First order logic</li>
        </ul>
      </>
    ),
  },
  {
    id: 1,
    label: "Learn",
    description: (
      <>
        <p>
          The power set of any set {S} is denoted as {PS} and describes a set
          containing all of the subsets of {S}. As a reminder, a subset can be
          described simply as a set which contains{" "}
          <span className="mathNum">0</span> or more elements in {S}. A power
          set is also sometimes written as &#119979;(
          {S}).
        </p>
        <p>
          One thing you may notice is that &#123;&#125; is an element of every
          power set. This element, referred to as the empty set and often
          written as &#8709; is an element of every power set because the empty
          set is a subset of every set (see article on set operations to see
          why).
        </p>
        <p>
          The cardinality (size) of {PS}, denoted as | {PS} |, directly depends
          on the cardinality of {S}, denoted as | {S} |. If {S} has {N}{" "}
          elements, then | {S} | = {N} and | {PS} | =
          <span className="mathNum">2</span>
          <sup>{N}</sup>.
        </p>
      </>
    ),
  },
  {
    id: 2,
    label: "Examples",
    description: (
      <>
        <h5>Example 1</h5>
        <p>
          When {S} = &#123;a, b&#125;, {PS} = &#123;&#123;&#125;, &#123;a&#125;,
          &#123;b&#125;, &#123;a, b&#125;&#125;
        </p>
        <p>
          It can be verified that every element in {PS} is a subset of {S} :
        </p>
        <ul>
          <li>&#123;&#125; {SUB} &#123;a, b&#125;</li>
          <li>&#123;a&#125; {SUB} &#123;a, b&#125;</li>
          <li>&#123;b&#125; {SUB} &#123;a, b&#125;</li>
          <li>&#123;a, b&#125; {SUB} &#123;a, b&#125;</li>
        </ul>
        <h5>Example 2</h5>
        <p>
          When {S} = &#123;a, &#123;&#125;&#125;, {PS} = &#123;&#123;&#125;,
          &#123;a&#125;, &#123;&#123;&#125;&#125;, &#123;a,
          &#123;&#125;&#125;&#125;
        </p>
        <p>
          Note that the empty set is treated like any other value, with the
          power set looking like Example 1 except b is replaced with
          &#123;&#125;.
        </p>
        <p>
          It can be verified that every element in {PS} is a subset of {S} :
        </p>
        <ul>
          <li>&#123;&#125; {SUB} &#123;a, &#123;&#125;&#125;</li>
          <li>&#123;a&#125; {SUB} &#123;a, &#123;&#125;&#125;</li>
          <li>&#123;&#123;&#125;&#125; {SUB} &#123;a, &#123;&#125;&#125;</li>
          <li>&#123;a, &#123;&#125;&#125; {SUB} &#123;a, &#123;&#125;&#125;</li>
        </ul>
        <h5>Example 3</h5>
        <p>
          When {S} = &#123;a, &#123;a&#125;&#125;, {PS} = &#123;&#123;&#125;,
          &#123;a&#125;, &#123;&#123;a&#125;&#125;, &#123;a,
          &#123;a&#125;&#125;&#125;
        </p>
        <p>
          Note that the set containing a is treated differently from the element
          a. The power set again looks like Example 1 except b is replaced with
          &#123;a&#125;.
        </p>
        <p>
          It can be verified that every element in {PS} is a subset of {S} :
        </p>
        <ul>
          <li>&#123;&#125; {SUB} &#123;a, &#123;&#125;&#125;</li>
          <li>&#123;a&#125; {SUB} &#123;a, &#123;&#125;&#125;</li>
          <li>&#123;&#123;&#125;&#125; {SUB} &#123;a, &#123;&#125;&#125;</li>
          <li>&#123;a, &#123;&#125;&#125; {SUB} &#123;a, &#123;&#125;&#125;</li>
        </ul>
      </>
    ),
  },
  {
    id: 3,
    label: "How to use",
    description: (
      <>
        <h5>Summary</h5>
        <p>Please enter any number of elements that are comma (,) delimited.</p>
        <h5>Warning</h5>
        <p>
          This tool does not yet support elements that are comma delimited sets.
          For example, an input like
        </p>
        <p>1, &#123;1,2&#125; </p>
        <p>
          will be parsed incorrectly. A workaround can be to have elements that
          are sets space delimited like this:
        </p>
        <p>1, &#123;1 2&#125;</p>
        <h5>Examples of valid input</h5>
        <p>1 ,2</p>
        <p>1, 2</p>
        <p>1,2</p>
        <p>a,b,c</p>
        <p>&#123;a b&#125;, c</p>
        <p>1, 2, 2 &lt;-- duplicates are ignored</p>
        <h5>Examples of invalid input</h5>
        <p>
          1 2 3 &lt;-- not comma delimited, will be interpreted as a single
          element
        </p>
        <p>1, &#123;1,2&#125; &lt;-- parsed incorrectly because of comma</p>
        <p>&#123;1, 2, 3&#125; &lt;-- no need to put in set brackets!</p>
      </>
    ),
  },
];

const title = "Power Set Calculator";
const description = "Creates a power set of any given set";

interface State {
  inputSet: string;
  powerSet: Array<string>;
}

class PowerSetCalculator extends React.Component<any, State> {
  constructor(props: any) {
    super(props);
    this.state = { inputSet: "", powerSet: [""] };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(value: string): void {
    if (value) {
      this.setState({ inputSet: value }, this.calculatePowerSet);
    } else {
      this.setState({ powerSet: [""] });
    }
  }

  calculatePowerSet(): void {
    // PART 1: define how to calculate powerset
    // calculate powerset given arr
    const powerSet = (arr: any = []): Array<any> => {
      const res = [];
      const { length } = arr;
      const numberOfCombinations = 2 ** length;
      for (
        let combinationIndex = 0;
        combinationIndex < numberOfCombinations;
        combinationIndex += 1
      ) {
        const subSet: any = [];
        for (
          let setElementIndex = 0;
          setElementIndex < arr.length;
          setElementIndex += 1
        ) {
          if (combinationIndex & (1 << setElementIndex)) {
            subSet.push(arr[setElementIndex]);
          }
        }
        res.push(subSet);
      }
      return res;
    };
    // PART 2: apply to instance
    // split char into array, pass it into new set to remove duplicates
    const setArr = new Set<string>(this.state.inputSet.split(/\s*,\s*/gm));
    this.setState({ powerSet: powerSet(Array.from(setArr)) });
  }

  displayPowerSet(): string {
    let arrStr = "{";
    for (let i = 0; i < this.state.powerSet.length - 1; i++) {
      arrStr += `{${this.state.powerSet[i]}}, `;
    }
    arrStr += `{${this.state.powerSet[this.state.powerSet.length - 1]}}}`;
    return arrStr;
  }

  render(): JSX.Element {
    return (
      <>
        <Head>
          <title>Power Set Calculator</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <NavBar />
        <main>
          <ToolStart title={title} description={description} tabs={tabs} />
          <div style={{ paddingTop: "10px" }} />
          <div className="flex justify-start gap-3 pl-[10%] py-3">
            <span className="font=small py-3">Set:</span>
            <span className="font-large text-3xl my-[0.3rem] pl-1 pr-2">
              &#123;{" "}
            </span>
            <textarea
              className="bg-gray-50 border border-gray-400 rounded mt-2 px-2 py-1 w-[30vw] h-10 resize-none text-center"
              placeholder={"Set"}
              onChange={(e) => this.handleInputChange(e.target.value)}
            ></textarea>
            <span className="font-large text-3xl pl-2 my-[0.3rem]">
              {" "}
              &#125;
            </span>
          </div>
          <div style={{ paddingTop: "10px" }} />
          <p style={{ paddingLeft: "10%", marginRight: "30px" }}>
            {this.displayPowerSet()}
          </p>
          <div style={{ height: "40px" }} />
        </main>
      </>
    );
  }
}
export default PowerSetCalculator;

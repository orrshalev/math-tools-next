import React from "react";
import Head from "next/head";
import NavBar from "../../components/NavBar/NavBar";
import ToolStart from "../../components/ToolStart/ToolStart";

/**
 * Information to fill accordion tabs
 */
type Tab = {
  id: number;
  label: string;
  description: JSX.Element;
};

const tabs: Array<Tab> = [
  {
    id: 1,
    label: "Learn",
    description: (
      <>
        <p>
          The Cartesian product × is an operator (just like addition + and
          multiplication * ) that creates a set of tuples, which are just like
          sets but where the order matters. The resulting set contains every
          possible ordered combination of elements within the sets the Cartesian
          product is being performed on.
        </p>
        <p>
          Given two sets A and B, the Cartesian product can be represented as A
          × B. It is important to note that the tuples within the Cartesian
          product are ordered based on which sets are to the left of the
          operation and which are to the right of the operation, so in most
          cases A × B ≠ B × A.
        </p>
        <p>
          A Cartesian product can be calculated for any number of sets. A
          Cartesian product for sets A, B, C can be represented as A × B × C.
          Just like in the Cartesian product of two sets, changing the order in
          which the Cartesian product is applied to the sets will almost always
          change the Cartesian product.
        </p>
        <p>
          Below are the definitions of the Cartesian product of two sets and the
          Cartesian product of n sets, respectively, using set-builder notation.
          If these definitions do not make sense, it is recommended to refer to
          the articles on set-builder notation and logical symbols.
        </p>
        <p>A × B = &#123;(a, b) ∣ a ∈ A ∧ b ∈ B&#125;.</p>
        <p>
          A1 × A2 × ⋯ × An = &#123;(a1, a2, … , an) ∣ ai ∈ Ai for i = 1, 2, … ,
          n&#125;
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
          When A = &#123;a, b&#125; and B = &#123;1, 2&#125;, A × B = &#123;(a,
          1), (a, 2), (b, 1), (b, 2)&#125;
        </p>
        <p>
          Notice that the overall set A × B was enclosed with &#123;&#125;, and
          its elements, which are tuples, were enclosed with (). Since A × B is
          a set, the elements can be moved around, so for example, another way
          to write A × B is &#123;(a, 1), (b, 1), (a, 2), (b, 2)&#125;. However,
          since every element in A × B is a tuple, the elements within those
          tuples cannot be moved around. For example A × B = &#123;(a, 1), (b,
          1), (a, 2), (b, 2)&#125; but A × B ≠ &#123;(1, a), (b, 1), (a, 2), (b,
          2)&#125; because the order of the elements a and 1 in the first tuple
          were switched.
        </p>
        <h5>Example 2</h5>
        <p>
          When A = &#123;a, b&#125; and B = &#123;1, 2&#125;, B × A = &#123;(1,
          a), (1, b), (2, a), (2, b)&#125;
        </p>
        <p>
          Notice that A and B are the same from Example 1, but their placement
          to the left and right of the Cartesian product operation were changed,
          so the Cartesian product is different.
        </p>
        <h5>Example 3</h5>
        <p>
          When A = &#123;a, b&#125; and B = &#123;1, 2, 3&#125;, A × B =
          &#123;(a, 1), (a, 2), (a, 3), (b, 1), (b, 2), (b, 3)&#125;
        </p>
        <p>
          An interesting property that can be seen above is that the number of
          tuples in A × B is 6, which is equal to the number of elements in A
          times the number of elements in B, 2 * 3. Also, each tuple has 2
          elements, which is equivalent to the number of sets being used in the
          operation. Both these properties stay true no matter how many sets are
          used or how many elements are in each set.
        </p>
        <h5>Example 4</h5>
        <p>
          When A = &#123;a, b&#125; and B = &#123;1, 2&#125; and C = &#123;x,
          y&#125;, A × B × C &#123;(a, 1, x), (a, 1, y), (a, 2, x), (a, 2, y),
          (b, 1, x), (b, 1, y), (b, 2, x), (b, 2, y)&#125;
        </p>
      </>
    ),
  },
  {
    id: 3,
    label: "How to use",
    description: (
      <>
        <h5>Summary</h5>
        <p>
          2-9 sets can be chosen. A valid input is one that is comma (,)
          delimited.
        </p>
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
        <p>1,2</p>
        <p>1,2,3</p>
        <p>1, 2, 3</p>
        <p>a,b</p>
        <p>a, b, c, d</p>
        <h5>Examples of invalid input</h5>
        <p>
          1 2 3 &lt;-- not comma delimited, will be interpreted as a single
          element
        </p>
        <p>elements: &quot;1&quot;, &quot; 2&quot;, and &quot; 3&quot;</p>
        <p>1, &#123;1,2&#125; &lt;-- parsed incorrectly because of comma</p>
        <p>&#123;1, 2, 3&#125; &lt;-- no need to put in set brackets!</p>
      </>
    ),
  },
];

const title = "Cartesian Product Calculator";
const description =
  "This tool will, given at least 2 sets, calculate the Cartesian product of all sets.";

type State = {
  setNum: number;
  setVals: string[];
};

class CartesianProductCalculator extends React.Component<any, State> {
  constructor(props: any) {
    super(props);
    this.state = { setNum: 2, setVals: [] };
  }

  getSets(): Array<JSX.Element> {
    let currentSet;
    const sets = [];
    for (let i = 0; i < this.state.setNum; i++) {
      currentSet = (
        <div className="py-2 flex items-center pl-[10%]">
          <span className="font-large">&emsp;Set {i + 1}: </span>
          <span className="font-large text-3xl pl-1 pr-2">&#123; </span>
          <textarea
            className="bg-gray-50 border border-gray-400 rounded mt-2 px-2 py-1 w-[30vw] h-10 resize-none text-center"
            placeholder={"Set ".concat((i + 1).toString())}
            onChange={(e) => this.changeVals(e.target.value, i)}
          />
          <span className="font-large text-3xl pl-2"> &#125;</span>
        </div>
      );
      sets.push(currentSet);
    }
    return sets;
  }

  changeVals(newVal: string, index: number): void {
    const newSetVals: string[] = [];
    for (let i = 0; i < this.state.setNum; i++) {
      if (i !== index) {
        newSetVals.push(this.state.setVals[i] as string);
      } else {
        newSetVals.push(newVal);
      }
    }
    this.setState({ setVals: newSetVals });
  }

  calculateProduct(): JSX.Element {
    const cartesian = (...a: any): any =>
      a.reduce((c: any, b: any) =>
        c.flatMap((d: any) => b.map((e: any) => [d, e].flat()))
      );
    const inputArray = [];
    const modifiedArray = [];
    let newArr = [];
    for (let i = 0; i < this.state.setNum; i++) {
      if (typeof this.state.setVals[i] === "undefined") {
        inputArray.push(" ");
      } else {
        inputArray.push((this.state.setVals[i] as string).split(/\s*,\s*/gm));
      }
    }
    for (let i = 0; i < this.state.setNum; i++) {
      newArr = [];
      for (let j = 0; j < (inputArray[i] as string[]).length; j++) {
        newArr.push((inputArray[i] as string[])[j]);
      }
      modifiedArray.push(newArr);
    }
    const cart = cartesian(...modifiedArray);
    let cartString = "{";
    for (let i = 0; i < cart.length; i++) {
      const newTuple = `(${String(cart[i])})`;
      for (let j = 0; j < newTuple.length; j++) {
        if (newTuple[j] === ",") {
          cartString += ", ";
        } else {
          cartString += newTuple[j];
        }
      }
      if (i < cart.length - 1) {
        cartString += ", ";
      } else {
        cartString += "}";
      }
    }
    return <p className="pl-[10%]">{cartString}</p>;
  }

  render(): JSX.Element {
    return (
      <>
        <Head>
          <title>Cartesian Product Calculator</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <NavBar />
        <main>
          <ToolStart title={title} description={description} tabs={tabs} />
          <div style={{ paddingTop: "10px" }} />
          <div className="flex justify-start gap-3 pl-[10%] py-3">
            <span className="font-small">Number of sets:</span>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-10 h-10 rounded"
              onClick={() =>
                this.state.setNum > 2
                  ? this.setState((state, props) => ({
                      setNum: state.setNum - 1,
                    }))
                  : null
              }
            >
              -
            </button>
            <textarea
              value={this.state.setNum}
              className="bg-gray-200 border border-gray-400 rounded px-2 py-1 w-10 h-10 resize-none text-center"
              readOnly
            />
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() =>
                this.state.setNum < 10
                  ? this.setState((state, props) => ({
                      setNum: state.setNum + 1,
                    }))
                  : null
              }
            >
              +
            </button>
          </div>
          <div style={{ paddingTop: "10px" }} />
          {this.getSets()}
          <div style={{ height: "20px" }} />
          {this.calculateProduct()}
          <div style={{ height: "50px" }} />
        </main>
      </>
    );
  }
}

export default CartesianProductCalculator;

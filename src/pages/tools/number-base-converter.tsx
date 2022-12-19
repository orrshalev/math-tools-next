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

const tabs: Tab[] = [
  {
    id: 0,
    label: "Learn",
    description: (
      <>
        <p>
          A base (also referred to as the radix) number is the number of unique
          digits used to represent a number. In the base 10 system (what we will
          refer to as the ‘anchor’ base!), we represent all numbers using digits
          0-9. We also think of numbers that we see as groups of 10’s. For
          example, the number 321 (which can also be denoted as (321)
          <sub>10</sub> to iasize that it is in base 10) has a single count of
          1, two counts of 10’s, and 3 counts of 100’s (100 in itself being 10
          counts of 10!). While this seems very obvious, it is usually agreed
          upon that there is not necessarily any strong reason why we should
          group numbers by 10’s. In fact, it seems that the biggest reason why
          we have agreed to use base 10 as the ‘anchor’ is because it
          corresponds to us counting on our fingers!
        </p>
        <p>
          Consider the same example, 321, in base 5. Base 5 would be a number
          system in which the used digits are 0-4 and in which we count in
          groups of 5’s. Thus , we would represent the number as (321)
          <sub>5</sub> and understand it to be a single count of 1, two counts
          of 5’s, and 3 counts of 25’s (25 in itself being 5 counts of 5’s!). We
          can add those counts 1 + 5 + 5 + 25 + 25 + 25 to get the equivelent
          number in base 10, 86. This can be extended to create a general
          algorithm for understanding any numbering system.
        </p>
        <p>
          By convention, we use the letters a-z to represent the digits 11-35
          respectively . For example, ‘c’ would represent a count of 13.
          However, try to think as a-z as symbols just like 0-9 which could
          stand for anything. If in a different world the ‘anchor’ system would
          have been base 12, for example, it is easy to imagine that we would
          have added symbols outside of the alphabet to represent the counts of
          11 and 12.
        </p>
        <p>
          Why should we care about different numbering systems? For one, it
          helps us think of what numbers are in a better way. We often
          implicitly think of time to be in base 60 as we count seconds and
          minutes in those groups. If we want to make an application that relies
          on timing, it could be very helpful to use to have a solid grasp of
          how a base 60 system ‘works’ and what implications it has for simple
          arithmetic.
        </p>
        <p>
          More importantly, however, in computing we use the base 2 system, also
          referred to as the binary system, in order to represent all the
          information that a computer holds. After all, a computer (very
          simplistically) can be seen as many switches that are either on or
          off, so representing on or off as 1 or 0 comes naturally. Well,
          naturally to the computer, but for most humans seeing the number
          (1001)<sub>2</sub> does not make much sense, and even people very
          aware of how the binary number system works may have to convert to
          base 10 in order to understand what the number represents. However,
          with a holistic approach to number systems, we can find better ways to
          view and understand the binary system that govern how every computer
          works.
        </p>
        <p>
          In the examples section, we use the base systems, 2, 8, and 16 and
          show why these number systems naturally work together and why they are
          all so commonly used in computing.
        </p>
      </>
    ),
  },

  {
    id: 1,
    label: "Examples",
    description: (
      <div>
        <p>
          The general algorithm for getting a number from base <i>X</i> to base{" "}
          <i>Y</i> is to first convert is to first convert base <i>X</i> to base
          10 using a division table and then convert from base 10 to base{" "}
          <i>Y</i> using simple multiplication and addition. It is important to
          note that translating into base 10 is simply for convenience purposes;
          doing arithmetic operations in our ‘anchor’ base is much simpler for
          us. <i>Example 4</i> shows an alternative conversion that does not
          rely on converting to base 10 first and which is commonly used in
          computing.
        </p>
        <h5 className="font-large text-xl">Example 1</h5>
        <p>
          Let’s say we want to convert the number 123 to base 16. To do so,
          since 258 is in base 10, we can construct a table where we will
          continuously divide 258 by 16 (the base we want to convert to), keep
          track of the quotient and remainder, and stop dividing once the
          quotient equals 0. The table would looks as following:
        </p>
        <table className="table-auto min-w-full border">
          <thead className="border-b">
            <tr>
              <th className="border-r">Division</th>
              <th className="border-r">Quotient</th>
              <th className="border-r">Remainder</th>
              <th>Digit placement</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <th className="border-r">258/16</th>
              <th className="border-r">16</th>
              <th className="border-r">2</th>
              <th>0</th>
            </tr>
            <tr className="border-b">
              <th className="border-r">16/16</th>
              <th className="border-r">1</th>
              <th className="border-r">0</th>
              <th>1</th>
            </tr>
            <tr>
              <th className="border-r">1/16</th>
              <th className="border-r">0</th>
              <th className="border-r">1</th>
              <th>2</th>
            </tr>
          </tbody>
        </table>
        <p>
          Now we can note the remainder and the digit placement columns to
          easily come up with the new number. If we use the digit placement
          system …210 and replace the value in each position with the remainder
          we get 102. Thus, (258)<sub>10</sub> = (102)<sub>16</sub>.
        </p>
        <h5 className="font-large text-xl">Example 2</h5>
        <p>
          Let’s say that we now want to convert (102)<sub>16</sub> to base 10.
          We can expect the answer to be 258 because of <i>Example 1</i>, but
          how do we get there ? Remember, bases are all about grouping counts.
          Earlier, we described a number such as (102)<sub>16</sub> to be 2
          single counts, 0 counts of 16’s, and 1 count of 256 (which is 16
          counts of 16’s). This idea can be expressed numerically as:
        </p>
        <p>
          (1 x 16<sup>2</sup>) + (0 x 16<sup>1</sup>) + 2
        </p>
        <p>
          When we calculate this we get 258, our answer! Note that for
          generalization purposes we will often really write the last number as
          being multiplied by the base to the power of 0, which really just is
          1:
        </p>
        <p>
          (1 x 16<sup>2</sup>) + (0 x 16<sup>1</sup>) + (2 x 16<sup>0</sup>)
        </p>
        <h5 className="font-large text-xl">Example 3</h5>
        <p>
          Let’s say we want to convert (102)<sub>16</sub> to base 2 (binary).
          Remember that our general algorithm says that we need to get from the
          first base to base 10 and then from base 10 to the end base. We have
          already done in <i>Example 2</i>
          the translation of (102)<sub>16</sub> to base 10, so our first step is
          already done!
        </p>
        <p>
          Our second step is to get from our answer, 258, to base 2, which once
          again requires a table. The table will be as following:
        </p>
        <table className="table-auto min-w-full border">
          <thead>
            <tr className="border-b">
              <th className="border-r">Division</th>
              <th className="border-r">Quotient</th>
              <th className="border-r">Remainder</th>
              <th>Digit placement</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <th className="border-r">258/2</th>
              <th className="border-r">129</th>
              <th className="border-r">0</th>
              <th>0</th>
            </tr>
            <tr className="border-b">
              <th className="border-r">129/2</th>
              <th className="border-r">64</th>
              <th className="border-r">1</th>
              <th>1</th>
            </tr>
            <tr className="border-b">
              <th className="border-r">64/2</th>
              <th className="border-r">32</th>
              <th className="border-r">0</th>
              <th>2</th>
            </tr>
            <tr className="border-b">
              <th className="border-r">32/2</th>
              <th className="border-r">16</th>
              <th className="border-r">0</th>
              <th>3</th>
            </tr>
            <tr className="border-b">
              <th className="border-r">16/2</th>
              <th className="border-r">8</th>
              <th className="border-r">0</th>
              <th>4</th>
            </tr>
            <tr className="border-b">
              <th className="border-r">8/2</th>
              <th className="border-r">4</th>
              <th className="border-r">0</th>
              <th>5</th>
            </tr>
            <tr className="border-b">
              <th className="border-r">4/2</th>
              <th className="border-r">2</th>
              <th className="border-r">0</th>
              <th>6</th>
            </tr>
            <tr className="border-b">
              <th className="border-r">2/2</th>
              <th className="border-r">1</th>
              <th className="border-r">0</th>
              <th>7</th>
            </tr>
            <tr>
              <th className="border-r">1/2</th>
              <th className="border-r">0</th>
              <th className="border-r">1</th>
              <th>8</th>
            </tr>
          </tbody>
        </table>
        <p>
          Thus, using the table we get our answer, (100000010)<sub>2</sub>.
        </p>
        <h5 className="font-large text-xl">Example 4</h5>
        <p>
          Remember that our algorithm is for convenience and that if there is a
          more convenient algorithm to convert from a specific base to another,
          that can be very useful. We do know that there is a very simple way to
          convert from base 16 to base 2 and back.
        </p>
        <p>
          We start by considering each digit in base 16 as represented as the
          equivalent 4 digits in base 2. For example, (2)<sub>16</sub> = (10)
          <sub>2</sub>, so we can represent 2 in base 16 as 0010 in base 10. We
          build onto this for all digits. Recall that a-z are used to denote
          digits greater than 9, so for example ‘c’ denotes a count of 12. (12)
          <sub>16</sub> = (1100)<sub>2</sub>, so those digits correspond. If we
          want to convert from base 16 to base 2, we can simply replace each
          digit by the corresponding base 2 digits.
        </p>
        <p>
          For example, if we take each digit in (102)<sub>16</sub>, we can get 1
          = 0001 , 0 = 0000, 2 = 0010. Just connect these to get (000100000010)
          <sub>2</sub>, which you can notice is the same answer we got in{" "}
          <i>Example 3</i>! The trailing 0’s are of course, as in base 10
          system, not counted.
        </p>
        <p>
          Likewise, to convert from base 2 to base 16 we simply can group every
          4 digits and replace them with the base 16 representation. If we have
          (100000010)<sub>2</sub>, we group (0001)(0000)(0010) and convert each
          grouping to base 16 to get (102 )<sub>16</sub>! Note that we added
          trailing zeros to ensure that each grouping is of four digits.
        </p>
      </div>
    ),
  },
];

const title = "Number Base Converter";
const description =
  "This tool will let help you convert numbers from one base to another, for example decimal to binary.";

type State = {
  input: string;
  output: string;
  startBase: number;
  endBase: number;
};

const values = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
const numbers = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
  22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35,
];

const numberTable: Map<string, number> = new Map();

for (let i = 0; i < numbers.length; i++) {
  numberTable.set(values[i] as string, numbers[i] as number);
}

class NumberBaseConverter extends React.Component<any, State> {
  constructor(props: any) {
    super(props);
    this.state = { input: "", output: "", startBase: 2, endBase: 2 };
  }

  convert(input: string): void {
    this.setState((state, props) => {
      const newexpr: string = parseInt(input, state.startBase).toString(
        state.endBase
      );
      return { input, output: newexpr };
    });
  }

  displayOutput(): JSX.Element {
    if (this.state.output === "NaN") {
      return <></>;
    }
    return (
      <>
        <span>{this.state.output}</span>
      </>
    );
  }

  render(): JSX.Element {
    return (
      <>
        <Head>
          <title>Number Base Converter</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <NavBar />
        <main>
          <ToolStart title={title} description={description} tabs={tabs} />
          <div style={{ height: "30px" }} />
          <div className="flex justify-start gap-3 pl-[10%] py-3">
            <span>Starting base: </span>
            <select
              onChange={(e) => {
                this.setState((state, props) => {
                  const startBase = parseInt(e.target.value, 10);
                  this.convert(state.input);
                  return { startBase };
                });
              }}
              className="form-select
            appearance-none
            block
            font-small
            px-4
            text-center
            bg-white bg-clip-padding bg-no-repeat
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            focus:text-gray-700 focus:bg-white focus:border-green-300 focus:outline-none"
              aria-label="Starting Base Select"
            >
              <option value="2" selected>
                2 (binary)
              </option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8 (octal)</option>
              <option value="9">9</option>
              <option value="10">10 (decimal)</option>
              <option value="11">11</option>
              <option value="12">12</option>
              <option value="13">13</option>
              <option value="14">14</option>
              <option value="15">15</option>
              <option value="16">16 (hex)</option>
              <option value="17">17</option>
              <option value="18">18</option>
              <option value="19">19</option>
              <option value="20">20</option>
              <option value="21">21</option>
              <option value="22">22</option>
              <option value="23">23</option>
              <option value="24">24</option>
              <option value="25">25</option>
              <option value="26">26</option>
              <option value="27">27</option>
              <option value="28">28</option>
              <option value="29">29</option>
              <option value="30">30</option>
              <option value="31">31</option>
              <option value="32">32</option>
              <option value="33">33</option>
              <option value="34">34</option>
              <option value="35">35</option>
              <option value="36">36</option>
            </select>
          </div>
          <div className="flex justify-start gap-3 pl-[10%] py-3">
            <span>Target base: </span>
            <select
              onChange={(e) => {
                this.setState((state, props) => {
                  const endBase = parseInt(e.target.value, 10);
                  this.convert(state.input);
                  return { endBase };
                });
              }}
              className="form-select
            appearance-none
            block
            font-small
            px-4
            text-center
            bg-white bg-clip-padding bg-no-repeat
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            focus:text-gray-700 focus:bg-white focus:border-green-300 focus:outline-none"
              aria-label="Target Base Select"
            >
              <option value="2" selected>
                2 (binary)
              </option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8 (octal)</option>
              <option value="9">9</option>
              <option value="10">10 (decimal)</option>
              <option value="11">11</option>
              <option value="12">12</option>
              <option value="13">13</option>
              <option value="14">14</option>
              <option value="15">15</option>
              <option value="16">16 (hex)</option>
              <option value="17">17</option>
              <option value="18">18</option>
              <option value="19">19</option>
              <option value="20">20</option>
              <option value="21">21</option>
              <option value="22">22</option>
              <option value="23">23</option>
              <option value="24">24</option>
              <option value="25">25</option>
              <option value="26">26</option>
              <option value="27">27</option>
              <option value="28">28</option>
              <option value="29">29</option>
              <option value="30">30</option>
              <option value="31">31</option>
              <option value="32">32</option>
              <option value="33">33</option>
              <option value="34">34</option>
              <option value="35">35</option>
              <option value="36">36</option>
            </select>
          </div>
          <div className="flex justify-start gap-3 pl-[10%] py-3">
            <span>Input: </span>
            <textarea
              className="form-select
            appearance-none
            block
            font-small
            px-4
            h-[1.75rem]
            text-center
            bg-white bg-clip-padding bg-no-repeat
            resize-none
            border border-solid border-gray-300
            rounded
            active:border-green-300"
              placeholder="Input Expression"
              onChange={(e) => this.convert(e.target.value)}
            ></textarea>
          </div>
          <div style={{ height: "30px" }} />
          <div className="flex justify-start gap-3 pl-[10%]">
            {this.displayOutput()}
          </div>
          <div style={{ height: "60px" }} />
        </main>
      </>
    );
  }
}

export default NumberBaseConverter;

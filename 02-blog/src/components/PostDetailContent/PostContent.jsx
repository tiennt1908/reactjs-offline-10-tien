import React from 'react'

export default function PostContent() {
    return (
        <div className="rte">
            <p>Markdown is a lightweight markup language with plain-text-formatting syntax. Its design allows it
                to be converted to many output formats, but the original tool by the same name only supports HTML.
                Markdown is often used to format readme files, for writing messages in online discussion forums, and
                to create rich text using a plain text editor.</p>
            <h2>Emphasis</h2>
            <p>Emphasis, aka <i>italics</i>, with asterisks or <u>underscores</u>.</p>
            <p>Strong emphasis, aka bold, with <strong>asterisks</strong> or <strong>underscores</strong>.</p>
            <p>Strikethrough uses two tildes. <del>Scratch this</del>.</p>
            <h2>Code and Syntax Highlighting</h2>
            <p>Inline <code>code</code> has <code>back-ticks around</code> it.</p>
            <p>Blocks of code are either fenced by lines with three back-ticks ```, or are indented with four
                spaces. I recommend only using the fenced code blocks — they’re easier and only they support syntax
                highlighting.</p>
            <pre className=" language-javascript"><code className=" language-javascript"><span className="token keyword">var</span> args <span className="token operator">=</span> <span className="token punctuation">[</span><span className="token punctuation">]</span><span className="token punctuation">;</span> <span className="token comment">// Empty array, at first.</span>{"\n"}<span className="token keyword">for</span> <span className="token punctuation">(</span><span className="token keyword">var</span> i <span className="token operator">=</span> <span className="token number">0</span><span className="token punctuation">;</span> i <span className="token operator">&lt;</span> arguments<span className="token punctuation">.</span>length<span className="token punctuation">;</span> i<span className="token operator">++</span><span className="token punctuation">)</span> <span className="token punctuation">{"{"}</span>{"\n"}{"  "}args<span className="token punctuation">.</span><span className="token function">push</span><span className="token punctuation">(</span>arguments<span className="token punctuation">[</span>i<span className="token punctuation">]</span><span className="token punctuation">)</span>{"\n"}<span className="token punctuation">{"}"}</span> <span className="token comment">// Now 'args' is an array that holds your arguments.</span>{"\n"}console<span className="token punctuation">.</span><span className="token function">log</span><span className="token punctuation">(</span>args<span className="token punctuation">)</span><span className="token punctuation">;</span></code></pre>
            <h2>Blockquote</h2>
            <blockquote>
                Blockquotes are very handy in email to emulate reply text.
                This line is part of the same quote.
            </blockquote>
            <h2>List</h2>
            <ol>
                <li>First ordered list item</li>
                <li>Another list item
                    <ul>
                        <li>Unordered sub-list.</li>
                    </ul>
                </li>
                <li>Actual numbers don’t matter, just that it’s a number
                    <ol>
                        <li>Ordered sub-list</li>
                    </ol>
                </li>
            </ol>
        </div>
    )
}

---
title: Using Rust and Glium to visualize 3D object models
description: Leveraging the performance of Rust and OpenGL to parse, display, and interact with various 3D object file formats, including STL, OBJ, and GLTF.
date: June 03, 2023
heroPath: /img/test.PNG
heroCaption: I can just fucking add a caption after this, I love it (needs to be optional/rename?)
publishDate:
  month: June
  day: '03'
  year: 2023
intro: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
---

## Section 1

::note
**Update 6/6/23**: Rust has since added support for this feature in version 2.10.0.
::

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

![Image](/img/test.PNG)

Testing this in the `oreoeopp` context of a [sentence](https://google.com).

::command
cargo run -- input-args --no-stdlib --testing-out-an-arbitraily-long-command-to-get-some-wrapping --blah --blah --blah --ohitworks
::

::code-block
---
filename: parser.rs
---
```rust
use std::fs::File;

let file = File::open("testing.json");
for line in file.lines()
	line.unwrap()
```
::

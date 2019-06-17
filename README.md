![](https://user-images.githubusercontent.com/212941/59558776-b37e6f80-8fae-11e9-87d7-79f4c7d059b3.png)

# 👋 Meet Polybot

A close friend of the Vexbot, the Polybot API sends you nothing but polygons. With every request, our Polybot will send you up to 1,000 polygons from 3 sides (triangle) to 72 sides (a heptacontakaidigon!). Create dazzling patterns or use the random shapes to create the terrain of your next game.

A polygon, as you'll recall from your ol' geometry textbook—is a [connected plane of *n* line segments](https://en.wikipedia.org/wiki/Polygon), so if you send a request to:

 `api.noopschallenge.com/polybot`

 We'll return a set of coordinates defining each vertex of the polygon:

```
{
  "polygons": [
    [
      {"x":157,"y":998},
      {"x":145,"y":1000},
      {"x":122,"y":1000},
      {"x":106,"y":989},
      {"x":127,"y":969},
      {"x":151,"y":972}
    ]
  ]
}
```

The API will return up to 1,000 polygons with a random number of sides between 3 to 72. You can specify the `count` of polygons returns, `min_sides` and `max_sides`, and the maximum `size` you'd like your polygons to be. Or you can let the Polybot decide!

[See a preview](https://noops-challenge.github.io/polybot).

## ⭓ What can you do?

When faced with an endless stream of polygons, what can you do?

First you could just draw one...

![single-polygon](https://user-images.githubusercontent.com/212941/58440964-fd9cc100-8092-11e9-9260-0b259770d1c4.png)

Nice! Then you could draw a whole bunch...

![many-polygons](https://user-images.githubusercontent.com/212941/58440962-fd9cc100-8092-11e9-95a1-9b2a990fb215.png)

Neat. But what if you made them transparent, and overlapped them?

![overlapping-polygons](https://user-images.githubusercontent.com/212941/58440963-fd9cc100-8092-11e9-89ce-6506d1c5a2f8.png)

And what if we animated it?

![animated-overlapping](https://user-images.githubusercontent.com/212941/58441151-633d7d00-8094-11e9-88b2-e90b3cc654f4.gif)

What's next is up to you! Fork the challenge and share what you do on Twitter (#noopschallenge) or in the GitHub community.

## ✨ A few ideas
There are millions of things you can do with the Polybot, but here are a few ideas to get you started:

- **Name them**: Did you know there's a formula to go from henagon to bigon to triangle to tetracontadigon? Learn about it [here](https://en.wikipedia.org/wiki/List_of_polygons) and show us how yours works.
- **Sort them**: It's a simple matter of geometry to calculate the area of a polygon. Wouldn't they look nice sorted from largest to smallest? How fast could your algorithm do it?
- **Make them obstacles in your game**: The polygons would look mighty interesting as asteroids falling from the sky or as boulders your hero has to avoid.
- **Add physics**: Generate 100 polygons and let them fall from the top of the screen. Would they fit together? Would they squish other polygons? How much volume do they have, and how much mass?
- **Make them touchable**: Fill the screen with polygons, then make them slide across the screen when you swipe them.

Have an idea of your own? Create an issue and we'll add it to the list!

## 🤖 API basics

You can request up to 1,000 polygons, specify *max_sides*, *min_sides* and *size* for your polygons, and set maximum *x* and *y* boundaries.

There's a single endpoint: `api.noopschallenge.com/polybot`

The endpoint accepts 5 parameters, all optional:

- **count** *(optional, numeric)*: Between 1 and 1000. Number of polygons to return.
- **size** *(optional, numeric)*: Between 10 and 100,000. Maximum size of polygons. Defaults to average of width + height.
- **min_sides** *(optional, numeric)*: Between 3 and 72. Minimum number of sides in the polygon.
- **max_sides** *(optional, numeric)*: Between 3 and 72. Maximum number of sides in the polygon. To specify number of sides, set `min_sides` and `max_sides` to the same number.
- **width** *(optional, numeric)*: Between 10 and 100,000. Maximum width of returned points.
- **height** *(optional, numeric)*: Between 10 and 100,000. Maximum height of returned points.

The endpoint returns a JSON object with an array named `polygons` of *n* length. Each item in the `polygons` array is an object with two properties: *x* and *y*.

Example return for a five-sided polygon:

`GET https://api.noopschallenge.com/polybot`

```
{
  "polygons": [
    [
      {"x":157,"y":998},
      {"x":145,"y":1000},
      {"x":122,"y":1000},
      {"x":106,"y":989},
      {"x":151,"y":972}
    ]
  ]
}
```

Request a six-sided polygon:

`GET https://api.noopschallenge.com/polybot?min_sides=6&max_sides=6`

```
{
  "polygons": [
    [
      { "x": 854, "y": 61 },
      { "x": 845, "y": 76 },
      { "x": 823, "y": 69 },
      { "x": 822, "y": 45 },
      { "x": 843, "y": 36 },
      { "x": 856, "y": 56 }
    ]
  ]
}
```

Request a polygon within a bounding box:

`GET https://api.noopschallenge.com/polybot?count=2&width=10&height=10`

```
{
  "polygons": [
    [
      { "x": 10, "y": 8 },
      { "x": 10, "y": 9 },
      { "x": 9, "y": 9 },
      { "x": 8, "y": 9 },
      { "x": 8, "y": 9 },
      { "x": 7, "y": 8 },
      { "x": 7, "y": 7 },
      { "x": 8, "y": 7 },
      { "x": 8, "y": 6 },
      { "x": 9, "y": 6 },
      { "x": 9, "y": 7 },
      { "x": 10, "y": 7 }
    ],
    [
      { "x": 4, "y": 8 },
      { "x": 3, "y": 8 },
      { "x": 3, "y": 7 },
      { "x": 3, "y": 7 },
      { "x": 4, "y": 7 }
    ]
  ]
}
```

Read the complete API documentation in [API.md](./API.md)

More about Polybot here: https://noopschallenge.com/challenges/polybot
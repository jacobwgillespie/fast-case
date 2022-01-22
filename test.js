const test = require('ava')

const fastCase = require('.')

// .camelize

test('.camelize :: converts underscore strings to camelcase', (t) => {
  t.is(fastCase.camelize('the_test_string'), 'theTestString')
})

test('.camelize :: converts hyphenated strings to camelcase', (t) => {
  t.is(fastCase.camelize('the-test-string'), 'theTestString')
})

test('.camelize :: converts space-separated strings to camelcase', (t) => {
  t.is(fastCase.camelize('the test string'), 'theTestString')
})

test('.camelize :: converts pascalcased strings to camelcase', (t) => {
  t.is(fastCase.camelize('TheTestString'), 'theTestString')
})

test('.camelize :: preserves numbers', (t) => {
  t.is(fastCase.camelize('-123'), '-123')
  t.is(fastCase.camelize('123'), '123')
})

// .decamelize

test('.decamelize :: converts camelcased strings to underscore', (t) => {
  t.is(fastCase.decamelize('theTestString'), 'the_test_string')
})

test('.decamelize :: converts camelcased strings to separator', (t) => {
  t.is(fastCase.decamelize('theTestString', '-'), 'the-test-string')
})

test('.decamelize :: does not separate numbers', (t) => {
  t.is(fastCase.decamelize('theTestString123'), 'the_test_string123')
})

test('.decamelize :: preserves numbers', (t) => {
  t.is(fastCase.decamelize('-123'), '-123')
  t.is(fastCase.decamelize('123'), '123')
})

// .pascalize

test('.pascalize :: converts underscore strings to pascalcase', (t) => {
  t.is(fastCase.pascalize('the_test_string'), 'TheTestString')
})

test('.pascalize :: converts hyphenated strings to pascalcase', (t) => {
  t.is(fastCase.pascalize('the-test-string'), 'TheTestString')
})

test('.pascalize :: converts space-separated strings to pascalcase', (t) => {
  t.is(fastCase.pascalize('the test string'), 'TheTestString')
})

test('.pascalize :: converts camelcased strings to pascalcase', (t) => {
  t.is(fastCase.pascalize('theTestString'), 'TheTestString')
})

test('.pascalize :: preserves numbers', (t) => {
  t.is(fastCase.pascalize('-123'), '-123')
  t.is(fastCase.pascalize('123'), '123')
})

// .depascalize

test('.depascalize :: converts pascalcase strings to underscore', (t) => {
  t.is(fastCase.depascalize('TheTestString'), 'the_test_string')
})

test('.depascalize :: converts pascalcase strings to separator', (t) => {
  t.is(fastCase.depascalize('TheTestString', '-'), 'the-test-string')
})

test('.depascalize :: does not separate numbers', (t) => {
  t.is(fastCase.depascalize('TheTestString123'), 'the_test_string123')
})

test('.depascalize :: preserves numbers', (t) => {
  t.is(fastCase.depascalize('-123'), '-123')
  t.is(fastCase.depascalize('123'), '123')
})

// .camelizeKeys

test('.camelizeKeys :: converts object keys to camelcase', (t) => {
  t.deepEqual(fastCase.camelizeKeys({first_attribute: 'foo', second_attribute: 'bar'}), {
    firstAttribute: 'foo',
    secondAttribute: 'bar',
  })
})

test('.camelizeKeys :: converts complex object keys to camelcase', (t) => {
  t.deepEqual(
    fastCase.camelizeKeys({
      first_attribute: 'foo',
      second_attribute: 'bar',
      third_attribute: {
        first_nested_attribute: 'baz',
        second_nested_attribute: ['hello', 'world'],
        third_nested_attribute: [{inner_attr_one: 'hi', inner_attr_two: 'there'}],
      },
    }),
    {
      firstAttribute: 'foo',
      secondAttribute: 'bar',
      thirdAttribute: {
        firstNestedAttribute: 'baz',
        secondNestedAttribute: ['hello', 'world'],
        thirdNestedAttribute: [{innerAttrOne: 'hi', innerAttrTwo: 'there'}],
      },
    },
  )
})

test('.camelizeKeys :: converts complex object in-place keys to camelcase', (t) => {
  const originalObject = {
    first_attribute: 'foo',
    second_attribute: 'bar',
    third_attribute: {
      first_nested_attribute: 'baz',
      second_nested_attribute: ['hello', 'world'],
      third_nested_attribute: [{inner_attr_one: 'hi', inner_attr_two: 'there'}],
    },
  }

  const mutatedObject = fastCase.camelizeKeysInPlace(originalObject)

  // Changed object should be camelized
  t.deepEqual(mutatedObject, {
    firstAttribute: 'foo',
    secondAttribute: 'bar',
    thirdAttribute: {
      firstNestedAttribute: 'baz',
      secondNestedAttribute: ['hello', 'world'],
      thirdNestedAttribute: [{innerAttrOne: 'hi', innerAttrTwo: 'there'}],
    },
  })

  // Changed object should be the same as the original (in-place)
  t.is(originalObject, mutatedObject)
})

test('.camelizeKeys :: does not convert date objects', (t) => {
  const date = new Date()
  t.deepEqual(fastCase.camelizeKeys({date_today: date}), {dateToday: date})
})

test('.camelizeKeys :: does not convert functions', (t) => {
  const func = function () {}
  t.deepEqual(fastCase.camelizeKeys({my_function: func}), {myFunction: func})
})

// .pascalizeKeys

test('.pascalizeKeys :: converts object keys to camelcase', (t) => {
  t.deepEqual(fastCase.pascalizeKeys({first_attribute: 'foo', second_attribute: 'bar'}), {
    FirstAttribute: 'foo',
    SecondAttribute: 'bar',
  })
})

test('.pascalizeKeys :: converts complex object keys to camelcase', (t) => {
  t.deepEqual(
    fastCase.pascalizeKeys({
      first_attribute: 'foo',
      second_attribute: 'bar',
      third_attribute: {
        first_nested_attribute: 'baz',
        second_nested_attribute: ['hello', 'world'],
        third_nested_attribute: [{inner_attr_one: 'hi', inner_attr_two: 'there'}],
      },
    }),
    {
      FirstAttribute: 'foo',
      SecondAttribute: 'bar',
      ThirdAttribute: {
        FirstNestedAttribute: 'baz',
        SecondNestedAttribute: ['hello', 'world'],
        ThirdNestedAttribute: [{InnerAttrOne: 'hi', InnerAttrTwo: 'there'}],
      },
    },
  )
})

test('.pascalizeKeys :: converts complex object in-place keys to camelcase', (t) => {
  const originalObject = {
    first_attribute: 'foo',
    second_attribute: 'bar',
    third_attribute: {
      first_nested_attribute: 'baz',
      second_nested_attribute: ['hello', 'world'],
      third_nested_attribute: [{inner_attr_one: 'hi', inner_attr_two: 'there'}],
    },
  }

  const mutatedObject = fastCase.pascalizeKeysInPlace(originalObject)

  // Changed object should be camelized
  t.deepEqual(mutatedObject, {
    FirstAttribute: 'foo',
    SecondAttribute: 'bar',
    ThirdAttribute: {
      FirstNestedAttribute: 'baz',
      SecondNestedAttribute: ['hello', 'world'],
      ThirdNestedAttribute: [{InnerAttrOne: 'hi', InnerAttrTwo: 'there'}],
    },
  })

  // Changed object should be the same as the original (in-place)
  t.is(originalObject, mutatedObject)
})

test('.pascalizeKeys :: does not convert date objects', (t) => {
  const date = new Date()
  t.deepEqual(fastCase.pascalizeKeys({date_today: date}), {DateToday: date})
})

test('.pascalizeKeys :: does not convert functions', (t) => {
  const func = function () {}
  t.deepEqual(fastCase.pascalizeKeys({my_function: func}), {MyFunction: func})
})

# Interactive Productivity Dashboard

# Description
Web based dashboard for WEB-115 to experiment and demo various interactive JS features.

## Weekly Task Goals

The weekly task goal calculator allows users to enter their name, daily task goal, and weekly bonus tasks. It calculates the daily goal across five workdays, adds the bonus tasks, and displays the user's total weekly task goal.

## Imperial/Metric Converter

This application converts between Imperial and Metric length units. Users enter a numeric value, choose a conversion type, and get the result. Supported units are inch, foot, yard, mile, centimeter, meter, and kilometer.

### Logic and Pseudocode

```
PROMPT user for numeric value
PROMPT user for conversion type
SET result based on conversion type:
  IF "inch to centimeter" THEN result = value * 2.54
  ELSE IF "foot to centimeter" THEN result = value * 30.48
  ELSE IF "yard to meter" THEN result = value * 0.91
  ELSE IF "mile to kilometer" THEN result = value * 1.61
  ELSE IF "centimeter to inch" THEN result = value * 0.39
  ELSE IF "centimeter to foot" THEN result = value * 0.0328
  ELSE IF "meter to yard" THEN result = value * 1.09
  ELSE IF "kilometer to mile" THEN result = value * 0.62
  ELSE show invalid conversion message
IF result is defined THEN display result rounded to 2 decimal places
```

## TODO: Future Changes
- [ ] Demonstrate usage of various data structures.
- [ ] Apply traditional algorithms in practice.
- [ ] Build a clock to track time down to the second.
- [x] Add a weekly task goal calculator
- [x] Add an Imperial/Metric converter
// Minimum: 8
// Maximum: n/a
// Upper case: n/a
// Lower case: 1
// Numbers: 1
// Special characters: n/a
// export const PASSWORD_VALIDATION = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/gm;

// Minimum: 8
// Maximum: n/a
// Upper case: n/a
// Lower case: 1
// Numbers: 1
// Special characters: 1
// export const PASSWORD_VALIDATION = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/gm;

// Minimum: 8
// Maximum: n/a
// Upper case: 1
// Lower case: 1
// Numbers: 1
// Special characters: n/a
// export const PASSWORD_VALIDATION = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/gm;

// Minimum: 8
// Maximum: n/a
// Upper case: 1
// Lower case: 1
// Numbers: 1
// Special characters: 1
export const PASSWORD_VALIDATION =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/gm;

// Minimum: 8
// Maximum: 10
// Upper case: 1
// Lower case: 1
// Numbers: 1
// Special characters: 1
// export const PASSWORD_VALIDATION = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/gm;

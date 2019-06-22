/**
 * This answer on StackOverflow was helpful: https://stackoverflow.com/a/30199472/8486161
 */

export const combineMiddleware = (fns = []) => {
    return fns.reduce(
        (acc, fn) => {
            return (...args) => acc(fn(...args))
        },
        value => value
    )
}

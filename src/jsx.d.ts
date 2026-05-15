// Re-export JSX namespace from React for compatibility with React 19
// where the global JSX namespace was removed
import type React from 'react'
declare global {
  namespace JSX {
    type Element = React.ReactElement
    type IntrinsicElements = React.JSX.IntrinsicElements
    type ElementAttributesProperty = React.JSX.ElementAttributesProperty
    type ElementChildrenAttribute = React.JSX.ElementChildrenAttribute
  }
}

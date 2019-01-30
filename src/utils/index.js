import React from "react";
import hoistNonReactStatic from "hoist-non-react-statics";

/**
 * Compose HOCs in a react friendly fashion:
 *  - static properties are preserved
 *  - refs are forwarded
 */

export const compose = (...fns) => {
  const applyFns = fns.reduceRight(
    (prevFn, nextFn) => (...args) => nextFn(prevFn(...args)),
    value => value
  );

  return Component => {
    const PROP_NAME = "__COMPOSE_REF_FORWARD__";

    const RefForwarder = applyFns(
      ({ [PROP_NAME]: { ref, stackedRef }, ...props }) => {
        const innerProps = { ...props, ref };
        if (stackedRef) innerProps[PROP_NAME] = stackedRef;
        return React.createElement(Component, innerProps);
      }
    );

    return hoistNonReactStatic(
      React.forwardRef(({ [PROP_NAME]: stackedRef, ...props }, ref) =>
        React.createElement(RefForwarder, {
          ...props,
          [PROP_NAME]: { ref, stackedRef },
        })
      ),
      Component
    );
  };
};

/**
 * Uppercase the first letter of a string
 */

export const ucFirst = str => str.charAt(0).toUpperCase() + str.slice(1);

/**
 * Get a component display name
 */

export const getDisplayName = Component =>
  Component.displayName || Component.name || "Component";

/**
 * Get the web site base url (SSR compatible)
 */

export const getBaseUrl = () => {
  const origin =
    process.env.REACT_APP_LOCATION_ORIGIN || window.location.origin;
  return origin + process.env.PUBLIC_URL;
};

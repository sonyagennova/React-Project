export const CapitalizeFirstLowercaseRest = str => {
    return (
      str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
    );
  };
exports.extend = function extend(dest, from) {
    var props = Object.getOwnPropertyNames(from), destination;

    props.forEach(function(name) {
        if (typeof from[name] === 'object') {
            if (typeof dest[name] !== 'object') {
                dest[name] = {}
            }
            extend(dest[name], from[name]);
        } else {
            destination = Object.getOwnPropertyDescriptor(from, name);
            Object.defineProperty(dest, name, destination);
        }
    });

    return dest;
};

exports.buildCommandParameters = function(options) {
    var params = [];

    for (key in options) {
        var val = options[key];

        if (val !== undefined) {
            if (typeof val == 'boolean') {
                val && params.push('--' + key);
                if (val && key == 'verbose')
                    params.push('true')
            } else {
                params.push('--' + key);
                params.push(val)
            }
        }
    }
    return params;
};

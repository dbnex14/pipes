import { PipeTransform, Pipe } from "@angular/core";

// A pipe must implement transform method from PipeTransform interface.
// It also has to be added to the declarations array in app.module just 
// like components and directives.
// And finally, it must be decorated with @Pipe and have name.
// Now we can use our pipe in template like in example of server velow
// <strong>{{ server.name | shorten }}</strong>
@Pipe({
    name: 'shorten'
})
export class ShortenPipe implements PipeTransform {
    // A pipe must implemet transform method and recieve value of what
    // to transform.  It also receives list of arguments but we dont need
    // them for our use case so we omit them.  Finaly, transform method
    // must return a value, in this case we shorted string to 10 chars.
    transform(value: any, limit: number) {
        if (value.length > limit ) {
            return value.substr(0, limit) + " ...";
        }
        return value;
    }
}

import { IRequest } from "itty-router";
import { createRouterHtml } from "webutils/router";

//
// Environment arguments
//

export interface Bindings {}

/** The arguments every handler receives after the request. */
export type Args = [env: Bindings, ctx: ExecutionContext];

export type RequestBase = IRequest;

export const routerHtml = createRouterHtml<RequestBase, Args>();

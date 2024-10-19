// @bun
var __create = Object.create;
var __getProtoOf = Object.getPrototypeOf;
var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __toESM = (mod, isNodeMode, target) => {
  target = mod != null ? __create(__getProtoOf(mod)) : {};
  const to = isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target;
  for (let key of __getOwnPropNames(mod))
    if (!__hasOwnProp.call(to, key))
      __defProp(to, key, {
        get: () => mod[key],
        enumerable: true
      });
  return to;
};
var __commonJS = (cb, mod) => () => (mod || cb((mod = { exports: {} }).exports, mod), mod.exports);
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, {
      get: all[name],
      enumerable: true,
      configurable: true,
      set: (newValue) => all[name] = () => newValue
    });
};

// node_modules/@prisma/client/runtime/library.js
var require_library = __commonJS((exports, module) => {
  function fo(e) {
    return typeof e == "function" ? e : (t3) => t3.$extends(e);
  }
  function go(e) {
    return e;
  }
  function ho(...e) {
    return (t3) => t3;
  }
  function M(e, t3) {
    let r = new RegExp(`\\x1b\\[${t3}m`, "g"), n2 = `\x1B[${e}m`, i3 = `\x1B[${t3}m`;
    return function(o2) {
      return !xo.enabled || o2 == null ? o2 : n2 + (~("" + o2).indexOf(i3) ? o2.replace(r, i3 + n2) : o2) + i3;
    };
  }
  function xu(e) {
    let t3 = { color: Po[wu++ % Po.length], enabled: Gt.enabled(e), namespace: e, log: Gt.log, extend: () => {
    } }, r = (...n2) => {
      let { enabled: i3, namespace: o2, color: s, log: a } = t3;
      if (n2.length !== 0 && Ut.push([o2, ...n2]), Ut.length > Eu && Ut.shift(), Gt.enabled(o2) || i3) {
        let l = n2.map((c3) => typeof c3 == "string" ? c3 : Pu(c3)), u = `+${Date.now() - vo}ms`;
        vo = Date.now(), globalThis.DEBUG_COLORS ? a(Nr[s](H(o2)), ...l, Nr[s](u)) : a(o2, ...l, u);
      }
    };
    return new Proxy(r, { get: (n2, i3) => t3[i3], set: (n2, i3, o2) => t3[i3] = o2 });
  }
  function Pu(e, t3 = 2) {
    let r = new Set;
    return JSON.stringify(e, (n2, i3) => {
      if (typeof i3 == "object" && i3 !== null) {
        if (r.has(i3))
          return "[Circular *]";
        r.add(i3);
      } else if (typeof i3 == "bigint")
        return i3.toString();
      return i3;
    }, t3);
  }
  function To(e = 7500) {
    let t3 = Ut.map(([r, ...n2]) => `${r} ${n2.map((i3) => typeof i3 == "string" ? i3 : JSON.stringify(i3)).join(" ")}`).join(`
`);
    return t3.length < e ? t3 : t3.slice(-e);
  }
  function Ro() {
    Ut.length = 0;
  }
  function Gn() {
    let e = process.env.PRISMA_QUERY_ENGINE_LIBRARY;
    if (!(e && Co.default.existsSync(e)) && process.arch === "ia32")
      throw new Error('The default query engine type (Node-API, "library") is currently not supported for 32bit Node. Please set `engineType = "binary"` in the "generator" block of your "schema.prisma" file (or use the environment variables "PRISMA_CLIENT_ENGINE_TYPE=binary" and/or "PRISMA_CLI_QUERY_ENGINE_TYPE=binary".)');
  }
  function $r(e, t3) {
    let r = t3 === "url";
    return e.includes("windows") ? r ? "query_engine.dll.node" : `query_engine-${e}.dll.node` : e.includes("darwin") ? r ? `${Mr}.dylib.node` : `${Mr}-${e}.dylib.node` : r ? `${Mr}.so.node` : `${Mr}-${e}.so.node`;
  }
  function pe(e) {
    return Object.assign(e, { optional: () => Tu(e), and: (t3) => j(e, t3), or: (t3) => Ru(e, t3), select: (t3) => t3 === undefined ? So(e) : So(t3, e) });
  }
  function Tu(e) {
    return pe({ [_e]: () => ({ match: (t3) => {
      let r = {}, n2 = (i3, o2) => {
        r[i3] = o2;
      };
      return t3 === undefined ? (Ge(e).forEach((i3) => n2(i3, undefined)), { matched: true, selections: r }) : { matched: Ee(e, t3, n2), selections: r };
    }, getSelectionKeys: () => Ge(e), matcherType: "optional" }) });
  }
  function j(...e) {
    return pe({ [_e]: () => ({ match: (t3) => {
      let r = {}, n2 = (i3, o2) => {
        r[i3] = o2;
      };
      return { matched: e.every((i3) => Ee(i3, t3, n2)), selections: r };
    }, getSelectionKeys: () => Qt(e, Ge), matcherType: "and" }) });
  }
  function Ru(...e) {
    return pe({ [_e]: () => ({ match: (t3) => {
      let r = {}, n2 = (i3, o2) => {
        r[i3] = o2;
      };
      return Qt(e, Ge).forEach((i3) => n2(i3, undefined)), { matched: e.some((i3) => Ee(i3, t3, n2)), selections: r };
    }, getSelectionKeys: () => Qt(e, Ge), matcherType: "or" }) });
  }
  function I(e) {
    return { [_e]: () => ({ match: (t3) => ({ matched: !!e(t3) }) }) };
  }
  function So(...e) {
    let t3 = typeof e[0] == "string" ? e[0] : undefined, r = e.length === 2 ? e[1] : typeof e[0] == "string" ? undefined : e[0];
    return pe({ [_e]: () => ({ match: (n2) => {
      let i3 = { [t3 ?? jr]: n2 };
      return { matched: r === undefined || Ee(r, n2, (o2, s) => {
        i3[o2] = s;
      }), selections: i3 };
    }, getSelectionKeys: () => [t3 ?? jr].concat(r === undefined ? [] : Ge(r)) }) });
  }
  function ye(e) {
    return typeof e == "number";
  }
  function je(e) {
    return typeof e == "string";
  }
  function Ve(e) {
    return typeof e == "bigint";
  }
  function mt(e) {
    return new Hn(e, Wn);
  }
  function Vr(e, ...t3) {
    Su.warn() && console.warn(`${Cu.warn} ${e}`, ...t3);
  }
  async function Do() {
    let e = Ur.default.platform(), t3 = process.arch;
    if (e === "freebsd") {
      let s = await Gr("freebsd-version");
      if (s && s.trim().length > 0) {
        let l = /^(\d+)\.?/.exec(s);
        if (l)
          return { platform: "freebsd", targetDistro: `freebsd${l[1]}`, arch: t3 };
      }
    }
    if (e !== "linux")
      return { platform: e, arch: t3 };
    let r = await ku(), n2 = await qu(), i3 = _u({ arch: t3, archFromUname: n2, familyDistro: r.familyDistro }), { libssl: o2 } = await Fu(i3);
    return { platform: "linux", libssl: o2, arch: t3, archFromUname: n2, ...r };
  }
  function Ou(e) {
    let t3 = /^ID="?([^"\n]*)"?$/im, r = /^ID_LIKE="?([^"\n]*)"?$/im, n2 = t3.exec(e), i3 = n2 && n2[1] && n2[1].toLowerCase() || "", o2 = r.exec(e), s = o2 && o2[1] && o2[1].toLowerCase() || "", a = mt({ id: i3, idLike: s }).with({ id: "alpine" }, ({ id: l }) => ({ targetDistro: "musl", familyDistro: l, originalDistro: l })).with({ id: "raspbian" }, ({ id: l }) => ({ targetDistro: "arm", familyDistro: "debian", originalDistro: l })).with({ id: "nixos" }, ({ id: l }) => ({ targetDistro: "nixos", originalDistro: l, familyDistro: "nixos" })).with({ id: "debian" }, { id: "ubuntu" }, ({ id: l }) => ({ targetDistro: "debian", familyDistro: "debian", originalDistro: l })).with({ id: "rhel" }, { id: "centos" }, { id: "fedora" }, ({ id: l }) => ({ targetDistro: "rhel", familyDistro: "rhel", originalDistro: l })).when(({ idLike: l }) => l.includes("debian") || l.includes("ubuntu"), ({ id: l }) => ({ targetDistro: "debian", familyDistro: "debian", originalDistro: l })).when(({ idLike: l }) => i3 === "arch" || l.includes("arch"), ({ id: l }) => ({ targetDistro: "debian", familyDistro: "arch", originalDistro: l })).when(({ idLike: l }) => l.includes("centos") || l.includes("fedora") || l.includes("rhel") || l.includes("suse"), ({ id: l }) => ({ targetDistro: "rhel", familyDistro: "rhel", originalDistro: l })).otherwise(({ id: l }) => ({ targetDistro: undefined, familyDistro: undefined, originalDistro: l }));
    return te(`Found distro info:
${JSON.stringify(a, null, 2)}`), a;
  }
  async function ku() {
    let e = "/etc/os-release";
    try {
      let t3 = await Kn.default.readFile(e, { encoding: "utf-8" });
      return Ou(t3);
    } catch {
      return { targetDistro: undefined, familyDistro: undefined, originalDistro: undefined };
    }
  }
  function Du(e) {
    let t3 = /^OpenSSL\s(\d+\.\d+)\.\d+/.exec(e);
    if (t3) {
      let r = `${t3[1]}.x`;
      return _o(r);
    }
  }
  function Ao(e) {
    let t3 = /libssl\.so\.(\d)(\.\d)?/.exec(e);
    if (t3) {
      let r = `${t3[1]}${t3[2] ?? ".0"}.x`;
      return _o(r);
    }
  }
  function _o(e) {
    let t3 = (() => {
      if (Lo(e))
        return e;
      let r = e.split(".");
      return r[1] = "0", r.join(".");
    })();
    if (Iu.includes(t3))
      return t3;
  }
  function _u(e) {
    return mt(e).with({ familyDistro: "musl" }, () => (te('Trying platform-specific paths for "alpine"'), ["/lib"])).with({ familyDistro: "debian" }, ({ archFromUname: t3 }) => (te('Trying platform-specific paths for "debian" (and "ubuntu")'), [`/usr/lib/${t3}-linux-gnu`, `/lib/${t3}-linux-gnu`])).with({ familyDistro: "rhel" }, () => (te('Trying platform-specific paths for "rhel"'), ["/lib64", "/usr/lib64"])).otherwise(({ familyDistro: t3, arch: r, archFromUname: n2 }) => (te(`Don't know any platform-specific paths for "${t3}" on ${r} (${n2})`), []));
  }
  async function Fu(e) {
    let t3 = 'grep -v "libssl.so.0"', r = await Io(e);
    if (r) {
      te(`Found libssl.so file using platform-specific paths: ${r}`);
      let o2 = Ao(r);
      if (te(`The parsed libssl version is: ${o2}`), o2)
        return { libssl: o2, strategy: "libssl-specific-path" };
    }
    te('Falling back to "ldconfig" and other generic paths');
    let n2 = await Gr(`ldconfig -p | sed "s/.*=>s*//" | sed "s|.*/||" | grep libssl | sort | ${t3}`);
    if (n2 || (n2 = await Io(["/lib64", "/usr/lib64", "/lib"])), n2) {
      te(`Found libssl.so file using "ldconfig" or other generic paths: ${n2}`);
      let o2 = Ao(n2);
      if (te(`The parsed libssl version is: ${o2}`), o2)
        return { libssl: o2, strategy: "ldconfig" };
    }
    let i3 = await Gr("openssl version -v");
    if (i3) {
      te(`Found openssl binary with version: ${i3}`);
      let o2 = Du(i3);
      if (te(`The parsed openssl version is: ${o2}`), o2)
        return { libssl: o2, strategy: "openssl-binary" };
    }
    return te("Couldn't find any version of libssl or OpenSSL in the system"), {};
  }
  async function Io(e) {
    for (let t3 of e) {
      let r = await Lu(t3);
      if (r)
        return r;
    }
  }
  async function Lu(e) {
    try {
      return (await Kn.default.readdir(e)).find((r) => r.startsWith("libssl.so.") && !r.startsWith("libssl.so.0"));
    } catch (t3) {
      if (t3.code === "ENOENT")
        return;
      throw t3;
    }
  }
  async function nt() {
    let { binaryTarget: e } = await Fo();
    return e;
  }
  function Nu(e) {
    return e.binaryTarget !== undefined;
  }
  async function zn() {
    let { memoized: e, ...t3 } = await Fo();
    return t3;
  }
  async function Fo() {
    if (Nu(Br))
      return Promise.resolve({ ...Br, memoized: true });
    let e = await Do(), t3 = Mu(e);
    return Br = { ...e, binaryTarget: t3 }, { ...Br, memoized: false };
  }
  function Mu(e) {
    let { platform: t3, arch: r, archFromUname: n2, libssl: i3, targetDistro: o2, familyDistro: s, originalDistro: a } = e;
    t3 === "linux" && !["x64", "arm64"].includes(r) && Vr(`Prisma only officially supports Linux on amd64 (x86_64) and arm64 (aarch64) system architectures (detected "${r}" instead). If you are using your own custom Prisma engines, you can ignore this warning, as long as you've compiled the engines for your system architecture "${n2}".`);
    let l = "1.1.x";
    if (t3 === "linux" && i3 === undefined) {
      let c3 = mt({ familyDistro: s }).with({ familyDistro: "debian" }, () => "Please manually install OpenSSL via `apt-get update -y && apt-get install -y openssl` and try installing Prisma again. If you're running Prisma on Docker, add this command to your Dockerfile, or switch to an image that already has OpenSSL installed.").otherwise(() => "Please manually install OpenSSL and try installing Prisma again.");
      Vr(`Prisma failed to detect the libssl/openssl version to use, and may not work as expected. Defaulting to "openssl-${l}".
${c3}`);
    }
    let u = "debian";
    if (t3 === "linux" && o2 === undefined && te(`Distro is "${a}". Falling back to Prisma engines built for "${u}".`), t3 === "darwin" && r === "arm64")
      return "darwin-arm64";
    if (t3 === "darwin")
      return "darwin";
    if (t3 === "win32")
      return "windows";
    if (t3 === "freebsd")
      return o2;
    if (t3 === "openbsd")
      return "openbsd";
    if (t3 === "netbsd")
      return "netbsd";
    if (t3 === "linux" && o2 === "nixos")
      return "linux-nixos";
    if (t3 === "linux" && r === "arm64")
      return `${o2 === "musl" ? "linux-musl-arm64" : "linux-arm64"}-openssl-${i3 || l}`;
    if (t3 === "linux" && r === "arm")
      return `linux-arm-openssl-${i3 || l}`;
    if (t3 === "linux" && o2 === "musl") {
      let c3 = "linux-musl";
      return !i3 || Lo(i3) ? c3 : `${c3}-openssl-${i3}`;
    }
    return t3 === "linux" && o2 && i3 ? `${o2}-openssl-${i3}` : (t3 !== "linux" && Vr(`Prisma detected unknown OS "${t3}" and may not work as expected. Defaulting to "linux".`), i3 ? `${u}-openssl-${i3}` : o2 ? `${o2}-openssl-${l}` : `${u}-openssl-${l}`);
  }
  async function $u(e) {
    try {
      return await e();
    } catch {
      return;
    }
  }
  function Gr(e) {
    return $u(async () => {
      let t3 = await Au(e);
      return te(`Command "${e}" successfully returned "${t3.stdout}"`), t3.stdout;
    });
  }
  async function qu() {
    return typeof Ur.default.machine == "function" ? Ur.default.machine() : (await Gr("uname -m"))?.trim();
  }
  function Lo(e) {
    return e.startsWith("1.");
  }
  function ni(e) {
    return (0, Wo.default)(e, e, { fallback: X });
  }
  function Ho() {
    return $.default.join(__dirname, "../");
  }
  function ai(e) {
    if (process.platform === "win32")
      return;
    let t3 = si.default.statSync(e), r = t3.mode | 64 | 8 | 1;
    if (t3.mode === r) {
      Ko(`Execution permissions of ${e} are fine`);
      return;
    }
    let n2 = r.toString(8).slice(-3);
    Ko(`Have to call chmodPlusX on ${e}`), si.default.chmodSync(e, n2);
  }
  function li(e) {
    let t3 = e.e, r = (a) => `Prisma cannot find the required \`${a}\` system library in your system`, n2 = t3.message.includes("cannot open shared object file"), i3 = `Please refer to the documentation about Prisma's system requirements: ${ni("https://pris.ly/d/system-requirements")}`, o2 = `Unable to require(\`${Oe(e.id)}\`).`, s = mt({ message: t3.message, code: t3.code }).with({ code: "ENOENT" }, () => "File does not exist.").when(({ message: a }) => n2 && a.includes("libz"), () => `${r("libz")}. Please install it and try again.`).when(({ message: a }) => n2 && a.includes("libgcc_s"), () => `${r("libgcc_s")}. Please install it and try again.`).when(({ message: a }) => n2 && a.includes("libssl"), () => {
      let a = e.platformInfo.libssl ? `openssl-${e.platformInfo.libssl}` : "openssl";
      return `${r("libssl")}. Please install ${a} and try again.`;
    }).when(({ message: a }) => a.includes("GLIBC"), () => `Prisma has detected an incompatible version of the \`glibc\` C standard library installed in your system. This probably means your system may be too old to run Prisma. ${i3}`).when(({ message: a }) => e.platformInfo.platform === "linux" && a.includes("symbol not found"), () => `The Prisma engines are not compatible with your system ${e.platformInfo.originalDistro} on (${e.platformInfo.archFromUname}) which uses the \`${e.platformInfo.binaryTarget}\` binaryTarget by default. ${i3}`).otherwise(() => `The Prisma engines do not seem to be compatible with your system. ${i3}`);
    return `${o2}
${s}

Details: ${t3.message}`;
  }
  function Xo(e) {
    let t3 = e.ignoreProcessEnv ? {} : process.env, r = (n2) => n2.match(/(.?\${(?:[a-zA-Z0-9_]+)?})/g)?.reduce(function(o2, s) {
      let a = /(.?)\${([a-zA-Z0-9_]+)?}/g.exec(s);
      if (!a)
        return o2;
      let l = a[1], u, c3;
      if (l === "\\")
        c3 = a[0], u = c3.replace("\\$", "$");
      else {
        let p3 = a[2];
        c3 = a[0].substring(l.length), u = Object.hasOwnProperty.call(t3, p3) ? t3[p3] : e.parsed[p3] || "", u = r(u);
      }
      return o2.replace(c3, u);
    }, n2) ?? n2;
    for (let n2 in e.parsed) {
      let i3 = Object.hasOwnProperty.call(t3, n2) ? t3[n2] : e.parsed[n2];
      e.parsed[n2] = r(i3);
    }
    for (let n2 in e.parsed)
      t3[n2] = e.parsed[n2];
    return e;
  }
  function Ht({ rootEnvPath: e, schemaEnvPath: t3 }, r = { conflictCheck: "none" }) {
    let n2 = es(e);
    r.conflictCheck !== "none" && rc(n2, t3, r.conflictCheck);
    let i3 = null;
    return ts(n2?.path, t3) || (i3 = es(t3)), !n2 && !i3 && ci("No Environment variables loaded"), i3?.dotenvResult.error ? console.error(ce(H("Schema Env Error: ")) + i3.dotenvResult.error) : { message: [n2?.message, i3?.message].filter(Boolean).join(`
`), parsed: { ...n2?.dotenvResult?.parsed, ...i3?.dotenvResult?.parsed } };
  }
  function rc(e, t3, r) {
    let n2 = e?.dotenvResult.parsed, i3 = !ts(e?.path, t3);
    if (n2 && t3 && i3 && Kr.default.existsSync(t3)) {
      let o2 = pi.default.parse(Kr.default.readFileSync(t3)), s = [];
      for (let a in o2)
        n2[a] === o2[a] && s.push(a);
      if (s.length > 0) {
        let a = ht.default.relative(process.cwd(), e.path), l = ht.default.relative(process.cwd(), t3);
        if (r === "error") {
          let u = `There is a conflict between env var${s.length > 1 ? "s" : ""} in ${X(a)} and ${X(l)}
Conflicting env vars:
${s.map((c3) => `  ${H(c3)}`).join(`
`)}

We suggest to move the contents of ${X(l)} to ${X(a)} to consolidate your env vars.
`;
          throw new Error(u);
        } else if (r === "warn") {
          let u = `Conflict for env var${s.length > 1 ? "s" : ""} ${s.map((c3) => H(c3)).join(", ")} in ${X(a)} and ${X(l)}
Env vars from ${X(l)} overwrite the ones from ${X(a)}
      `;
          console.warn(`${ke("warn(prisma)")} ${u}`);
        }
      }
    }
  }
  function es(e) {
    if (nc(e)) {
      ci(`Environment variables loaded from ${e}`);
      let t3 = pi.default.config({ path: e, debug: process.env.DOTENV_CONFIG_DEBUG ? true : undefined });
      return { dotenvResult: Xo(t3), message: Oe(`Environment variables loaded from ${ht.default.relative(process.cwd(), e)}`), path: e };
    } else
      ci(`Environment variables not found at ${e}`);
    return null;
  }
  function ts(e, t3) {
    return e && t3 && ht.default.resolve(e) === ht.default.resolve(t3);
  }
  function nc(e) {
    return !!(e && Kr.default.existsSync(e));
  }
  function Kt(e) {
    let t3 = ic();
    return t3 || (e?.config.engineType === "library" ? "library" : e?.config.engineType === "binary" ? "binary" : rs);
  }
  function ic() {
    let e = process.env.PRISMA_CLIENT_ENGINE_TYPE;
    return e === "library" ? "library" : e === "binary" ? "binary" : undefined;
  }
  function di(e) {
    return zt.default.sep === zt.default.posix.sep ? e : e.split(zt.default.sep).join(zt.default.posix.sep);
  }
  function gi(e) {
    return String(new fi(e));
  }
  function sc(e) {
    let t3;
    if (e.length > 0) {
      let r = e.find((n2) => n2.fromEnvVar !== null);
      r ? t3 = `env("${r.fromEnvVar}")` : t3 = e.map((n2) => n2.native ? "native" : n2.value);
    } else
      t3 = undefined;
    return t3;
  }
  function ac(e) {
    let t3 = Object.keys(e).reduce((r, n2) => Math.max(r, n2.length), 0);
    return Object.entries(e).map(([r, n2]) => `${r.padEnd(t3)} = ${lc(n2)}`).join(`
`);
  }
  function lc(e) {
    return JSON.parse(JSON.stringify(e, (t3, r) => Array.isArray(r) ? `[${r.map((n2) => JSON.stringify(n2)).join(", ")}]` : JSON.stringify(r)));
  }
  function uc(...e) {
    console.log(...e);
  }
  function hi(e, ...t3) {
    us.warn() && console.warn(`${Yt.warn} ${e}`, ...t3);
  }
  function cc(e, ...t3) {
    console.info(`${Yt.info} ${e}`, ...t3);
  }
  function pc(e, ...t3) {
    console.error(`${Yt.error} ${e}`, ...t3);
  }
  function dc(e, ...t3) {
    console.log(`${Yt.query} ${e}`, ...t3);
  }
  function zr(e, t3) {
    if (!e)
      throw new Error(`${t3}. This should never happen. If you see this error, please, open an issue at https://pris.ly/prisma-prisma-bug-report`);
  }
  function Fe(e, t3) {
    throw new Error(t3);
  }
  function bi(e, t3) {
    return Object.prototype.hasOwnProperty.call(e, t3);
  }
  function yt(e, t3) {
    let r = {};
    for (let n2 of Object.keys(e))
      r[n2] = t3(e[n2], n2);
    return r;
  }
  function wi(e, t3) {
    if (e.length === 0)
      return;
    let r = e[0];
    for (let n2 = 1;n2 < e.length; n2++)
      t3(r, e[n2]) < 0 && (r = e[n2]);
    return r;
  }
  function w(e, t3) {
    Object.defineProperty(e, "name", { value: t3, configurable: true });
  }
  function er(e) {
    let t3;
    return { get() {
      return t3 || (t3 = { value: e() }), t3.value;
    } };
  }
  function gs(e, t3) {
    let r = er(() => fc(t3));
    Object.defineProperty(e, "dmmf", { get: () => r.get() });
  }
  function fc(e) {
    return { datamodel: { models: xi(e.models), enums: xi(e.enums), types: xi(e.types) } };
  }
  function xi(e) {
    return Object.entries(e).map(([t3, r]) => ({ name: t3, ...r }));
  }
  function vi(e, t3) {
    Object.defineProperty(e, "name", { value: t3, configurable: true });
  }
  function we(e) {
    return e instanceof or;
  }
  function ys(e) {
    return (...t3) => new sr(e, t3);
  }
  function ar(e) {
    return { ok: false, error: e, map() {
      return ar(e);
    }, flatMap() {
      return ar(e);
    } };
  }
  function xe(e, t3) {
    return async (...r) => {
      try {
        return await t3(...r);
      } catch (n2) {
        let i3 = e.registerNewError(n2);
        return ar({ kind: "GenericJs", id: i3 });
      }
    };
  }
  function yc(e, t3) {
    return (...r) => {
      try {
        return t3(...r);
      } catch (n2) {
        let i3 = e.registerNewError(n2);
        return ar({ kind: "GenericJs", id: i3 });
      }
    };
  }
  function bs(e, t3 = ",", r = "", n2 = "") {
    if (e.length === 0)
      throw new TypeError("Expected `join([])` to be called with an array of multiple elements, but got an empty array");
    return new ie([r, ...Array(e.length - 1).fill(t3), n2], e);
  }
  function Si(e) {
    return new ie([e], []);
  }
  function Ai(e, ...t3) {
    return new ie(e, t3);
  }
  function lr(e) {
    return { getKeys() {
      return Object.keys(e);
    }, getPropertyValue(t3) {
      return e[t3];
    } };
  }
  function re(e, t3) {
    return { getKeys() {
      return [e];
    }, getPropertyValue() {
      return t3();
    } };
  }
  function it(e) {
    let t3 = new Pe;
    return { getKeys() {
      return e.getKeys();
    }, getPropertyValue(r) {
      return t3.getOrCreate(r, () => e.getPropertyValue(r));
    }, getPropertyDescriptor(r) {
      return e.getPropertyDescriptor?.(r);
    } };
  }
  function nn(e) {
    let t3 = new Set(e);
    return { getOwnPropertyDescriptor: () => rn, has: (r, n2) => t3.has(n2), set: (r, n2, i3) => t3.add(n2) && Reflect.set(r, n2, i3), ownKeys: () => [...t3] };
  }
  function ve(e, t3) {
    let r = bc(t3), n2 = new Set, i3 = new Proxy(e, { get(o2, s) {
      if (n2.has(s))
        return o2[s];
      let a = r.get(s);
      return a ? a.getPropertyValue(s) : o2[s];
    }, has(o2, s) {
      if (n2.has(s))
        return true;
      let a = r.get(s);
      return a ? a.has?.(s) ?? true : Reflect.has(o2, s);
    }, ownKeys(o2) {
      let s = xs(Reflect.ownKeys(o2), r), a = xs(Array.from(r.keys()), r);
      return [...new Set([...s, ...a, ...n2])];
    }, set(o2, s, a) {
      return r.get(s)?.getPropertyDescriptor?.(s)?.writable === false ? false : (n2.add(s), Reflect.set(o2, s, a));
    }, getOwnPropertyDescriptor(o2, s) {
      let a = Reflect.getOwnPropertyDescriptor(o2, s);
      if (a && !a.configurable)
        return a;
      let l = r.get(s);
      return l ? l.getPropertyDescriptor ? { ...rn, ...l?.getPropertyDescriptor(s) } : rn : a;
    }, defineProperty(o2, s, a) {
      return n2.add(s), Reflect.defineProperty(o2, s, a);
    } });
    return i3[ws] = function() {
      let o2 = { ...this };
      return delete o2[ws], o2;
    }, i3;
  }
  function bc(e) {
    let t3 = new Map;
    for (let r of e) {
      let n2 = r.getKeys();
      for (let i3 of n2)
        t3.set(i3, r);
    }
    return t3;
  }
  function xs(e, t3) {
    return e.filter((r) => t3.get(r)?.has?.(r) ?? true);
  }
  function Et(e) {
    return { getKeys() {
      return e;
    }, has() {
      return false;
    }, getPropertyValue() {
    } };
  }
  function wt(e, t3) {
    return { batch: e, transaction: t3?.kind === "batch" ? { isolationLevel: t3.options.isolationLevel } : undefined };
  }
  function Ps(e) {
    return e.substring(0, 1).toLowerCase() + e.substring(1);
  }
  function Pt(e) {
    return e instanceof Date || Object.prototype.toString.call(e) === "[object Date]";
  }
  function on(e) {
    return e.toString() !== "Invalid Date";
  }
  function K(e) {
    var t3, r, n2, i3 = e.length - 1, o2 = "", s = e[0];
    if (i3 > 0) {
      for (o2 += s, t3 = 1;t3 < i3; t3++)
        n2 = e[t3] + "", r = b - n2.length, r && (o2 += We(r)), o2 += n2;
      s = e[t3], n2 = s + "", r = b - n2.length, r && (o2 += We(r));
    } else if (s === 0)
      return "0";
    for (;s % 10 === 0; )
      s /= 10;
    return o2 + s;
  }
  function oe(e, t3, r) {
    if (e !== ~~e || e < t3 || e > r)
      throw Error(Ke + e);
  }
  function ur(e, t3, r, n2) {
    var i3, o2, s, a;
    for (o2 = e[0];o2 >= 10; o2 /= 10)
      --t3;
    return --t3 < 0 ? (t3 += b, i3 = 0) : (i3 = Math.ceil((t3 + 1) / b), t3 %= b), o2 = G(10, b - t3), a = e[i3] % o2 | 0, n2 == null ? t3 < 3 ? (t3 == 0 ? a = a / 100 | 0 : t3 == 1 && (a = a / 10 | 0), s = r < 4 && a == 99999 || r > 3 && a == 49999 || a == 50000 || a == 0) : s = (r < 4 && a + 1 == o2 || r > 3 && a + 1 == o2 / 2) && (e[i3 + 1] / o2 / 100 | 0) == G(10, t3 - 2) - 1 || (a == o2 / 2 || a == 0) && (e[i3 + 1] / o2 / 100 | 0) == 0 : t3 < 4 ? (t3 == 0 ? a = a / 1000 | 0 : t3 == 1 ? a = a / 100 | 0 : t3 == 2 && (a = a / 10 | 0), s = (n2 || r < 4) && a == 9999 || !n2 && r > 3 && a == 4999) : s = ((n2 || r < 4) && a + 1 == o2 || !n2 && r > 3 && a + 1 == o2 / 2) && (e[i3 + 1] / o2 / 1000 | 0) == G(10, t3 - 3) - 1, s;
  }
  function sn(e, t3, r) {
    for (var n2, i3 = [0], o2, s = 0, a = e.length;s < a; ) {
      for (o2 = i3.length;o2--; )
        i3[o2] *= t3;
      for (i3[0] += Ii.indexOf(e.charAt(s++)), n2 = 0;n2 < i3.length; n2++)
        i3[n2] > r - 1 && (i3[n2 + 1] === undefined && (i3[n2 + 1] = 0), i3[n2 + 1] += i3[n2] / r | 0, i3[n2] %= r);
    }
    return i3.reverse();
  }
  function Tc(e, t3) {
    var r, n2, i3;
    if (t3.isZero())
      return t3;
    n2 = t3.d.length, n2 < 32 ? (r = Math.ceil(n2 / 3), i3 = (1 / dn(4, r)).toString()) : (r = 16, i3 = "2.3283064365386962890625e-10"), e.precision += r, t3 = Tt(e, 1, t3.times(i3), new e(1));
    for (var o2 = r;o2--; ) {
      var s = t3.times(t3);
      t3 = s.times(s).minus(s).times(8).plus(1);
    }
    return e.precision -= r, t3;
  }
  function y3(e, t3, r, n2) {
    var i3, o2, s, a, l, u, c3, p3, d3, f3 = e.constructor;
    e:
      if (t3 != null) {
        if (p3 = e.d, !p3)
          return e;
        for (i3 = 1, a = p3[0];a >= 10; a /= 10)
          i3++;
        if (o2 = t3 - i3, o2 < 0)
          o2 += b, s = t3, c3 = p3[d3 = 0], l = c3 / G(10, i3 - s - 1) % 10 | 0;
        else if (d3 = Math.ceil((o2 + 1) / b), a = p3.length, d3 >= a)
          if (n2) {
            for (;a++ <= d3; )
              p3.push(0);
            c3 = l = 0, i3 = 1, o2 %= b, s = o2 - b + 1;
          } else
            break e;
        else {
          for (c3 = a = p3[d3], i3 = 1;a >= 10; a /= 10)
            i3++;
          o2 %= b, s = o2 - b + i3, l = s < 0 ? 0 : c3 / G(10, i3 - s - 1) % 10 | 0;
        }
        if (n2 = n2 || t3 < 0 || p3[d3 + 1] !== undefined || (s < 0 ? c3 : c3 % G(10, i3 - s - 1)), u = r < 4 ? (l || n2) && (r == 0 || r == (e.s < 0 ? 3 : 2)) : l > 5 || l == 5 && (r == 4 || n2 || r == 6 && (o2 > 0 ? s > 0 ? c3 / G(10, i3 - s) : 0 : p3[d3 - 1]) % 10 & 1 || r == (e.s < 0 ? 8 : 7)), t3 < 1 || !p3[0])
          return p3.length = 0, u ? (t3 -= e.e + 1, p3[0] = G(10, (b - t3 % b) % b), e.e = -t3 || 0) : p3[0] = e.e = 0, e;
        if (o2 == 0 ? (p3.length = d3, a = 1, d3--) : (p3.length = d3 + 1, a = G(10, b - o2), p3[d3] = s > 0 ? (c3 / G(10, i3 - s) % G(10, s) | 0) * a : 0), u)
          for (;; )
            if (d3 == 0) {
              for (o2 = 1, s = p3[0];s >= 10; s /= 10)
                o2++;
              for (s = p3[0] += a, a = 1;s >= 10; s /= 10)
                a++;
              o2 != a && (e.e++, p3[0] == ge && (p3[0] = 1));
              break;
            } else {
              if (p3[d3] += a, p3[d3] != ge)
                break;
              p3[d3--] = 0, a = 1;
            }
        for (o2 = p3.length;p3[--o2] === 0; )
          p3.pop();
      }
    return x3 && (e.e > f3.maxE ? (e.d = null, e.e = NaN) : e.e < f3.minE && (e.e = 0, e.d = [0])), e;
  }
  function Te(e, t3, r) {
    if (!e.isFinite())
      return Fs(e);
    var n2, i3 = e.e, o2 = K(e.d), s = o2.length;
    return t3 ? (r && (n2 = r - s) > 0 ? o2 = o2.charAt(0) + "." + o2.slice(1) + We(n2) : s > 1 && (o2 = o2.charAt(0) + "." + o2.slice(1)), o2 = o2 + (e.e < 0 ? "e" : "e+") + e.e) : i3 < 0 ? (o2 = "0." + We(-i3 - 1) + o2, r && (n2 = r - s) > 0 && (o2 += We(n2))) : i3 >= s ? (o2 += We(i3 + 1 - s), r && (n2 = r - i3 - 1) > 0 && (o2 = o2 + "." + We(n2))) : ((n2 = i3 + 1) < s && (o2 = o2.slice(0, n2) + "." + o2.slice(n2)), r && (n2 = r - s) > 0 && (i3 + 1 === s && (o2 += "."), o2 += We(n2))), o2;
  }
  function pn(e, t3) {
    var r = e[0];
    for (t3 *= b;r >= 10; r /= 10)
      t3++;
    return t3;
  }
  function un(e, t3, r) {
    if (t3 > vc)
      throw x3 = true, r && (e.precision = r), Error(Ss);
    return y3(new e(an), t3, 1, true);
  }
  function fe(e, t3, r) {
    if (t3 > ki)
      throw Error(Ss);
    return y3(new e(ln), t3, r, true);
  }
  function ks(e) {
    var t3 = e.length - 1, r = t3 * b + 1;
    if (t3 = e[t3], t3) {
      for (;t3 % 10 == 0; t3 /= 10)
        r--;
      for (t3 = e[0];t3 >= 10; t3 /= 10)
        r++;
    }
    return r;
  }
  function We(e) {
    for (var t3 = "";e--; )
      t3 += "0";
    return t3;
  }
  function Ds(e, t3, r, n2) {
    var i3, o2 = new e(1), s = Math.ceil(n2 / b + 4);
    for (x3 = false;; ) {
      if (r % 2 && (o2 = o2.times(t3), Ts(o2.d, s) && (i3 = true)), r = ee(r / 2), r === 0) {
        r = o2.d.length - 1, i3 && o2.d[r] === 0 && ++o2.d[r];
        break;
      }
      t3 = t3.times(t3), Ts(t3.d, s);
    }
    return x3 = true, o2;
  }
  function vs(e) {
    return e.d[e.d.length - 1] & 1;
  }
  function _s(e, t3, r) {
    for (var n2, i3 = new e(t3[0]), o2 = 0;++o2 < t3.length; )
      if (n2 = new e(t3[o2]), n2.s)
        i3[r](n2) && (i3 = n2);
      else {
        i3 = n2;
        break;
      }
    return i3;
  }
  function Di(e, t3) {
    var r, n2, i3, o2, s, a, l, u = 0, c3 = 0, p3 = 0, d3 = e.constructor, f3 = d3.rounding, g = d3.precision;
    if (!e.d || !e.d[0] || e.e > 17)
      return new d3(e.d ? e.d[0] ? e.s < 0 ? 0 : 1 / 0 : 1 : e.s ? e.s < 0 ? 0 : e : NaN);
    for (t3 == null ? (x3 = false, l = g) : l = t3, a = new d3(0.03125);e.e > -2; )
      e = e.times(a), p3 += 5;
    for (n2 = Math.log(G(2, p3)) / Math.LN10 * 2 + 5 | 0, l += n2, r = o2 = s = new d3(1), d3.precision = l;; ) {
      if (o2 = y3(o2.times(e), l, 1), r = r.times(++c3), a = s.plus(N(o2, r, l, 1)), K(a.d).slice(0, l) === K(s.d).slice(0, l)) {
        for (i3 = p3;i3--; )
          s = y3(s.times(s), l, 1);
        if (t3 == null)
          if (u < 3 && ur(s.d, l - n2, f3, u))
            d3.precision = l += 10, r = o2 = a = new d3(1), c3 = 0, u++;
          else
            return y3(s, d3.precision = g, f3, x3 = true);
        else
          return d3.precision = g, s;
      }
      s = a;
    }
  }
  function He(e, t3) {
    var r, n2, i3, o2, s, a, l, u, c3, p3, d3, f3 = 1, g = 10, h3 = e, O = h3.d, T = h3.constructor, S = T.rounding, C = T.precision;
    if (h3.s < 0 || !O || !O[0] || !h3.e && O[0] == 1 && O.length == 1)
      return new T(O && !O[0] ? -1 / 0 : h3.s != 1 ? NaN : O ? 0 : h3);
    if (t3 == null ? (x3 = false, c3 = C) : c3 = t3, T.precision = c3 += g, r = K(O), n2 = r.charAt(0), Math.abs(o2 = h3.e) < 1500000000000000) {
      for (;n2 < 7 && n2 != 1 || n2 == 1 && r.charAt(1) > 3; )
        h3 = h3.times(e), r = K(h3.d), n2 = r.charAt(0), f3++;
      o2 = h3.e, n2 > 1 ? (h3 = new T("0." + r), o2++) : h3 = new T(n2 + "." + r.slice(1));
    } else
      return u = un(T, c3 + 2, C).times(o2 + ""), h3 = He(new T(n2 + "." + r.slice(1)), c3 - g).plus(u), T.precision = C, t3 == null ? y3(h3, C, S, x3 = true) : h3;
    for (p3 = h3, l = s = h3 = N(h3.minus(1), h3.plus(1), c3, 1), d3 = y3(h3.times(h3), c3, 1), i3 = 3;; ) {
      if (s = y3(s.times(d3), c3, 1), u = l.plus(N(s, new T(i3), c3, 1)), K(u.d).slice(0, c3) === K(l.d).slice(0, c3))
        if (l = l.times(2), o2 !== 0 && (l = l.plus(un(T, c3 + 2, C).times(o2 + ""))), l = N(l, new T(f3), c3, 1), t3 == null)
          if (ur(l.d, c3 - g, S, a))
            T.precision = c3 += g, u = s = h3 = N(p3.minus(1), p3.plus(1), c3, 1), d3 = y3(h3.times(h3), c3, 1), i3 = a = 1;
          else
            return y3(l, T.precision = C, S, x3 = true);
        else
          return T.precision = C, l;
      l = u, i3 += 2;
    }
  }
  function Fs(e) {
    return String(e.s * e.s / 0);
  }
  function _i(e, t3) {
    var r, n2, i3;
    for ((r = t3.indexOf(".")) > -1 && (t3 = t3.replace(".", "")), (n2 = t3.search(/e/i)) > 0 ? (r < 0 && (r = n2), r += +t3.slice(n2 + 1), t3 = t3.substring(0, n2)) : r < 0 && (r = t3.length), n2 = 0;t3.charCodeAt(n2) === 48; n2++)
      ;
    for (i3 = t3.length;t3.charCodeAt(i3 - 1) === 48; --i3)
      ;
    if (t3 = t3.slice(n2, i3), t3) {
      if (i3 -= n2, e.e = r = r - n2 - 1, e.d = [], n2 = (r + 1) % b, r < 0 && (n2 += b), n2 < i3) {
        for (n2 && e.d.push(+t3.slice(0, n2)), i3 -= b;n2 < i3; )
          e.d.push(+t3.slice(n2, n2 += b));
        t3 = t3.slice(n2), n2 = b - t3.length;
      } else
        n2 -= i3;
      for (;n2--; )
        t3 += "0";
      e.d.push(+t3), x3 && (e.e > e.constructor.maxE ? (e.d = null, e.e = NaN) : e.e < e.constructor.minE && (e.e = 0, e.d = [0]));
    } else
      e.e = 0, e.d = [0];
    return e;
  }
  function Rc(e, t3) {
    var r, n2, i3, o2, s, a, l, u, c3;
    if (t3.indexOf("_") > -1) {
      if (t3 = t3.replace(/(\d)_(?=\d)/g, "$1"), Os.test(t3))
        return _i(e, t3);
    } else if (t3 === "Infinity" || t3 === "NaN")
      return +t3 || (e.s = NaN), e.e = NaN, e.d = null, e;
    if (wc.test(t3))
      r = 16, t3 = t3.toLowerCase();
    else if (Ec.test(t3))
      r = 2;
    else if (xc.test(t3))
      r = 8;
    else
      throw Error(Ke + t3);
    for (o2 = t3.search(/p/i), o2 > 0 ? (l = +t3.slice(o2 + 1), t3 = t3.substring(2, o2)) : t3 = t3.slice(2), o2 = t3.indexOf("."), s = o2 >= 0, n2 = e.constructor, s && (t3 = t3.replace(".", ""), a = t3.length, o2 = a - o2, i3 = Ds(n2, new n2(r), o2, o2 * 2)), u = sn(t3, r, ge), c3 = u.length - 1, o2 = c3;u[o2] === 0; --o2)
      u.pop();
    return o2 < 0 ? new n2(e.s * 0) : (e.e = pn(u, c3), e.d = u, x3 = false, s && (e = N(e, i3, a * 4)), l && (e = e.times(Math.abs(l) < 54 ? G(2, l) : ot.pow(2, l))), x3 = true, e);
  }
  function Cc(e, t3) {
    var r, n2 = t3.d.length;
    if (n2 < 3)
      return t3.isZero() ? t3 : Tt(e, 2, t3, t3);
    r = 1.4 * Math.sqrt(n2), r = r > 16 ? 16 : r | 0, t3 = t3.times(1 / dn(5, r)), t3 = Tt(e, 2, t3, t3);
    for (var i3, o2 = new e(5), s = new e(16), a = new e(20);r--; )
      i3 = t3.times(t3), t3 = t3.times(o2.plus(i3.times(s.times(i3).minus(a))));
    return t3;
  }
  function Tt(e, t3, r, n2, i3) {
    var o2, s, a, l, u = 1, c3 = e.precision, p3 = Math.ceil(c3 / b);
    for (x3 = false, l = r.times(r), a = new e(n2);; ) {
      if (s = N(a.times(l), new e(t3++ * t3++), c3, 1), a = i3 ? n2.plus(s) : n2.minus(s), n2 = N(s.times(l), new e(t3++ * t3++), c3, 1), s = a.plus(n2), s.d[p3] !== undefined) {
        for (o2 = p3;s.d[o2] === a.d[o2] && o2--; )
          ;
        if (o2 == -1)
          break;
      }
      o2 = a, a = n2, n2 = s, s = o2, u++;
    }
    return x3 = true, s.d.length = p3 + 1, s;
  }
  function dn(e, t3) {
    for (var r = e;--t3; )
      r *= e;
    return r;
  }
  function Ls(e, t3) {
    var r, n2 = t3.s < 0, i3 = fe(e, e.precision, 1), o2 = i3.times(0.5);
    if (t3 = t3.abs(), t3.lte(o2))
      return Me = n2 ? 4 : 1, t3;
    if (r = t3.divToInt(i3), r.isZero())
      Me = n2 ? 3 : 2;
    else {
      if (t3 = t3.minus(r.times(i3)), t3.lte(o2))
        return Me = vs(r) ? n2 ? 2 : 3 : n2 ? 4 : 1, t3;
      Me = vs(r) ? n2 ? 1 : 4 : n2 ? 3 : 2;
    }
    return t3.minus(i3).abs();
  }
  function Fi(e, t3, r, n2) {
    var i3, o2, s, a, l, u, c3, p3, d3, f3 = e.constructor, g = r !== undefined;
    if (g ? (oe(r, 1, ze), n2 === undefined ? n2 = f3.rounding : oe(n2, 0, 8)) : (r = f3.precision, n2 = f3.rounding), !e.isFinite())
      c3 = Fs(e);
    else {
      for (c3 = Te(e), s = c3.indexOf("."), g ? (i3 = 2, t3 == 16 ? r = r * 4 - 3 : t3 == 8 && (r = r * 3 - 2)) : i3 = t3, s >= 0 && (c3 = c3.replace(".", ""), d3 = new f3(1), d3.e = c3.length - s, d3.d = sn(Te(d3), 10, i3), d3.e = d3.d.length), p3 = sn(c3, 10, i3), o2 = l = p3.length;p3[--l] == 0; )
        p3.pop();
      if (!p3[0])
        c3 = g ? "0p+0" : "0";
      else {
        if (s < 0 ? o2-- : (e = new f3(e), e.d = p3, e.e = o2, e = N(e, d3, r, n2, 0, i3), p3 = e.d, o2 = e.e, u = Cs), s = p3[r], a = i3 / 2, u = u || p3[r + 1] !== undefined, u = n2 < 4 ? (s !== undefined || u) && (n2 === 0 || n2 === (e.s < 0 ? 3 : 2)) : s > a || s === a && (n2 === 4 || u || n2 === 6 && p3[r - 1] & 1 || n2 === (e.s < 0 ? 8 : 7)), p3.length = r, u)
          for (;++p3[--r] > i3 - 1; )
            p3[r] = 0, r || (++o2, p3.unshift(1));
        for (l = p3.length;!p3[l - 1]; --l)
          ;
        for (s = 0, c3 = "";s < l; s++)
          c3 += Ii.charAt(p3[s]);
        if (g) {
          if (l > 1)
            if (t3 == 16 || t3 == 8) {
              for (s = t3 == 16 ? 4 : 3, --l;l % s; l++)
                c3 += "0";
              for (p3 = sn(c3, i3, t3), l = p3.length;!p3[l - 1]; --l)
                ;
              for (s = 1, c3 = "1.";s < l; s++)
                c3 += Ii.charAt(p3[s]);
            } else
              c3 = c3.charAt(0) + "." + c3.slice(1);
          c3 = c3 + (o2 < 0 ? "p" : "p+") + o2;
        } else if (o2 < 0) {
          for (;++o2; )
            c3 = "0" + c3;
          c3 = "0." + c3;
        } else if (++o2 > l)
          for (o2 -= l;o2--; )
            c3 += "0";
        else
          o2 < l && (c3 = c3.slice(0, o2) + "." + c3.slice(o2));
      }
      c3 = (t3 == 16 ? "0x" : t3 == 2 ? "0b" : t3 == 8 ? "0o" : "") + c3;
    }
    return e.s < 0 ? "-" + c3 : c3;
  }
  function Ts(e, t3) {
    if (e.length > t3)
      return e.length = t3, true;
  }
  function Sc(e) {
    return new this(e).abs();
  }
  function Ac(e) {
    return new this(e).acos();
  }
  function Ic(e) {
    return new this(e).acosh();
  }
  function Oc(e, t3) {
    return new this(e).plus(t3);
  }
  function kc(e) {
    return new this(e).asin();
  }
  function Dc(e) {
    return new this(e).asinh();
  }
  function _c(e) {
    return new this(e).atan();
  }
  function Fc(e) {
    return new this(e).atanh();
  }
  function Lc(e, t3) {
    e = new this(e), t3 = new this(t3);
    var r, n2 = this.precision, i3 = this.rounding, o2 = n2 + 4;
    return !e.s || !t3.s ? r = new this(NaN) : !e.d && !t3.d ? (r = fe(this, o2, 1).times(t3.s > 0 ? 0.25 : 0.75), r.s = e.s) : !t3.d || e.isZero() ? (r = t3.s < 0 ? fe(this, n2, i3) : new this(0), r.s = e.s) : !e.d || t3.isZero() ? (r = fe(this, o2, 1).times(0.5), r.s = e.s) : t3.s < 0 ? (this.precision = o2, this.rounding = 1, r = this.atan(N(e, t3, o2, 1)), t3 = fe(this, o2, 1), this.precision = n2, this.rounding = i3, r = e.s < 0 ? r.minus(t3) : r.plus(t3)) : r = this.atan(N(e, t3, o2, 1)), r;
  }
  function Nc(e) {
    return new this(e).cbrt();
  }
  function Mc(e) {
    return y3(e = new this(e), e.e + 1, 2);
  }
  function $c(e, t3, r) {
    return new this(e).clamp(t3, r);
  }
  function qc(e) {
    if (!e || typeof e != "object")
      throw Error(cn + "Object expected");
    var t3, r, n2, i3 = e.defaults === true, o2 = ["precision", 1, ze, "rounding", 0, 8, "toExpNeg", -vt, 0, "toExpPos", 0, vt, "maxE", 0, vt, "minE", -vt, 0, "modulo", 0, 9];
    for (t3 = 0;t3 < o2.length; t3 += 3)
      if (r = o2[t3], i3 && (this[r] = Oi[r]), (n2 = e[r]) !== undefined)
        if (ee(n2) === n2 && n2 >= o2[t3 + 1] && n2 <= o2[t3 + 2])
          this[r] = n2;
        else
          throw Error(Ke + r + ": " + n2);
    if (r = "crypto", i3 && (this[r] = Oi[r]), (n2 = e[r]) !== undefined)
      if (n2 === true || n2 === false || n2 === 0 || n2 === 1)
        if (n2)
          if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes))
            this[r] = true;
          else
            throw Error(As);
        else
          this[r] = false;
      else
        throw Error(Ke + r + ": " + n2);
    return this;
  }
  function jc(e) {
    return new this(e).cos();
  }
  function Vc(e) {
    return new this(e).cosh();
  }
  function Ns(e) {
    var t3, r, n2;
    function i3(o2) {
      var s, a, l, u = this;
      if (!(u instanceof i3))
        return new i3(o2);
      if (u.constructor = i3, Rs(o2)) {
        u.s = o2.s, x3 ? !o2.d || o2.e > i3.maxE ? (u.e = NaN, u.d = null) : o2.e < i3.minE ? (u.e = 0, u.d = [0]) : (u.e = o2.e, u.d = o2.d.slice()) : (u.e = o2.e, u.d = o2.d ? o2.d.slice() : o2.d);
        return;
      }
      if (l = typeof o2, l === "number") {
        if (o2 === 0) {
          u.s = 1 / o2 < 0 ? -1 : 1, u.e = 0, u.d = [0];
          return;
        }
        if (o2 < 0 ? (o2 = -o2, u.s = -1) : u.s = 1, o2 === ~~o2 && o2 < 1e7) {
          for (s = 0, a = o2;a >= 10; a /= 10)
            s++;
          x3 ? s > i3.maxE ? (u.e = NaN, u.d = null) : s < i3.minE ? (u.e = 0, u.d = [0]) : (u.e = s, u.d = [o2]) : (u.e = s, u.d = [o2]);
          return;
        } else if (o2 * 0 !== 0) {
          o2 || (u.s = NaN), u.e = NaN, u.d = null;
          return;
        }
        return _i(u, o2.toString());
      } else if (l !== "string")
        throw Error(Ke + o2);
      return (a = o2.charCodeAt(0)) === 45 ? (o2 = o2.slice(1), u.s = -1) : (a === 43 && (o2 = o2.slice(1)), u.s = 1), Os.test(o2) ? _i(u, o2) : Rc(u, o2);
    }
    if (i3.prototype = m3, i3.ROUND_UP = 0, i3.ROUND_DOWN = 1, i3.ROUND_CEIL = 2, i3.ROUND_FLOOR = 3, i3.ROUND_HALF_UP = 4, i3.ROUND_HALF_DOWN = 5, i3.ROUND_HALF_EVEN = 6, i3.ROUND_HALF_CEIL = 7, i3.ROUND_HALF_FLOOR = 8, i3.EUCLID = 9, i3.config = i3.set = qc, i3.clone = Ns, i3.isDecimal = Rs, i3.abs = Sc, i3.acos = Ac, i3.acosh = Ic, i3.add = Oc, i3.asin = kc, i3.asinh = Dc, i3.atan = _c, i3.atanh = Fc, i3.atan2 = Lc, i3.cbrt = Nc, i3.ceil = Mc, i3.clamp = $c, i3.cos = jc, i3.cosh = Vc, i3.div = Bc, i3.exp = Uc, i3.floor = Gc, i3.hypot = Qc, i3.ln = Jc, i3.log = Wc, i3.log10 = Kc, i3.log2 = Hc, i3.max = zc, i3.min = Yc, i3.mod = Zc, i3.mul = Xc, i3.pow = ep, i3.random = tp, i3.round = rp, i3.sign = np, i3.sin = ip, i3.sinh = op, i3.sqrt = sp, i3.sub = ap, i3.sum = lp, i3.tan = up, i3.tanh = cp, i3.trunc = pp, e === undefined && (e = {}), e && e.defaults !== true)
      for (n2 = ["precision", "rounding", "toExpNeg", "toExpPos", "maxE", "minE", "modulo", "crypto"], t3 = 0;t3 < n2.length; )
        e.hasOwnProperty(r = n2[t3++]) || (e[r] = this[r]);
    return i3.config(e), i3;
  }
  function Bc(e, t3) {
    return new this(e).div(t3);
  }
  function Uc(e) {
    return new this(e).exp();
  }
  function Gc(e) {
    return y3(e = new this(e), e.e + 1, 3);
  }
  function Qc() {
    var e, t3, r = new this(0);
    for (x3 = false, e = 0;e < arguments.length; )
      if (t3 = new this(arguments[e++]), t3.d)
        r.d && (r = r.plus(t3.times(t3)));
      else {
        if (t3.s)
          return x3 = true, new this(1 / 0);
        r = t3;
      }
    return x3 = true, r.sqrt();
  }
  function Rs(e) {
    return e instanceof ot || e && e.toStringTag === Is || false;
  }
  function Jc(e) {
    return new this(e).ln();
  }
  function Wc(e, t3) {
    return new this(e).log(t3);
  }
  function Hc(e) {
    return new this(e).log(2);
  }
  function Kc(e) {
    return new this(e).log(10);
  }
  function zc() {
    return _s(this, arguments, "lt");
  }
  function Yc() {
    return _s(this, arguments, "gt");
  }
  function Zc(e, t3) {
    return new this(e).mod(t3);
  }
  function Xc(e, t3) {
    return new this(e).mul(t3);
  }
  function ep(e, t3) {
    return new this(e).pow(t3);
  }
  function tp(e) {
    var t3, r, n2, i3, o2 = 0, s = new this(1), a = [];
    if (e === undefined ? e = this.precision : oe(e, 1, ze), n2 = Math.ceil(e / b), this.crypto)
      if (crypto.getRandomValues)
        for (t3 = crypto.getRandomValues(new Uint32Array(n2));o2 < n2; )
          i3 = t3[o2], i3 >= 4290000000 ? t3[o2] = crypto.getRandomValues(new Uint32Array(1))[0] : a[o2++] = i3 % 1e7;
      else if (crypto.randomBytes) {
        for (t3 = crypto.randomBytes(n2 *= 4);o2 < n2; )
          i3 = t3[o2] + (t3[o2 + 1] << 8) + (t3[o2 + 2] << 16) + ((t3[o2 + 3] & 127) << 24), i3 >= 2140000000 ? crypto.randomBytes(4).copy(t3, o2) : (a.push(i3 % 1e7), o2 += 4);
        o2 = n2 / 4;
      } else
        throw Error(As);
    else
      for (;o2 < n2; )
        a[o2++] = Math.random() * 1e7 | 0;
    for (n2 = a[--o2], e %= b, n2 && e && (i3 = G(10, b - e), a[o2] = (n2 / i3 | 0) * i3);a[o2] === 0; o2--)
      a.pop();
    if (o2 < 0)
      r = 0, a = [0];
    else {
      for (r = -1;a[0] === 0; r -= b)
        a.shift();
      for (n2 = 1, i3 = a[0];i3 >= 10; i3 /= 10)
        n2++;
      n2 < b && (r -= b - n2);
    }
    return s.e = r, s.d = a, s;
  }
  function rp(e) {
    return y3(e = new this(e), e.e + 1, this.rounding);
  }
  function np(e) {
    return e = new this(e), e.d ? e.d[0] ? e.s : 0 * e.s : e.s || NaN;
  }
  function ip(e) {
    return new this(e).sin();
  }
  function op(e) {
    return new this(e).sinh();
  }
  function sp(e) {
    return new this(e).sqrt();
  }
  function ap(e, t3) {
    return new this(e).sub(t3);
  }
  function lp() {
    var e = 0, t3 = arguments, r = new this(t3[e]);
    for (x3 = false;r.s && ++e < t3.length; )
      r = r.plus(t3[e]);
    return x3 = true, y3(r, this.precision, this.rounding);
  }
  function up(e) {
    return new this(e).tan();
  }
  function cp(e) {
    return new this(e).tanh();
  }
  function pp(e) {
    return y3(e = new this(e), e.e + 1, 1);
  }
  function Rt(e) {
    return ot.isDecimal(e) ? true : e !== null && typeof e == "object" && typeof e.s == "number" && typeof e.e == "number" && typeof e.toFixed == "function" && Array.isArray(e.d);
  }
  function Ct(e) {
    return e instanceof cr;
  }
  function Ot(e) {
    return new Li(qs(e));
  }
  function qs(e) {
    let t3 = new It;
    for (let [r, n2] of Object.entries(e)) {
      let i3 = new hn(r, js(n2));
      t3.addField(i3);
    }
    return t3;
  }
  function js(e) {
    if (typeof e == "string")
      return new W(JSON.stringify(e));
    if (typeof e == "number" || typeof e == "boolean")
      return new W(String(e));
    if (typeof e == "bigint")
      return new W(`${e}n`);
    if (e === null)
      return new W("null");
    if (e === undefined)
      return new W("undefined");
    if (Rt(e))
      return new W(`new Prisma.Decimal("${e.toFixed()}")`);
    if (e instanceof Uint8Array)
      return Buffer.isBuffer(e) ? new W(`Buffer.alloc(${e.byteLength})`) : new W(`new Uint8Array(${e.byteLength})`);
    if (e instanceof Date) {
      let t3 = on(e) ? e.toISOString() : "Invalid Date";
      return new W(`new Date("${t3}")`);
    }
    return e instanceof Ne ? new W(`Prisma.${e._getName()}`) : Ct(e) ? new W(`prisma.${Ps(e.modelName)}.\$fields.${e.name}`) : Array.isArray(e) ? mp(e) : typeof e == "object" ? qs(e) : new W(Object.prototype.toString.call(e));
  }
  function mp(e) {
    let t3 = new At;
    for (let r of e)
      t3.addItem(js(r));
    return t3;
  }
  function yn(e, t3) {
    let r = t3 === "pretty" ? Ms : gn, n2 = e.renderAllMessages(r), i3 = new xt(0, { colors: r }).write(e).toString();
    return { message: n2, args: i3 };
  }
  function Vs(e) {
    if (e === undefined)
      return "";
    let t3 = Ot(e);
    return new xt(0, { colors: gn }).write(t3).toString();
  }
  function st({ error: e, user_facing_error: t3 }, r, n2) {
    return t3.error_code ? new V4(gp(t3, n2), { code: t3.error_code, clientVersion: r, meta: t3.meta, batchRequestIdx: t3.batch_request_idx }) : new B(e, { clientVersion: r, batchRequestIdx: t3.batch_request_idx });
  }
  function gp(e, t3) {
    let r = e.message;
    return (t3 === "postgresql" || t3 === "postgres" || t3 === "mysql") && e.error_code === fp && (r += `
Prisma Accelerate has built-in connection pooling to prevent such errors: https://pris.ly/client/error-accelerate`), r;
  }
  function Bs(e) {
    var t3 = e.split(`
`);
    return t3.reduce(function(r, n2) {
      var i3 = bp(n2) || wp(n2) || vp(n2) || Sp(n2) || Rp(n2);
      return i3 && r.push(i3), r;
    }, []);
  }
  function bp(e) {
    var t3 = hp.exec(e);
    if (!t3)
      return null;
    var r = t3[2] && t3[2].indexOf("native") === 0, n2 = t3[2] && t3[2].indexOf("eval") === 0, i3 = yp.exec(t3[2]);
    return n2 && i3 != null && (t3[2] = i3[1], t3[3] = i3[2], t3[4] = i3[3]), { file: r ? null : t3[2], methodName: t3[1] || pr, arguments: r ? [t3[2]] : [], lineNumber: t3[3] ? +t3[3] : null, column: t3[4] ? +t3[4] : null };
  }
  function wp(e) {
    var t3 = Ep.exec(e);
    return t3 ? { file: t3[2], methodName: t3[1] || pr, arguments: [], lineNumber: +t3[3], column: t3[4] ? +t3[4] : null } : null;
  }
  function vp(e) {
    var t3 = xp.exec(e);
    if (!t3)
      return null;
    var r = t3[3] && t3[3].indexOf(" > eval") > -1, n2 = Pp.exec(t3[3]);
    return r && n2 != null && (t3[3] = n2[1], t3[4] = n2[2], t3[5] = null), { file: t3[3], methodName: t3[1] || pr, arguments: t3[2] ? t3[2].split(",") : [], lineNumber: t3[4] ? +t3[4] : null, column: t3[5] ? +t3[5] : null };
  }
  function Rp(e) {
    var t3 = Tp.exec(e);
    return t3 ? { file: t3[3], methodName: t3[1] || pr, arguments: [], lineNumber: +t3[4], column: t3[5] ? +t3[5] : null } : null;
  }
  function Sp(e) {
    var t3 = Cp.exec(e);
    return t3 ? { file: t3[2], methodName: t3[1] || pr, arguments: [], lineNumber: +t3[3], column: t3[4] ? +t3[4] : null } : null;
  }
  function Ze(e) {
    return e === "minimal" ? typeof $EnabledCallSite == "function" && e !== "minimal" ? new $EnabledCallSite : new Ni : new Mi;
  }
  function kt(e = {}) {
    let t3 = Ip(e);
    return Object.entries(t3).reduce((n2, [i3, o2]) => (Us[i3] !== undefined ? n2.select[i3] = { select: o2 } : n2[i3] = o2, n2), { select: {} });
  }
  function Ip(e = {}) {
    return typeof e._count == "boolean" ? { ...e, _count: { _all: e._count } } : e;
  }
  function bn(e = {}) {
    return (t3) => (typeof e._count == "boolean" && (t3._count = t3._count._all), t3);
  }
  function Gs(e, t3) {
    let r = bn(e);
    return t3({ action: "aggregate", unpacker: r, argsMapper: kt })(e);
  }
  function Op(e = {}) {
    let { select: t3, ...r } = e;
    return typeof t3 == "object" ? kt({ ...r, _count: t3 }) : kt({ ...r, _count: { _all: true } });
  }
  function kp(e = {}) {
    return typeof e.select == "object" ? (t3) => bn(e)(t3)._count : (t3) => bn(e)(t3)._count._all;
  }
  function Qs(e, t3) {
    return t3({ action: "count", unpacker: kp(e), argsMapper: Op })(e);
  }
  function Dp(e = {}) {
    let t3 = kt(e);
    if (Array.isArray(t3.by))
      for (let r of t3.by)
        typeof r == "string" && (t3.select[r] = true);
    else
      typeof t3.by == "string" && (t3.select[t3.by] = true);
    return t3;
  }
  function _p(e = {}) {
    return (t3) => (typeof e?._count == "boolean" && t3.forEach((r) => {
      r._count = r._count._all;
    }), t3);
  }
  function Js(e, t3) {
    return t3({ action: "groupBy", unpacker: _p(e), argsMapper: Dp })(e);
  }
  function Ws(e, t3, r) {
    if (t3 === "aggregate")
      return (n2) => Gs(n2, r);
    if (t3 === "count")
      return (n2) => Qs(n2, r);
    if (t3 === "groupBy")
      return (n2) => Js(n2, r);
  }
  function Hs(e, t3) {
    let r = t3.fields.filter((i3) => !i3.relationName), n2 = Ei(r, (i3) => i3.name);
    return new Proxy({}, { get(i3, o2) {
      if (o2 in i3 || typeof o2 == "symbol")
        return i3[o2];
      let s = n2[o2];
      if (s)
        return new cr(e, o2, s.type, s.isList, s.kind === "enum");
    }, ...nn(Object.keys(n2)) });
  }
  function Fp(e, t3) {
    return e === undefined || t3 === undefined ? [] : [...t3, "select", e];
  }
  function Lp(e, t3, r) {
    return t3 === undefined ? e ?? {} : zs(t3, r, e || true);
  }
  function qi(e, t3, r, n2, i3, o2) {
    let a = e._runtimeDataModel.models[t3].fields.reduce((l, u) => ({ ...l, [u.name]: u }), {});
    return (l) => {
      let u = Ze(e._errorFormat), c3 = Fp(n2, i3), p3 = Lp(l, o2, c3), d3 = r({ dataPath: c3, callsite: u })(p3), f3 = Np(e, t3);
      return new Proxy(d3, { get(g, h3) {
        if (!f3.includes(h3))
          return g[h3];
        let T = [a[h3].type, r, h3], S = [c3, p3];
        return qi(e, ...T, ...S);
      }, ...nn([...f3, ...Object.getOwnPropertyNames(d3)]) });
    };
  }
  function Np(e, t3) {
    return e._runtimeDataModel.models[t3].fields.filter((r) => r.kind === "object").map((r) => r.name);
  }
  function he(e, t3, r, n2, i3) {
    this.type = e, this.content = t3, this.alias = r, this.length = (n2 || "").length | 0, this.greedy = !!i3;
  }
  function qp(e) {
    return Ys[e] || Mp;
  }
  function Zs(e) {
    return jp(e, P.languages.javascript);
  }
  function jp(e, t3) {
    return P.tokenize(e, t3).map((n2) => he.stringify(n2)).join("");
  }
  function ea(e) {
    return (0, Xs.default)(e);
  }
  function Up({ message: e, originalMethod: t3, isPanic: r, callArguments: n2 }) {
    return { functionName: `prisma.${t3}()`, message: e, isPanic: r ?? false, callArguments: n2 };
  }
  function Gp({ callsite: e, message: t3, originalMethod: r, isPanic: n2, callArguments: i3 }, o2) {
    let s = Up({ message: t3, originalMethod: r, isPanic: n2, callArguments: i3 });
    if (!e || typeof window < "u" || false)
      return s;
    let a = e.getLocation();
    if (!a || !a.lineNumber || !a.columnNumber)
      return s;
    let l = Math.max(1, a.lineNumber - 3), u = wn.read(a.fileName)?.slice(l, a.lineNumber), c3 = u?.lineAt(a.lineNumber);
    if (u && c3) {
      let p3 = Jp(c3), d3 = Qp(c3);
      if (!d3)
        return s;
      s.functionName = `${d3.code})`, s.location = a, n2 || (u = u.mapLineAt(a.lineNumber, (g) => g.slice(0, d3.openingBraceIndex))), u = o2.highlightSource(u);
      let f3 = String(u.lastLineNumber).length;
      if (s.contextLines = u.mapLines((g, h3) => o2.gray(String(h3).padStart(f3)) + " " + g).mapLines((g) => o2.dim(g)).prependSymbolAt(a.lineNumber, o2.bold(o2.red("\u2192"))), i3) {
        let g = p3 + f3 + 1;
        g += 2, s.callArguments = (0, ra.default)(i3, g).slice(g);
      }
    }
    return s;
  }
  function Qp(e) {
    let t3 = Object.keys(Je.ModelAction).join("|"), n2 = new RegExp(String.raw`\.(${t3})\(`).exec(e);
    if (n2) {
      let i3 = n2.index + n2[0].length, o2 = e.lastIndexOf(" ", n2.index) + 1;
      return { code: e.slice(o2, i3), openingBraceIndex: i3 };
    }
    return null;
  }
  function Jp(e) {
    let t3 = 0;
    for (let r = 0;r < e.length; r++) {
      if (e.charAt(r) !== " ")
        return t3;
      t3++;
    }
    return t3;
  }
  function Wp({ functionName: e, location: t3, message: r, isPanic: n2, contextLines: i3, callArguments: o2 }, s) {
    let a = [""], l = t3 ? " in" : ":";
    if (n2 ? (a.push(s.red(`Oops, an unknown error occurred! This is ${s.bold("on us")}, you did nothing wrong.`)), a.push(s.red(`It occurred in the ${s.bold(`\`${e}\``)} invocation${l}`))) : a.push(s.red(`Invalid ${s.bold(`\`${e}\``)} invocation${l}`)), t3 && a.push(s.underline(Hp(t3))), i3) {
      a.push("");
      let u = [i3.toString()];
      o2 && (u.push(o2), u.push(s.dim(")"))), a.push(u.join("")), o2 && a.push("");
    } else
      a.push(""), o2 && a.push(o2), a.push("");
    return a.push(r), a.join(`
`);
  }
  function Hp(e) {
    let t3 = [e.fileName];
    return e.lineNumber && t3.push(String(e.lineNumber)), e.columnNumber && t3.push(String(e.columnNumber)), t3.join(":");
  }
  function Dt(e) {
    let t3 = e.showColors ? Vp : Bp, r;
    return r = Gp(e, t3), Wp(r, t3);
  }
  function na(e, t3, r, n2) {
    return e === Je.ModelAction.findFirstOrThrow || e === Je.ModelAction.findUniqueOrThrow ? Kp(t3, r, n2) : n2;
  }
  function Kp(e, t3, r) {
    return async (n2) => {
      if ("rejectOnNotFound" in n2.args) {
        let o2 = Dt({ originalMethod: n2.clientMethod, callsite: n2.callsite, message: "'rejectOnNotFound' option is not supported" });
        throw new J(o2, { clientVersion: t3 });
      }
      return await r(n2).catch((o2) => {
        throw o2 instanceof V4 && o2.code === "P2025" ? new Le(`No ${e} found`, t3) : o2;
      });
    };
  }
  function Se(e) {
    return e.replace(/^./, (t3) => t3.toLowerCase());
  }
  function ji(e, t3) {
    let r = e._extensions.getAllModelExtensions(t3) ?? {}, n2 = [Zp(e, t3), ed(e, t3), lr(r), re("name", () => t3), re("$name", () => t3), re("$parent", () => e._appliedParent)];
    return ve({}, n2);
  }
  function Zp(e, t3) {
    let r = Se(t3), n2 = Object.keys(Je.ModelAction).concat("count");
    return { getKeys() {
      return n2;
    }, getPropertyValue(i3) {
      let o2 = i3, s = (l) => e._request(l);
      s = na(o2, t3, e._clientVersion, s);
      let a = (l) => (u) => {
        let c3 = Ze(e._errorFormat);
        return e._createPrismaPromise((p3) => {
          let d3 = { args: u, dataPath: [], action: o2, model: t3, clientMethod: `${r}.${i3}`, jsModelName: r, transaction: p3, callsite: c3 };
          return s({ ...d3, ...l });
        });
      };
      return zp.includes(o2) ? qi(e, t3, a) : Xp(i3) ? Ws(e, i3, a) : a({});
    } };
  }
  function Xp(e) {
    return Yp.includes(e);
  }
  function ed(e, t3) {
    return it(re("fields", () => {
      let r = e._runtimeDataModel.models[t3];
      return Hs(t3, r);
    }));
  }
  function ia(e) {
    return e.replace(/^./, (t3) => t3.toUpperCase());
  }
  function dr(e) {
    let t3 = [td(e), re(Vi, () => e), re("$parent", () => e._appliedParent)], r = e._extensions.getAllClientExtensions();
    return r && t3.push(lr(r)), ve(e, t3);
  }
  function td(e) {
    let t3 = Object.keys(e._runtimeDataModel.models), r = t3.map(Se), n2 = [...new Set(t3.concat(r))];
    return it({ getKeys() {
      return n2;
    }, getPropertyValue(i3) {
      let o2 = ia(i3);
      if (e._runtimeDataModel.models[o2] !== undefined)
        return ji(e, o2);
      if (e._runtimeDataModel.models[i3] !== undefined)
        return ji(e, i3);
    }, getPropertyDescriptor(i3) {
      if (!r.includes(i3))
        return { enumerable: false };
    } });
  }
  function oa(e) {
    return e[Vi] ? e[Vi] : e;
  }
  function sa(e) {
    if (typeof e == "function")
      return e(this);
    if (e.client?.__AccelerateEngine) {
      let r = e.client.__AccelerateEngine;
      this._originalClient._engine = new r(this._originalClient._accelerateEngineConfig);
    }
    let t3 = Object.create(this._originalClient, { _extensions: { value: this._extensions.append(e) }, _appliedParent: { value: this, configurable: true }, $use: { value: undefined }, $on: { value: undefined } });
    return dr(t3);
  }
  function aa({ result: e, modelName: t3, select: r, omit: n2, extensions: i3 }) {
    let o2 = i3.getAllComputedFields(t3);
    if (!o2)
      return e;
    let s = [], a = [];
    for (let l of Object.values(o2)) {
      if (n2) {
        if (n2[l.name])
          continue;
        let u = l.needs.filter((c3) => n2[c3]);
        u.length > 0 && a.push(Et(u));
      } else if (r) {
        if (!r[l.name])
          continue;
        let u = l.needs.filter((c3) => !r[c3]);
        u.length > 0 && a.push(Et(u));
      }
      rd(e, l.needs) && s.push(nd(l, ve(e, s)));
    }
    return s.length > 0 || a.length > 0 ? ve(e, [...s, ...a]) : e;
  }
  function rd(e, t3) {
    return t3.every((r) => bi(e, r));
  }
  function nd(e, t3) {
    return it(re(e.name, () => e.compute(t3)));
  }
  function xn({ visitor: e, result: t3, args: r, runtimeDataModel: n2, modelName: i3 }) {
    if (Array.isArray(t3)) {
      for (let s = 0;s < t3.length; s++)
        t3[s] = xn({ result: t3[s], args: r, modelName: i3, runtimeDataModel: n2, visitor: e });
      return t3;
    }
    let o2 = e(t3, i3, r) ?? t3;
    return r.include && la({ includeOrSelect: r.include, result: o2, parentModelName: i3, runtimeDataModel: n2, visitor: e }), r.select && la({ includeOrSelect: r.select, result: o2, parentModelName: i3, runtimeDataModel: n2, visitor: e }), o2;
  }
  function la({ includeOrSelect: e, result: t3, parentModelName: r, runtimeDataModel: n2, visitor: i3 }) {
    for (let [o2, s] of Object.entries(e)) {
      if (!s || t3[o2] == null || we(s))
        continue;
      let l = n2.models[r].fields.find((c3) => c3.name === o2);
      if (!l || l.kind !== "object" || !l.relationName)
        continue;
      let u = typeof s == "object" ? s : {};
      t3[o2] = xn({ visitor: i3, result: t3[o2], args: u, modelName: l.type, runtimeDataModel: n2 });
    }
  }
  function ua({ result: e, modelName: t3, args: r, extensions: n2, runtimeDataModel: i3, globalOmit: o2 }) {
    return n2.isEmpty() || e == null || typeof e != "object" || !i3.models[t3] ? e : xn({ result: e, args: r ?? {}, modelName: t3, runtimeDataModel: i3, visitor: (a, l, u) => {
      let c3 = Se(l);
      return aa({ result: a, modelName: c3, select: u.select, omit: u.select ? undefined : { ...o2?.[c3], ...u.omit }, extensions: n2 });
    } });
  }
  function ca(e) {
    if (e instanceof ie)
      return id(e);
    if (Array.isArray(e)) {
      let r = [e[0]];
      for (let n2 = 1;n2 < e.length; n2++)
        r[n2] = mr(e[n2]);
      return r;
    }
    let t3 = {};
    for (let r in e)
      t3[r] = mr(e[r]);
    return t3;
  }
  function id(e) {
    return new ie(e.strings, e.values);
  }
  function mr(e) {
    if (typeof e != "object" || e == null || e instanceof Ne || Ct(e))
      return e;
    if (Rt(e))
      return new Re(e.toFixed());
    if (Pt(e))
      return new Date(+e);
    if (ArrayBuffer.isView(e))
      return e.slice(0);
    if (Array.isArray(e)) {
      let t3 = e.length, r;
      for (r = Array(t3);t3--; )
        r[t3] = mr(e[t3]);
      return r;
    }
    if (typeof e == "object") {
      let t3 = {};
      for (let r in e)
        r === "__proto__" ? Object.defineProperty(t3, r, { value: mr(e[r]), configurable: true, enumerable: true, writable: true }) : t3[r] = mr(e[r]);
      return t3;
    }
    Fe(e, "Unknown value");
  }
  function da(e, t3, r, n2 = 0) {
    return e._createPrismaPromise((i3) => {
      let o2 = t3.customDataProxyFetch;
      return "transaction" in t3 && i3 !== undefined && (t3.transaction?.kind === "batch" && t3.transaction.lock.then(), t3.transaction = i3), n2 === r.length ? e._executeRequest(t3) : r[n2]({ model: t3.model, operation: t3.model ? t3.action : t3.clientMethod, args: ca(t3.args ?? {}), __internalParams: t3, query: (s, a = t3) => {
        let l = a.customDataProxyFetch;
        return a.customDataProxyFetch = ha(o2, l), a.args = s, da(e, a, r, n2 + 1);
      } });
    });
  }
  function ma(e, t3) {
    let { jsModelName: r, action: n2, clientMethod: i3 } = t3, o2 = r ? n2 : i3;
    if (e._extensions.isEmpty())
      return e._executeRequest(t3);
    let s = e._extensions.getAllQueryCallbacks(r ?? "$none", o2);
    return da(e, t3, s);
  }
  function fa(e) {
    return (t3) => {
      let r = { requests: t3 }, n2 = t3[0].extensions.getAllBatchQueryCallbacks();
      return n2.length ? ga(r, n2, 0, e) : e(r);
    };
  }
  function ga(e, t3, r, n2) {
    if (r === t3.length)
      return n2(e);
    let i3 = e.customDataProxyFetch, o2 = e.requests[0].transaction;
    return t3[r]({ args: { queries: e.requests.map((s) => ({ model: s.modelName, operation: s.action, args: s.args })), transaction: o2 ? { isolationLevel: o2.kind === "batch" ? o2.isolationLevel : undefined } : undefined }, __internalParams: e, query(s, a = e) {
      let l = a.customDataProxyFetch;
      return a.customDataProxyFetch = ha(i3, l), ga(a, t3, r + 1, n2);
    } });
  }
  function ha(e = pa, t3 = pa) {
    return (r) => e(t3(r));
  }
  function ba(e, t3, r) {
    let n2 = Se(r);
    return !t3.result || !(t3.result.$allModels || t3.result[n2]) ? e : od({ ...e, ...ya(t3.name, e, t3.result.$allModels), ...ya(t3.name, e, t3.result[n2]) });
  }
  function od(e) {
    let t3 = new Pe, r = (n2, i3) => t3.getOrCreate(n2, () => i3.has(n2) ? [n2] : (i3.add(n2), e[n2] ? e[n2].needs.flatMap((o2) => r(o2, i3)) : [n2]));
    return yt(e, (n2) => ({ ...n2, needs: r(n2.name, new Set) }));
  }
  function ya(e, t3, r) {
    return r ? yt(r, ({ needs: n2, compute: i3 }, o2) => ({ name: o2, needs: n2 ? Object.keys(n2).filter((s) => n2[s]) : [], compute: sd(t3, o2, i3) })) : {};
  }
  function sd(e, t3, r) {
    let n2 = e?.[t3]?.compute;
    return n2 ? (i3) => r({ ...i3, [t3]: n2(i3) }) : r;
  }
  function Ea(e, t3) {
    if (!t3)
      return e;
    let r = { ...e };
    for (let n2 of Object.values(t3))
      if (e[n2.name])
        for (let i3 of n2.needs)
          r[i3] = true;
    return r;
  }
  function wa(e, t3) {
    if (!t3)
      return e;
    let r = { ...e };
    for (let n2 of Object.values(t3))
      if (!e[n2.name])
        for (let i3 of n2.needs)
          delete r[i3];
    return r;
  }
  function va({ postinstall: e, ciName: t3, clientVersion: r }) {
    if (xa("checkPlatformCaching:postinstall", e), xa("checkPlatformCaching:ciName", t3), e === true && t3 && t3 in Pa) {
      let n2 = `Prisma has detected that this project was built on ${t3}, which caches dependencies. This leads to an outdated Prisma Client because Prisma's auto-generation isn't triggered. To fix this, make sure to run the \`prisma generate\` command during the build process.

Learn how: https://pris.ly/d/${Pa[t3]}-build`;
      throw console.error(n2), new R(n2, r);
    }
  }
  function Ta(e, t3) {
    return e ? e.datasources ? e.datasources : e.datasourceUrl ? { [t3[0]]: { url: e.datasourceUrl } } : {} : {};
  }
  function Ra() {
    return typeof Netlify == "object" ? "netlify" : typeof EdgeRuntime == "string" ? "edge-light" : globalThis.navigator?.userAgent === ad ? "workerd" : globalThis.Deno ? "deno" : globalThis.__lagon__ ? "lagon" : globalThis.process?.release?.name === ld ? "node" : globalThis.Bun ? "bun" : globalThis.fastly ? "fastly" : "unknown";
  }
  function Tn() {
    let e = Ra();
    return { id: e, prettyName: ud[e] || e, isEdge: ["workerd", "deno", "netlify", "edge-light"].includes(e) };
  }
  function Rn(e) {
    let { runtimeBinaryTarget: t3 } = e;
    return `Add "${t3}" to \`binaryTargets\` in the "schema.prisma" file and run \`prisma generate\` after saving it:

${cd(e)}`;
  }
  function cd(e) {
    let { generator: t3, generatorBinaryTargets: r, runtimeBinaryTarget: n2 } = e, i3 = { fromEnvVar: null, value: n2 }, o2 = [...r, i3];
    return gi({ ...t3, binaryTargets: o2 });
  }
  function Xe(e) {
    let { runtimeBinaryTarget: t3 } = e;
    return `Prisma Client could not locate the Query Engine for runtime "${t3}".`;
  }
  function et(e) {
    let { searchedLocations: t3 } = e;
    return `The following locations have been searched:
${[...new Set(t3)].map((i3) => `  ${i3}`).join(`
`)}`;
  }
  function Ca(e) {
    let { runtimeBinaryTarget: t3 } = e;
    return `${Xe(e)}

This happened because \`binaryTargets\` have been pinned, but the actual deployment also required "${t3}".
${Rn(e)}

${et(e)}`;
  }
  function Cn(e) {
    return `We would appreciate if you could take the time to share some information with us.
Please help us by answering a few questions: https://pris.ly/${e}`;
  }
  function Sn(e) {
    let { errorStack: t3 } = e;
    return t3?.match(/\/\.next|\/next@|\/next\//) ? `

We detected that you are using Next.js, learn how to fix this: https://pris.ly/d/engine-not-found-nextjs.` : "";
  }
  function Sa(e) {
    let { queryEngineName: t3 } = e;
    return `${Xe(e)}${Sn(e)}

This is likely caused by a bundler that has not copied "${t3}" next to the resulting bundle.
Ensure that "${t3}" has been copied next to the bundle or in "${e.expectedLocation}".

${Cn("engine-not-found-bundler-investigation")}

${et(e)}`;
  }
  function Aa(e) {
    let { runtimeBinaryTarget: t3, generatorBinaryTargets: r } = e, n2 = r.find((i3) => i3.native);
    return `${Xe(e)}

This happened because Prisma Client was generated for "${n2?.value ?? "unknown"}", but the actual deployment required "${t3}".
${Rn(e)}

${et(e)}`;
  }
  function Ia(e) {
    let { queryEngineName: t3 } = e;
    return `${Xe(e)}${Sn(e)}

This is likely caused by tooling that has not copied "${t3}" to the deployment folder.
Ensure that you ran \`prisma generate\` and that "${t3}" has been copied to "${e.expectedLocation}".

${Cn("engine-not-found-tooling-investigation")}

${et(e)}`;
  }
  async function ka(e, t3) {
    let r = { binary: process.env.PRISMA_QUERY_ENGINE_BINARY, library: process.env.PRISMA_QUERY_ENGINE_LIBRARY }[e] ?? t3.prismaPath;
    if (r !== undefined)
      return r;
    let { enginePath: n2, searchedLocations: i3 } = await md(e, t3);
    if (pd("enginePath", n2), n2 !== undefined && e === "binary" && ai(n2), n2 !== undefined)
      return t3.prismaPath = n2;
    let o2 = await nt(), s = t3.generator?.binaryTargets ?? [], a = s.some((d3) => d3.native), l = !s.some((d3) => d3.value === o2), u = __filename.match(dd()) === null, c3 = { searchedLocations: i3, generatorBinaryTargets: s, generator: t3.generator, runtimeBinaryTarget: o2, queryEngineName: Da(e, o2), expectedLocation: fr.default.relative(process.cwd(), t3.dirname), errorStack: new Error().stack }, p3;
    throw a && l ? p3 = Aa(c3) : l ? p3 = Ca(c3) : u ? p3 = Sa(c3) : p3 = Ia(c3), new R(p3, t3.clientVersion);
  }
  async function md(engineType, config) {
    let binaryTarget = await nt(), searchedLocations = [], dirname = eval("__dirname"), searchLocations = [config.dirname, fr.default.resolve(dirname, ".."), config.generator?.output?.value ?? dirname, fr.default.resolve(dirname, "../../../.prisma/client"), "/tmp/prisma-engines", config.cwd];
    __filename.includes("resolveEnginePath") && searchLocations.push(Ho());
    for (let e of searchLocations) {
      let t3 = Da(engineType, binaryTarget), r = fr.default.join(e, t3);
      if (searchedLocations.push(e), Oa.default.existsSync(r))
        return { enginePath: r, searchedLocations };
    }
    return { enginePath: undefined, searchedLocations };
  }
  function Da(e, t3) {
    return e === "library" ? $r(t3, "fs") : `query-engine-${t3}${t3 === "windows" ? ".exe" : ""}`;
  }
  function _a(e) {
    return e ? e.replace(/".*"/g, '"X"').replace(/[\s:\[]([+-]?([0-9]*[.])?[0-9]+)/g, (t3) => `${t3[0]}5`) : "";
  }
  function Fa(e) {
    return e.split(`
`).map((t3) => t3.replace(/^\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)\s*/, "").replace(/\+\d+\s*ms$/, "")).join(`
`);
  }
  function Na({ title: e, user: t3 = "prisma", repo: r = "prisma", template: n2 = "bug_report.yml", body: i3 }) {
    return (0, La.default)({ user: t3, repo: r, template: n2, title: e, body: i3 });
  }
  function Ma({ version: e, binaryTarget: t3, title: r, description: n2, engineVersion: i3, database: o2, query: s }) {
    let a = To(6000 - (s?.length ?? 0)), l = Fa((0, Bi.default)(a)), u = n2 ? `# Description
\`\`\`
${n2}
\`\`\`` : "", c3 = (0, Bi.default)(`Hi Prisma Team! My Prisma Client just crashed. This is the report:
## Versions

| Name            | Version            |
|-----------------|--------------------|
| Node            | ${process.version?.padEnd(19)}| 
| OS              | ${t3?.padEnd(19)}|
| Prisma Client   | ${e?.padEnd(19)}|
| Query Engine    | ${i3?.padEnd(19)}|
| Database        | ${o2?.padEnd(19)}|

${u}

## Logs
\`\`\`
${l}
\`\`\`

## Client Snippet
\`\`\`ts
// PLEASE FILL YOUR CODE SNIPPET HERE
\`\`\`

## Schema
\`\`\`prisma
// PLEASE ADD YOUR SCHEMA HERE IF POSSIBLE
\`\`\`

## Prisma Engine Query
\`\`\`
${s ? _a(s) : ""}
\`\`\`
`), p3 = Na({ title: r, body: c3 });
    return `${r}

This is a non-recoverable error which probably happens when the Prisma Query Engine has a panic.

${X(p3)}

If you want the Prisma team to look into it, please open the link above \uD83D\uDE4F
To increase the chance of success, please post your schema and a snippet of
how you used Prisma Client in the issue. 
`;
  }
  function _t({ inlineDatasources: e, overrideDatasources: t3, env: r, clientVersion: n2 }) {
    let i3, o2 = Object.keys(e)[0], s = e[o2]?.url, a = t3[o2]?.url;
    if (o2 === undefined ? i3 = undefined : a ? i3 = a : s?.value ? i3 = s.value : s?.fromEnvVar && (i3 = r[s.fromEnvVar]), s?.fromEnvVar !== undefined && i3 === undefined)
      throw new R(`error: Environment variable not found: ${s.fromEnvVar}.`, n2);
    if (i3 === undefined)
      throw new R("error: Missing URL environment variable, value, or override.", n2);
    return i3;
  }
  function A(e, t3) {
    return { ...e, isRetryable: t3 };
  }
  async function hd(e) {
    let t3;
    try {
      t3 = await e.text();
    } catch {
      return { type: "EmptyError" };
    }
    try {
      let r = JSON.parse(t3);
      if (typeof r == "string")
        switch (r) {
          case "InternalDataProxyError":
            return { type: "DataProxyError", body: r };
          default:
            return { type: "UnknownTextError", body: r };
        }
      if (typeof r == "object" && r !== null) {
        if ("is_panic" in r && "message" in r && "error_code" in r)
          return { type: "QueryEngineError", body: r };
        if ("EngineNotStarted" in r || "InteractiveTransactionMisrouted" in r || "InvalidRequestError" in r) {
          let n2 = Object.values(r)[0].reason;
          return typeof n2 == "string" && !["SchemaMissing", "EngineVersionNotSupported"].includes(n2) ? { type: "UnknownJsonError", body: r } : { type: "DataProxyError", body: r };
        }
      }
      return { type: "UnknownJsonError", body: r };
    } catch {
      return t3 === "" ? { type: "EmptyError" } : { type: "UnknownTextError", body: t3 };
    }
  }
  async function Rr(e, t3) {
    if (e.ok)
      return;
    let r = { clientVersion: t3, response: e }, n2 = await hd(e);
    if (n2.type === "QueryEngineError")
      throw new V4(n2.body.message, { code: n2.body.error_code, clientVersion: t3 });
    if (n2.type === "DataProxyError") {
      if (n2.body === "InternalDataProxyError")
        throw new Lt(r, "Internal Data Proxy error");
      if ("EngineNotStarted" in n2.body) {
        if (n2.body.EngineNotStarted.reason === "SchemaMissing")
          return new ut(r);
        if (n2.body.EngineNotStarted.reason === "EngineVersionNotSupported")
          throw new br(r);
        if ("EngineStartupError" in n2.body.EngineNotStarted.reason) {
          let { msg: i3, logs: o2 } = n2.body.EngineNotStarted.reason.EngineStartupError;
          throw new yr(r, i3, o2);
        }
        if ("KnownEngineStartupError" in n2.body.EngineNotStarted.reason) {
          let { msg: i3, error_code: o2 } = n2.body.EngineNotStarted.reason.KnownEngineStartupError;
          throw new R(i3, t3, o2);
        }
        if ("HealthcheckTimeout" in n2.body.EngineNotStarted.reason) {
          let { logs: i3 } = n2.body.EngineNotStarted.reason.HealthcheckTimeout;
          throw new hr(r, i3);
        }
      }
      if ("InteractiveTransactionMisrouted" in n2.body) {
        let i3 = { IDParseError: "Could not parse interactive transaction ID", NoQueryEngineFoundError: "Could not find Query Engine for the specified host and transaction ID", TransactionStartError: "Could not start interactive transaction" };
        throw new wr(r, i3[n2.body.InteractiveTransactionMisrouted.reason]);
      }
      if ("InvalidRequestError" in n2.body)
        throw new xr(r, n2.body.InvalidRequestError.reason);
    }
    if (e.status === 401 || e.status === 403)
      throw new vr(r, Nt(Wi, n2));
    if (e.status === 404)
      return new Pr(r, Nt(Qi, n2));
    if (e.status === 429)
      throw new Tr(r, Nt(Hi, n2));
    if (e.status === 504)
      throw new Er(r, Nt(Gi, n2));
    if (e.status >= 500)
      throw new Lt(r, Nt(Ji, n2));
    if (e.status >= 400)
      throw new gr(r, Nt(Ui, n2));
  }
  function Nt(e, t3) {
    return t3.type === "EmptyError" ? e : `${e}: ${JSON.stringify(t3)}`;
  }
  function $a(e) {
    let t3 = Math.pow(2, e) * 50, r = Math.ceil(Math.random() * t3) - Math.ceil(t3 / 2), n2 = t3 + r;
    return new Promise((i3) => setTimeout(() => i3(n2), n2));
  }
  function qa(e) {
    let t3 = new TextEncoder().encode(e), r = "", n2 = t3.byteLength, i3 = n2 % 3, o2 = n2 - i3, s, a, l, u, c3;
    for (let p3 = 0;p3 < o2; p3 = p3 + 3)
      c3 = t3[p3] << 16 | t3[p3 + 1] << 8 | t3[p3 + 2], s = (c3 & 16515072) >> 18, a = (c3 & 258048) >> 12, l = (c3 & 4032) >> 6, u = c3 & 63, r += $e[s] + $e[a] + $e[l] + $e[u];
    return i3 == 1 ? (c3 = t3[o2], s = (c3 & 252) >> 2, a = (c3 & 3) << 4, r += $e[s] + $e[a] + "==") : i3 == 2 && (c3 = t3[o2] << 8 | t3[o2 + 1], s = (c3 & 64512) >> 10, a = (c3 & 1008) >> 4, l = (c3 & 15) << 2, r += $e[s] + $e[a] + $e[l] + "="), r;
  }
  function ja(e) {
    if (!!e.generator?.previewFeatures.some((r) => r.toLowerCase().includes("metrics")))
      throw new R("The `metrics` preview feature is not yet available with Accelerate.\nPlease remove `metrics` from the `previewFeatures` in your schema.\n\nMore information about Accelerate: https://pris.ly/d/accelerate", e.clientVersion);
  }
  function yd(e) {
    return e[0] * 1000 + e[1] / 1e6;
  }
  function Va(e) {
    return new Date(yd(e));
  }
  async function ct(e, t3, r = (n2) => n2) {
    let n2 = t3.clientVersion;
    try {
      return typeof fetch == "function" ? await r(fetch)(e, t3) : await r(Ki)(e, t3);
    } catch (i3) {
      let o2 = i3.message ?? "Unknown error";
      throw new Cr(o2, { clientVersion: n2 });
    }
  }
  function Ed(e) {
    return { ...e.headers, "Content-Type": "application/json" };
  }
  function wd(e) {
    return { method: e.method, headers: Ed(e) };
  }
  function xd(e, t3) {
    return { text: () => Promise.resolve(Buffer.concat(e).toString()), json: () => Promise.resolve().then(() => JSON.parse(Buffer.concat(e).toString())), ok: t3.statusCode >= 200 && t3.statusCode <= 299, status: t3.statusCode, url: t3.url, headers: new zi(t3.headers) };
  }
  async function Ki(e, t3 = {}) {
    let r = Pd("https"), n2 = wd(t3), i3 = [], { origin: o2 } = new URL(e);
    return new Promise((s, a) => {
      let l = r.request(e, n2, (u) => {
        let { statusCode: c3, headers: { location: p3 } } = u;
        c3 >= 301 && c3 <= 399 && p3 && (p3.startsWith("http") === false ? s(Ki(`${o2}${p3}`, t3)) : s(Ki(p3, t3))), u.on("data", (d3) => i3.push(d3)), u.on("end", () => s(xd(i3, u))), u.on("error", a);
      });
      l.on("error", a), l.end(t3.body ?? "");
    });
  }
  async function Td(e, t3) {
    let r = Ba["@prisma/engines-version"], n2 = t3.clientVersion ?? "unknown";
    if (process.env.PRISMA_CLIENT_DATA_PROXY_CLIENT_VERSION)
      return process.env.PRISMA_CLIENT_DATA_PROXY_CLIENT_VERSION;
    if (e.includes("accelerate") && n2 !== "0.0.0" && n2 !== "in-memory")
      return n2;
    let [i3, o2] = n2?.split("-") ?? [];
    if (o2 === undefined && vd.test(i3))
      return i3;
    if (o2 !== undefined || n2 === "0.0.0" || n2 === "in-memory") {
      if (e.startsWith("localhost") || e.startsWith("127.0.0.1"))
        return "0.0.0";
      let [s] = r.split("-") ?? [], [a, l, u] = s.split("."), c3 = Rd(`<=${a}.${l}.${u}`), p3 = await ct(c3, { clientVersion: n2 });
      if (!p3.ok)
        throw new Error(`Failed to fetch stable Prisma version, unpkg.com status ${p3.status} ${p3.statusText}, response body: ${await p3.text() || "<empty body>"}`);
      let d3 = await p3.text();
      Ua("length of body fetched from unpkg.com", d3.length);
      let f3;
      try {
        f3 = JSON.parse(d3);
      } catch (g) {
        throw console.error("JSON.parse error: body fetched from unpkg.com: ", d3), g;
      }
      return f3.version;
    }
    throw new lt("Only `major.minor.patch` versions are supported by Accelerate.", { clientVersion: n2 });
  }
  async function Ga(e, t3) {
    let r = await Td(e, t3);
    return Ua("version", r), r;
  }
  function Rd(e) {
    return encodeURI(`https://unpkg.com/prisma@${e}/package.json`);
  }
  function Ja(e) {
    if (e?.kind === "itx")
      return e.options.id;
  }
  function Cd() {
    let e = globalThis;
    return e[Xi] === undefined && (e[Xi] = {}), e[Xi];
  }
  function Sd(e) {
    let t3 = Cd();
    if (t3[e] !== undefined)
      return t3[e];
    let r = Wa.default.toNamespacedPath(e), n2 = { exports: {} }, i3 = 0;
    return process.platform !== "win32" && (i3 = eo.default.constants.dlopen.RTLD_LAZY | eo.default.constants.dlopen.RTLD_DEEPBIND), process.dlopen(n2, r, i3), t3[e] = n2.exports, n2.exports;
  }
  function Id(e) {
    return e.item_type === "query" && "query" in e;
  }
  function Od(e) {
    return "level" in e ? e.level === "error" && e.message === "PANIC" : false;
  }
  function kd(e) {
    return typeof e == "object" && e !== null && e.error_code !== undefined;
  }
  function ro(e, t3) {
    return Ma({ binaryTarget: e.binaryTarget, title: t3, version: e.config.clientVersion, engineVersion: e.versionInfo?.commit, database: e.config.activeProvider, query: e.lastQuery });
  }
  function Ya({ copyEngine: e = true }, t3) {
    let r;
    try {
      r = _t({ inlineDatasources: t3.inlineDatasources, overrideDatasources: t3.overrideDatasources, env: { ...t3.env, ...process.env }, clientVersion: t3.clientVersion });
    } catch {
    }
    let n2 = !!(r?.startsWith("prisma://") || r?.startsWith("prisma+postgres://"));
    e && n2 && Xt("recommend--no-engine", "In production, we recommend using `prisma generate --no-engine` (See: `prisma generate --help`)");
    let i3 = Kt(t3.generator), o2 = n2 || !e, s = !!t3.adapter, a = i3 === "library", l = i3 === "binary";
    if (o2 && s || s && false) {
      let u;
      throw e ? r?.startsWith("prisma://") ? u = ["Prisma Client was configured to use the `adapter` option but the URL was a `prisma://` URL.", "Please either use the `prisma://` URL or remove the `adapter` from the Prisma Client constructor."] : u = ["Prisma Client was configured to use both the `adapter` and Accelerate, please chose one."] : u = ["Prisma Client was configured to use the `adapter` option but `prisma generate` was run with `--no-engine`.", "Please run `prisma generate` without `--no-engine` to be able to use Prisma Client with the adapter."], new J(u.join(`
`), { clientVersion: t3.clientVersion });
    }
    if (o2)
      return new Sr(t3);
    if (a)
      return new Ar(t3);
    throw new J("Invalid client engine type, please use `library` or `binary`", { clientVersion: t3.clientVersion });
  }
  function In({ generator: e }) {
    return e?.previewFeatures ?? [];
  }
  function Mt(e) {
    return e.substring(0, 1).toLowerCase() + e.substring(1);
  }
  function tl(e, t3, r) {
    let n2 = rl(e), i3 = Dd(n2), o2 = Fd(i3);
    o2 ? On(o2, t3, r) : t3.addErrorMessage(() => "Unknown error");
  }
  function rl(e) {
    return e.errors.flatMap((t3) => t3.kind === "Union" ? rl(t3) : [t3]);
  }
  function Dd(e) {
    let t3 = new Map, r = [];
    for (let n2 of e) {
      if (n2.kind !== "InvalidArgumentType") {
        r.push(n2);
        continue;
      }
      let i3 = `${n2.selectionPath.join(".")}:${n2.argumentPath.join(".")}`, o2 = t3.get(i3);
      o2 ? t3.set(i3, { ...n2, argument: { ...n2.argument, typeNames: _d(o2.argument.typeNames, n2.argument.typeNames) } }) : t3.set(i3, n2);
    }
    return r.push(...t3.values()), r;
  }
  function _d(e, t3) {
    return [...new Set(e.concat(t3))];
  }
  function Fd(e) {
    return wi(e, (t3, r) => {
      let n2 = Xa(t3), i3 = Xa(r);
      return n2 !== i3 ? n2 - i3 : el(t3) - el(r);
    });
  }
  function Xa(e) {
    let t3 = 0;
    return Array.isArray(e.selectionPath) && (t3 += e.selectionPath.length), Array.isArray(e.argumentPath) && (t3 += e.argumentPath.length), t3;
  }
  function el(e) {
    switch (e.kind) {
      case "InvalidArgumentValue":
      case "ValueTooLarge":
        return 20;
      case "InvalidArgumentType":
        return 10;
      case "RequiredArgumentMissing":
        return -10;
      default:
        return 0;
    }
  }
  function On(e, t3, r) {
    switch (e.kind) {
      case "MutuallyExclusiveFields":
        Ld(e, t3);
        break;
      case "IncludeOnScalar":
        Nd(e, t3);
        break;
      case "EmptySelection":
        Md(e, t3, r);
        break;
      case "UnknownSelectionField":
        Vd(e, t3);
        break;
      case "InvalidSelectionValue":
        Bd(e, t3);
        break;
      case "UnknownArgument":
        Ud(e, t3);
        break;
      case "UnknownInputField":
        Gd(e, t3);
        break;
      case "RequiredArgumentMissing":
        Qd(e, t3);
        break;
      case "InvalidArgumentType":
        Jd(e, t3);
        break;
      case "InvalidArgumentValue":
        Wd(e, t3);
        break;
      case "ValueTooLarge":
        Hd(e, t3);
        break;
      case "SomeFieldsMissing":
        Kd(e, t3);
        break;
      case "TooManyFieldsGiven":
        zd(e, t3);
        break;
      case "Union":
        tl(e, t3, r);
        break;
      default:
        throw new Error("not implemented: " + e.kind);
    }
  }
  function Ld(e, t3) {
    let r = t3.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
    r && (r.getField(e.firstField)?.markAsError(), r.getField(e.secondField)?.markAsError()), t3.addErrorMessage((n2) => `Please ${n2.bold("either")} use ${n2.green(`\`${e.firstField}\``)} or ${n2.green(`\`${e.secondField}\``)}, but ${n2.red("not both")} at the same time.`);
  }
  function Nd(e, t3) {
    let [r, n2] = Or2(e.selectionPath), i3 = e.outputType, o2 = t3.arguments.getDeepSelectionParent(r)?.value;
    if (o2 && (o2.getField(n2)?.markAsError(), i3))
      for (let s of i3.fields)
        s.isRelation && o2.addSuggestion(new ue(s.name, "true"));
    t3.addErrorMessage((s) => {
      let a = `Invalid scalar field ${s.red(`\`${n2}\``)} for ${s.bold("include")} statement`;
      return i3 ? a += ` on model ${s.bold(i3.name)}. ${kr(s)}` : a += ".", a += `
Note that ${s.bold("include")} statements only accept relation fields.`, a;
    });
  }
  function Md(e, t3, r) {
    let n2 = t3.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
    if (n2) {
      let i3 = n2.getField("omit")?.value.asObject();
      if (i3) {
        $d(e, t3, i3);
        return;
      }
      if (n2.hasField("select")) {
        qd(e, t3);
        return;
      }
    }
    if (r?.[Mt(e.outputType.name)]) {
      jd(e, t3);
      return;
    }
    t3.addErrorMessage(() => `Unknown field at "${e.selectionPath.join(".")} selection"`);
  }
  function $d(e, t3, r) {
    r.removeAllFields();
    for (let n2 of e.outputType.fields)
      r.addSuggestion(new ue(n2.name, "false"));
    t3.addErrorMessage((n2) => `The ${n2.red("omit")} statement includes every field of the model ${n2.bold(e.outputType.name)}. At least one field must be included in the result`);
  }
  function qd(e, t3) {
    let r = e.outputType, n2 = t3.arguments.getDeepSelectionParent(e.selectionPath)?.value, i3 = n2?.isEmpty() ?? false;
    n2 && (n2.removeAllFields(), sl(n2, r)), t3.addErrorMessage((o2) => i3 ? `The ${o2.red("`select`")} statement for type ${o2.bold(r.name)} must not be empty. ${kr(o2)}` : `The ${o2.red("`select`")} statement for type ${o2.bold(r.name)} needs ${o2.bold("at least one truthy value")}.`);
  }
  function jd(e, t3) {
    let r = new Ir;
    for (let i3 of e.outputType.fields)
      i3.isRelation || r.addField(i3.name, "false");
    let n2 = new ue("omit", r).makeRequired();
    if (e.selectionPath.length === 0)
      t3.arguments.addSuggestion(n2);
    else {
      let [i3, o2] = Or2(e.selectionPath), a = t3.arguments.getDeepSelectionParent(i3)?.value.asObject()?.getField(o2);
      if (a) {
        let l = a?.value.asObject() ?? new It;
        l.addSuggestion(n2), a.value = l;
      }
    }
    t3.addErrorMessage((i3) => `The global ${i3.red("omit")} configuration excludes every field of the model ${i3.bold(e.outputType.name)}. At least one field must be included in the result`);
  }
  function Vd(e, t3) {
    let r = al(e.selectionPath, t3);
    if (r.parentKind !== "unknown") {
      r.field.markAsError();
      let n2 = r.parent;
      switch (r.parentKind) {
        case "select":
          sl(n2, e.outputType);
          break;
        case "include":
          Yd(n2, e.outputType);
          break;
        case "omit":
          Zd(n2, e.outputType);
          break;
      }
    }
    t3.addErrorMessage((n2) => {
      let i3 = [`Unknown field ${n2.red(`\`${r.fieldName}\``)}`];
      return r.parentKind !== "unknown" && i3.push(`for ${n2.bold(r.parentKind)} statement`), i3.push(`on model ${n2.bold(`\`${e.outputType.name}\``)}.`), i3.push(kr(n2)), i3.join(" ");
    });
  }
  function Bd(e, t3) {
    let r = al(e.selectionPath, t3);
    r.parentKind !== "unknown" && r.field.value.markAsError(), t3.addErrorMessage((n2) => `Invalid value for selection field \`${n2.red(r.fieldName)}\`: ${e.underlyingError}`);
  }
  function Ud(e, t3) {
    let r = e.argumentPath[0], n2 = t3.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
    n2 && (n2.getField(r)?.markAsError(), Xd(n2, e.arguments)), t3.addErrorMessage((i3) => il(i3, r, e.arguments.map((o2) => o2.name)));
  }
  function Gd(e, t3) {
    let [r, n2] = Or2(e.argumentPath), i3 = t3.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
    if (i3) {
      i3.getDeepField(e.argumentPath)?.markAsError();
      let o2 = i3.getDeepFieldValue(r)?.asObject();
      o2 && ll(o2, e.inputType);
    }
    t3.addErrorMessage((o2) => il(o2, n2, e.inputType.fields.map((s) => s.name)));
  }
  function il(e, t3, r) {
    let n2 = [`Unknown argument \`${e.red(t3)}\`.`], i3 = tm(t3, r);
    return i3 && n2.push(`Did you mean \`${e.green(i3)}\`?`), r.length > 0 && n2.push(kr(e)), n2.join(" ");
  }
  function Qd(e, t3) {
    let r;
    t3.addErrorMessage((l) => r?.value instanceof W && r.value.text === "null" ? `Argument \`${l.green(o2)}\` must not be ${l.red("null")}.` : `Argument \`${l.green(o2)}\` is missing.`);
    let n2 = t3.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
    if (!n2)
      return;
    let [i3, o2] = Or2(e.argumentPath), s = new Ir, a = n2.getDeepFieldValue(i3)?.asObject();
    if (a)
      if (r = a.getField(o2), r && a.removeField(o2), e.inputTypes.length === 1 && e.inputTypes[0].kind === "object") {
        for (let l of e.inputTypes[0].fields)
          s.addField(l.name, l.typeNames.join(" | "));
        a.addSuggestion(new ue(o2, s).makeRequired());
      } else {
        let l = e.inputTypes.map(ol).join(" | ");
        a.addSuggestion(new ue(o2, l).makeRequired());
      }
  }
  function ol(e) {
    return e.kind === "list" ? `${ol(e.elementType)}[]` : e.name;
  }
  function Jd(e, t3) {
    let r = e.argument.name, n2 = t3.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
    n2 && n2.getDeepFieldValue(e.argumentPath)?.markAsError(), t3.addErrorMessage((i3) => {
      let o2 = kn("or", e.argument.typeNames.map((s) => i3.green(s)));
      return `Argument \`${i3.bold(r)}\`: Invalid value provided. Expected ${o2}, provided ${i3.red(e.inferredType)}.`;
    });
  }
  function Wd(e, t3) {
    let r = e.argument.name, n2 = t3.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
    n2 && n2.getDeepFieldValue(e.argumentPath)?.markAsError(), t3.addErrorMessage((i3) => {
      let o2 = [`Invalid value for argument \`${i3.bold(r)}\``];
      if (e.underlyingError && o2.push(`: ${e.underlyingError}`), o2.push("."), e.argument.typeNames.length > 0) {
        let s = kn("or", e.argument.typeNames.map((a) => i3.green(a)));
        o2.push(` Expected ${s}.`);
      }
      return o2.join("");
    });
  }
  function Hd(e, t3) {
    let r = e.argument.name, n2 = t3.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject(), i3;
    if (n2) {
      let s = n2.getDeepField(e.argumentPath)?.value;
      s?.markAsError(), s instanceof W && (i3 = s.text);
    }
    t3.addErrorMessage((o2) => {
      let s = ["Unable to fit value"];
      return i3 && s.push(o2.red(i3)), s.push(`into a 64-bit signed integer for field \`${o2.bold(r)}\``), s.join(" ");
    });
  }
  function Kd(e, t3) {
    let r = e.argumentPath[e.argumentPath.length - 1], n2 = t3.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
    if (n2) {
      let i3 = n2.getDeepFieldValue(e.argumentPath)?.asObject();
      i3 && ll(i3, e.inputType);
    }
    t3.addErrorMessage((i3) => {
      let o2 = [`Argument \`${i3.bold(r)}\` of type ${i3.bold(e.inputType.name)} needs`];
      return e.constraints.minFieldCount === 1 ? e.constraints.requiredFields ? o2.push(`${i3.green("at least one of")} ${kn("or", e.constraints.requiredFields.map((s) => `\`${i3.bold(s)}\``))} arguments.`) : o2.push(`${i3.green("at least one")} argument.`) : o2.push(`${i3.green(`at least ${e.constraints.minFieldCount}`)} arguments.`), o2.push(kr(i3)), o2.join(" ");
    });
  }
  function zd(e, t3) {
    let r = e.argumentPath[e.argumentPath.length - 1], n2 = t3.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject(), i3 = [];
    if (n2) {
      let o2 = n2.getDeepFieldValue(e.argumentPath)?.asObject();
      o2 && (o2.markAsError(), i3 = Object.keys(o2.getFields()));
    }
    t3.addErrorMessage((o2) => {
      let s = [`Argument \`${o2.bold(r)}\` of type ${o2.bold(e.inputType.name)} needs`];
      return e.constraints.minFieldCount === 1 && e.constraints.maxFieldCount == 1 ? s.push(`${o2.green("exactly one")} argument,`) : e.constraints.maxFieldCount == 1 ? s.push(`${o2.green("at most one")} argument,`) : s.push(`${o2.green(`at most ${e.constraints.maxFieldCount}`)} arguments,`), s.push(`but you provided ${kn("and", i3.map((a) => o2.red(a)))}. Please choose`), e.constraints.maxFieldCount === 1 ? s.push("one.") : s.push(`${e.constraints.maxFieldCount}.`), s.join(" ");
    });
  }
  function sl(e, t3) {
    for (let r of t3.fields)
      e.hasField(r.name) || e.addSuggestion(new ue(r.name, "true"));
  }
  function Yd(e, t3) {
    for (let r of t3.fields)
      r.isRelation && !e.hasField(r.name) && e.addSuggestion(new ue(r.name, "true"));
  }
  function Zd(e, t3) {
    for (let r of t3.fields)
      !e.hasField(r.name) && !r.isRelation && e.addSuggestion(new ue(r.name, "true"));
  }
  function Xd(e, t3) {
    for (let r of t3)
      e.hasField(r.name) || e.addSuggestion(new ue(r.name, r.typeNames.join(" | ")));
  }
  function al(e, t3) {
    let [r, n2] = Or2(e), i3 = t3.arguments.getDeepSubSelectionValue(r)?.asObject();
    if (!i3)
      return { parentKind: "unknown", fieldName: n2 };
    let o2 = i3.getFieldValue("select")?.asObject(), s = i3.getFieldValue("include")?.asObject(), a = i3.getFieldValue("omit")?.asObject(), l = o2?.getField(n2);
    return o2 && l ? { parentKind: "select", parent: o2, field: l, fieldName: n2 } : (l = s?.getField(n2), s && l ? { parentKind: "include", field: l, parent: s, fieldName: n2 } : (l = a?.getField(n2), a && l ? { parentKind: "omit", field: l, parent: a, fieldName: n2 } : { parentKind: "unknown", fieldName: n2 }));
  }
  function ll(e, t3) {
    if (t3.kind === "object")
      for (let r of t3.fields)
        e.hasField(r.name) || e.addSuggestion(new ue(r.name, r.typeNames.join(" | ")));
  }
  function Or2(e) {
    let t3 = [...e], r = t3.pop();
    if (!r)
      throw new Error("unexpected empty path");
    return [t3, r];
  }
  function kr({ green: e, enabled: t3 }) {
    return "Available options are " + (t3 ? `listed in ${e("green")}` : "marked with ?") + ".";
  }
  function kn(e, t3) {
    if (t3.length === 1)
      return t3[0];
    let r = [...t3], n2 = r.pop();
    return `${r.join(", ")} ${e} ${n2}`;
  }
  function tm(e, t3) {
    let r = 1 / 0, n2;
    for (let i3 of t3) {
      let o2 = (0, nl.default)(e, i3);
      o2 > em || o2 < r && (r = o2, n2 = i3);
    }
    return n2;
  }
  function Dn({ args: e, errors: t3, errorFormat: r, callsite: n2, originalMethod: i3, clientVersion: o2, globalOmit: s }) {
    let a = Ot(e);
    for (let p3 of t3)
      On(p3, a, s);
    let { message: l, args: u } = yn(a, r), c3 = Dt({ message: l, callsite: n2, originalMethod: i3, showColors: r === "pretty", callArguments: u });
    throw new J(c3, { clientVersion: o2 });
  }
  function cl({ modelName: e, action: t3, args: r, runtimeDataModel: n2, extensions: i3, callsite: o2, clientMethod: s, errorFormat: a, clientVersion: l, previewFeatures: u, globalOmit: c3 }) {
    let p3 = new io({ runtimeDataModel: n2, modelName: e, action: t3, rootArgs: r, callsite: o2, extensions: i3, selectionPath: [], argumentPath: [], originalMethod: s, errorFormat: a, clientVersion: l, previewFeatures: u, globalOmit: c3 });
    return { modelName: e, action: rm[t3], query: Dr(r, p3) };
  }
  function Dr({ select: e, include: t3, ...r } = {}, n2) {
    let i3;
    return n2.isPreviewFeatureOn("omitApi") && (i3 = r.omit, delete r.omit), { arguments: dl(r, n2), selection: nm(e, t3, i3, n2) };
  }
  function nm(e, t3, r, n2) {
    return e ? (t3 ? n2.throwValidationError({ kind: "MutuallyExclusiveFields", firstField: "include", secondField: "select", selectionPath: n2.getSelectionPath() }) : r && n2.isPreviewFeatureOn("omitApi") && n2.throwValidationError({ kind: "MutuallyExclusiveFields", firstField: "omit", secondField: "select", selectionPath: n2.getSelectionPath() }), am(e, n2)) : im(n2, t3, r);
  }
  function im(e, t3, r) {
    let n2 = {};
    return e.modelOrType && !e.isRawAction() && (n2.$composites = true, n2.$scalars = true), t3 && om(n2, t3, e), e.isPreviewFeatureOn("omitApi") && sm(n2, r, e), n2;
  }
  function om(e, t3, r) {
    for (let [n2, i3] of Object.entries(t3)) {
      if (we(i3))
        continue;
      let o2 = r.nestSelection(n2);
      if (oo(i3, o2), i3 === false || i3 === undefined) {
        e[n2] = false;
        continue;
      }
      let s = r.findField(n2);
      if (s && s.kind !== "object" && r.throwValidationError({ kind: "IncludeOnScalar", selectionPath: r.getSelectionPath().concat(n2), outputType: r.getOutputTypeDescription() }), s) {
        e[n2] = Dr(i3 === true ? {} : i3, o2);
        continue;
      }
      if (i3 === true) {
        e[n2] = true;
        continue;
      }
      e[n2] = Dr(i3, o2);
    }
  }
  function sm(e, t3, r) {
    let n2 = r.getComputedFields(), i3 = { ...r.getGlobalOmit(), ...t3 }, o2 = wa(i3, n2);
    for (let [s, a] of Object.entries(o2)) {
      if (we(a))
        continue;
      oo(a, r.nestSelection(s));
      let l = r.findField(s);
      n2?.[s] && !l || (e[s] = !a);
    }
  }
  function am(e, t3) {
    let r = {}, n2 = t3.getComputedFields(), i3 = Ea(e, n2);
    for (let [o2, s] of Object.entries(i3)) {
      if (we(s))
        continue;
      let a = t3.nestSelection(o2);
      oo(s, a);
      let l = t3.findField(o2);
      if (!(n2?.[o2] && !l)) {
        if (s === false || s === undefined || we(s)) {
          r[o2] = false;
          continue;
        }
        if (s === true) {
          l?.kind === "object" ? r[o2] = Dr({}, a) : r[o2] = true;
          continue;
        }
        r[o2] = Dr(s, a);
      }
    }
    return r;
  }
  function pl(e, t3) {
    if (e === null)
      return null;
    if (typeof e == "string" || typeof e == "number" || typeof e == "boolean")
      return e;
    if (typeof e == "bigint")
      return { $type: "BigInt", value: String(e) };
    if (Pt(e)) {
      if (on(e))
        return { $type: "DateTime", value: e.toISOString() };
      t3.throwValidationError({ kind: "InvalidArgumentValue", selectionPath: t3.getSelectionPath(), argumentPath: t3.getArgumentPath(), argument: { name: t3.getArgumentName(), typeNames: ["Date"] }, underlyingError: "Provided Date object is invalid" });
    }
    if (Ct(e))
      return { $type: "FieldRef", value: { _ref: e.name, _container: e.modelName } };
    if (Array.isArray(e))
      return lm(e, t3);
    if (ArrayBuffer.isView(e))
      return { $type: "Bytes", value: Buffer.from(e).toString("base64") };
    if (um(e))
      return e.values;
    if (Rt(e))
      return { $type: "Decimal", value: e.toFixed() };
    if (e instanceof Ne) {
      if (e !== en.instances[e._getName()])
        throw new Error("Invalid ObjectEnumValue");
      return { $type: "Enum", value: e._getName() };
    }
    if (cm(e))
      return e.toJSON();
    if (typeof e == "object")
      return dl(e, t3);
    t3.throwValidationError({ kind: "InvalidArgumentValue", selectionPath: t3.getSelectionPath(), argumentPath: t3.getArgumentPath(), argument: { name: t3.getArgumentName(), typeNames: [] }, underlyingError: `We could not serialize ${Object.prototype.toString.call(e)} value. Serialize the object to JSON or implement a ".toJSON()" method on it` });
  }
  function dl(e, t3) {
    if (e.$type)
      return { $type: "Raw", value: e };
    let r = {};
    for (let n2 in e) {
      let i3 = e[n2], o2 = t3.nestArgument(n2);
      we(i3) || (i3 !== undefined ? r[n2] = pl(i3, o2) : t3.isPreviewFeatureOn("strictUndefinedChecks") && t3.throwValidationError({ kind: "InvalidArgumentValue", argumentPath: o2.getArgumentPath(), selectionPath: t3.getSelectionPath(), argument: { name: t3.getArgumentName(), typeNames: [] }, underlyingError: ul }));
    }
    return r;
  }
  function lm(e, t3) {
    let r = [];
    for (let n2 = 0;n2 < e.length; n2++) {
      let i3 = t3.nestArgument(String(n2)), o2 = e[n2];
      if (o2 === undefined || we(o2)) {
        let s = o2 === undefined ? "undefined" : "Prisma.skip";
        t3.throwValidationError({ kind: "InvalidArgumentValue", selectionPath: i3.getSelectionPath(), argumentPath: i3.getArgumentPath(), argument: { name: `${t3.getArgumentName()}[${n2}]`, typeNames: [] }, underlyingError: `Can not use \`${s}\` value within array. Use \`null\` or filter out \`${s}\` values` });
      }
      r.push(pl(o2, i3));
    }
    return r;
  }
  function um(e) {
    return typeof e == "object" && e !== null && e.__prismaRawParameters__ === true;
  }
  function cm(e) {
    return typeof e == "object" && e !== null && typeof e.toJSON == "function";
  }
  function oo(e, t3) {
    e === undefined && t3.isPreviewFeatureOn("strictUndefinedChecks") && t3.throwValidationError({ kind: "InvalidSelectionValue", selectionPath: t3.getSelectionPath(), underlyingError: ul });
  }
  function $t(e) {
    try {
      return gl(e, "fast");
    } catch {
      return gl(e, "slow");
    }
  }
  function gl(e, t3) {
    return JSON.stringify(e.map((r) => yl(r, t3)));
  }
  function yl(e, t3) {
    return Array.isArray(e) ? e.map((r) => yl(r, t3)) : typeof e == "bigint" ? { prisma__type: "bigint", prisma__value: e.toString() } : Pt(e) ? { prisma__type: "date", prisma__value: e.toJSON() } : Re.isDecimal(e) ? { prisma__type: "decimal", prisma__value: e.toJSON() } : Buffer.isBuffer(e) ? { prisma__type: "bytes", prisma__value: e.toString("base64") } : pm(e) || ArrayBuffer.isView(e) ? { prisma__type: "bytes", prisma__value: Buffer.from(e).toString("base64") } : typeof e == "object" && t3 === "slow" ? bl(e) : e;
  }
  function pm(e) {
    return e instanceof ArrayBuffer || e instanceof SharedArrayBuffer ? true : typeof e == "object" && e !== null ? e[Symbol.toStringTag] === "ArrayBuffer" || e[Symbol.toStringTag] === "SharedArrayBuffer" : false;
  }
  function bl(e) {
    if (typeof e != "object" || e === null)
      return e;
    if (typeof e.toJSON == "function")
      return e.toJSON();
    if (Array.isArray(e))
      return e.map(hl);
    let t3 = {};
    for (let r of Object.keys(e))
      t3[r] = hl(e[r]);
    return t3;
  }
  function hl(e) {
    return typeof e == "bigint" ? e.toString() : bl(e);
  }
  function so(e, t3, r, n2) {
    if (!(e !== "postgresql" && e !== "cockroachdb") && r.length > 0 && mm.exec(t3))
      throw new Error(`Running ALTER using ${n2} is not supported
Using the example below you can still execute your query with Prisma, but please note that it is vulnerable to SQL injection attacks and requires you to take care of input sanitization.

Example:
  await prisma.$executeRawUnsafe(\`ALTER USER prisma WITH PASSWORD '\${password}'\`)

More Information: https://pris.ly/d/execute-raw
`);
  }
  function lo(e) {
    return function(r) {
      let n2, i3 = (o2 = e) => {
        try {
          return o2 === undefined || o2?.kind === "itx" ? n2 ??= vl(r(o2)) : vl(r(o2));
        } catch (s) {
          return Promise.reject(s);
        }
      };
      return { then(o2, s) {
        return i3().then(o2, s);
      }, catch(o2) {
        return i3().catch(o2);
      }, finally(o2) {
        return i3().finally(o2);
      }, requestTransaction(o2) {
        let s = i3(o2);
        return s.requestTransaction ? s.requestTransaction(o2) : s;
      }, [Symbol.toStringTag]: "PrismaPromise" };
    };
  }
  function vl(e) {
    return typeof e.then == "function" ? e : Promise.resolve(e);
  }
  function Rl(e) {
    return e.includes("tracing") ? new uo : Tl;
  }
  function Cl(e, t3 = () => {
  }) {
    let r, n2 = new Promise((i3) => r = i3);
    return { then(i3) {
      return --e === 0 && r(t3()), i3?.(n2);
    } };
  }
  function Sl(e) {
    return typeof e == "string" ? e : e.reduce((t3, r) => {
      let n2 = typeof r == "string" ? r : r.level;
      return n2 === "query" ? t3 : t3 && (r === "info" || t3 === "info") ? "info" : n2;
    }, undefined);
  }
  function Fn(e) {
    return typeof e.batchRequestIdx == "number";
  }
  function Ln(e) {
    return e === null ? e : Array.isArray(e) ? e.map(Ln) : typeof e == "object" ? fm(e) ? gm(e) : yt(e, Ln) : e;
  }
  function fm(e) {
    return e !== null && typeof e == "object" && typeof e.$type == "string";
  }
  function gm({ $type: e, value: t3 }) {
    switch (e) {
      case "BigInt":
        return BigInt(t3);
      case "Bytes":
        return Buffer.from(t3, "base64");
      case "DateTime":
        return new Date(t3);
      case "Decimal":
        return new Re(t3);
      case "Json":
        return JSON.parse(t3);
      default:
        Fe(t3, "Unknown tagged value");
    }
  }
  function Al(e) {
    if (e.action !== "findUnique" && e.action !== "findUniqueOrThrow")
      return;
    let t3 = [];
    return e.modelName && t3.push(e.modelName), e.query.arguments && t3.push(co(e.query.arguments)), t3.push(co(e.query.selection)), t3.join("");
  }
  function co(e) {
    return `(${Object.keys(e).sort().map((r) => {
      let n2 = e[r];
      return typeof n2 == "object" && n2 !== null ? `(${r} ${co(n2)})` : r;
    }).join(" ")})`;
  }
  function po(e) {
    return hm[e];
  }
  function pt(e, t3) {
    if (t3 === null)
      return t3;
    switch (e) {
      case "bigint":
        return BigInt(t3);
      case "bytes":
        return Buffer.from(t3, "base64");
      case "decimal":
        return new Re(t3);
      case "datetime":
      case "date":
        return new Date(t3);
      case "time":
        return new Date(`1970-01-01T${t3}Z`);
      case "bigint-array":
        return t3.map((r) => pt("bigint", r));
      case "bytes-array":
        return t3.map((r) => pt("bytes", r));
      case "decimal-array":
        return t3.map((r) => pt("decimal", r));
      case "datetime-array":
        return t3.map((r) => pt("datetime", r));
      case "date-array":
        return t3.map((r) => pt("date", r));
      case "time-array":
        return t3.map((r) => pt("time", r));
      default:
        return t3;
    }
  }
  function Il(e) {
    let t3 = [], r = ym(e);
    for (let n2 = 0;n2 < e.rows.length; n2++) {
      let i3 = e.rows[n2], o2 = { ...r };
      for (let s = 0;s < i3.length; s++)
        o2[e.columns[s]] = pt(e.types[s], i3[s]);
      t3.push(o2);
    }
    return t3;
  }
  function ym(e) {
    let t3 = {};
    for (let r = 0;r < e.columns.length; r++)
      t3[e.columns[r]] = null;
    return t3;
  }
  function Em(e) {
    if (e) {
      if (e.kind === "batch")
        return { kind: "batch", options: { isolationLevel: e.isolationLevel } };
      if (e.kind === "itx")
        return { kind: "itx", options: kl(e) };
      Fe(e, "Unknown transaction kind");
    }
  }
  function kl(e) {
    return { id: e.id, payload: e.payload };
  }
  function wm(e, t3) {
    return Fn(e) && t3?.kind === "batch" && e.batchRequestIdx !== t3.index;
  }
  function xm(e) {
    return e.code === "P2009" || e.code === "P2012";
  }
  function Dl(e) {
    if (e.kind === "Union")
      return { kind: "Union", errors: e.errors.map(Dl) };
    if (Array.isArray(e.selectionPath)) {
      let [, ...t3] = e.selectionPath;
      return { ...e, selectionPath: t3 };
    }
    return e;
  }
  function jl(e, t3) {
    for (let [r, n2] of Object.entries(e)) {
      if (!Ll.includes(r)) {
        let i3 = qt(r, Ll);
        throw new F(`Unknown property ${r} provided to PrismaClient constructor.${i3}`);
      }
      vm[r](n2, t3);
    }
    if (e.datasourceUrl && e.datasources)
      throw new F('Can not use "datasourceUrl" and "datasources" options at the same time. Pick one of them');
  }
  function qt(e, t3) {
    if (t3.length === 0 || typeof e != "string")
      return "";
    let r = Tm(e, t3);
    return r ? ` Did you mean "${r}"?` : "";
  }
  function Tm(e, t3) {
    if (t3.length === 0)
      return null;
    let r = t3.map((i3) => ({ value: i3, distance: (0, ql.default)(e, i3) }));
    r.sort((i3, o2) => i3.distance < o2.distance ? -1 : 1);
    let n2 = r[0];
    return n2.distance < 3 ? n2.value : null;
  }
  function Rm(e, t3) {
    return $l(t3.models, e) ?? $l(t3.types, e);
  }
  function $l(e, t3) {
    let r = Object.keys(e).find((n2) => Mt(n2) === t3);
    if (r)
      return e[r];
  }
  function Cm(e, t3) {
    let r = Ot(e);
    for (let o2 of t3)
      switch (o2.kind) {
        case "UnknownModel":
          r.arguments.getField(o2.modelKey)?.markAsError(), r.addErrorMessage(() => `Unknown model name: ${o2.modelKey}.`);
          break;
        case "UnknownField":
          r.arguments.getDeepField([o2.modelKey, o2.fieldName])?.markAsError(), r.addErrorMessage(() => `Model "${o2.modelKey}" does not have a field named "${o2.fieldName}".`);
          break;
        case "RelationInOmit":
          r.arguments.getDeepField([o2.modelKey, o2.fieldName])?.markAsError(), r.addErrorMessage(() => 'Relations are already excluded by default and can not be specified in "omit".');
          break;
        case "InvalidFieldValue":
          r.arguments.getDeepFieldValue([o2.modelKey, o2.fieldName])?.markAsError(), r.addErrorMessage(() => "Omit field option value must be a boolean.");
          break;
      }
    let { message: n2, args: i3 } = yn(r, "colorless");
    return `Error validating "omit" option:

${i3}

${n2}`;
  }
  function Vl(e) {
    return e.length === 0 ? Promise.resolve([]) : new Promise((t3, r) => {
      let n2 = new Array(e.length), i3 = null, o2 = false, s = 0, a = () => {
        o2 || (s++, s === e.length && (o2 = true, i3 ? r(i3) : t3(n2)));
      }, l = (u) => {
        o2 || (o2 = true, r(u));
      };
      for (let u = 0;u < e.length; u++)
        e[u].then((c3) => {
          n2[u] = c3, a();
        }, (c3) => {
          if (!Fn(c3)) {
            l(c3);
            return;
          }
          c3.batchRequestIdx === u ? l(c3) : (i3 || (i3 = c3), a());
        });
    });
  }
  function Wl(e) {

    class t3 {
      constructor(n2) {
        this._originalClient = this;
        this._middlewares = new _n;
        this._createPrismaPromise = lo();
        this.$extends = sa;
        e = n2?.__internal?.configOverride?.(e) ?? e, va(e), n2 && jl(n2, e);
        let i3 = new Ql.EventEmitter().on("error", () => {
        });
        this._extensions = vn.empty(), this._previewFeatures = In(e), this._clientVersion = e.clientVersion ?? Fl, this._activeProvider = e.activeProvider, this._globalOmit = n2?.omit, this._tracingHelper = Rl(this._previewFeatures);
        let o2 = { rootEnvPath: e.relativeEnvPaths.rootEnvPath && _r.default.resolve(e.dirname, e.relativeEnvPaths.rootEnvPath), schemaEnvPath: e.relativeEnvPaths.schemaEnvPath && _r.default.resolve(e.dirname, e.relativeEnvPaths.schemaEnvPath) }, s;
        if (n2?.adapter) {
          s = Ci(n2.adapter);
          let l = e.activeProvider === "postgresql" ? "postgres" : e.activeProvider;
          if (s.provider !== l)
            throw new R(`The Driver Adapter \`${s.adapterName}\`, based on \`${s.provider}\`, is not compatible with the provider \`${l}\` specified in the Prisma schema.`, this._clientVersion);
          if (n2.datasources || n2.datasourceUrl !== undefined)
            throw new R("Custom datasource configuration is not compatible with Prisma Driver Adapters. Please define the database connection string directly in the Driver Adapter configuration.", this._clientVersion);
        }
        let a = !s && Ht(o2, { conflictCheck: "none" }) || e.injectableEdgeEnv?.();
        try {
          let l = n2 ?? {}, u = l.__internal ?? {}, c3 = u.debug === true;
          c3 && L.enable("prisma:client");
          let p3 = _r.default.resolve(e.dirname, e.relativePath);
          Jl.default.existsSync(p3) || (p3 = e.dirname), tt("dirname", e.dirname), tt("relativePath", e.relativePath), tt("cwd", p3);
          let d3 = u.engine || {};
          if (l.errorFormat ? this._errorFormat = l.errorFormat : process.env.NO_COLOR ? this._errorFormat = "colorless" : this._errorFormat = "colorless", this._runtimeDataModel = e.runtimeDataModel, this._engineConfig = { cwd: p3, dirname: e.dirname, enableDebugLogs: c3, allowTriggerPanic: d3.allowTriggerPanic, datamodelPath: _r.default.join(e.dirname, e.filename ?? "schema.prisma"), prismaPath: d3.binaryPath ?? undefined, engineEndpoint: d3.endpoint, generator: e.generator, showColors: this._errorFormat === "pretty", logLevel: l.log && Sl(l.log), logQueries: l.log && !!(typeof l.log == "string" ? l.log === "query" : l.log.find((f3) => typeof f3 == "string" ? f3 === "query" : f3.level === "query")), env: a?.parsed ?? {}, flags: [], engineWasm: e.engineWasm, clientVersion: e.clientVersion, engineVersion: e.engineVersion, previewFeatures: this._previewFeatures, activeProvider: e.activeProvider, inlineSchema: e.inlineSchema, overrideDatasources: Ta(l, e.datasourceNames), inlineDatasources: e.inlineDatasources, inlineSchemaHash: e.inlineSchemaHash, tracingHelper: this._tracingHelper, transactionOptions: { maxWait: l.transactionOptions?.maxWait ?? 2000, timeout: l.transactionOptions?.timeout ?? 5000, isolationLevel: l.transactionOptions?.isolationLevel }, logEmitter: i3, isBundled: e.isBundled, adapter: s }, this._accelerateEngineConfig = { ...this._engineConfig, accelerateUtils: { resolveDatasourceUrl: _t, getBatchRequestPayload: wt, prismaGraphQLToJSError: st, PrismaClientUnknownRequestError: B, PrismaClientInitializationError: R, PrismaClientKnownRequestError: V4, debug: L("prisma:client:accelerateEngine"), engineVersion: Ul.version, clientVersion: e.clientVersion } }, tt("clientVersion", e.clientVersion), this._engine = Ya(e, this._engineConfig), this._requestHandler = new Mn(this, i3), l.log)
            for (let f3 of l.log) {
              let g = typeof f3 == "string" ? f3 : f3.emit === "stdout" ? f3.level : null;
              g && this.$on(g, (h3) => {
                Zt.log(`${Zt.tags[g] ?? ""}`, h3.message || h3.query);
              });
            }
          this._metrics = new bt(this._engine);
        } catch (l) {
          throw l.clientVersion = this._clientVersion, l;
        }
        return this._appliedParent = dr(this);
      }
      get [Symbol.toStringTag]() {
        return "PrismaClient";
      }
      $use(n2) {
        this._middlewares.use(n2);
      }
      $on(n2, i3) {
        n2 === "beforeExit" ? this._engine.onBeforeExit(i3) : n2 && this._engineConfig.logEmitter.on(n2, i3);
      }
      $connect() {
        try {
          return this._engine.start();
        } catch (n2) {
          throw n2.clientVersion = this._clientVersion, n2;
        }
      }
      async $disconnect() {
        try {
          await this._engine.stop();
        } catch (n2) {
          throw n2.clientVersion = this._clientVersion, n2;
        } finally {
          Ro();
        }
      }
      $executeRawInternal(n2, i3, o2, s) {
        let a = this._activeProvider;
        return this._request({ action: "executeRaw", args: o2, transaction: n2, clientMethod: i3, argsMapper: ao({ clientMethod: i3, activeProvider: a }), callsite: Ze(this._errorFormat), dataPath: [], middlewareArgsMapper: s });
      }
      $executeRaw(n2, ...i3) {
        return this._createPrismaPromise((o2) => {
          if (n2.raw !== undefined || n2.sql !== undefined) {
            let [s, a] = Bl(n2, i3);
            return so(this._activeProvider, s.text, s.values, Array.isArray(n2) ? "prisma.$executeRaw`<SQL>`" : "prisma.$executeRaw(sql`<SQL>`)"), this.$executeRawInternal(o2, "$executeRaw", s, a);
          }
          throw new J("`$executeRaw` is a tag function, please use it like the following:\n```\nconst result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`\n```\n\nOr read our docs at https://www.prisma.io/docs/concepts/components/prisma-client/raw-database-access#executeraw\n", { clientVersion: this._clientVersion });
        });
      }
      $executeRawUnsafe(n2, ...i3) {
        return this._createPrismaPromise((o2) => (so(this._activeProvider, n2, i3, "prisma.$executeRawUnsafe(<SQL>, [...values])"), this.$executeRawInternal(o2, "$executeRawUnsafe", [n2, ...i3])));
      }
      $runCommandRaw(n2) {
        if (e.activeProvider !== "mongodb")
          throw new J(`The ${e.activeProvider} provider does not support \$runCommandRaw. Use the mongodb provider.`, { clientVersion: this._clientVersion });
        return this._createPrismaPromise((i3) => this._request({ args: n2, clientMethod: "$runCommandRaw", dataPath: [], action: "runCommandRaw", argsMapper: ml, callsite: Ze(this._errorFormat), transaction: i3 }));
      }
      async $queryRawInternal(n2, i3, o2, s) {
        let a = this._activeProvider;
        return this._request({ action: "queryRaw", args: o2, transaction: n2, clientMethod: i3, argsMapper: ao({ clientMethod: i3, activeProvider: a }), callsite: Ze(this._errorFormat), dataPath: [], middlewareArgsMapper: s });
      }
      $queryRaw(n2, ...i3) {
        return this._createPrismaPromise((o2) => {
          if (n2.raw !== undefined || n2.sql !== undefined)
            return this.$queryRawInternal(o2, "$queryRaw", ...Bl(n2, i3));
          throw new J("`$queryRaw` is a tag function, please use it like the following:\n```\nconst result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`\n```\n\nOr read our docs at https://www.prisma.io/docs/concepts/components/prisma-client/raw-database-access#queryraw\n", { clientVersion: this._clientVersion });
        });
      }
      $queryRawTyped(n2) {
        return this._createPrismaPromise((i3) => {
          if (!this._hasPreviewFlag("typedSql"))
            throw new J("`typedSql` preview feature must be enabled in order to access $queryRawTyped API", { clientVersion: this._clientVersion });
          return this.$queryRawInternal(i3, "$queryRawTyped", n2);
        });
      }
      $queryRawUnsafe(n2, ...i3) {
        return this._createPrismaPromise((o2) => this.$queryRawInternal(o2, "$queryRawUnsafe", [n2, ...i3]));
      }
      _transactionWithArray({ promises: n2, options: i3 }) {
        let o2 = Im.nextId(), s = Cl(n2.length), a = n2.map((l, u) => {
          if (l?.[Symbol.toStringTag] !== "PrismaPromise")
            throw new Error("All elements of the array need to be Prisma Client promises. Hint: Please make sure you are not awaiting the Prisma client calls you intended to pass in the $transaction function.");
          let c3 = i3?.isolationLevel ?? this._engineConfig.transactionOptions.isolationLevel, p3 = { kind: "batch", id: o2, index: u, isolationLevel: c3, lock: s };
          return l.requestTransaction?.(p3) ?? l;
        });
        return Vl(a);
      }
      async _transactionWithCallback({ callback: n2, options: i3 }) {
        let o2 = { traceparent: this._tracingHelper.getTraceParent() }, s = { maxWait: i3?.maxWait ?? this._engineConfig.transactionOptions.maxWait, timeout: i3?.timeout ?? this._engineConfig.transactionOptions.timeout, isolationLevel: i3?.isolationLevel ?? this._engineConfig.transactionOptions.isolationLevel }, a = await this._engine.transaction("start", o2, s), l;
        try {
          let u = { kind: "itx", ...a };
          l = await n2(this._createItxClient(u)), await this._engine.transaction("commit", o2, a);
        } catch (u) {
          throw await this._engine.transaction("rollback", o2, a).catch(() => {
          }), u;
        }
        return l;
      }
      _createItxClient(n2) {
        return dr(ve(oa(this), [re("_appliedParent", () => this._appliedParent._createItxClient(n2)), re("_createPrismaPromise", () => lo(n2)), re(Am, () => n2.id), Et(El)]));
      }
      $transaction(n2, i3) {
        let o2;
        typeof n2 == "function" ? this._engineConfig.adapter?.adapterName === "@prisma/adapter-d1" ? o2 = () => {
          throw new Error("Cloudflare D1 does not support interactive transactions. We recommend you to refactor your queries with that limitation in mind, and use batch transactions with `prisma.$transactions([])` where applicable.");
        } : o2 = () => this._transactionWithCallback({ callback: n2, options: i3 }) : o2 = () => this._transactionWithArray({ promises: n2, options: i3 });
        let s = { name: "transaction", attributes: { method: "$transaction" } };
        return this._tracingHelper.runInChildSpan(s, o2);
      }
      _request(n2) {
        n2.otelParentCtx = this._tracingHelper.getActiveContext();
        let i3 = n2.middlewareArgsMapper ?? Sm, o2 = { args: i3.requestArgsToMiddlewareArgs(n2.args), dataPath: n2.dataPath, runInTransaction: !!n2.transaction, action: n2.action, model: n2.model }, s = { middleware: { name: "middleware", middleware: true, attributes: { method: "$use" }, active: false }, operation: { name: "operation", attributes: { method: o2.action, model: o2.model, name: o2.model ? `${o2.model}.${o2.action}` : o2.action } } }, a = -1, l = async (u) => {
          let c3 = this._middlewares.get(++a);
          if (c3)
            return this._tracingHelper.runInChildSpan(s.middleware, (O) => c3(u, (T) => (O?.end(), l(T))));
          let { runInTransaction: p3, args: d3, ...f3 } = u, g = { ...n2, ...f3 };
          d3 && (g.args = i3.middlewareArgsToRequestArgs(d3)), n2.transaction !== undefined && p3 === false && delete g.transaction;
          let h3 = await ma(this, g);
          return g.model ? ua({ result: h3, modelName: g.model, args: g.args, extensions: this._extensions, runtimeDataModel: this._runtimeDataModel, globalOmit: this._globalOmit }) : h3;
        };
        return this._tracingHelper.runInChildSpan(s.operation, () => new Gl.AsyncResource("prisma-client-request").runInAsyncScope(() => l(o2)));
      }
      async _executeRequest({ args: n2, clientMethod: i3, dataPath: o2, callsite: s, action: a, model: l, argsMapper: u, transaction: c3, unpacker: p3, otelParentCtx: d3, customDataProxyFetch: f3 }) {
        try {
          n2 = u ? u(n2) : n2;
          let g = { name: "serialize" }, h3 = this._tracingHelper.runInChildSpan(g, () => cl({ modelName: l, runtimeDataModel: this._runtimeDataModel, action: a, args: n2, clientMethod: i3, callsite: s, extensions: this._extensions, errorFormat: this._errorFormat, clientVersion: this._clientVersion, previewFeatures: this._previewFeatures, globalOmit: this._globalOmit }));
          return L.enabled("prisma:client") && (tt("Prisma Client call:"), tt(`prisma.${i3}(${Vs(n2)})`), tt("Generated request:"), tt(JSON.stringify(h3, null, 2) + `
`)), c3?.kind === "batch" && await c3.lock, this._requestHandler.request({ protocolQuery: h3, modelName: l, action: a, clientMethod: i3, dataPath: o2, callsite: s, args: n2, extensions: this._extensions, transaction: c3, unpacker: p3, otelParentCtx: d3, otelChildCtx: this._tracingHelper.getActiveContext(), globalOmit: this._globalOmit, customDataProxyFetch: f3 });
        } catch (g) {
          throw g.clientVersion = this._clientVersion, g;
        }
      }
      get $metrics() {
        if (!this._hasPreviewFlag("metrics"))
          throw new J("`metrics` preview feature must be enabled in order to access metrics API", { clientVersion: this._clientVersion });
        return this._metrics;
      }
      _hasPreviewFlag(n2) {
        return !!this._engineConfig.previewFeatures?.includes(n2);
      }
      $applyPendingMigrations() {
        return this._engine.applyPendingMigrations();
      }
    }
    return t3;
  }
  function Bl(e, t3) {
    return Om(e) ? [new ie(e, t3), xl] : [e, Pl];
  }
  function Om(e) {
    return Array.isArray(e) && Array.isArray(e.raw);
  }
  function Hl(e) {
    return new Proxy(e, { get(t3, r) {
      if (r in t3)
        return t3[r];
      if (!km.has(r))
        throw new TypeError(`Invalid enum value: ${String(r)}`);
    } });
  }
  function Kl(e) {
    Ht(e, { conflictCheck: "warn" });
  }
  var __dirname = "D:\\leviathan-war\\backend\\backend-leviathan\\node_modules\\@prisma\\client\\runtime", __filename = "D:\\leviathan-war\\backend\\backend-leviathan\\node_modules\\@prisma\\client\\runtime\\library.js";
  var zl = Object.create;
  var Lr = Object.defineProperty;
  var Yl = Object.getOwnPropertyDescriptor;
  var Zl = Object.getOwnPropertyNames;
  var Xl = Object.getPrototypeOf;
  var eu = Object.prototype.hasOwnProperty;
  var Z = (e, t3) => () => (t3 || e((t3 = { exports: {} }).exports, t3), t3.exports);
  var Vt = (e, t3) => {
    for (var r in t3)
      Lr(e, r, { get: t3[r], enumerable: true });
  };
  var mo = (e, t3, r, n2) => {
    if (t3 && typeof t3 == "object" || typeof t3 == "function")
      for (let i3 of Zl(t3))
        !eu.call(e, i3) && i3 !== r && Lr(e, i3, { get: () => t3[i3], enumerable: !(n2 = Yl(t3, i3)) || n2.enumerable });
    return e;
  };
  var k3 = (e, t3, r) => (r = e != null ? zl(Xl(e)) : {}, mo(t3 || !e || !e.__esModule ? Lr(r, "default", { value: e, enumerable: true }) : r, e));
  var tu = (e) => mo(Lr({}, "__esModule", { value: true }), e);
  var Mo = Z((af, Yn) => {
    var v3 = Yn.exports;
    Yn.exports.default = v3;
    var D = "\x1B[", Jt = "\x1B]", ft = "\x07", Qr = ";", No = false;
    v3.cursorTo = (e, t3) => {
      if (typeof e != "number")
        throw new TypeError("The `x` argument is required");
      return typeof t3 != "number" ? D + (e + 1) + "G" : D + (t3 + 1) + ";" + (e + 1) + "H";
    };
    v3.cursorMove = (e, t3) => {
      if (typeof e != "number")
        throw new TypeError("The `x` argument is required");
      let r = "";
      return e < 0 ? r += D + -e + "D" : e > 0 && (r += D + e + "C"), t3 < 0 ? r += D + -t3 + "A" : t3 > 0 && (r += D + t3 + "B"), r;
    };
    v3.cursorUp = (e = 1) => D + e + "A";
    v3.cursorDown = (e = 1) => D + e + "B";
    v3.cursorForward = (e = 1) => D + e + "C";
    v3.cursorBackward = (e = 1) => D + e + "D";
    v3.cursorLeft = D + "G";
    v3.cursorSavePosition = No ? "\x1B7" : D + "s";
    v3.cursorRestorePosition = No ? "\x1B8" : D + "u";
    v3.cursorGetPosition = D + "6n";
    v3.cursorNextLine = D + "E";
    v3.cursorPrevLine = D + "F";
    v3.cursorHide = D + "?25l";
    v3.cursorShow = D + "?25h";
    v3.eraseLines = (e) => {
      let t3 = "";
      for (let r = 0;r < e; r++)
        t3 += v3.eraseLine + (r < e - 1 ? v3.cursorUp() : "");
      return e && (t3 += v3.cursorLeft), t3;
    };
    v3.eraseEndLine = D + "K";
    v3.eraseStartLine = D + "1K";
    v3.eraseLine = D + "2K";
    v3.eraseDown = D + "J";
    v3.eraseUp = D + "1J";
    v3.eraseScreen = D + "2J";
    v3.scrollUp = D + "S";
    v3.scrollDown = D + "T";
    v3.clearScreen = "\x1Bc";
    v3.clearTerminal = process.platform === "win32" ? `${v3.eraseScreen}${D}0f` : `${v3.eraseScreen}${D}3J${D}H`;
    v3.beep = ft;
    v3.link = (e, t3) => [Jt, "8", Qr, Qr, t3, ft, e, Jt, "8", Qr, Qr, ft].join("");
    v3.image = (e, t3 = {}) => {
      let r = `${Jt}1337;File=inline=1`;
      return t3.width && (r += `;width=${t3.width}`), t3.height && (r += `;height=${t3.height}`), t3.preserveAspectRatio === false && (r += ";preserveAspectRatio=0"), r + ":" + e.toString("base64") + ft;
    };
    v3.iTerm = { setCwd: (e = process.cwd()) => `${Jt}50;CurrentDir=${e}${ft}`, annotation: (e, t3 = {}) => {
      let r = `${Jt}1337;`, n2 = typeof t3.x < "u", i3 = typeof t3.y < "u";
      if ((n2 || i3) && !(n2 && i3 && typeof t3.length < "u"))
        throw new Error("`x`, `y` and `length` must be defined when `x` or `y` is defined");
      return e = e.replace(/\|/g, ""), r += t3.isHidden ? "AddHiddenAnnotation=" : "AddAnnotation=", t3.length > 0 ? r += (n2 ? [e, t3.length, t3.x, t3.y] : [t3.length, e]).join("|") : r += e, r + ft;
    } };
  });
  var Zn = Z((lf, $o) => {
    $o.exports = (e, t3 = process.argv) => {
      let r = e.startsWith("-") ? "" : e.length === 1 ? "-" : "--", n2 = t3.indexOf(r + e), i3 = t3.indexOf("--");
      return n2 !== -1 && (i3 === -1 || n2 < i3);
    };
  });
  var Vo = Z((uf, jo) => {
    var ju = import.meta.require("os"), qo = import.meta.require("tty"), de = Zn(), { env: Q } = process, Qe;
    de("no-color") || de("no-colors") || de("color=false") || de("color=never") ? Qe = 0 : (de("color") || de("colors") || de("color=true") || de("color=always")) && (Qe = 1);
    "FORCE_COLOR" in Q && (Q.FORCE_COLOR === "true" ? Qe = 1 : Q.FORCE_COLOR === "false" ? Qe = 0 : Qe = Q.FORCE_COLOR.length === 0 ? 1 : Math.min(parseInt(Q.FORCE_COLOR, 10), 3));
    function Xn(e) {
      return e === 0 ? false : { level: e, hasBasic: true, has256: e >= 2, has16m: e >= 3 };
    }
    function ei(e, t3) {
      if (Qe === 0)
        return 0;
      if (de("color=16m") || de("color=full") || de("color=truecolor"))
        return 3;
      if (de("color=256"))
        return 2;
      if (e && !t3 && Qe === undefined)
        return 0;
      let r = Qe || 0;
      if (Q.TERM === "dumb")
        return r;
      if (process.platform === "win32") {
        let n2 = ju.release().split(".");
        return Number(n2[0]) >= 10 && Number(n2[2]) >= 10586 ? Number(n2[2]) >= 14931 ? 3 : 2 : 1;
      }
      if ("CI" in Q)
        return ["TRAVIS", "CIRCLECI", "APPVEYOR", "GITLAB_CI", "GITHUB_ACTIONS", "BUILDKITE"].some((n2) => (n2 in Q)) || Q.CI_NAME === "codeship" ? 1 : r;
      if ("TEAMCITY_VERSION" in Q)
        return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(Q.TEAMCITY_VERSION) ? 1 : 0;
      if (Q.COLORTERM === "truecolor")
        return 3;
      if ("TERM_PROGRAM" in Q) {
        let n2 = parseInt((Q.TERM_PROGRAM_VERSION || "").split(".")[0], 10);
        switch (Q.TERM_PROGRAM) {
          case "iTerm.app":
            return n2 >= 3 ? 3 : 2;
          case "Apple_Terminal":
            return 2;
        }
      }
      return /-256(color)?$/i.test(Q.TERM) ? 2 : /^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(Q.TERM) || ("COLORTERM" in Q) ? 1 : r;
    }
    function Vu(e) {
      let t3 = ei(e, e && e.isTTY);
      return Xn(t3);
    }
    jo.exports = { supportsColor: Vu, stdout: Xn(ei(true, qo.isatty(1))), stderr: Xn(ei(true, qo.isatty(2))) };
  });
  var Go = Z((cf, Uo) => {
    var Bu = Vo(), gt = Zn();
    function Bo(e) {
      if (/^\d{3,4}$/.test(e)) {
        let r = /(\d{1,2})(\d{2})/.exec(e);
        return { major: 0, minor: parseInt(r[1], 10), patch: parseInt(r[2], 10) };
      }
      let t3 = (e || "").split(".").map((r) => parseInt(r, 10));
      return { major: t3[0], minor: t3[1], patch: t3[2] };
    }
    function ti(e) {
      let { env: t3 } = process;
      if ("FORCE_HYPERLINK" in t3)
        return !(t3.FORCE_HYPERLINK.length > 0 && parseInt(t3.FORCE_HYPERLINK, 10) === 0);
      if (gt("no-hyperlink") || gt("no-hyperlinks") || gt("hyperlink=false") || gt("hyperlink=never"))
        return false;
      if (gt("hyperlink=true") || gt("hyperlink=always") || "NETLIFY" in t3)
        return true;
      if (!Bu.supportsColor(e) || e && !e.isTTY || process.platform === "win32" || "CI" in t3 || "TEAMCITY_VERSION" in t3)
        return false;
      if ("TERM_PROGRAM" in t3) {
        let r = Bo(t3.TERM_PROGRAM_VERSION);
        switch (t3.TERM_PROGRAM) {
          case "iTerm.app":
            return r.major === 3 ? r.minor >= 1 : r.major > 3;
          case "WezTerm":
            return r.major >= 20200620;
          case "vscode":
            return r.major > 1 || r.major === 1 && r.minor >= 72;
        }
      }
      if ("VTE_VERSION" in t3) {
        if (t3.VTE_VERSION === "0.50.0")
          return false;
        let r = Bo(t3.VTE_VERSION);
        return r.major > 0 || r.minor >= 50;
      }
      return false;
    }
    Uo.exports = { supportsHyperlink: ti, stdout: ti(process.stdout), stderr: ti(process.stderr) };
  });
  var Jo = Z((pf, Wt) => {
    var Uu = Mo(), ri = Go(), Qo = (e, t3, { target: r = "stdout", ...n2 } = {}) => ri[r] ? Uu.link(e, t3) : n2.fallback === false ? e : typeof n2.fallback == "function" ? n2.fallback(e, t3) : `${e} (\u200B${t3}\u200B)`;
    Wt.exports = (e, t3, r = {}) => Qo(e, t3, r);
    Wt.exports.stderr = (e, t3, r = {}) => Qo(e, t3, { target: "stderr", ...r });
    Wt.exports.isSupported = ri.stdout;
    Wt.exports.stderr.isSupported = ri.stderr;
  });
  var ii = Z((xf, Gu) => {
    Gu.exports = { name: "@prisma/engines-version", version: "5.21.0-36.08713a93b99d58f31485621c634b04983ae01d95", main: "index.js", types: "index.d.ts", license: "Apache-2.0", author: "Tim Suchanek <suchanek@prisma.io>", prisma: { enginesVersion: "08713a93b99d58f31485621c634b04983ae01d95" }, repository: { type: "git", url: "https://github.com/prisma/engines-wrapper.git", directory: "packages/engines-version" }, devDependencies: { "@types/node": "18.19.34", typescript: "4.9.5" }, files: ["index.js", "index.d.ts"], scripts: { build: "tsc -d" } };
  });
  var oi = Z((Jr) => {
    Object.defineProperty(Jr, "__esModule", { value: true });
    Jr.enginesVersion = undefined;
    Jr.enginesVersion = ii().prisma.enginesVersion;
  });
  var zo = Z((jf, Wu) => {
    Wu.exports = { name: "dotenv", version: "16.0.3", description: "Loads environment variables from .env file", main: "lib/main.js", types: "lib/main.d.ts", exports: { ".": { require: "./lib/main.js", types: "./lib/main.d.ts", default: "./lib/main.js" }, "./config": "./config.js", "./config.js": "./config.js", "./lib/env-options": "./lib/env-options.js", "./lib/env-options.js": "./lib/env-options.js", "./lib/cli-options": "./lib/cli-options.js", "./lib/cli-options.js": "./lib/cli-options.js", "./package.json": "./package.json" }, scripts: { "dts-check": "tsc --project tests/types/tsconfig.json", lint: "standard", "lint-readme": "standard-markdown", pretest: "npm run lint && npm run dts-check", test: "tap tests/*.js --100 -Rspec", prerelease: "npm test", release: "standard-version" }, repository: { type: "git", url: "git://github.com/motdotla/dotenv.git" }, keywords: ["dotenv", "env", ".env", "environment", "variables", "config", "settings"], readmeFilename: "README.md", license: "BSD-2-Clause", devDependencies: { "@types/node": "^17.0.9", decache: "^4.6.1", dtslint: "^3.7.0", sinon: "^12.0.1", standard: "^16.0.4", "standard-markdown": "^7.1.0", "standard-version": "^9.3.2", tap: "^15.1.6", tar: "^6.1.11", typescript: "^4.5.4" }, engines: { node: ">=12" } };
  });
  var Zo = Z((Vf, Hr) => {
    var Hu = import.meta.require("fs"), Yo = import.meta.require("path"), Ku = import.meta.require("os"), zu = zo(), Yu = zu.version, Zu = /(?:^|^)\s*(?:export\s+)?([\w.-]+)(?:\s*=\s*?|:\s+?)(\s*'(?:\\'|[^'])*'|\s*"(?:\\"|[^"])*"|\s*`(?:\\`|[^`])*`|[^#\r\n]+)?\s*(?:#.*)?(?:$|$)/mg;
    function Xu(e) {
      let t3 = {}, r = e.toString();
      r = r.replace(/\r\n?/mg, `
`);
      let n2;
      for (;(n2 = Zu.exec(r)) != null; ) {
        let i3 = n2[1], o2 = n2[2] || "";
        o2 = o2.trim();
        let s = o2[0];
        o2 = o2.replace(/^(['"`])([\s\S]*)\1$/mg, "$2"), s === '"' && (o2 = o2.replace(/\\n/g, `
`), o2 = o2.replace(/\\r/g, "\r")), t3[i3] = o2;
      }
      return t3;
    }
    function ui(e) {
      console.log(`[dotenv@${Yu}][DEBUG] ${e}`);
    }
    function ec(e) {
      return e[0] === "~" ? Yo.join(Ku.homedir(), e.slice(1)) : e;
    }
    function tc(e) {
      let t3 = Yo.resolve(process.cwd(), ".env"), r = "utf8", n2 = !!(e && e.debug), i3 = !!(e && e.override);
      e && (e.path != null && (t3 = ec(e.path)), e.encoding != null && (r = e.encoding));
      try {
        let o2 = Wr.parse(Hu.readFileSync(t3, { encoding: r }));
        return Object.keys(o2).forEach(function(s) {
          Object.prototype.hasOwnProperty.call(process.env, s) ? (i3 === true && (process.env[s] = o2[s]), n2 && ui(i3 === true ? `"${s}" is already defined in \`process.env\` and WAS overwritten` : `"${s}" is already defined in \`process.env\` and was NOT overwritten`)) : process.env[s] = o2[s];
        }), { parsed: o2 };
      } catch (o2) {
        return n2 && ui(`Failed to load ${t3} ${o2.message}`), { error: o2 };
      }
    }
    var Wr = { config: tc, parse: Xu };
    Hr.exports.config = Wr.config;
    Hr.exports.parse = Wr.parse;
    Hr.exports = Wr;
  });
  var is = Z((Hf, ns) => {
    ns.exports = (e) => {
      let t3 = e.match(/^[ \t]*(?=\S)/gm);
      return t3 ? t3.reduce((r, n2) => Math.min(r, n2.length), 1 / 0) : 0;
    };
  });
  var ss = Z((Kf, os) => {
    var oc = is();
    os.exports = (e) => {
      let t3 = oc(e);
      if (t3 === 0)
        return e;
      let r = new RegExp(`^[ \\t]{${t3}}`, "gm");
      return e.replace(r, "");
    };
  });
  var mi = Z((tg, as) => {
    as.exports = (e, t3 = 1, r) => {
      if (r = { indent: " ", includeEmptyLines: false, ...r }, typeof e != "string")
        throw new TypeError(`Expected \`input\` to be a \`string\`, got \`${typeof e}\``);
      if (typeof t3 != "number")
        throw new TypeError(`Expected \`count\` to be a \`number\`, got \`${typeof t3}\``);
      if (typeof r.indent != "string")
        throw new TypeError(`Expected \`options.indent\` to be a \`string\`, got \`${typeof r.indent}\``);
      if (t3 === 0)
        return e;
      let n2 = r.includeEmptyLines ? /^/gm : /^(?!\s*$)/gm;
      return e.replace(n2, r.indent.repeat(t3));
    };
  });
  var ps = Z((ig, cs) => {
    cs.exports = ({ onlyFirst: e = false } = {}) => {
      let t3 = ["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)", "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))"].join("|");
      return new RegExp(t3, e ? undefined : "g");
    };
  });
  var yi = Z((og, ds) => {
    var mc = ps();
    ds.exports = (e) => typeof e == "string" ? e.replace(mc(), "") : e;
  });
  var ms = Z((lg, Yr) => {
    Yr.exports = (e = {}) => {
      let t3;
      if (e.repoUrl)
        t3 = e.repoUrl;
      else if (e.user && e.repo)
        t3 = `https://github.com/${e.user}/${e.repo}`;
      else
        throw new Error("You need to specify either the `repoUrl` option or both the `user` and `repo` options");
      let r = new URL(`${t3}/issues/new`), n2 = ["body", "title", "labels", "template", "milestone", "assignee", "projects"];
      for (let i3 of n2) {
        let o2 = e[i3];
        if (o2 !== undefined) {
          if (i3 === "labels" || i3 === "projects") {
            if (!Array.isArray(o2))
              throw new TypeError(`The \`${i3}\` option should be an array`);
            o2 = o2.join(",");
          }
          r.searchParams.set(i3, o2);
        }
      }
      return r.toString();
    };
    Yr.exports.default = Yr.exports;
  });
  var no = Z((av, Za) => {
    Za.exports = function() {
      function e(t3, r, n2, i3, o2) {
        return t3 < r || n2 < r ? t3 > n2 ? n2 + 1 : t3 + 1 : i3 === o2 ? r : r + 1;
      }
      return function(t3, r) {
        if (t3 === r)
          return 0;
        if (t3.length > r.length) {
          var n2 = t3;
          t3 = r, r = n2;
        }
        for (var i3 = t3.length, o2 = r.length;i3 > 0 && t3.charCodeAt(i3 - 1) === r.charCodeAt(o2 - 1); )
          i3--, o2--;
        for (var s = 0;s < i3 && t3.charCodeAt(s) === r.charCodeAt(s); )
          s++;
        if (i3 -= s, o2 -= s, i3 === 0 || o2 < 3)
          return o2;
        var a = 0, l, u, c3, p3, d3, f3, g, h3, O, T, S, C, E = [];
        for (l = 0;l < i3; l++)
          E.push(l + 1), E.push(t3.charCodeAt(s + l));
        for (var me = E.length - 1;a < o2 - 3; )
          for (O = r.charCodeAt(s + (u = a)), T = r.charCodeAt(s + (c3 = a + 1)), S = r.charCodeAt(s + (p3 = a + 2)), C = r.charCodeAt(s + (d3 = a + 3)), f3 = a += 4, l = 0;l < me; l += 2)
            g = E[l], h3 = E[l + 1], u = e(g, u, c3, O, h3), c3 = e(u, c3, p3, T, h3), p3 = e(c3, p3, d3, S, h3), f3 = e(p3, d3, f3, C, h3), E[l] = f3, d3 = p3, p3 = c3, c3 = u, u = g;
        for (;a < o2; )
          for (O = r.charCodeAt(s + (u = a)), f3 = ++a, l = 0;l < me; l += 2)
            g = E[l], E[l] = f3 = e(g, u, f3, O, E[l + 1]), u = g;
        return f3;
      };
    }();
  });
  var Dm = {};
  Vt(Dm, { Debug: () => Un, Decimal: () => Re, Extensions: () => qn, MetricsClient: () => bt, NotFoundError: () => Le, PrismaClientInitializationError: () => R, PrismaClientKnownRequestError: () => V4, PrismaClientRustPanicError: () => le, PrismaClientUnknownRequestError: () => B, PrismaClientValidationError: () => J, Public: () => jn, Sql: () => ie, defineDmmfProperty: () => gs, empty: () => Es, getPrismaClient: () => Wl, getRuntime: () => Tn, join: () => bs, makeStrictEnum: () => Hl, makeTypedQueryFactory: () => ys, objectEnumValues: () => en, raw: () => Si, skip: () => tn, sqltag: () => Ai, warnEnvConflicts: () => Kl, warnOnce: () => Xt });
  module.exports = tu(Dm);
  var qn = {};
  Vt(qn, { defineExtension: () => fo, getExtensionContext: () => go });
  var jn = {};
  Vt(jn, { validator: () => ho });
  var Nr = {};
  Vt(Nr, { $: () => xo, bgBlack: () => pu, bgBlue: () => gu, bgCyan: () => yu, bgGreen: () => mu, bgMagenta: () => hu, bgRed: () => du, bgWhite: () => bu, bgYellow: () => fu, black: () => au, blue: () => rt, bold: () => H, cyan: () => De, dim: () => Oe, gray: () => Bt, green: () => qe, grey: () => cu, hidden: () => ou, inverse: () => iu, italic: () => nu, magenta: () => lu, red: () => ce, reset: () => ru, strikethrough: () => su, underline: () => X, white: () => uu, yellow: () => ke });
  var Vn;
  var yo;
  var bo;
  var Eo;
  var wo = true;
  typeof process < "u" && ({ FORCE_COLOR: Vn, NODE_DISABLE_COLORS: yo, NO_COLOR: bo, TERM: Eo } = process.env || {}, wo = process.stdout && process.stdout.isTTY);
  var xo = { enabled: !yo && bo == null && Eo !== "dumb" && (Vn != null && Vn !== "0" || wo) };
  var ru = M(0, 0);
  var H = M(1, 22);
  var Oe = M(2, 22);
  var nu = M(3, 23);
  var X = M(4, 24);
  var iu = M(7, 27);
  var ou = M(8, 28);
  var su = M(9, 29);
  var au = M(30, 39);
  var ce = M(31, 39);
  var qe = M(32, 39);
  var ke = M(33, 39);
  var rt = M(34, 39);
  var lu = M(35, 39);
  var De = M(36, 39);
  var uu = M(37, 39);
  var Bt = M(90, 39);
  var cu = M(90, 39);
  var pu = M(40, 49);
  var du = M(41, 49);
  var mu = M(42, 49);
  var fu = M(43, 49);
  var gu = M(44, 49);
  var hu = M(45, 49);
  var yu = M(46, 49);
  var bu = M(47, 49);
  var Eu = 100;
  var Po = ["green", "yellow", "blue", "magenta", "cyan", "red"];
  var Ut = [];
  var vo = Date.now();
  var wu = 0;
  var Bn = typeof process < "u" ? process.env : {};
  globalThis.DEBUG ??= Bn.DEBUG ?? "";
  globalThis.DEBUG_COLORS ??= Bn.DEBUG_COLORS ? Bn.DEBUG_COLORS === "true" : true;
  var Gt = { enable(e) {
    typeof e == "string" && (globalThis.DEBUG = e);
  }, disable() {
    let e = globalThis.DEBUG;
    return globalThis.DEBUG = "", e;
  }, enabled(e) {
    let t3 = globalThis.DEBUG.split(",").map((i3) => i3.replace(/[.+?^${}()|[\]\\]/g, "\\$&")), r = t3.some((i3) => i3 === "" || i3[0] === "-" ? false : e.match(RegExp(i3.split("*").join(".*") + "$"))), n2 = t3.some((i3) => i3 === "" || i3[0] !== "-" ? false : e.match(RegExp(i3.slice(1).split("*").join(".*") + "$")));
    return r && !n2;
  }, log: (...e) => {
    let [t3, r, ...n2] = e;
    (console.warn ?? console.log)(`${t3} ${r}`, ...n2);
  }, formatters: {} };
  var Un = new Proxy(xu, { get: (e, t3) => Gt[t3], set: (e, t3, r) => Gt[t3] = r });
  var L = Un;
  var Co = k3(import.meta.require("fs"));
  var Qn = ["darwin", "darwin-arm64", "debian-openssl-1.0.x", "debian-openssl-1.1.x", "debian-openssl-3.0.x", "rhel-openssl-1.0.x", "rhel-openssl-1.1.x", "rhel-openssl-3.0.x", "linux-arm64-openssl-1.1.x", "linux-arm64-openssl-1.0.x", "linux-arm64-openssl-3.0.x", "linux-arm-openssl-1.1.x", "linux-arm-openssl-1.0.x", "linux-arm-openssl-3.0.x", "linux-musl", "linux-musl-openssl-3.0.x", "linux-musl-arm64-openssl-1.1.x", "linux-musl-arm64-openssl-3.0.x", "linux-nixos", "linux-static-x64", "linux-static-arm64", "windows", "freebsd11", "freebsd12", "freebsd13", "freebsd14", "freebsd15", "openbsd", "netbsd", "arm"];
  var Mr = "libquery_engine";
  var Oo = k3(import.meta.require("child_process"));
  var Kn = k3(import.meta.require("fs/promises"));
  var Ur = k3(import.meta.require("os"));
  var _e = Symbol.for("@ts-pattern/matcher");
  var vu = Symbol.for("@ts-pattern/isVariadic");
  var jr = "@ts-pattern/anonymous-select-key";
  var Jn = (e) => !!(e && typeof e == "object");
  var qr = (e) => e && !!e[_e];
  var Ee = (e, t3, r) => {
    if (qr(e)) {
      let n2 = e[_e](), { matched: i3, selections: o2 } = n2.match(t3);
      return i3 && o2 && Object.keys(o2).forEach((s) => r(s, o2[s])), i3;
    }
    if (Jn(e)) {
      if (!Jn(t3))
        return false;
      if (Array.isArray(e)) {
        if (!Array.isArray(t3))
          return false;
        let n2 = [], i3 = [], o2 = [];
        for (let s of e.keys()) {
          let a = e[s];
          qr(a) && a[vu] ? o2.push(a) : o2.length ? i3.push(a) : n2.push(a);
        }
        if (o2.length) {
          if (o2.length > 1)
            throw new Error("Pattern error: Using `...P.array(...)` several times in a single pattern is not allowed.");
          if (t3.length < n2.length + i3.length)
            return false;
          let s = t3.slice(0, n2.length), a = i3.length === 0 ? [] : t3.slice(-i3.length), l = t3.slice(n2.length, i3.length === 0 ? 1 / 0 : -i3.length);
          return n2.every((u, c3) => Ee(u, s[c3], r)) && i3.every((u, c3) => Ee(u, a[c3], r)) && (o2.length === 0 || Ee(o2[0], l, r));
        }
        return e.length === t3.length && e.every((s, a) => Ee(s, t3[a], r));
      }
      return Object.keys(e).every((n2) => {
        let i3 = e[n2];
        return ((n2 in t3) || qr(o2 = i3) && o2[_e]().matcherType === "optional") && Ee(i3, t3[n2], r);
        var o2;
      });
    }
    return Object.is(t3, e);
  };
  var Ge = (e) => {
    var t3, r, n2;
    return Jn(e) ? qr(e) ? (t3 = (r = (n2 = e[_e]()).getSelectionKeys) == null ? undefined : r.call(n2)) != null ? t3 : [] : Array.isArray(e) ? Qt(e, Ge) : Qt(Object.values(e), Ge) : [];
  };
  var Qt = (e, t3) => e.reduce((r, n2) => r.concat(t3(n2)), []);
  var Qm = pe(I(function(e) {
    return true;
  }));
  var Be = (e) => Object.assign(pe(e), { startsWith: (t3) => {
    return Be(j(e, (r = t3, I((n2) => je(n2) && n2.startsWith(r)))));
    var r;
  }, endsWith: (t3) => {
    return Be(j(e, (r = t3, I((n2) => je(n2) && n2.endsWith(r)))));
    var r;
  }, minLength: (t3) => Be(j(e, ((r) => I((n2) => je(n2) && n2.length >= r))(t3))), length: (t3) => Be(j(e, ((r) => I((n2) => je(n2) && n2.length === r))(t3))), maxLength: (t3) => Be(j(e, ((r) => I((n2) => je(n2) && n2.length <= r))(t3))), includes: (t3) => {
    return Be(j(e, (r = t3, I((n2) => je(n2) && n2.includes(r)))));
    var r;
  }, regex: (t3) => {
    return Be(j(e, (r = t3, I((n2) => je(n2) && !!n2.match(r)))));
    var r;
  } });
  var Jm = Be(I(je));
  var be = (e) => Object.assign(pe(e), { between: (t3, r) => be(j(e, ((n2, i3) => I((o2) => ye(o2) && n2 <= o2 && i3 >= o2))(t3, r))), lt: (t3) => be(j(e, ((r) => I((n2) => ye(n2) && n2 < r))(t3))), gt: (t3) => be(j(e, ((r) => I((n2) => ye(n2) && n2 > r))(t3))), lte: (t3) => be(j(e, ((r) => I((n2) => ye(n2) && n2 <= r))(t3))), gte: (t3) => be(j(e, ((r) => I((n2) => ye(n2) && n2 >= r))(t3))), int: () => be(j(e, I((t3) => ye(t3) && Number.isInteger(t3)))), finite: () => be(j(e, I((t3) => ye(t3) && Number.isFinite(t3)))), positive: () => be(j(e, I((t3) => ye(t3) && t3 > 0))), negative: () => be(j(e, I((t3) => ye(t3) && t3 < 0))) });
  var Wm = be(I(ye));
  var Ue = (e) => Object.assign(pe(e), { between: (t3, r) => Ue(j(e, ((n2, i3) => I((o2) => Ve(o2) && n2 <= o2 && i3 >= o2))(t3, r))), lt: (t3) => Ue(j(e, ((r) => I((n2) => Ve(n2) && n2 < r))(t3))), gt: (t3) => Ue(j(e, ((r) => I((n2) => Ve(n2) && n2 > r))(t3))), lte: (t3) => Ue(j(e, ((r) => I((n2) => Ve(n2) && n2 <= r))(t3))), gte: (t3) => Ue(j(e, ((r) => I((n2) => Ve(n2) && n2 >= r))(t3))), positive: () => Ue(j(e, I((t3) => Ve(t3) && t3 > 0))), negative: () => Ue(j(e, I((t3) => Ve(t3) && t3 < 0))) });
  var Hm = Ue(I(Ve));
  var Km = pe(I(function(e) {
    return typeof e == "boolean";
  }));
  var zm = pe(I(function(e) {
    return typeof e == "symbol";
  }));
  var Ym = pe(I(function(e) {
    return e == null;
  }));
  var Zm = pe(I(function(e) {
    return e != null;
  }));
  var Wn = { matched: false, value: undefined };
  var Hn = class e {
    constructor(t3, r) {
      this.input = undefined, this.state = undefined, this.input = t3, this.state = r;
    }
    with(...t3) {
      if (this.state.matched)
        return this;
      let r = t3[t3.length - 1], n2 = [t3[0]], i3;
      t3.length === 3 && typeof t3[1] == "function" ? i3 = t3[1] : t3.length > 2 && n2.push(...t3.slice(1, t3.length - 1));
      let o2 = false, s = {}, a = (u, c3) => {
        o2 = true, s[u] = c3;
      }, l = !n2.some((u) => Ee(u, this.input, a)) || i3 && !i3(this.input) ? Wn : { matched: true, value: r(o2 ? jr in s ? s[jr] : s : this.input, this.input) };
      return new e(this.input, l);
    }
    when(t3, r) {
      if (this.state.matched)
        return this;
      let n2 = !!t3(this.input);
      return new e(this.input, n2 ? { matched: true, value: r(this.input, this.input) } : Wn);
    }
    otherwise(t3) {
      return this.state.matched ? this.state.value : t3(this.input);
    }
    exhaustive() {
      if (this.state.matched)
        return this.state.value;
      let t3;
      try {
        t3 = JSON.stringify(this.input);
      } catch {
        t3 = this.input;
      }
      throw new Error(`Pattern matching error: no pattern matches value ${t3}`);
    }
    run() {
      return this.exhaustive();
    }
    returnType() {
      return this;
    }
  };
  var ko = import.meta.require("util");
  var Cu = { warn: ke("prisma:warn") };
  var Su = { warn: () => !process.env.PRISMA_DISABLE_WARNINGS };
  var Au = (0, ko.promisify)(Oo.default.exec);
  var te = L("prisma:get-platform");
  var Iu = ["1.0.x", "1.1.x", "3.0.x"];
  var Br = {};
  var Wo = k3(Jo());
  var Qu = k3(oi());
  var $ = k3(import.meta.require("path"));
  var Ju = k3(oi());
  var kf = L("prisma:engines");
  var Df = "libquery-engine";
  $.default.join(__dirname, "../query-engine-darwin");
  $.default.join(__dirname, "../query-engine-darwin-arm64");
  $.default.join(__dirname, "../query-engine-debian-openssl-1.0.x");
  $.default.join(__dirname, "../query-engine-debian-openssl-1.1.x");
  $.default.join(__dirname, "../query-engine-debian-openssl-3.0.x");
  $.default.join(__dirname, "../query-engine-linux-static-x64");
  $.default.join(__dirname, "../query-engine-linux-static-arm64");
  $.default.join(__dirname, "../query-engine-rhel-openssl-1.0.x");
  $.default.join(__dirname, "../query-engine-rhel-openssl-1.1.x");
  $.default.join(__dirname, "../query-engine-rhel-openssl-3.0.x");
  $.default.join(__dirname, "../libquery_engine-darwin.dylib.node");
  $.default.join(__dirname, "../libquery_engine-darwin-arm64.dylib.node");
  $.default.join(__dirname, "../libquery_engine-debian-openssl-1.0.x.so.node");
  $.default.join(__dirname, "../libquery_engine-debian-openssl-1.1.x.so.node");
  $.default.join(__dirname, "../libquery_engine-debian-openssl-3.0.x.so.node");
  $.default.join(__dirname, "../libquery_engine-linux-arm64-openssl-1.0.x.so.node");
  $.default.join(__dirname, "../libquery_engine-linux-arm64-openssl-1.1.x.so.node");
  $.default.join(__dirname, "../libquery_engine-linux-arm64-openssl-3.0.x.so.node");
  $.default.join(__dirname, "../libquery_engine-linux-musl.so.node");
  $.default.join(__dirname, "../libquery_engine-linux-musl-openssl-3.0.x.so.node");
  $.default.join(__dirname, "../libquery_engine-rhel-openssl-1.0.x.so.node");
  $.default.join(__dirname, "../libquery_engine-rhel-openssl-1.1.x.so.node");
  $.default.join(__dirname, "../libquery_engine-rhel-openssl-3.0.x.so.node");
  $.default.join(__dirname, "../query_engine-windows.dll.node");
  var si = k3(import.meta.require("fs"));
  var Ko = L("chmodPlusX");
  var pi = k3(Zo());
  var Kr = k3(import.meta.require("fs"));
  var ht = k3(import.meta.require("path"));
  var ci = L("prisma:tryLoadEnv");
  var rs = "library";
  var Je;
  ((t3) => {
    let e;
    ((E) => (E.findUnique = "findUnique", E.findUniqueOrThrow = "findUniqueOrThrow", E.findFirst = "findFirst", E.findFirstOrThrow = "findFirstOrThrow", E.findMany = "findMany", E.create = "create", E.createMany = "createMany", E.createManyAndReturn = "createManyAndReturn", E.update = "update", E.updateMany = "updateMany", E.upsert = "upsert", E.delete = "delete", E.deleteMany = "deleteMany", E.groupBy = "groupBy", E.count = "count", E.aggregate = "aggregate", E.findRaw = "findRaw", E.aggregateRaw = "aggregateRaw"))(e = t3.ModelAction ||= {});
  })(Je ||= {});
  var zt = k3(import.meta.require("path"));
  var ls = k3(mi());
  var fi = class {
    constructor(t3) {
      this.config = t3;
    }
    toString() {
      let { config: t3 } = this, r = t3.provider.fromEnvVar ? `env("${t3.provider.fromEnvVar}")` : t3.provider.value, n2 = JSON.parse(JSON.stringify({ provider: r, binaryTargets: sc(t3.binaryTargets) }));
      return `generator ${t3.name} {
${(0, ls.default)(ac(n2), 2)}
}`;
    }
  };
  var Zt = {};
  Vt(Zt, { error: () => pc, info: () => cc, log: () => uc, query: () => dc, should: () => us, tags: () => Yt, warn: () => hi });
  var Yt = { error: ce("prisma:error"), warn: ke("prisma:warn"), info: De("prisma:info"), query: rt("prisma:query") };
  var us = { warn: () => !process.env.PRISMA_DISABLE_WARNINGS };
  var Ei = (e, t3) => e.reduce((r, n2) => (r[t3(n2)] = n2, r), {});
  var fs = new Set;
  var Xt = (e, t3, ...r) => {
    fs.has(e) || (fs.add(e), hi(t3, ...r));
  };
  var V4 = class extends Error {
    constructor(t3, { code: r, clientVersion: n2, meta: i3, batchRequestIdx: o2 }) {
      super(t3), this.name = "PrismaClientKnownRequestError", this.code = r, this.clientVersion = n2, this.meta = i3, Object.defineProperty(this, "batchRequestIdx", { value: o2, enumerable: false, writable: true });
    }
    get [Symbol.toStringTag]() {
      return "PrismaClientKnownRequestError";
    }
  };
  w(V4, "PrismaClientKnownRequestError");
  var Le = class extends V4 {
    constructor(t3, r) {
      super(t3, { code: "P2025", clientVersion: r }), this.name = "NotFoundError";
    }
  };
  w(Le, "NotFoundError");
  var R = class e extends Error {
    constructor(t3, r, n2) {
      super(t3), this.name = "PrismaClientInitializationError", this.clientVersion = r, this.errorCode = n2, Error.captureStackTrace(e);
    }
    get [Symbol.toStringTag]() {
      return "PrismaClientInitializationError";
    }
  };
  w(R, "PrismaClientInitializationError");
  var le = class extends Error {
    constructor(t3, r) {
      super(t3), this.name = "PrismaClientRustPanicError", this.clientVersion = r;
    }
    get [Symbol.toStringTag]() {
      return "PrismaClientRustPanicError";
    }
  };
  w(le, "PrismaClientRustPanicError");
  var B = class extends Error {
    constructor(t3, { clientVersion: r, batchRequestIdx: n2 }) {
      super(t3), this.name = "PrismaClientUnknownRequestError", this.clientVersion = r, Object.defineProperty(this, "batchRequestIdx", { value: n2, writable: true, enumerable: false });
    }
    get [Symbol.toStringTag]() {
      return "PrismaClientUnknownRequestError";
    }
  };
  w(B, "PrismaClientUnknownRequestError");
  var J = class extends Error {
    constructor(r, { clientVersion: n2 }) {
      super(r);
      this.name = "PrismaClientValidationError";
      this.clientVersion = n2;
    }
    get [Symbol.toStringTag]() {
      return "PrismaClientValidationError";
    }
  };
  w(J, "PrismaClientValidationError");
  var bt = class {
    constructor(t3) {
      this._engine = t3;
    }
    prometheus(t3) {
      return this._engine.metrics({ format: "prometheus", ...t3 });
    }
    json(t3) {
      return this._engine.metrics({ format: "json", ...t3 });
    }
  };
  var Xr = Symbol();
  var Pi = new WeakMap;
  var Ne = class {
    constructor(t3) {
      t3 === Xr ? Pi.set(this, `Prisma.${this._getName()}`) : Pi.set(this, `new Prisma.${this._getNamespace()}.${this._getName()}()`);
    }
    _getName() {
      return this.constructor.name;
    }
    toString() {
      return Pi.get(this);
    }
  };
  var tr = class extends Ne {
    _getNamespace() {
      return "NullTypes";
    }
  };
  var rr = class extends tr {
  };
  vi(rr, "DbNull");
  var nr = class extends tr {
  };
  vi(nr, "JsonNull");
  var ir = class extends tr {
  };
  vi(ir, "AnyNull");
  var en = { classes: { DbNull: rr, JsonNull: nr, AnyNull: ir }, instances: { DbNull: new rr(Xr), JsonNull: new nr(Xr), AnyNull: new ir(Xr) } };
  var hs = Symbol();
  var or = class {
    constructor(t3) {
      if (t3 !== hs)
        throw new Error("Skip instance can not be constructed directly");
    }
    ifUndefined(t3) {
      return t3 === undefined ? tn : t3;
    }
  };
  var tn = new or(hs);
  var Ti = new WeakMap;
  var sr = class {
    constructor(t3, r) {
      Ti.set(this, { sql: t3, values: r });
    }
    get sql() {
      return Ti.get(this).sql;
    }
    get values() {
      return Ti.get(this).values;
    }
  };
  var Ri = class {
    constructor() {
      this.registeredErrors = [];
    }
    consumeError(t3) {
      return this.registeredErrors[t3];
    }
    registerNewError(t3) {
      let r = 0;
      for (;this.registeredErrors[r] !== undefined; )
        r++;
      return this.registeredErrors[r] = { error: t3 }, r;
    }
  };
  var Ci = (e) => {
    let t3 = new Ri, r = xe(t3, e.transactionContext.bind(e)), n2 = { adapterName: e.adapterName, errorRegistry: t3, queryRaw: xe(t3, e.queryRaw.bind(e)), executeRaw: xe(t3, e.executeRaw.bind(e)), provider: e.provider, transactionContext: async (...i3) => (await r(...i3)).map((s) => gc(t3, s)) };
    return e.getConnectionInfo && (n2.getConnectionInfo = yc(t3, e.getConnectionInfo.bind(e))), n2;
  };
  var gc = (e, t3) => {
    let r = xe(e, t3.startTransaction.bind(t3));
    return { adapterName: t3.adapterName, provider: t3.provider, queryRaw: xe(e, t3.queryRaw.bind(t3)), executeRaw: xe(e, t3.executeRaw.bind(t3)), startTransaction: async (...n2) => (await r(...n2)).map((o2) => hc(e, o2)) };
  };
  var hc = (e, t3) => ({ adapterName: t3.adapterName, provider: t3.provider, options: t3.options, queryRaw: xe(e, t3.queryRaw.bind(t3)), executeRaw: xe(e, t3.executeRaw.bind(t3)), commit: xe(e, t3.commit.bind(t3)), rollback: xe(e, t3.rollback.bind(t3)) });
  var Ul = k3(ii());
  var Gl = import.meta.require("async_hooks");
  var Ql = import.meta.require("events");
  var Jl = k3(import.meta.require("fs"));
  var _r = k3(import.meta.require("path"));
  var ie = class e {
    constructor(t3, r) {
      if (t3.length - 1 !== r.length)
        throw t3.length === 0 ? new TypeError("Expected at least 1 string") : new TypeError(`Expected ${t3.length} strings to have ${t3.length - 1} values`);
      let n2 = r.reduce((s, a) => s + (a instanceof e ? a.values.length : 1), 0);
      this.values = new Array(n2), this.strings = new Array(n2 + 1), this.strings[0] = t3[0];
      let i3 = 0, o2 = 0;
      for (;i3 < r.length; ) {
        let s = r[i3++], a = t3[i3];
        if (s instanceof e) {
          this.strings[o2] += s.strings[0];
          let l = 0;
          for (;l < s.values.length; )
            this.values[o2++] = s.values[l++], this.strings[o2] = s.strings[l];
          this.strings[o2] += a;
        } else
          this.values[o2++] = s, this.strings[o2] = a;
      }
    }
    get sql() {
      let t3 = this.strings.length, r = 1, n2 = this.strings[0];
      for (;r < t3; )
        n2 += `?${this.strings[r++]}`;
      return n2;
    }
    get statement() {
      let t3 = this.strings.length, r = 1, n2 = this.strings[0];
      for (;r < t3; )
        n2 += `:${r}${this.strings[r++]}`;
      return n2;
    }
    get text() {
      let t3 = this.strings.length, r = 1, n2 = this.strings[0];
      for (;r < t3; )
        n2 += `\$${r}${this.strings[r++]}`;
      return n2;
    }
    inspect() {
      return { sql: this.sql, statement: this.statement, text: this.text, values: this.values };
    }
  };
  var Es = Si("");
  var Pe = class {
    constructor() {
      this._map = new Map;
    }
    get(t3) {
      return this._map.get(t3)?.value;
    }
    set(t3, r) {
      this._map.set(t3, { value: r });
    }
    getOrCreate(t3, r) {
      let n2 = this._map.get(t3);
      if (n2)
        return n2.value;
      let i3 = r();
      return this.set(t3, i3), i3;
    }
  };
  var rn = { enumerable: true, configurable: true, writable: true };
  var ws = Symbol.for("nodejs.util.inspect.custom");
  var xt = class {
    constructor(t3 = 0, r) {
      this.context = r;
      this.lines = [];
      this.currentLine = "";
      this.currentIndent = 0;
      this.currentIndent = t3;
    }
    write(t3) {
      return typeof t3 == "string" ? this.currentLine += t3 : t3.write(this), this;
    }
    writeJoined(t3, r, n2 = (i3, o2) => o2.write(i3)) {
      let i3 = r.length - 1;
      for (let o2 = 0;o2 < r.length; o2++)
        n2(r[o2], this), o2 !== i3 && this.write(t3);
      return this;
    }
    writeLine(t3) {
      return this.write(t3).newLine();
    }
    newLine() {
      this.lines.push(this.indentedCurrentLine()), this.currentLine = "", this.marginSymbol = undefined;
      let t3 = this.afterNextNewLineCallback;
      return this.afterNextNewLineCallback = undefined, t3?.(), this;
    }
    withIndent(t3) {
      return this.indent(), t3(this), this.unindent(), this;
    }
    afterNextNewline(t3) {
      return this.afterNextNewLineCallback = t3, this;
    }
    indent() {
      return this.currentIndent++, this;
    }
    unindent() {
      return this.currentIndent > 0 && this.currentIndent--, this;
    }
    addMarginSymbol(t3) {
      return this.marginSymbol = t3, this;
    }
    toString() {
      return this.lines.concat(this.indentedCurrentLine()).join(`
`);
    }
    getCurrentLineLength() {
      return this.currentLine.length;
    }
    indentedCurrentLine() {
      let t3 = this.currentLine.padStart(this.currentLine.length + 2 * this.currentIndent);
      return this.marginSymbol ? this.marginSymbol + t3.slice(1) : t3;
    }
  };
  var vt = 9000000000000000;
  var ze = 1e9;
  var Ii = "0123456789abcdef";
  var an = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058";
  var ln = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789";
  var Oi = { precision: 20, rounding: 4, modulo: 1, toExpNeg: -7, toExpPos: 21, minE: -vt, maxE: vt, crypto: false };
  var Cs;
  var Me;
  var x3 = true;
  var cn = "[DecimalError] ";
  var Ke = cn + "Invalid argument: ";
  var Ss = cn + "Precision limit exceeded";
  var As = cn + "crypto unavailable";
  var Is = "[object Decimal]";
  var ee = Math.floor;
  var G = Math.pow;
  var Ec = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i;
  var wc = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i;
  var xc = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i;
  var Os = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;
  var ge = 1e7;
  var b = 7;
  var Pc = 9007199254740991;
  var vc = an.length - 1;
  var ki = ln.length - 1;
  var m3 = { toStringTag: Is };
  m3.absoluteValue = m3.abs = function() {
    var e = new this.constructor(this);
    return e.s < 0 && (e.s = 1), y3(e);
  };
  m3.ceil = function() {
    return y3(new this.constructor(this), this.e + 1, 2);
  };
  m3.clampedTo = m3.clamp = function(e, t3) {
    var r, n2 = this, i3 = n2.constructor;
    if (e = new i3(e), t3 = new i3(t3), !e.s || !t3.s)
      return new i3(NaN);
    if (e.gt(t3))
      throw Error(Ke + t3);
    return r = n2.cmp(e), r < 0 ? e : n2.cmp(t3) > 0 ? t3 : new i3(n2);
  };
  m3.comparedTo = m3.cmp = function(e) {
    var t3, r, n2, i3, o2 = this, s = o2.d, a = (e = new o2.constructor(e)).d, l = o2.s, u = e.s;
    if (!s || !a)
      return !l || !u ? NaN : l !== u ? l : s === a ? 0 : !s ^ l < 0 ? 1 : -1;
    if (!s[0] || !a[0])
      return s[0] ? l : a[0] ? -u : 0;
    if (l !== u)
      return l;
    if (o2.e !== e.e)
      return o2.e > e.e ^ l < 0 ? 1 : -1;
    for (n2 = s.length, i3 = a.length, t3 = 0, r = n2 < i3 ? n2 : i3;t3 < r; ++t3)
      if (s[t3] !== a[t3])
        return s[t3] > a[t3] ^ l < 0 ? 1 : -1;
    return n2 === i3 ? 0 : n2 > i3 ^ l < 0 ? 1 : -1;
  };
  m3.cosine = m3.cos = function() {
    var e, t3, r = this, n2 = r.constructor;
    return r.d ? r.d[0] ? (e = n2.precision, t3 = n2.rounding, n2.precision = e + Math.max(r.e, r.sd()) + b, n2.rounding = 1, r = Tc(n2, Ls(n2, r)), n2.precision = e, n2.rounding = t3, y3(Me == 2 || Me == 3 ? r.neg() : r, e, t3, true)) : new n2(1) : new n2(NaN);
  };
  m3.cubeRoot = m3.cbrt = function() {
    var e, t3, r, n2, i3, o2, s, a, l, u, c3 = this, p3 = c3.constructor;
    if (!c3.isFinite() || c3.isZero())
      return new p3(c3);
    for (x3 = false, o2 = c3.s * G(c3.s * c3, 1 / 3), !o2 || Math.abs(o2) == 1 / 0 ? (r = K(c3.d), e = c3.e, (o2 = (e - r.length + 1) % 3) && (r += o2 == 1 || o2 == -2 ? "0" : "00"), o2 = G(r, 1 / 3), e = ee((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2)), o2 == 1 / 0 ? r = "5e" + e : (r = o2.toExponential(), r = r.slice(0, r.indexOf("e") + 1) + e), n2 = new p3(r), n2.s = c3.s) : n2 = new p3(o2.toString()), s = (e = p3.precision) + 3;; )
      if (a = n2, l = a.times(a).times(a), u = l.plus(c3), n2 = N(u.plus(c3).times(a), u.plus(l), s + 2, 1), K(a.d).slice(0, s) === (r = K(n2.d)).slice(0, s))
        if (r = r.slice(s - 3, s + 1), r == "9999" || !i3 && r == "4999") {
          if (!i3 && (y3(a, e + 1, 0), a.times(a).times(a).eq(c3))) {
            n2 = a;
            break;
          }
          s += 4, i3 = 1;
        } else {
          (!+r || !+r.slice(1) && r.charAt(0) == "5") && (y3(n2, e + 1, 1), t3 = !n2.times(n2).times(n2).eq(c3));
          break;
        }
    return x3 = true, y3(n2, e, p3.rounding, t3);
  };
  m3.decimalPlaces = m3.dp = function() {
    var e, t3 = this.d, r = NaN;
    if (t3) {
      if (e = t3.length - 1, r = (e - ee(this.e / b)) * b, e = t3[e], e)
        for (;e % 10 == 0; e /= 10)
          r--;
      r < 0 && (r = 0);
    }
    return r;
  };
  m3.dividedBy = m3.div = function(e) {
    return N(this, new this.constructor(e));
  };
  m3.dividedToIntegerBy = m3.divToInt = function(e) {
    var t3 = this, r = t3.constructor;
    return y3(N(t3, new r(e), 0, 1, 1), r.precision, r.rounding);
  };
  m3.equals = m3.eq = function(e) {
    return this.cmp(e) === 0;
  };
  m3.floor = function() {
    return y3(new this.constructor(this), this.e + 1, 3);
  };
  m3.greaterThan = m3.gt = function(e) {
    return this.cmp(e) > 0;
  };
  m3.greaterThanOrEqualTo = m3.gte = function(e) {
    var t3 = this.cmp(e);
    return t3 == 1 || t3 === 0;
  };
  m3.hyperbolicCosine = m3.cosh = function() {
    var e, t3, r, n2, i3, o2 = this, s = o2.constructor, a = new s(1);
    if (!o2.isFinite())
      return new s(o2.s ? 1 / 0 : NaN);
    if (o2.isZero())
      return a;
    r = s.precision, n2 = s.rounding, s.precision = r + Math.max(o2.e, o2.sd()) + 4, s.rounding = 1, i3 = o2.d.length, i3 < 32 ? (e = Math.ceil(i3 / 3), t3 = (1 / dn(4, e)).toString()) : (e = 16, t3 = "2.3283064365386962890625e-10"), o2 = Tt(s, 1, o2.times(t3), new s(1), true);
    for (var l, u = e, c3 = new s(8);u--; )
      l = o2.times(o2), o2 = a.minus(l.times(c3.minus(l.times(c3))));
    return y3(o2, s.precision = r, s.rounding = n2, true);
  };
  m3.hyperbolicSine = m3.sinh = function() {
    var e, t3, r, n2, i3 = this, o2 = i3.constructor;
    if (!i3.isFinite() || i3.isZero())
      return new o2(i3);
    if (t3 = o2.precision, r = o2.rounding, o2.precision = t3 + Math.max(i3.e, i3.sd()) + 4, o2.rounding = 1, n2 = i3.d.length, n2 < 3)
      i3 = Tt(o2, 2, i3, i3, true);
    else {
      e = 1.4 * Math.sqrt(n2), e = e > 16 ? 16 : e | 0, i3 = i3.times(1 / dn(5, e)), i3 = Tt(o2, 2, i3, i3, true);
      for (var s, a = new o2(5), l = new o2(16), u = new o2(20);e--; )
        s = i3.times(i3), i3 = i3.times(a.plus(s.times(l.times(s).plus(u))));
    }
    return o2.precision = t3, o2.rounding = r, y3(i3, t3, r, true);
  };
  m3.hyperbolicTangent = m3.tanh = function() {
    var e, t3, r = this, n2 = r.constructor;
    return r.isFinite() ? r.isZero() ? new n2(r) : (e = n2.precision, t3 = n2.rounding, n2.precision = e + 7, n2.rounding = 1, N(r.sinh(), r.cosh(), n2.precision = e, n2.rounding = t3)) : new n2(r.s);
  };
  m3.inverseCosine = m3.acos = function() {
    var e, t3 = this, r = t3.constructor, n2 = t3.abs().cmp(1), i3 = r.precision, o2 = r.rounding;
    return n2 !== -1 ? n2 === 0 ? t3.isNeg() ? fe(r, i3, o2) : new r(0) : new r(NaN) : t3.isZero() ? fe(r, i3 + 4, o2).times(0.5) : (r.precision = i3 + 6, r.rounding = 1, t3 = t3.asin(), e = fe(r, i3 + 4, o2).times(0.5), r.precision = i3, r.rounding = o2, e.minus(t3));
  };
  m3.inverseHyperbolicCosine = m3.acosh = function() {
    var e, t3, r = this, n2 = r.constructor;
    return r.lte(1) ? new n2(r.eq(1) ? 0 : NaN) : r.isFinite() ? (e = n2.precision, t3 = n2.rounding, n2.precision = e + Math.max(Math.abs(r.e), r.sd()) + 4, n2.rounding = 1, x3 = false, r = r.times(r).minus(1).sqrt().plus(r), x3 = true, n2.precision = e, n2.rounding = t3, r.ln()) : new n2(r);
  };
  m3.inverseHyperbolicSine = m3.asinh = function() {
    var e, t3, r = this, n2 = r.constructor;
    return !r.isFinite() || r.isZero() ? new n2(r) : (e = n2.precision, t3 = n2.rounding, n2.precision = e + 2 * Math.max(Math.abs(r.e), r.sd()) + 6, n2.rounding = 1, x3 = false, r = r.times(r).plus(1).sqrt().plus(r), x3 = true, n2.precision = e, n2.rounding = t3, r.ln());
  };
  m3.inverseHyperbolicTangent = m3.atanh = function() {
    var e, t3, r, n2, i3 = this, o2 = i3.constructor;
    return i3.isFinite() ? i3.e >= 0 ? new o2(i3.abs().eq(1) ? i3.s / 0 : i3.isZero() ? i3 : NaN) : (e = o2.precision, t3 = o2.rounding, n2 = i3.sd(), Math.max(n2, e) < 2 * -i3.e - 1 ? y3(new o2(i3), e, t3, true) : (o2.precision = r = n2 - i3.e, i3 = N(i3.plus(1), new o2(1).minus(i3), r + e, 1), o2.precision = e + 4, o2.rounding = 1, i3 = i3.ln(), o2.precision = e, o2.rounding = t3, i3.times(0.5))) : new o2(NaN);
  };
  m3.inverseSine = m3.asin = function() {
    var e, t3, r, n2, i3 = this, o2 = i3.constructor;
    return i3.isZero() ? new o2(i3) : (t3 = i3.abs().cmp(1), r = o2.precision, n2 = o2.rounding, t3 !== -1 ? t3 === 0 ? (e = fe(o2, r + 4, n2).times(0.5), e.s = i3.s, e) : new o2(NaN) : (o2.precision = r + 6, o2.rounding = 1, i3 = i3.div(new o2(1).minus(i3.times(i3)).sqrt().plus(1)).atan(), o2.precision = r, o2.rounding = n2, i3.times(2)));
  };
  m3.inverseTangent = m3.atan = function() {
    var e, t3, r, n2, i3, o2, s, a, l, u = this, c3 = u.constructor, p3 = c3.precision, d3 = c3.rounding;
    if (u.isFinite()) {
      if (u.isZero())
        return new c3(u);
      if (u.abs().eq(1) && p3 + 4 <= ki)
        return s = fe(c3, p3 + 4, d3).times(0.25), s.s = u.s, s;
    } else {
      if (!u.s)
        return new c3(NaN);
      if (p3 + 4 <= ki)
        return s = fe(c3, p3 + 4, d3).times(0.5), s.s = u.s, s;
    }
    for (c3.precision = a = p3 + 10, c3.rounding = 1, r = Math.min(28, a / b + 2 | 0), e = r;e; --e)
      u = u.div(u.times(u).plus(1).sqrt().plus(1));
    for (x3 = false, t3 = Math.ceil(a / b), n2 = 1, l = u.times(u), s = new c3(u), i3 = u;e !== -1; )
      if (i3 = i3.times(l), o2 = s.minus(i3.div(n2 += 2)), i3 = i3.times(l), s = o2.plus(i3.div(n2 += 2)), s.d[t3] !== undefined)
        for (e = t3;s.d[e] === o2.d[e] && e--; )
          ;
    return r && (s = s.times(2 << r - 1)), x3 = true, y3(s, c3.precision = p3, c3.rounding = d3, true);
  };
  m3.isFinite = function() {
    return !!this.d;
  };
  m3.isInteger = m3.isInt = function() {
    return !!this.d && ee(this.e / b) > this.d.length - 2;
  };
  m3.isNaN = function() {
    return !this.s;
  };
  m3.isNegative = m3.isNeg = function() {
    return this.s < 0;
  };
  m3.isPositive = m3.isPos = function() {
    return this.s > 0;
  };
  m3.isZero = function() {
    return !!this.d && this.d[0] === 0;
  };
  m3.lessThan = m3.lt = function(e) {
    return this.cmp(e) < 0;
  };
  m3.lessThanOrEqualTo = m3.lte = function(e) {
    return this.cmp(e) < 1;
  };
  m3.logarithm = m3.log = function(e) {
    var t3, r, n2, i3, o2, s, a, l, u = this, c3 = u.constructor, p3 = c3.precision, d3 = c3.rounding, f3 = 5;
    if (e == null)
      e = new c3(10), t3 = true;
    else {
      if (e = new c3(e), r = e.d, e.s < 0 || !r || !r[0] || e.eq(1))
        return new c3(NaN);
      t3 = e.eq(10);
    }
    if (r = u.d, u.s < 0 || !r || !r[0] || u.eq(1))
      return new c3(r && !r[0] ? -1 / 0 : u.s != 1 ? NaN : r ? 0 : 1 / 0);
    if (t3)
      if (r.length > 1)
        o2 = true;
      else {
        for (i3 = r[0];i3 % 10 === 0; )
          i3 /= 10;
        o2 = i3 !== 1;
      }
    if (x3 = false, a = p3 + f3, s = He(u, a), n2 = t3 ? un(c3, a + 10) : He(e, a), l = N(s, n2, a, 1), ur(l.d, i3 = p3, d3))
      do
        if (a += 10, s = He(u, a), n2 = t3 ? un(c3, a + 10) : He(e, a), l = N(s, n2, a, 1), !o2) {
          +K(l.d).slice(i3 + 1, i3 + 15) + 1 == 100000000000000 && (l = y3(l, p3 + 1, 0));
          break;
        }
      while (ur(l.d, i3 += 10, d3));
    return x3 = true, y3(l, p3, d3);
  };
  m3.minus = m3.sub = function(e) {
    var t3, r, n2, i3, o2, s, a, l, u, c3, p3, d3, f3 = this, g = f3.constructor;
    if (e = new g(e), !f3.d || !e.d)
      return !f3.s || !e.s ? e = new g(NaN) : f3.d ? e.s = -e.s : e = new g(e.d || f3.s !== e.s ? f3 : NaN), e;
    if (f3.s != e.s)
      return e.s = -e.s, f3.plus(e);
    if (u = f3.d, d3 = e.d, a = g.precision, l = g.rounding, !u[0] || !d3[0]) {
      if (d3[0])
        e.s = -e.s;
      else if (u[0])
        e = new g(f3);
      else
        return new g(l === 3 ? -0 : 0);
      return x3 ? y3(e, a, l) : e;
    }
    if (r = ee(e.e / b), c3 = ee(f3.e / b), u = u.slice(), o2 = c3 - r, o2) {
      for (p3 = o2 < 0, p3 ? (t3 = u, o2 = -o2, s = d3.length) : (t3 = d3, r = c3, s = u.length), n2 = Math.max(Math.ceil(a / b), s) + 2, o2 > n2 && (o2 = n2, t3.length = 1), t3.reverse(), n2 = o2;n2--; )
        t3.push(0);
      t3.reverse();
    } else {
      for (n2 = u.length, s = d3.length, p3 = n2 < s, p3 && (s = n2), n2 = 0;n2 < s; n2++)
        if (u[n2] != d3[n2]) {
          p3 = u[n2] < d3[n2];
          break;
        }
      o2 = 0;
    }
    for (p3 && (t3 = u, u = d3, d3 = t3, e.s = -e.s), s = u.length, n2 = d3.length - s;n2 > 0; --n2)
      u[s++] = 0;
    for (n2 = d3.length;n2 > o2; ) {
      if (u[--n2] < d3[n2]) {
        for (i3 = n2;i3 && u[--i3] === 0; )
          u[i3] = ge - 1;
        --u[i3], u[n2] += ge;
      }
      u[n2] -= d3[n2];
    }
    for (;u[--s] === 0; )
      u.pop();
    for (;u[0] === 0; u.shift())
      --r;
    return u[0] ? (e.d = u, e.e = pn(u, r), x3 ? y3(e, a, l) : e) : new g(l === 3 ? -0 : 0);
  };
  m3.modulo = m3.mod = function(e) {
    var t3, r = this, n2 = r.constructor;
    return e = new n2(e), !r.d || !e.s || e.d && !e.d[0] ? new n2(NaN) : !e.d || r.d && !r.d[0] ? y3(new n2(r), n2.precision, n2.rounding) : (x3 = false, n2.modulo == 9 ? (t3 = N(r, e.abs(), 0, 3, 1), t3.s *= e.s) : t3 = N(r, e, 0, n2.modulo, 1), t3 = t3.times(e), x3 = true, r.minus(t3));
  };
  m3.naturalExponential = m3.exp = function() {
    return Di(this);
  };
  m3.naturalLogarithm = m3.ln = function() {
    return He(this);
  };
  m3.negated = m3.neg = function() {
    var e = new this.constructor(this);
    return e.s = -e.s, y3(e);
  };
  m3.plus = m3.add = function(e) {
    var t3, r, n2, i3, o2, s, a, l, u, c3, p3 = this, d3 = p3.constructor;
    if (e = new d3(e), !p3.d || !e.d)
      return !p3.s || !e.s ? e = new d3(NaN) : p3.d || (e = new d3(e.d || p3.s === e.s ? p3 : NaN)), e;
    if (p3.s != e.s)
      return e.s = -e.s, p3.minus(e);
    if (u = p3.d, c3 = e.d, a = d3.precision, l = d3.rounding, !u[0] || !c3[0])
      return c3[0] || (e = new d3(p3)), x3 ? y3(e, a, l) : e;
    if (o2 = ee(p3.e / b), n2 = ee(e.e / b), u = u.slice(), i3 = o2 - n2, i3) {
      for (i3 < 0 ? (r = u, i3 = -i3, s = c3.length) : (r = c3, n2 = o2, s = u.length), o2 = Math.ceil(a / b), s = o2 > s ? o2 + 1 : s + 1, i3 > s && (i3 = s, r.length = 1), r.reverse();i3--; )
        r.push(0);
      r.reverse();
    }
    for (s = u.length, i3 = c3.length, s - i3 < 0 && (i3 = s, r = c3, c3 = u, u = r), t3 = 0;i3; )
      t3 = (u[--i3] = u[i3] + c3[i3] + t3) / ge | 0, u[i3] %= ge;
    for (t3 && (u.unshift(t3), ++n2), s = u.length;u[--s] == 0; )
      u.pop();
    return e.d = u, e.e = pn(u, n2), x3 ? y3(e, a, l) : e;
  };
  m3.precision = m3.sd = function(e) {
    var t3, r = this;
    if (e !== undefined && e !== !!e && e !== 1 && e !== 0)
      throw Error(Ke + e);
    return r.d ? (t3 = ks(r.d), e && r.e + 1 > t3 && (t3 = r.e + 1)) : t3 = NaN, t3;
  };
  m3.round = function() {
    var e = this, t3 = e.constructor;
    return y3(new t3(e), e.e + 1, t3.rounding);
  };
  m3.sine = m3.sin = function() {
    var e, t3, r = this, n2 = r.constructor;
    return r.isFinite() ? r.isZero() ? new n2(r) : (e = n2.precision, t3 = n2.rounding, n2.precision = e + Math.max(r.e, r.sd()) + b, n2.rounding = 1, r = Cc(n2, Ls(n2, r)), n2.precision = e, n2.rounding = t3, y3(Me > 2 ? r.neg() : r, e, t3, true)) : new n2(NaN);
  };
  m3.squareRoot = m3.sqrt = function() {
    var e, t3, r, n2, i3, o2, s = this, a = s.d, l = s.e, u = s.s, c3 = s.constructor;
    if (u !== 1 || !a || !a[0])
      return new c3(!u || u < 0 && (!a || a[0]) ? NaN : a ? s : 1 / 0);
    for (x3 = false, u = Math.sqrt(+s), u == 0 || u == 1 / 0 ? (t3 = K(a), (t3.length + l) % 2 == 0 && (t3 += "0"), u = Math.sqrt(t3), l = ee((l + 1) / 2) - (l < 0 || l % 2), u == 1 / 0 ? t3 = "5e" + l : (t3 = u.toExponential(), t3 = t3.slice(0, t3.indexOf("e") + 1) + l), n2 = new c3(t3)) : n2 = new c3(u.toString()), r = (l = c3.precision) + 3;; )
      if (o2 = n2, n2 = o2.plus(N(s, o2, r + 2, 1)).times(0.5), K(o2.d).slice(0, r) === (t3 = K(n2.d)).slice(0, r))
        if (t3 = t3.slice(r - 3, r + 1), t3 == "9999" || !i3 && t3 == "4999") {
          if (!i3 && (y3(o2, l + 1, 0), o2.times(o2).eq(s))) {
            n2 = o2;
            break;
          }
          r += 4, i3 = 1;
        } else {
          (!+t3 || !+t3.slice(1) && t3.charAt(0) == "5") && (y3(n2, l + 1, 1), e = !n2.times(n2).eq(s));
          break;
        }
    return x3 = true, y3(n2, l, c3.rounding, e);
  };
  m3.tangent = m3.tan = function() {
    var e, t3, r = this, n2 = r.constructor;
    return r.isFinite() ? r.isZero() ? new n2(r) : (e = n2.precision, t3 = n2.rounding, n2.precision = e + 10, n2.rounding = 1, r = r.sin(), r.s = 1, r = N(r, new n2(1).minus(r.times(r)).sqrt(), e + 10, 0), n2.precision = e, n2.rounding = t3, y3(Me == 2 || Me == 4 ? r.neg() : r, e, t3, true)) : new n2(NaN);
  };
  m3.times = m3.mul = function(e) {
    var t3, r, n2, i3, o2, s, a, l, u, c3 = this, p3 = c3.constructor, d3 = c3.d, f3 = (e = new p3(e)).d;
    if (e.s *= c3.s, !d3 || !d3[0] || !f3 || !f3[0])
      return new p3(!e.s || d3 && !d3[0] && !f3 || f3 && !f3[0] && !d3 ? NaN : !d3 || !f3 ? e.s / 0 : e.s * 0);
    for (r = ee(c3.e / b) + ee(e.e / b), l = d3.length, u = f3.length, l < u && (o2 = d3, d3 = f3, f3 = o2, s = l, l = u, u = s), o2 = [], s = l + u, n2 = s;n2--; )
      o2.push(0);
    for (n2 = u;--n2 >= 0; ) {
      for (t3 = 0, i3 = l + n2;i3 > n2; )
        a = o2[i3] + f3[n2] * d3[i3 - n2 - 1] + t3, o2[i3--] = a % ge | 0, t3 = a / ge | 0;
      o2[i3] = (o2[i3] + t3) % ge | 0;
    }
    for (;!o2[--s]; )
      o2.pop();
    return t3 ? ++r : o2.shift(), e.d = o2, e.e = pn(o2, r), x3 ? y3(e, p3.precision, p3.rounding) : e;
  };
  m3.toBinary = function(e, t3) {
    return Fi(this, 2, e, t3);
  };
  m3.toDecimalPlaces = m3.toDP = function(e, t3) {
    var r = this, n2 = r.constructor;
    return r = new n2(r), e === undefined ? r : (oe(e, 0, ze), t3 === undefined ? t3 = n2.rounding : oe(t3, 0, 8), y3(r, e + r.e + 1, t3));
  };
  m3.toExponential = function(e, t3) {
    var r, n2 = this, i3 = n2.constructor;
    return e === undefined ? r = Te(n2, true) : (oe(e, 0, ze), t3 === undefined ? t3 = i3.rounding : oe(t3, 0, 8), n2 = y3(new i3(n2), e + 1, t3), r = Te(n2, true, e + 1)), n2.isNeg() && !n2.isZero() ? "-" + r : r;
  };
  m3.toFixed = function(e, t3) {
    var r, n2, i3 = this, o2 = i3.constructor;
    return e === undefined ? r = Te(i3) : (oe(e, 0, ze), t3 === undefined ? t3 = o2.rounding : oe(t3, 0, 8), n2 = y3(new o2(i3), e + i3.e + 1, t3), r = Te(n2, false, e + n2.e + 1)), i3.isNeg() && !i3.isZero() ? "-" + r : r;
  };
  m3.toFraction = function(e) {
    var t3, r, n2, i3, o2, s, a, l, u, c3, p3, d3, f3 = this, g = f3.d, h3 = f3.constructor;
    if (!g)
      return new h3(f3);
    if (u = r = new h3(1), n2 = l = new h3(0), t3 = new h3(n2), o2 = t3.e = ks(g) - f3.e - 1, s = o2 % b, t3.d[0] = G(10, s < 0 ? b + s : s), e == null)
      e = o2 > 0 ? t3 : u;
    else {
      if (a = new h3(e), !a.isInt() || a.lt(u))
        throw Error(Ke + a);
      e = a.gt(t3) ? o2 > 0 ? t3 : u : a;
    }
    for (x3 = false, a = new h3(K(g)), c3 = h3.precision, h3.precision = o2 = g.length * b * 2;p3 = N(a, t3, 0, 1, 1), i3 = r.plus(p3.times(n2)), i3.cmp(e) != 1; )
      r = n2, n2 = i3, i3 = u, u = l.plus(p3.times(i3)), l = i3, i3 = t3, t3 = a.minus(p3.times(i3)), a = i3;
    return i3 = N(e.minus(r), n2, 0, 1, 1), l = l.plus(i3.times(u)), r = r.plus(i3.times(n2)), l.s = u.s = f3.s, d3 = N(u, n2, o2, 1).minus(f3).abs().cmp(N(l, r, o2, 1).minus(f3).abs()) < 1 ? [u, n2] : [l, r], h3.precision = c3, x3 = true, d3;
  };
  m3.toHexadecimal = m3.toHex = function(e, t3) {
    return Fi(this, 16, e, t3);
  };
  m3.toNearest = function(e, t3) {
    var r = this, n2 = r.constructor;
    if (r = new n2(r), e == null) {
      if (!r.d)
        return r;
      e = new n2(1), t3 = n2.rounding;
    } else {
      if (e = new n2(e), t3 === undefined ? t3 = n2.rounding : oe(t3, 0, 8), !r.d)
        return e.s ? r : e;
      if (!e.d)
        return e.s && (e.s = r.s), e;
    }
    return e.d[0] ? (x3 = false, r = N(r, e, 0, t3, 1).times(e), x3 = true, y3(r)) : (e.s = r.s, r = e), r;
  };
  m3.toNumber = function() {
    return +this;
  };
  m3.toOctal = function(e, t3) {
    return Fi(this, 8, e, t3);
  };
  m3.toPower = m3.pow = function(e) {
    var t3, r, n2, i3, o2, s, a = this, l = a.constructor, u = +(e = new l(e));
    if (!a.d || !e.d || !a.d[0] || !e.d[0])
      return new l(G(+a, u));
    if (a = new l(a), a.eq(1))
      return a;
    if (n2 = l.precision, o2 = l.rounding, e.eq(1))
      return y3(a, n2, o2);
    if (t3 = ee(e.e / b), t3 >= e.d.length - 1 && (r = u < 0 ? -u : u) <= Pc)
      return i3 = Ds(l, a, r, n2), e.s < 0 ? new l(1).div(i3) : y3(i3, n2, o2);
    if (s = a.s, s < 0) {
      if (t3 < e.d.length - 1)
        return new l(NaN);
      if (e.d[t3] & 1 || (s = 1), a.e == 0 && a.d[0] == 1 && a.d.length == 1)
        return a.s = s, a;
    }
    return r = G(+a, u), t3 = r == 0 || !isFinite(r) ? ee(u * (Math.log("0." + K(a.d)) / Math.LN10 + a.e + 1)) : new l(r + "").e, t3 > l.maxE + 1 || t3 < l.minE - 1 ? new l(t3 > 0 ? s / 0 : 0) : (x3 = false, l.rounding = a.s = 1, r = Math.min(12, (t3 + "").length), i3 = Di(e.times(He(a, n2 + r)), n2), i3.d && (i3 = y3(i3, n2 + 5, 1), ur(i3.d, n2, o2) && (t3 = n2 + 10, i3 = y3(Di(e.times(He(a, t3 + r)), t3), t3 + 5, 1), +K(i3.d).slice(n2 + 1, n2 + 15) + 1 == 100000000000000 && (i3 = y3(i3, n2 + 1, 0)))), i3.s = s, x3 = true, l.rounding = o2, y3(i3, n2, o2));
  };
  m3.toPrecision = function(e, t3) {
    var r, n2 = this, i3 = n2.constructor;
    return e === undefined ? r = Te(n2, n2.e <= i3.toExpNeg || n2.e >= i3.toExpPos) : (oe(e, 1, ze), t3 === undefined ? t3 = i3.rounding : oe(t3, 0, 8), n2 = y3(new i3(n2), e, t3), r = Te(n2, e <= n2.e || n2.e <= i3.toExpNeg, e)), n2.isNeg() && !n2.isZero() ? "-" + r : r;
  };
  m3.toSignificantDigits = m3.toSD = function(e, t3) {
    var r = this, n2 = r.constructor;
    return e === undefined ? (e = n2.precision, t3 = n2.rounding) : (oe(e, 1, ze), t3 === undefined ? t3 = n2.rounding : oe(t3, 0, 8)), y3(new n2(r), e, t3);
  };
  m3.toString = function() {
    var e = this, t3 = e.constructor, r = Te(e, e.e <= t3.toExpNeg || e.e >= t3.toExpPos);
    return e.isNeg() && !e.isZero() ? "-" + r : r;
  };
  m3.truncated = m3.trunc = function() {
    return y3(new this.constructor(this), this.e + 1, 1);
  };
  m3.valueOf = m3.toJSON = function() {
    var e = this, t3 = e.constructor, r = Te(e, e.e <= t3.toExpNeg || e.e >= t3.toExpPos);
    return e.isNeg() ? "-" + r : r;
  };
  var N = function() {
    function e(n2, i3, o2) {
      var s, a = 0, l = n2.length;
      for (n2 = n2.slice();l--; )
        s = n2[l] * i3 + a, n2[l] = s % o2 | 0, a = s / o2 | 0;
      return a && n2.unshift(a), n2;
    }
    function t3(n2, i3, o2, s) {
      var a, l;
      if (o2 != s)
        l = o2 > s ? 1 : -1;
      else
        for (a = l = 0;a < o2; a++)
          if (n2[a] != i3[a]) {
            l = n2[a] > i3[a] ? 1 : -1;
            break;
          }
      return l;
    }
    function r(n2, i3, o2, s) {
      for (var a = 0;o2--; )
        n2[o2] -= a, a = n2[o2] < i3[o2] ? 1 : 0, n2[o2] = a * s + n2[o2] - i3[o2];
      for (;!n2[0] && n2.length > 1; )
        n2.shift();
    }
    return function(n2, i3, o2, s, a, l) {
      var u, c3, p3, d3, f3, g, h3, O, T, S, C, E, me, ae, jt, U, ne, Ie, z, dt, Fr = n2.constructor, $n = n2.s == i3.s ? 1 : -1, Y = n2.d, _ = i3.d;
      if (!Y || !Y[0] || !_ || !_[0])
        return new Fr(!n2.s || !i3.s || (Y ? _ && Y[0] == _[0] : !_) ? NaN : Y && Y[0] == 0 || !_ ? $n * 0 : $n / 0);
      for (l ? (f3 = 1, c3 = n2.e - i3.e) : (l = ge, f3 = b, c3 = ee(n2.e / f3) - ee(i3.e / f3)), z = _.length, ne = Y.length, T = new Fr($n), S = T.d = [], p3 = 0;_[p3] == (Y[p3] || 0); p3++)
        ;
      if (_[p3] > (Y[p3] || 0) && c3--, o2 == null ? (ae = o2 = Fr.precision, s = Fr.rounding) : a ? ae = o2 + (n2.e - i3.e) + 1 : ae = o2, ae < 0)
        S.push(1), g = true;
      else {
        if (ae = ae / f3 + 2 | 0, p3 = 0, z == 1) {
          for (d3 = 0, _ = _[0], ae++;(p3 < ne || d3) && ae--; p3++)
            jt = d3 * l + (Y[p3] || 0), S[p3] = jt / _ | 0, d3 = jt % _ | 0;
          g = d3 || p3 < ne;
        } else {
          for (d3 = l / (_[0] + 1) | 0, d3 > 1 && (_ = e(_, d3, l), Y = e(Y, d3, l), z = _.length, ne = Y.length), U = z, C = Y.slice(0, z), E = C.length;E < z; )
            C[E++] = 0;
          dt = _.slice(), dt.unshift(0), Ie = _[0], _[1] >= l / 2 && ++Ie;
          do
            d3 = 0, u = t3(_, C, z, E), u < 0 ? (me = C[0], z != E && (me = me * l + (C[1] || 0)), d3 = me / Ie | 0, d3 > 1 ? (d3 >= l && (d3 = l - 1), h3 = e(_, d3, l), O = h3.length, E = C.length, u = t3(h3, C, O, E), u == 1 && (d3--, r(h3, z < O ? dt : _, O, l))) : (d3 == 0 && (u = d3 = 1), h3 = _.slice()), O = h3.length, O < E && h3.unshift(0), r(C, h3, E, l), u == -1 && (E = C.length, u = t3(_, C, z, E), u < 1 && (d3++, r(C, z < E ? dt : _, E, l))), E = C.length) : u === 0 && (d3++, C = [0]), S[p3++] = d3, u && C[0] ? C[E++] = Y[U] || 0 : (C = [Y[U]], E = 1);
          while ((U++ < ne || C[0] !== undefined) && ae--);
          g = C[0] !== undefined;
        }
        S[0] || S.shift();
      }
      if (f3 == 1)
        T.e = c3, Cs = g;
      else {
        for (p3 = 1, d3 = S[0];d3 >= 10; d3 /= 10)
          p3++;
        T.e = p3 + c3 * f3 - 1, y3(T, a ? o2 + T.e + 1 : o2, s, g);
      }
      return T;
    };
  }();
  m3[Symbol.for("nodejs.util.inspect.custom")] = m3.toString;
  m3[Symbol.toStringTag] = "Decimal";
  var ot = m3.constructor = Ns(Oi);
  an = new ot(an);
  ln = new ot(ln);
  var Re = ot;
  var cr = class {
    constructor(t3, r, n2, i3, o2) {
      this.modelName = t3, this.name = r, this.typeName = n2, this.isList = i3, this.isEnum = o2;
    }
    _toGraphQLInputType() {
      let t3 = this.isList ? "List" : "", r = this.isEnum ? "Enum" : "";
      return `${t3}${r}${this.typeName}FieldRefInput<${this.modelName}>`;
    }
  };
  var mn = class {
    constructor(t3) {
      this.value = t3;
    }
    write(t3) {
      t3.write(this.value);
    }
    markAsError() {
      this.value.markAsError();
    }
  };
  var fn = (e) => e;
  var gn = { bold: fn, red: fn, green: fn, dim: fn, enabled: false };
  var Ms = { bold: H, red: ce, green: qe, dim: Oe, enabled: true };
  var St = { write(e) {
    e.writeLine(",");
  } };
  var Ce = class {
    constructor(t3) {
      this.contents = t3;
      this.isUnderlined = false;
      this.color = (t4) => t4;
    }
    underline() {
      return this.isUnderlined = true, this;
    }
    setColor(t3) {
      return this.color = t3, this;
    }
    write(t3) {
      let r = t3.getCurrentLineLength();
      t3.write(this.color(this.contents)), this.isUnderlined && t3.afterNextNewline(() => {
        t3.write(" ".repeat(r)).writeLine(this.color("~".repeat(this.contents.length)));
      });
    }
  };
  var Ye = class {
    constructor() {
      this.hasError = false;
    }
    markAsError() {
      return this.hasError = true, this;
    }
  };
  var At = class extends Ye {
    constructor() {
      super(...arguments);
      this.items = [];
    }
    addItem(r) {
      return this.items.push(new mn(r)), this;
    }
    getField(r) {
      return this.items[r];
    }
    getPrintWidth() {
      return this.items.length === 0 ? 2 : Math.max(...this.items.map((n2) => n2.value.getPrintWidth())) + 2;
    }
    write(r) {
      if (this.items.length === 0) {
        this.writeEmpty(r);
        return;
      }
      this.writeWithItems(r);
    }
    writeEmpty(r) {
      let n2 = new Ce("[]");
      this.hasError && n2.setColor(r.context.colors.red).underline(), r.write(n2);
    }
    writeWithItems(r) {
      let { colors: n2 } = r.context;
      r.writeLine("[").withIndent(() => r.writeJoined(St, this.items).newLine()).write("]"), this.hasError && r.afterNextNewline(() => {
        r.writeLine(n2.red("~".repeat(this.getPrintWidth())));
      });
    }
    asObject() {
    }
  };
  var $s = ": ";
  var hn = class {
    constructor(t3, r) {
      this.name = t3;
      this.value = r;
      this.hasError = false;
    }
    markAsError() {
      this.hasError = true;
    }
    getPrintWidth() {
      return this.name.length + this.value.getPrintWidth() + $s.length;
    }
    write(t3) {
      let r = new Ce(this.name);
      this.hasError && r.underline().setColor(t3.context.colors.red), t3.write(r).write($s).write(this.value);
    }
  };
  var It = class e extends Ye {
    constructor() {
      super(...arguments);
      this.fields = {};
      this.suggestions = [];
    }
    addField(r) {
      this.fields[r.name] = r;
    }
    addSuggestion(r) {
      this.suggestions.push(r);
    }
    getField(r) {
      return this.fields[r];
    }
    getDeepField(r) {
      let [n2, ...i3] = r, o2 = this.getField(n2);
      if (!o2)
        return;
      let s = o2;
      for (let a of i3) {
        let l;
        if (s.value instanceof e ? l = s.value.getField(a) : s.value instanceof At && (l = s.value.getField(Number(a))), !l)
          return;
        s = l;
      }
      return s;
    }
    getDeepFieldValue(r) {
      return r.length === 0 ? this : this.getDeepField(r)?.value;
    }
    hasField(r) {
      return !!this.getField(r);
    }
    removeAllFields() {
      this.fields = {};
    }
    removeField(r) {
      delete this.fields[r];
    }
    getFields() {
      return this.fields;
    }
    isEmpty() {
      return Object.keys(this.fields).length === 0;
    }
    getFieldValue(r) {
      return this.getField(r)?.value;
    }
    getDeepSubSelectionValue(r) {
      let n2 = this;
      for (let i3 of r) {
        if (!(n2 instanceof e))
          return;
        let o2 = n2.getSubSelectionValue(i3);
        if (!o2)
          return;
        n2 = o2;
      }
      return n2;
    }
    getDeepSelectionParent(r) {
      let n2 = this.getSelectionParent();
      if (!n2)
        return;
      let i3 = n2;
      for (let o2 of r) {
        let s = i3.value.getFieldValue(o2);
        if (!s || !(s instanceof e))
          return;
        let a = s.getSelectionParent();
        if (!a)
          return;
        i3 = a;
      }
      return i3;
    }
    getSelectionParent() {
      let r = this.getField("select")?.value.asObject();
      if (r)
        return { kind: "select", value: r };
      let n2 = this.getField("include")?.value.asObject();
      if (n2)
        return { kind: "include", value: n2 };
    }
    getSubSelectionValue(r) {
      return this.getSelectionParent()?.value.fields[r].value;
    }
    getPrintWidth() {
      let r = Object.values(this.fields);
      return r.length == 0 ? 2 : Math.max(...r.map((i3) => i3.getPrintWidth())) + 2;
    }
    write(r) {
      let n2 = Object.values(this.fields);
      if (n2.length === 0 && this.suggestions.length === 0) {
        this.writeEmpty(r);
        return;
      }
      this.writeWithContents(r, n2);
    }
    asObject() {
      return this;
    }
    writeEmpty(r) {
      let n2 = new Ce("{}");
      this.hasError && n2.setColor(r.context.colors.red).underline(), r.write(n2);
    }
    writeWithContents(r, n2) {
      r.writeLine("{").withIndent(() => {
        r.writeJoined(St, [...n2, ...this.suggestions]).newLine();
      }), r.write("}"), this.hasError && r.afterNextNewline(() => {
        r.writeLine(r.context.colors.red("~".repeat(this.getPrintWidth())));
      });
    }
  };
  var W = class extends Ye {
    constructor(r) {
      super();
      this.text = r;
    }
    getPrintWidth() {
      return this.text.length;
    }
    write(r) {
      let n2 = new Ce(this.text);
      this.hasError && n2.underline().setColor(r.context.colors.red), r.write(n2);
    }
    asObject() {
    }
  };
  var Li = class {
    constructor(t3) {
      this.errorMessages = [];
      this.arguments = t3;
    }
    write(t3) {
      t3.write(this.arguments);
    }
    addErrorMessage(t3) {
      this.errorMessages.push(t3);
    }
    renderAllMessages(t3) {
      return this.errorMessages.map((r) => r(t3)).join(`
`);
    }
  };
  var fp = "P2037";
  var pr = "<unknown>";
  var hp = /^\s*at (.*?) ?\(((?:file|https?|blob|chrome-extension|native|eval|webpack|<anonymous>|\/|[a-z]:\\|\\\\).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i;
  var yp = /\((\S*)(?::(\d+))(?::(\d+))\)/;
  var Ep = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i;
  var xp = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|webpack|resource|\[native).*?|[^@]*bundle)(?::(\d+))?(?::(\d+))?\s*$/i;
  var Pp = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i;
  var Tp = /^\s*(?:([^@]*)(?:\((.*?)\))?@)?(\S.*?):(\d+)(?::(\d+))?\s*$/i;
  var Cp = /^\s*at (?:((?:\[object object\])?[^\\/]+(?: \[as \S+\])?) )?\(?(.*?):(\d+)(?::(\d+))?\)?\s*$/i;
  var Ni = class {
    getLocation() {
      return null;
    }
  };
  var Mi = class {
    constructor() {
      this._error = new Error;
    }
    getLocation() {
      let t3 = this._error.stack;
      if (!t3)
        return null;
      let n2 = Bs(t3).find((i3) => {
        if (!i3.file)
          return false;
        let o2 = di(i3.file);
        return o2 !== "<anonymous>" && !o2.includes("@prisma") && !o2.includes("/packages/client/src/runtime/") && !o2.endsWith("/runtime/binary.js") && !o2.endsWith("/runtime/library.js") && !o2.endsWith("/runtime/edge.js") && !o2.endsWith("/runtime/edge-esm.js") && !o2.startsWith("internal/") && !i3.methodName.includes("new ") && !i3.methodName.includes("getCallSite") && !i3.methodName.includes("Proxy.") && i3.methodName.split(".").length < 4;
      });
      return !n2 || !n2.file ? null : { fileName: n2.file, lineNumber: n2.lineNumber, columnNumber: n2.column };
    }
  };
  var Us = { _avg: true, _count: true, _sum: true, _min: true, _max: true };
  var Ks = (e) => Array.isArray(e) ? e : e.split(".");
  var $i = (e, t3) => Ks(t3).reduce((r, n2) => r && r[n2], e);
  var zs = (e, t3, r) => Ks(t3).reduceRight((n2, i3, o2, s) => Object.assign({}, $i(e, s.slice(0, o2)), { [i3]: n2 }), r);
  var ra = k3(mi());
  var ta = k3(import.meta.require("fs"));
  var Ys = { keyword: De, entity: De, value: (e) => H(rt(e)), punctuation: rt, directive: De, function: De, variable: (e) => H(rt(e)), string: (e) => H(qe(e)), boolean: ke, number: De, comment: Bt };
  var Mp = (e) => e;
  var En = {};
  var $p = 0;
  var P = { manual: En.Prism && En.Prism.manual, disableWorkerMessageHandler: En.Prism && En.Prism.disableWorkerMessageHandler, util: { encode: function(e) {
    if (e instanceof he) {
      let t3 = e;
      return new he(t3.type, P.util.encode(t3.content), t3.alias);
    } else
      return Array.isArray(e) ? e.map(P.util.encode) : e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
  }, type: function(e) {
    return Object.prototype.toString.call(e).slice(8, -1);
  }, objId: function(e) {
    return e.__id || Object.defineProperty(e, "__id", { value: ++$p }), e.__id;
  }, clone: function e(t3, r) {
    let n2, i3, o2 = P.util.type(t3);
    switch (r = r || {}, o2) {
      case "Object":
        if (i3 = P.util.objId(t3), r[i3])
          return r[i3];
        n2 = {}, r[i3] = n2;
        for (let s in t3)
          t3.hasOwnProperty(s) && (n2[s] = e(t3[s], r));
        return n2;
      case "Array":
        return i3 = P.util.objId(t3), r[i3] ? r[i3] : (n2 = [], r[i3] = n2, t3.forEach(function(s, a) {
          n2[a] = e(s, r);
        }), n2);
      default:
        return t3;
    }
  } }, languages: { extend: function(e, t3) {
    let r = P.util.clone(P.languages[e]);
    for (let n2 in t3)
      r[n2] = t3[n2];
    return r;
  }, insertBefore: function(e, t3, r, n2) {
    n2 = n2 || P.languages;
    let i3 = n2[e], o2 = {};
    for (let a in i3)
      if (i3.hasOwnProperty(a)) {
        if (a == t3)
          for (let l in r)
            r.hasOwnProperty(l) && (o2[l] = r[l]);
        r.hasOwnProperty(a) || (o2[a] = i3[a]);
      }
    let s = n2[e];
    return n2[e] = o2, P.languages.DFS(P.languages, function(a, l) {
      l === s && a != e && (this[a] = o2);
    }), o2;
  }, DFS: function e(t3, r, n2, i3) {
    i3 = i3 || {};
    let o2 = P.util.objId;
    for (let s in t3)
      if (t3.hasOwnProperty(s)) {
        r.call(t3, s, t3[s], n2 || s);
        let a = t3[s], l = P.util.type(a);
        l === "Object" && !i3[o2(a)] ? (i3[o2(a)] = true, e(a, r, null, i3)) : l === "Array" && !i3[o2(a)] && (i3[o2(a)] = true, e(a, r, s, i3));
      }
  } }, plugins: {}, highlight: function(e, t3, r) {
    let n2 = { code: e, grammar: t3, language: r };
    return P.hooks.run("before-tokenize", n2), n2.tokens = P.tokenize(n2.code, n2.grammar), P.hooks.run("after-tokenize", n2), he.stringify(P.util.encode(n2.tokens), n2.language);
  }, matchGrammar: function(e, t3, r, n2, i3, o2, s) {
    for (let h3 in r) {
      if (!r.hasOwnProperty(h3) || !r[h3])
        continue;
      if (h3 == s)
        return;
      let O = r[h3];
      O = P.util.type(O) === "Array" ? O : [O];
      for (let T = 0;T < O.length; ++T) {
        let S = O[T], C = S.inside, E = !!S.lookbehind, me = !!S.greedy, ae = 0, jt = S.alias;
        if (me && !S.pattern.global) {
          let U = S.pattern.toString().match(/[imuy]*$/)[0];
          S.pattern = RegExp(S.pattern.source, U + "g");
        }
        S = S.pattern || S;
        for (let U = n2, ne = i3;U < t3.length; ne += t3[U].length, ++U) {
          let Ie = t3[U];
          if (t3.length > e.length)
            return;
          if (Ie instanceof he)
            continue;
          if (me && U != t3.length - 1) {
            S.lastIndex = ne;
            var p3 = S.exec(e);
            if (!p3)
              break;
            var c3 = p3.index + (E ? p3[1].length : 0), d3 = p3.index + p3[0].length, a = U, l = ne;
            for (let _ = t3.length;a < _ && (l < d3 || !t3[a].type && !t3[a - 1].greedy); ++a)
              l += t3[a].length, c3 >= l && (++U, ne = l);
            if (t3[U] instanceof he)
              continue;
            u = a - U, Ie = e.slice(ne, l), p3.index -= ne;
          } else {
            S.lastIndex = 0;
            var p3 = S.exec(Ie), u = 1;
          }
          if (!p3) {
            if (o2)
              break;
            continue;
          }
          E && (ae = p3[1] ? p3[1].length : 0);
          var c3 = p3.index + ae, p3 = p3[0].slice(ae), d3 = c3 + p3.length, f3 = Ie.slice(0, c3), g = Ie.slice(d3);
          let z = [U, u];
          f3 && (++U, ne += f3.length, z.push(f3));
          let dt = new he(h3, C ? P.tokenize(p3, C) : p3, jt, p3, me);
          if (z.push(dt), g && z.push(g), Array.prototype.splice.apply(t3, z), u != 1 && P.matchGrammar(e, t3, r, U, ne, true, h3), o2)
            break;
        }
      }
    }
  }, tokenize: function(e, t3) {
    let r = [e], n2 = t3.rest;
    if (n2) {
      for (let i3 in n2)
        t3[i3] = n2[i3];
      delete t3.rest;
    }
    return P.matchGrammar(e, r, t3, 0, 0, false), r;
  }, hooks: { all: {}, add: function(e, t3) {
    let r = P.hooks.all;
    r[e] = r[e] || [], r[e].push(t3);
  }, run: function(e, t3) {
    let r = P.hooks.all[e];
    if (!(!r || !r.length))
      for (var n2 = 0, i3;i3 = r[n2++]; )
        i3(t3);
  } }, Token: he };
  P.languages.clike = { comment: [{ pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/, lookbehind: true }, { pattern: /(^|[^\\:])\/\/.*/, lookbehind: true, greedy: true }], string: { pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/, greedy: true }, "class-name": { pattern: /((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i, lookbehind: true, inside: { punctuation: /[.\\]/ } }, keyword: /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/, boolean: /\b(?:true|false)\b/, function: /\w+(?=\()/, number: /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i, operator: /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/, punctuation: /[{}[\];(),.:]/ };
  P.languages.javascript = P.languages.extend("clike", { "class-name": [P.languages.clike["class-name"], { pattern: /(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/, lookbehind: true }], keyword: [{ pattern: /((?:^|})\s*)(?:catch|finally)\b/, lookbehind: true }, { pattern: /(^|[^.])\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/, lookbehind: true }], number: /\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/, function: /[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/, operator: /-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/ });
  P.languages.javascript["class-name"][0].pattern = /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/;
  P.languages.insertBefore("javascript", "keyword", { regex: { pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=\s*($|[\r\n,.;})\]]))/, lookbehind: true, greedy: true }, "function-variable": { pattern: /[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/, alias: "function" }, parameter: [{ pattern: /(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/, lookbehind: true, inside: P.languages.javascript }, { pattern: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i, inside: P.languages.javascript }, { pattern: /(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/, lookbehind: true, inside: P.languages.javascript }, { pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/, lookbehind: true, inside: P.languages.javascript }], constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/ });
  P.languages.markup && P.languages.markup.tag.addInlined("script", "javascript");
  P.languages.js = P.languages.javascript;
  P.languages.typescript = P.languages.extend("javascript", { keyword: /\b(?:abstract|as|async|await|break|case|catch|class|const|constructor|continue|debugger|declare|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|is|keyof|let|module|namespace|new|null|of|package|private|protected|public|readonly|return|require|set|static|super|switch|this|throw|try|type|typeof|var|void|while|with|yield)\b/, builtin: /\b(?:string|Function|any|number|boolean|Array|symbol|console|Promise|unknown|never)\b/ });
  P.languages.ts = P.languages.typescript;
  he.stringify = function(e, t3) {
    return typeof e == "string" ? e : Array.isArray(e) ? e.map(function(r) {
      return he.stringify(r, t3);
    }).join("") : qp(e.type)(e.content);
  };
  var Xs = k3(ss());
  var wn = class e {
    static read(t3) {
      let r;
      try {
        r = ta.default.readFileSync(t3, "utf-8");
      } catch {
        return null;
      }
      return e.fromContent(r);
    }
    static fromContent(t3) {
      let r = t3.split(/\r?\n/);
      return new e(1, r);
    }
    constructor(t3, r) {
      this.firstLineNumber = t3, this.lines = r;
    }
    get lastLineNumber() {
      return this.firstLineNumber + this.lines.length - 1;
    }
    mapLineAt(t3, r) {
      if (t3 < this.firstLineNumber || t3 > this.lines.length + this.firstLineNumber)
        return this;
      let n2 = t3 - this.firstLineNumber, i3 = [...this.lines];
      return i3[n2] = r(i3[n2]), new e(this.firstLineNumber, i3);
    }
    mapLines(t3) {
      return new e(this.firstLineNumber, this.lines.map((r, n2) => t3(r, this.firstLineNumber + n2)));
    }
    lineAt(t3) {
      return this.lines[t3 - this.firstLineNumber];
    }
    prependSymbolAt(t3, r) {
      return this.mapLines((n2, i3) => i3 === t3 ? `${r} ${n2}` : `  ${n2}`);
    }
    slice(t3, r) {
      let n2 = this.lines.slice(t3 - 1, r).join(`
`);
      return new e(t3, ea(n2).split(`
`));
    }
    highlight() {
      let t3 = Zs(this.toString());
      return new e(this.firstLineNumber, t3.split(`
`));
    }
    toString() {
      return this.lines.join(`
`);
    }
  };
  var Vp = { red: ce, gray: Bt, dim: Oe, bold: H, underline: X, highlightSource: (e) => e.highlight() };
  var Bp = { red: (e) => e, gray: (e) => e, dim: (e) => e, bold: (e) => e, underline: (e) => e, highlightSource: (e) => e };
  var zp = ["findUnique", "findUniqueOrThrow", "findFirst", "findFirstOrThrow", "create", "update", "upsert", "delete"];
  var Yp = ["aggregate", "count", "groupBy"];
  var Vi = Symbol();
  var pa = (e) => e;
  var Pn = class {
    constructor(t3, r) {
      this.extension = t3;
      this.previous = r;
      this.computedFieldsCache = new Pe;
      this.modelExtensionsCache = new Pe;
      this.queryCallbacksCache = new Pe;
      this.clientExtensions = er(() => this.extension.client ? { ...this.previous?.getAllClientExtensions(), ...this.extension.client } : this.previous?.getAllClientExtensions());
      this.batchCallbacks = er(() => {
        let t4 = this.previous?.getAllBatchQueryCallbacks() ?? [], r3 = this.extension.query?.$__internalBatch;
        return r3 ? t4.concat(r3) : t4;
      });
    }
    getAllComputedFields(t3) {
      return this.computedFieldsCache.getOrCreate(t3, () => ba(this.previous?.getAllComputedFields(t3), this.extension, t3));
    }
    getAllClientExtensions() {
      return this.clientExtensions.get();
    }
    getAllModelExtensions(t3) {
      return this.modelExtensionsCache.getOrCreate(t3, () => {
        let r = Se(t3);
        return !this.extension.model || !(this.extension.model[r] || this.extension.model.$allModels) ? this.previous?.getAllModelExtensions(t3) : { ...this.previous?.getAllModelExtensions(t3), ...this.extension.model.$allModels, ...this.extension.model[r] };
      });
    }
    getAllQueryCallbacks(t3, r) {
      return this.queryCallbacksCache.getOrCreate(`${t3}:${r}`, () => {
        let n2 = this.previous?.getAllQueryCallbacks(t3, r) ?? [], i3 = [], o2 = this.extension.query;
        return !o2 || !(o2[t3] || o2.$allModels || o2[r] || o2.$allOperations) ? n2 : (o2[t3] !== undefined && (o2[t3][r] !== undefined && i3.push(o2[t3][r]), o2[t3].$allOperations !== undefined && i3.push(o2[t3].$allOperations)), t3 !== "$none" && o2.$allModels !== undefined && (o2.$allModels[r] !== undefined && i3.push(o2.$allModels[r]), o2.$allModels.$allOperations !== undefined && i3.push(o2.$allModels.$allOperations)), o2[r] !== undefined && i3.push(o2[r]), o2.$allOperations !== undefined && i3.push(o2.$allOperations), n2.concat(i3));
      });
    }
    getAllBatchQueryCallbacks() {
      return this.batchCallbacks.get();
    }
  };
  var vn = class e {
    constructor(t3) {
      this.head = t3;
    }
    static empty() {
      return new e;
    }
    static single(t3) {
      return new e(new Pn(t3));
    }
    isEmpty() {
      return this.head === undefined;
    }
    append(t3) {
      return new e(new Pn(t3, this.head));
    }
    getAllComputedFields(t3) {
      return this.head?.getAllComputedFields(t3);
    }
    getAllClientExtensions() {
      return this.head?.getAllClientExtensions();
    }
    getAllModelExtensions(t3) {
      return this.head?.getAllModelExtensions(t3);
    }
    getAllQueryCallbacks(t3, r) {
      return this.head?.getAllQueryCallbacks(t3, r) ?? [];
    }
    getAllBatchQueryCallbacks() {
      return this.head?.getAllBatchQueryCallbacks() ?? [];
    }
  };
  var xa = L("prisma:client");
  var Pa = { Vercel: "vercel", "Netlify CI": "netlify" };
  var ad = "Cloudflare-Workers";
  var ld = "node";
  var ud = { node: "Node.js", workerd: "Cloudflare Workers", deno: "Deno and Deno Deploy", netlify: "Netlify Edge Functions", "edge-light": "Edge Runtime (Vercel Edge Functions, Vercel Edge Middleware, Next.js (Pages Router) Edge API Routes, Next.js (App Router) Edge Route Handlers or Next.js Middleware)" };
  var Oa = k3(import.meta.require("fs"));
  var fr = k3(import.meta.require("path"));
  var pd = L("prisma:client:engines:resolveEnginePath");
  var dd = () => new RegExp("runtime[\\\\/]library\\.m?js$");
  var Bi = k3(yi());
  var La = k3(ms());
  var An = class extends Error {
    constructor(t3, r) {
      super(t3), this.clientVersion = r.clientVersion, this.cause = r.cause;
    }
    get [Symbol.toStringTag]() {
      return this.name;
    }
  };
  var se = class extends An {
    constructor(t3, r) {
      super(t3, r), this.isRetryable = r.isRetryable ?? true;
    }
  };
  var Ft = class extends se {
    constructor(r) {
      super("This request must be retried", A(r, true));
      this.name = "ForcedRetryError";
      this.code = "P5001";
    }
  };
  w(Ft, "ForcedRetryError");
  var at = class extends se {
    constructor(r, n2) {
      super(r, A(n2, false));
      this.name = "InvalidDatasourceError";
      this.code = "P6001";
    }
  };
  w(at, "InvalidDatasourceError");
  var lt = class extends se {
    constructor(r, n2) {
      super(r, A(n2, false));
      this.name = "NotImplementedYetError";
      this.code = "P5004";
    }
  };
  w(lt, "NotImplementedYetError");
  var q4 = class extends se {
    constructor(t3, r) {
      super(t3, r), this.response = r.response;
      let n2 = this.response.headers.get("prisma-request-id");
      if (n2) {
        let i3 = `(The request id was: ${n2})`;
        this.message = this.message + " " + i3;
      }
    }
  };
  var ut = class extends q4 {
    constructor(r) {
      super("Schema needs to be uploaded", A(r, true));
      this.name = "SchemaMissingError";
      this.code = "P5005";
    }
  };
  w(ut, "SchemaMissingError");
  var Ui = "This request could not be understood by the server";
  var gr = class extends q4 {
    constructor(r, n2, i3) {
      super(n2 || Ui, A(r, false));
      this.name = "BadRequestError";
      this.code = "P5000";
      i3 && (this.code = i3);
    }
  };
  w(gr, "BadRequestError");
  var hr = class extends q4 {
    constructor(r, n2) {
      super("Engine not started: healthcheck timeout", A(r, true));
      this.name = "HealthcheckTimeoutError";
      this.code = "P5013";
      this.logs = n2;
    }
  };
  w(hr, "HealthcheckTimeoutError");
  var yr = class extends q4 {
    constructor(r, n2, i3) {
      super(n2, A(r, true));
      this.name = "EngineStartupError";
      this.code = "P5014";
      this.logs = i3;
    }
  };
  w(yr, "EngineStartupError");
  var br = class extends q4 {
    constructor(r) {
      super("Engine version is not supported", A(r, false));
      this.name = "EngineVersionNotSupportedError";
      this.code = "P5012";
    }
  };
  w(br, "EngineVersionNotSupportedError");
  var Gi = "Request timed out";
  var Er = class extends q4 {
    constructor(r, n2 = Gi) {
      super(n2, A(r, false));
      this.name = "GatewayTimeoutError";
      this.code = "P5009";
    }
  };
  w(Er, "GatewayTimeoutError");
  var fd = "Interactive transaction error";
  var wr = class extends q4 {
    constructor(r, n2 = fd) {
      super(n2, A(r, false));
      this.name = "InteractiveTransactionError";
      this.code = "P5015";
    }
  };
  w(wr, "InteractiveTransactionError");
  var gd = "Request parameters are invalid";
  var xr = class extends q4 {
    constructor(r, n2 = gd) {
      super(n2, A(r, false));
      this.name = "InvalidRequestError";
      this.code = "P5011";
    }
  };
  w(xr, "InvalidRequestError");
  var Qi = "Requested resource does not exist";
  var Pr = class extends q4 {
    constructor(r, n2 = Qi) {
      super(n2, A(r, false));
      this.name = "NotFoundError";
      this.code = "P5003";
    }
  };
  w(Pr, "NotFoundError");
  var Ji = "Unknown server error";
  var Lt = class extends q4 {
    constructor(r, n2, i3) {
      super(n2 || Ji, A(r, true));
      this.name = "ServerError";
      this.code = "P5006";
      this.logs = i3;
    }
  };
  w(Lt, "ServerError");
  var Wi = "Unauthorized, check your connection string";
  var vr = class extends q4 {
    constructor(r, n2 = Wi) {
      super(n2, A(r, false));
      this.name = "UnauthorizedError";
      this.code = "P5007";
    }
  };
  w(vr, "UnauthorizedError");
  var Hi = "Usage exceeded, retry again later";
  var Tr = class extends q4 {
    constructor(r, n2 = Hi) {
      super(n2, A(r, true));
      this.name = "UsageExceededError";
      this.code = "P5008";
    }
  };
  w(Tr, "UsageExceededError");
  var $e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  var Ba = { "@prisma/debug": "workspace:*", "@prisma/engines-version": "5.21.0-36.08713a93b99d58f31485621c634b04983ae01d95", "@prisma/fetch-engine": "workspace:*", "@prisma/get-platform": "workspace:*" };
  var Cr = class extends se {
    constructor(r, n2) {
      super(`Cannot fetch data from service:
${r}`, A(n2, true));
      this.name = "RequestError";
      this.code = "P5010";
    }
  };
  w(Cr, "RequestError");
  var Pd = "function" < "u" ? import.meta.require : () => {
  };
  var zi = class {
    constructor(t3 = {}) {
      this.headers = new Map;
      for (let [r, n2] of Object.entries(t3))
        if (typeof n2 == "string")
          this.headers.set(r, n2);
        else if (Array.isArray(n2))
          for (let i3 of n2)
            this.headers.set(r, i3);
    }
    append(t3, r) {
      this.headers.set(t3, r);
    }
    delete(t3) {
      this.headers.delete(t3);
    }
    get(t3) {
      return this.headers.get(t3) ?? null;
    }
    has(t3) {
      return this.headers.has(t3);
    }
    set(t3, r) {
      this.headers.set(t3, r);
    }
    forEach(t3, r) {
      for (let [n2, i3] of this.headers)
        t3.call(r, i3, n2, this);
    }
  };
  var vd = /^[1-9][0-9]*\.[0-9]+\.[0-9]+$/;
  var Ua = L("prisma:client:dataproxyEngine");
  var Qa = 3;
  var Yi = L("prisma:client:dataproxyEngine");
  var Zi = class {
    constructor({ apiKey: t3, tracingHelper: r, logLevel: n2, logQueries: i3, engineHash: o2 }) {
      this.apiKey = t3, this.tracingHelper = r, this.logLevel = n2, this.logQueries = i3, this.engineHash = o2;
    }
    build({ traceparent: t3, interactiveTransaction: r } = {}) {
      let n2 = { Authorization: `Bearer ${this.apiKey}`, "Prisma-Engine-Hash": this.engineHash };
      this.tracingHelper.isEnabled() && (n2.traceparent = t3 ?? this.tracingHelper.getTraceParent()), r && (n2["X-transaction-id"] = r.id);
      let i3 = this.buildCaptureSettings();
      return i3.length > 0 && (n2["X-capture-telemetry"] = i3.join(", ")), n2;
    }
    buildCaptureSettings() {
      let t3 = [];
      return this.tracingHelper.isEnabled() && t3.push("tracing"), this.logLevel && t3.push(this.logLevel), this.logQueries && t3.push("query"), t3;
    }
  };
  var Sr = class {
    constructor(t3) {
      this.name = "DataProxyEngine";
      ja(t3), this.config = t3, this.env = { ...t3.env, ...typeof process < "u" ? process.env : {} }, this.inlineSchema = qa(t3.inlineSchema), this.inlineDatasources = t3.inlineDatasources, this.inlineSchemaHash = t3.inlineSchemaHash, this.clientVersion = t3.clientVersion, this.engineHash = t3.engineVersion, this.logEmitter = t3.logEmitter, this.tracingHelper = t3.tracingHelper;
    }
    apiKey() {
      return this.headerBuilder.apiKey;
    }
    version() {
      return this.engineHash;
    }
    async start() {
      this.startPromise !== undefined && await this.startPromise, this.startPromise = (async () => {
        let [t3, r] = this.extractHostAndApiKey();
        this.host = t3, this.headerBuilder = new Zi({ apiKey: r, tracingHelper: this.tracingHelper, logLevel: this.config.logLevel, logQueries: this.config.logQueries, engineHash: this.engineHash }), this.remoteClientVersion = await Ga(t3, this.config), Yi("host", this.host);
      })(), await this.startPromise;
    }
    async stop() {
    }
    propagateResponseExtensions(t3) {
      t3?.logs?.length && t3.logs.forEach((r) => {
        switch (r.level) {
          case "debug":
          case "error":
          case "trace":
          case "warn":
          case "info":
            break;
          case "query": {
            let n2 = typeof r.attributes.query == "string" ? r.attributes.query : "";
            if (!this.tracingHelper.isEnabled()) {
              let [i3] = n2.split("/* traceparent");
              n2 = i3;
            }
            this.logEmitter.emit("query", { query: n2, timestamp: Va(r.timestamp), duration: Number(r.attributes.duration_ms), params: r.attributes.params, target: r.attributes.target });
          }
        }
      }), t3?.traces?.length && this.tracingHelper.createEngineSpan({ span: true, spans: t3.traces });
    }
    onBeforeExit() {
      throw new Error('"beforeExit" hook is not applicable to the remote query engine');
    }
    async url(t3) {
      return await this.start(), `https://${this.host}/${this.remoteClientVersion}/${this.inlineSchemaHash}/${t3}`;
    }
    async uploadSchema() {
      let t3 = { name: "schemaUpload", internal: true };
      return this.tracingHelper.runInChildSpan(t3, async () => {
        let r = await ct(await this.url("schema"), { method: "PUT", headers: this.headerBuilder.build(), body: this.inlineSchema, clientVersion: this.clientVersion });
        r.ok || Yi("schema response status", r.status);
        let n2 = await Rr(r, this.clientVersion);
        if (n2)
          throw this.logEmitter.emit("warn", { message: `Error while uploading schema: ${n2.message}`, timestamp: new Date, target: "" }), n2;
        this.logEmitter.emit("info", { message: `Schema (re)uploaded (hash: ${this.inlineSchemaHash})`, timestamp: new Date, target: "" });
      });
    }
    request(t3, { traceparent: r, interactiveTransaction: n2, customDataProxyFetch: i3 }) {
      return this.requestInternal({ body: t3, traceparent: r, interactiveTransaction: n2, customDataProxyFetch: i3 });
    }
    async requestBatch(t3, { traceparent: r, transaction: n2, customDataProxyFetch: i3 }) {
      let o2 = n2?.kind === "itx" ? n2.options : undefined, s = wt(t3, n2), { batchResult: a, elapsed: l } = await this.requestInternal({ body: s, customDataProxyFetch: i3, interactiveTransaction: o2, traceparent: r });
      return a.map((u) => ("errors" in u) && u.errors.length > 0 ? st(u.errors[0], this.clientVersion, this.config.activeProvider) : { data: u, elapsed: l });
    }
    requestInternal({ body: t3, traceparent: r, customDataProxyFetch: n2, interactiveTransaction: i3 }) {
      return this.withRetry({ actionGerund: "querying", callback: async ({ logHttpCall: o2 }) => {
        let s = i3 ? `${i3.payload.endpoint}/graphql` : await this.url("graphql");
        o2(s);
        let a = await ct(s, { method: "POST", headers: this.headerBuilder.build({ traceparent: r, interactiveTransaction: i3 }), body: JSON.stringify(t3), clientVersion: this.clientVersion }, n2);
        a.ok || Yi("graphql response status", a.status), await this.handleError(await Rr(a, this.clientVersion));
        let l = await a.json(), u = l.extensions;
        if (u && this.propagateResponseExtensions(u), l.errors)
          throw l.errors.length === 1 ? st(l.errors[0], this.config.clientVersion, this.config.activeProvider) : new B(l.errors, { clientVersion: this.config.clientVersion });
        return l;
      } });
    }
    async transaction(t3, r, n2) {
      let i3 = { start: "starting", commit: "committing", rollback: "rolling back" };
      return this.withRetry({ actionGerund: `${i3[t3]} transaction`, callback: async ({ logHttpCall: o2 }) => {
        if (t3 === "start") {
          let s = JSON.stringify({ max_wait: n2.maxWait, timeout: n2.timeout, isolation_level: n2.isolationLevel }), a = await this.url("transaction/start");
          o2(a);
          let l = await ct(a, { method: "POST", headers: this.headerBuilder.build({ traceparent: r.traceparent }), body: s, clientVersion: this.clientVersion });
          await this.handleError(await Rr(l, this.clientVersion));
          let u = await l.json(), c3 = u.extensions;
          c3 && this.propagateResponseExtensions(c3);
          let p3 = u.id, d3 = u["data-proxy"].endpoint;
          return { id: p3, payload: { endpoint: d3 } };
        } else {
          let s = `${n2.payload.endpoint}/${t3}`;
          o2(s);
          let a = await ct(s, { method: "POST", headers: this.headerBuilder.build({ traceparent: r.traceparent }), clientVersion: this.clientVersion });
          await this.handleError(await Rr(a, this.clientVersion));
          let u = (await a.json()).extensions;
          u && this.propagateResponseExtensions(u);
          return;
        }
      } });
    }
    extractHostAndApiKey() {
      let t3 = { clientVersion: this.clientVersion }, r = Object.keys(this.inlineDatasources)[0], n2 = _t({ inlineDatasources: this.inlineDatasources, overrideDatasources: this.config.overrideDatasources, clientVersion: this.clientVersion, env: this.env }), i3;
      try {
        i3 = new URL(n2);
      } catch {
        throw new at(`Error validating datasource \`${r}\`: the URL must start with the protocol \`prisma://\``, t3);
      }
      let { protocol: o2, host: s, searchParams: a } = i3;
      if (o2 !== "prisma:" && o2 !== "prisma+postgres:")
        throw new at(`Error validating datasource \`${r}\`: the URL must start with the protocol \`prisma://\``, t3);
      let l = a.get("api_key");
      if (l === null || l.length < 1)
        throw new at(`Error validating datasource \`${r}\`: the URL must contain a valid API key`, t3);
      return [s, l];
    }
    metrics() {
      throw new lt("Metrics are not yet supported for Accelerate", { clientVersion: this.clientVersion });
    }
    async withRetry(t3) {
      for (let r = 0;; r++) {
        let n2 = (i3) => {
          this.logEmitter.emit("info", { message: `Calling ${i3} (n=${r})`, timestamp: new Date, target: "" });
        };
        try {
          return await t3.callback({ logHttpCall: n2 });
        } catch (i3) {
          if (!(i3 instanceof se) || !i3.isRetryable)
            throw i3;
          if (r >= Qa)
            throw i3 instanceof Ft ? i3.cause : i3;
          this.logEmitter.emit("warn", { message: `Attempt ${r + 1}/${Qa} failed for ${t3.actionGerund}: ${i3.message ?? "(unknown)"}`, timestamp: new Date, target: "" });
          let o2 = await $a(r);
          this.logEmitter.emit("warn", { message: `Retrying after ${o2}ms`, timestamp: new Date, target: "" });
        }
      }
    }
    async handleError(t3) {
      if (t3 instanceof ut)
        throw await this.uploadSchema(), new Ft({ clientVersion: this.clientVersion, cause: t3 });
      if (t3)
        throw t3;
    }
    applyPendingMigrations() {
      throw new Error("Method not implemented.");
    }
  };
  var eo = k3(import.meta.require("os"));
  var Wa = k3(import.meta.require("path"));
  var Xi = Symbol("PrismaLibraryEngineCache");
  var Ha = { async loadLibrary(e) {
    let t3 = await zn(), r = await ka("library", e);
    try {
      return e.tracingHelper.runInChildSpan({ name: "loadLibrary", internal: true }, () => Sd(r));
    } catch (n2) {
      let i3 = li({ e: n2, platformInfo: t3, id: r });
      throw new R(i3, e.clientVersion);
    }
  } };
  var to;
  var Ka = { async loadLibrary(e) {
    let { clientVersion: t3, adapter: r, engineWasm: n2 } = e;
    if (r === undefined)
      throw new R(`The \`adapter\` option for \`PrismaClient\` is required in this context (${Tn().prettyName})`, t3);
    if (n2 === undefined)
      throw new R("WASM engine was unexpectedly `undefined`", t3);
    to === undefined && (to = (async () => {
      let o2 = n2.getRuntime(), s = await n2.getQueryEngineWasmModule();
      if (s == null)
        throw new R("The loaded wasm module was unexpectedly `undefined` or `null` once loaded", t3);
      let a = { "./query_engine_bg.js": o2 }, l = new WebAssembly.Instance(s, a);
      return o2.__wbg_set_wasm(l.exports), o2.QueryEngine;
    })());
    let i3 = await to;
    return { debugPanic() {
      return Promise.reject("{}");
    }, dmmf() {
      return Promise.resolve("{}");
    }, version() {
      return { commit: "unknown", version: "unknown" };
    }, QueryEngine: i3 };
  } };
  var Ad = "P2036";
  var Ae = L("prisma:client:libraryEngine");
  var za = [...Qn, "native"];
  var Ar = class {
    constructor(t3, r) {
      this.name = "LibraryEngine";
      this.libraryLoader = r ?? Ha, t3.engineWasm !== undefined && (this.libraryLoader = r ?? Ka), this.config = t3, this.libraryStarted = false, this.logQueries = t3.logQueries ?? false, this.logLevel = t3.logLevel ?? "error", this.logEmitter = t3.logEmitter, this.datamodel = t3.inlineSchema, t3.enableDebugLogs && (this.logLevel = "debug");
      let n2 = Object.keys(t3.overrideDatasources)[0], i3 = t3.overrideDatasources[n2]?.url;
      n2 !== undefined && i3 !== undefined && (this.datasourceOverrides = { [n2]: i3 }), this.libraryInstantiationPromise = this.instantiateLibrary();
    }
    async applyPendingMigrations() {
      throw new Error("Cannot call this method from this type of engine instance");
    }
    async transaction(t3, r, n2) {
      await this.start();
      let i3 = JSON.stringify(r), o2;
      if (t3 === "start") {
        let a = JSON.stringify({ max_wait: n2.maxWait, timeout: n2.timeout, isolation_level: n2.isolationLevel });
        o2 = await this.engine?.startTransaction(a, i3);
      } else
        t3 === "commit" ? o2 = await this.engine?.commitTransaction(n2.id, i3) : t3 === "rollback" && (o2 = await this.engine?.rollbackTransaction(n2.id, i3));
      let s = this.parseEngineResponse(o2);
      if (kd(s)) {
        let a = this.getExternalAdapterError(s);
        throw a ? a.error : new V4(s.message, { code: s.error_code, clientVersion: this.config.clientVersion, meta: s.meta });
      }
      return s;
    }
    async instantiateLibrary() {
      if (Ae("internalSetup"), this.libraryInstantiationPromise)
        return this.libraryInstantiationPromise;
      Gn(), this.binaryTarget = await this.getCurrentBinaryTarget(), await this.loadEngine(), this.version();
    }
    async getCurrentBinaryTarget() {
      {
        if (this.binaryTarget)
          return this.binaryTarget;
        let t3 = await nt();
        if (!za.includes(t3))
          throw new R(`Unknown ${ce("PRISMA_QUERY_ENGINE_LIBRARY")} ${ce(H(t3))}. Possible binaryTargets: ${qe(za.join(", "))} or a path to the query engine library.
You may have to run ${qe("prisma generate")} for your changes to take effect.`, this.config.clientVersion);
        return t3;
      }
    }
    parseEngineResponse(t3) {
      if (!t3)
        throw new B("Response from the Engine was empty", { clientVersion: this.config.clientVersion });
      try {
        return JSON.parse(t3);
      } catch {
        throw new B("Unable to JSON.parse response from engine", { clientVersion: this.config.clientVersion });
      }
    }
    async loadEngine() {
      if (!this.engine) {
        this.QueryEngineConstructor || (this.library = await this.libraryLoader.loadLibrary(this.config), this.QueryEngineConstructor = this.library.QueryEngine);
        try {
          let t3 = new WeakRef(this), { adapter: r } = this.config;
          r && Ae("Using driver adapter: %O", r), this.engine = new this.QueryEngineConstructor({ datamodel: this.datamodel, env: process.env, logQueries: this.config.logQueries ?? false, ignoreEnvVarErrors: true, datasourceOverrides: this.datasourceOverrides ?? {}, logLevel: this.logLevel, configDir: this.config.cwd, engineProtocol: "json" }, (n2) => {
            t3.deref()?.logger(n2);
          }, r);
        } catch (t3) {
          let r = t3, n2 = this.parseInitError(r.message);
          throw typeof n2 == "string" ? r : new R(n2.message, this.config.clientVersion, n2.error_code);
        }
      }
    }
    logger(t3) {
      let r = this.parseEngineResponse(t3);
      if (r) {
        if ("span" in r) {
          this.config.tracingHelper.createEngineSpan(r);
          return;
        }
        r.level = r?.level.toLowerCase() ?? "unknown", Id(r) ? this.logEmitter.emit("query", { timestamp: new Date, query: r.query, params: r.params, duration: Number(r.duration_ms), target: r.module_path }) : Od(r) ? this.loggerRustPanic = new le(ro(this, `${r.message}: ${r.reason} in ${r.file}:${r.line}:${r.column}`), this.config.clientVersion) : this.logEmitter.emit(r.level, { timestamp: new Date, message: r.message, target: r.module_path });
      }
    }
    parseInitError(t3) {
      try {
        return JSON.parse(t3);
      } catch {
      }
      return t3;
    }
    parseRequestError(t3) {
      try {
        return JSON.parse(t3);
      } catch {
      }
      return t3;
    }
    onBeforeExit() {
      throw new Error('"beforeExit" hook is not applicable to the library engine since Prisma 5.0.0, it is only relevant and implemented for the binary engine. Please add your event listener to the `process` object directly instead.');
    }
    async start() {
      if (await this.libraryInstantiationPromise, await this.libraryStoppingPromise, this.libraryStartingPromise)
        return Ae(`library already starting, this.libraryStarted: ${this.libraryStarted}`), this.libraryStartingPromise;
      if (this.libraryStarted)
        return;
      let t3 = async () => {
        Ae("library starting");
        try {
          let r = { traceparent: this.config.tracingHelper.getTraceParent() };
          await this.engine?.connect(JSON.stringify(r)), this.libraryStarted = true, Ae("library started");
        } catch (r) {
          let n2 = this.parseInitError(r.message);
          throw typeof n2 == "string" ? r : new R(n2.message, this.config.clientVersion, n2.error_code);
        } finally {
          this.libraryStartingPromise = undefined;
        }
      };
      return this.libraryStartingPromise = this.config.tracingHelper.runInChildSpan("connect", t3), this.libraryStartingPromise;
    }
    async stop() {
      if (await this.libraryStartingPromise, await this.executingQueryPromise, this.libraryStoppingPromise)
        return Ae("library is already stopping"), this.libraryStoppingPromise;
      if (!this.libraryStarted)
        return;
      let t3 = async () => {
        await new Promise((n2) => setTimeout(n2, 5)), Ae("library stopping");
        let r = { traceparent: this.config.tracingHelper.getTraceParent() };
        await this.engine?.disconnect(JSON.stringify(r)), this.libraryStarted = false, this.libraryStoppingPromise = undefined, Ae("library stopped");
      };
      return this.libraryStoppingPromise = this.config.tracingHelper.runInChildSpan("disconnect", t3), this.libraryStoppingPromise;
    }
    version() {
      return this.versionInfo = this.library?.version(), this.versionInfo?.version ?? "unknown";
    }
    debugPanic(t3) {
      return this.library?.debugPanic(t3);
    }
    async request(t3, { traceparent: r, interactiveTransaction: n2 }) {
      Ae(`sending request, this.libraryStarted: ${this.libraryStarted}`);
      let i3 = JSON.stringify({ traceparent: r }), o2 = JSON.stringify(t3);
      try {
        await this.start(), this.executingQueryPromise = this.engine?.query(o2, i3, n2?.id), this.lastQuery = o2;
        let s = this.parseEngineResponse(await this.executingQueryPromise);
        if (s.errors)
          throw s.errors.length === 1 ? this.buildQueryError(s.errors[0]) : new B(JSON.stringify(s.errors), { clientVersion: this.config.clientVersion });
        if (this.loggerRustPanic)
          throw this.loggerRustPanic;
        return { data: s, elapsed: 0 };
      } catch (s) {
        if (s instanceof R)
          throw s;
        if (s.code === "GenericFailure" && s.message?.startsWith("PANIC:"))
          throw new le(ro(this, s.message), this.config.clientVersion);
        let a = this.parseRequestError(s.message);
        throw typeof a == "string" ? s : new B(`${a.message}
${a.backtrace}`, { clientVersion: this.config.clientVersion });
      }
    }
    async requestBatch(t3, { transaction: r, traceparent: n2 }) {
      Ae("requestBatch");
      let i3 = wt(t3, r);
      await this.start(), this.lastQuery = JSON.stringify(i3), this.executingQueryPromise = this.engine.query(this.lastQuery, JSON.stringify({ traceparent: n2 }), Ja(r));
      let o2 = await this.executingQueryPromise, s = this.parseEngineResponse(o2);
      if (s.errors)
        throw s.errors.length === 1 ? this.buildQueryError(s.errors[0]) : new B(JSON.stringify(s.errors), { clientVersion: this.config.clientVersion });
      let { batchResult: a, errors: l } = s;
      if (Array.isArray(a))
        return a.map((u) => u.errors && u.errors.length > 0 ? this.loggerRustPanic ?? this.buildQueryError(u.errors[0]) : { data: u, elapsed: 0 });
      throw l && l.length === 1 ? new Error(l[0].error) : new Error(JSON.stringify(s));
    }
    buildQueryError(t3) {
      if (t3.user_facing_error.is_panic)
        return new le(ro(this, t3.user_facing_error.message), this.config.clientVersion);
      let r = this.getExternalAdapterError(t3.user_facing_error);
      return r ? r.error : st(t3, this.config.clientVersion, this.config.activeProvider);
    }
    getExternalAdapterError(t3) {
      if (t3.error_code === Ad && this.config.adapter) {
        let r = t3.meta?.id;
        zr(typeof r == "number", "Malformed external JS error received from the engine");
        let n2 = this.config.adapter.errorRegistry.consumeError(r);
        return zr(n2, "External error with reported id was not registered"), n2;
      }
    }
    async metrics(t3) {
      await this.start();
      let r = await this.engine.metrics(JSON.stringify(t3));
      return t3.format === "prometheus" ? r : this.parseEngineResponse(r);
    }
  };
  var nl = k3(no());
  var ue = class {
    constructor(t3, r) {
      this.name = t3;
      this.value = r;
      this.isRequired = false;
    }
    makeRequired() {
      return this.isRequired = true, this;
    }
    write(t3) {
      let { colors: { green: r } } = t3.context;
      t3.addMarginSymbol(r(this.isRequired ? "+" : "?")), t3.write(r(this.name)), this.isRequired || t3.write(r("?")), t3.write(r(": ")), typeof this.value == "string" ? t3.write(r(this.value)) : t3.write(this.value);
    }
  };
  var Ir = class {
    constructor() {
      this.fields = [];
    }
    addField(t3, r) {
      return this.fields.push({ write(n2) {
        let { green: i3, dim: o2 } = n2.context.colors;
        n2.write(i3(o2(`${t3}: ${r}`))).addMarginSymbol(i3(o2("+")));
      } }), this;
    }
    write(t3) {
      let { colors: { green: r } } = t3.context;
      t3.writeLine(r("{")).withIndent(() => {
        t3.writeJoined(St, this.fields).newLine();
      }).write(r("}")).addMarginSymbol(r("+"));
    }
  };
  var em = 3;
  var rm = { findUnique: "findUnique", findUniqueOrThrow: "findUniqueOrThrow", findFirst: "findFirst", findFirstOrThrow: "findFirstOrThrow", findMany: "findMany", count: "aggregate", create: "createOne", createMany: "createMany", createManyAndReturn: "createManyAndReturn", update: "updateOne", updateMany: "updateMany", upsert: "upsertOne", delete: "deleteOne", deleteMany: "deleteMany", executeRaw: "executeRaw", queryRaw: "queryRaw", aggregate: "aggregate", groupBy: "groupBy", runCommandRaw: "runCommandRaw", findRaw: "findRaw", aggregateRaw: "aggregateRaw" };
  var ul = "explicitly `undefined` values are not allowed";
  var io = class e {
    constructor(t3) {
      this.params = t3;
      this.params.modelName && (this.modelOrType = this.params.runtimeDataModel.models[this.params.modelName] ?? this.params.runtimeDataModel.types[this.params.modelName]);
    }
    throwValidationError(t3) {
      Dn({ errors: [t3], originalMethod: this.params.originalMethod, args: this.params.rootArgs ?? {}, callsite: this.params.callsite, errorFormat: this.params.errorFormat, clientVersion: this.params.clientVersion, globalOmit: this.params.globalOmit });
    }
    getSelectionPath() {
      return this.params.selectionPath;
    }
    getArgumentPath() {
      return this.params.argumentPath;
    }
    getArgumentName() {
      return this.params.argumentPath[this.params.argumentPath.length - 1];
    }
    getOutputTypeDescription() {
      if (!(!this.params.modelName || !this.modelOrType))
        return { name: this.params.modelName, fields: this.modelOrType.fields.map((t3) => ({ name: t3.name, typeName: "boolean", isRelation: t3.kind === "object" })) };
    }
    isRawAction() {
      return ["executeRaw", "queryRaw", "runCommandRaw", "findRaw", "aggregateRaw"].includes(this.params.action);
    }
    isPreviewFeatureOn(t3) {
      return this.params.previewFeatures.includes(t3);
    }
    getComputedFields() {
      if (this.params.modelName)
        return this.params.extensions.getAllComputedFields(this.params.modelName);
    }
    findField(t3) {
      return this.modelOrType?.fields.find((r) => r.name === t3);
    }
    nestSelection(t3) {
      let r = this.findField(t3), n2 = r?.kind === "object" ? r.type : undefined;
      return new e({ ...this.params, modelName: n2, selectionPath: this.params.selectionPath.concat(t3) });
    }
    getGlobalOmit() {
      return this.params.modelName && this.shouldApplyGlobalOmit() ? this.params.globalOmit?.[Mt(this.params.modelName)] ?? {} : {};
    }
    shouldApplyGlobalOmit() {
      switch (this.params.action) {
        case "findFirst":
        case "findFirstOrThrow":
        case "findUniqueOrThrow":
        case "findMany":
        case "upsert":
        case "findUnique":
        case "createManyAndReturn":
        case "create":
        case "update":
        case "delete":
          return true;
        case "executeRaw":
        case "aggregateRaw":
        case "runCommandRaw":
        case "findRaw":
        case "createMany":
        case "deleteMany":
        case "groupBy":
        case "updateMany":
        case "count":
        case "aggregate":
        case "queryRaw":
          return false;
        default:
          Fe(this.params.action, "Unknown action");
      }
    }
    nestArgument(t3) {
      return new e({ ...this.params, argumentPath: this.params.argumentPath.concat(t3) });
    }
  };
  var ml = (e) => ({ command: e });
  var fl = (e) => e.strings.reduce((t3, r, n2) => `${t3}@P${n2}${r}`);
  var dm = ["$connect", "$disconnect", "$on", "$transaction", "$use", "$extends"];
  var El = dm;
  var mm = /^(\s*alter\s)/i;
  var wl = L("prisma:client");
  var ao = ({ clientMethod: e, activeProvider: t3 }) => (r) => {
    let n2 = "", i3;
    if (r instanceof sr)
      n2 = r.sql, i3 = { values: $t(r.values), __prismaRawParameters__: true };
    else if (Array.isArray(r)) {
      let [o2, ...s] = r;
      n2 = o2, i3 = { values: $t(s || []), __prismaRawParameters__: true };
    } else
      switch (t3) {
        case "sqlite":
        case "mysql": {
          n2 = r.sql, i3 = { values: $t(r.values), __prismaRawParameters__: true };
          break;
        }
        case "cockroachdb":
        case "postgresql":
        case "postgres": {
          n2 = r.text, i3 = { values: $t(r.values), __prismaRawParameters__: true };
          break;
        }
        case "sqlserver": {
          n2 = fl(r), i3 = { values: $t(r.values), __prismaRawParameters__: true };
          break;
        }
        default:
          throw new Error(`The ${t3} provider does not support ${e}`);
      }
    return i3?.values ? wl(`prisma.${e}(${n2}, ${i3.values})`) : wl(`prisma.${e}(${n2})`), { query: n2, parameters: i3 };
  };
  var xl = { requestArgsToMiddlewareArgs(e) {
    return [e.strings, ...e.values];
  }, middlewareArgsToRequestArgs(e) {
    let [t3, ...r] = e;
    return new ie(t3, r);
  } };
  var Pl = { requestArgsToMiddlewareArgs(e) {
    return [e];
  }, middlewareArgsToRequestArgs(e) {
    return e[0];
  } };
  var Tl = { isEnabled() {
    return false;
  }, getTraceParent() {
    return "00-10-10-00";
  }, async createEngineSpan() {
  }, getActiveContext() {
  }, runInChildSpan(e, t3) {
    return t3();
  } };
  var uo = class {
    isEnabled() {
      return this.getGlobalTracingHelper().isEnabled();
    }
    getTraceParent(t3) {
      return this.getGlobalTracingHelper().getTraceParent(t3);
    }
    createEngineSpan(t3) {
      return this.getGlobalTracingHelper().createEngineSpan(t3);
    }
    getActiveContext() {
      return this.getGlobalTracingHelper().getActiveContext();
    }
    runInChildSpan(t3, r) {
      return this.getGlobalTracingHelper().runInChildSpan(t3, r);
    }
    getGlobalTracingHelper() {
      return globalThis.PRISMA_INSTRUMENTATION?.helper ?? Tl;
    }
  };
  var _n = class {
    constructor() {
      this._middlewares = [];
    }
    use(t3) {
      this._middlewares.push(t3);
    }
    get(t3) {
      return this._middlewares[t3];
    }
    has(t3) {
      return !!this._middlewares[t3];
    }
    length() {
      return this._middlewares.length;
    }
  };
  var Ol = k3(yi());
  var hm = { aggregate: false, aggregateRaw: false, createMany: true, createManyAndReturn: true, createOne: true, deleteMany: true, deleteOne: true, executeRaw: true, findFirst: false, findFirstOrThrow: false, findMany: false, findRaw: false, findUnique: false, findUniqueOrThrow: false, groupBy: false, queryRaw: false, runCommandRaw: true, updateMany: true, updateOne: true, upsertOne: true };
  var Nn = class {
    constructor(t3) {
      this.options = t3;
      this.tickActive = false;
      this.batches = {};
    }
    request(t3) {
      let r = this.options.batchBy(t3);
      return r ? (this.batches[r] || (this.batches[r] = [], this.tickActive || (this.tickActive = true, process.nextTick(() => {
        this.dispatchBatches(), this.tickActive = false;
      }))), new Promise((n2, i3) => {
        this.batches[r].push({ request: t3, resolve: n2, reject: i3 });
      })) : this.options.singleLoader(t3);
    }
    dispatchBatches() {
      for (let t3 in this.batches) {
        let r = this.batches[t3];
        delete this.batches[t3], r.length === 1 ? this.options.singleLoader(r[0].request).then((n2) => {
          n2 instanceof Error ? r[0].reject(n2) : r[0].resolve(n2);
        }).catch((n2) => {
          r[0].reject(n2);
        }) : (r.sort((n2, i3) => this.options.batchOrder(n2.request, i3.request)), this.options.batchLoader(r.map((n2) => n2.request)).then((n2) => {
          if (n2 instanceof Error)
            for (let i3 = 0;i3 < r.length; i3++)
              r[i3].reject(n2);
          else
            for (let i3 = 0;i3 < r.length; i3++) {
              let o2 = n2[i3];
              o2 instanceof Error ? r[i3].reject(o2) : r[i3].resolve(o2);
            }
        }).catch((n2) => {
          for (let i3 = 0;i3 < r.length; i3++)
            r[i3].reject(n2);
        }));
      }
    }
    get [Symbol.toStringTag]() {
      return "DataLoader";
    }
  };
  var bm = L("prisma:client:request_handler");
  var Mn = class {
    constructor(t3, r) {
      this.logEmitter = r, this.client = t3, this.dataloader = new Nn({ batchLoader: fa(async ({ requests: n2, customDataProxyFetch: i3 }) => {
        let { transaction: o2, otelParentCtx: s } = n2[0], a = n2.map((p3) => p3.protocolQuery), l = this.client._tracingHelper.getTraceParent(s), u = n2.some((p3) => po(p3.protocolQuery.action));
        return (await this.client._engine.requestBatch(a, { traceparent: l, transaction: Em(o2), containsWrite: u, customDataProxyFetch: i3 })).map((p3, d3) => {
          if (p3 instanceof Error)
            return p3;
          try {
            return this.mapQueryEngineResult(n2[d3], p3);
          } catch (f3) {
            return f3;
          }
        });
      }), singleLoader: async (n2) => {
        let i3 = n2.transaction?.kind === "itx" ? kl(n2.transaction) : undefined, o2 = await this.client._engine.request(n2.protocolQuery, { traceparent: this.client._tracingHelper.getTraceParent(), interactiveTransaction: i3, isWrite: po(n2.protocolQuery.action), customDataProxyFetch: n2.customDataProxyFetch });
        return this.mapQueryEngineResult(n2, o2);
      }, batchBy: (n2) => n2.transaction?.id ? `transaction-${n2.transaction.id}` : Al(n2.protocolQuery), batchOrder(n2, i3) {
        return n2.transaction?.kind === "batch" && i3.transaction?.kind === "batch" ? n2.transaction.index - i3.transaction.index : 0;
      } });
    }
    async request(t3) {
      try {
        return await this.dataloader.request(t3);
      } catch (r) {
        let { clientMethod: n2, callsite: i3, transaction: o2, args: s, modelName: a } = t3;
        this.handleAndLogRequestError({ error: r, clientMethod: n2, callsite: i3, transaction: o2, args: s, modelName: a, globalOmit: t3.globalOmit });
      }
    }
    mapQueryEngineResult({ dataPath: t3, unpacker: r }, n2) {
      let i3 = n2?.data, o2 = n2?.elapsed, s = this.unpack(i3, t3, r);
      return process.env.PRISMA_CLIENT_GET_TIME ? { data: s, elapsed: o2 } : s;
    }
    handleAndLogRequestError(t3) {
      try {
        this.handleRequestError(t3);
      } catch (r) {
        throw this.logEmitter && this.logEmitter.emit("error", { message: r.message, target: t3.clientMethod, timestamp: new Date }), r;
      }
    }
    handleRequestError({ error: t3, clientMethod: r, callsite: n2, transaction: i3, args: o2, modelName: s, globalOmit: a }) {
      if (bm(t3), wm(t3, i3) || t3 instanceof Le)
        throw t3;
      if (t3 instanceof V4 && xm(t3)) {
        let u = Dl(t3.meta);
        Dn({ args: o2, errors: [u], callsite: n2, errorFormat: this.client._errorFormat, originalMethod: r, clientVersion: this.client._clientVersion, globalOmit: a });
      }
      let l = t3.message;
      if (n2 && (l = Dt({ callsite: n2, originalMethod: r, isPanic: t3.isPanic, showColors: this.client._errorFormat === "pretty", message: l })), l = this.sanitizeMessage(l), t3.code) {
        let u = s ? { modelName: s, ...t3.meta } : t3.meta;
        throw new V4(l, { code: t3.code, clientVersion: this.client._clientVersion, meta: u, batchRequestIdx: t3.batchRequestIdx });
      } else {
        if (t3.isPanic)
          throw new le(l, this.client._clientVersion);
        if (t3 instanceof B)
          throw new B(l, { clientVersion: this.client._clientVersion, batchRequestIdx: t3.batchRequestIdx });
        if (t3 instanceof R)
          throw new R(l, this.client._clientVersion);
        if (t3 instanceof le)
          throw new le(l, this.client._clientVersion);
      }
      throw t3.clientVersion = this.client._clientVersion, t3;
    }
    sanitizeMessage(t3) {
      return this.client._errorFormat && this.client._errorFormat !== "pretty" ? (0, Ol.default)(t3) : t3;
    }
    unpack(t3, r, n2) {
      if (!t3 || (t3.data && (t3 = t3.data), !t3))
        return t3;
      let i3 = Object.keys(t3)[0], o2 = Object.values(t3)[0], s = r.filter((u) => u !== "select" && u !== "include"), a = $i(o2, s), l = i3 === "queryRaw" ? Il(a) : Ln(a);
      return n2 ? n2(l) : l;
    }
    get [Symbol.toStringTag]() {
      return "RequestHandler";
    }
  };
  var _l = "5.21.0";
  var Fl = _l;
  var ql = k3(no());
  var F = class extends Error {
    constructor(t3) {
      super(t3 + `
Read more at https://pris.ly/d/client-constructor`), this.name = "PrismaClientConstructorValidationError";
    }
    get [Symbol.toStringTag]() {
      return "PrismaClientConstructorValidationError";
    }
  };
  w(F, "PrismaClientConstructorValidationError");
  var Ll = ["datasources", "datasourceUrl", "errorFormat", "adapter", "log", "transactionOptions", "omit", "__internal"];
  var Nl = ["pretty", "colorless", "minimal"];
  var Ml = ["info", "query", "warn", "error"];
  var vm = { datasources: (e, { datasourceNames: t3 }) => {
    if (e) {
      if (typeof e != "object" || Array.isArray(e))
        throw new F(`Invalid value ${JSON.stringify(e)} for "datasources" provided to PrismaClient constructor`);
      for (let [r, n2] of Object.entries(e)) {
        if (!t3.includes(r)) {
          let i3 = qt(r, t3) || ` Available datasources: ${t3.join(", ")}`;
          throw new F(`Unknown datasource ${r} provided to PrismaClient constructor.${i3}`);
        }
        if (typeof n2 != "object" || Array.isArray(n2))
          throw new F(`Invalid value ${JSON.stringify(e)} for datasource "${r}" provided to PrismaClient constructor.
It should have this form: { url: "CONNECTION_STRING" }`);
        if (n2 && typeof n2 == "object")
          for (let [i3, o2] of Object.entries(n2)) {
            if (i3 !== "url")
              throw new F(`Invalid value ${JSON.stringify(e)} for datasource "${r}" provided to PrismaClient constructor.
It should have this form: { url: "CONNECTION_STRING" }`);
            if (typeof o2 != "string")
              throw new F(`Invalid value ${JSON.stringify(o2)} for datasource "${r}" provided to PrismaClient constructor.
It should have this form: { url: "CONNECTION_STRING" }`);
          }
      }
    }
  }, adapter: (e, t3) => {
    if (e === null)
      return;
    if (e === undefined)
      throw new F('"adapter" property must not be undefined, use null to conditionally disable driver adapters.');
    if (!In(t3).includes("driverAdapters"))
      throw new F('"adapter" property can only be provided to PrismaClient constructor when "driverAdapters" preview feature is enabled.');
    if (Kt() === "binary")
      throw new F('Cannot use a driver adapter with the "binary" Query Engine. Please use the "library" Query Engine.');
  }, datasourceUrl: (e) => {
    if (typeof e < "u" && typeof e != "string")
      throw new F(`Invalid value ${JSON.stringify(e)} for "datasourceUrl" provided to PrismaClient constructor.
Expected string or undefined.`);
  }, errorFormat: (e) => {
    if (e) {
      if (typeof e != "string")
        throw new F(`Invalid value ${JSON.stringify(e)} for "errorFormat" provided to PrismaClient constructor.`);
      if (!Nl.includes(e)) {
        let t3 = qt(e, Nl);
        throw new F(`Invalid errorFormat ${e} provided to PrismaClient constructor.${t3}`);
      }
    }
  }, log: (e) => {
    if (!e)
      return;
    if (!Array.isArray(e))
      throw new F(`Invalid value ${JSON.stringify(e)} for "log" provided to PrismaClient constructor.`);
    function t3(r) {
      if (typeof r == "string" && !Ml.includes(r)) {
        let n2 = qt(r, Ml);
        throw new F(`Invalid log level "${r}" provided to PrismaClient constructor.${n2}`);
      }
    }
    for (let r of e) {
      t3(r);
      let n2 = { level: t3, emit: (i3) => {
        let o2 = ["stdout", "event"];
        if (!o2.includes(i3)) {
          let s = qt(i3, o2);
          throw new F(`Invalid value ${JSON.stringify(i3)} for "emit" in logLevel provided to PrismaClient constructor.${s}`);
        }
      } };
      if (r && typeof r == "object")
        for (let [i3, o2] of Object.entries(r))
          if (n2[i3])
            n2[i3](o2);
          else
            throw new F(`Invalid property ${i3} for "log" provided to PrismaClient constructor`);
    }
  }, transactionOptions: (e) => {
    if (!e)
      return;
    let t3 = e.maxWait;
    if (t3 != null && t3 <= 0)
      throw new F(`Invalid value ${t3} for maxWait in "transactionOptions" provided to PrismaClient constructor. maxWait needs to be greater than 0`);
    let r = e.timeout;
    if (r != null && r <= 0)
      throw new F(`Invalid value ${r} for timeout in "transactionOptions" provided to PrismaClient constructor. timeout needs to be greater than 0`);
  }, omit: (e, t3) => {
    if (typeof e != "object")
      throw new F('"omit" option is expected to be an object.');
    if (e === null)
      throw new F('"omit" option can not be `null`');
    let r = [];
    for (let [n2, i3] of Object.entries(e)) {
      let o2 = Rm(n2, t3.runtimeDataModel);
      if (!o2) {
        r.push({ kind: "UnknownModel", modelKey: n2 });
        continue;
      }
      for (let [s, a] of Object.entries(i3)) {
        let l = o2.fields.find((u) => u.name === s);
        if (!l) {
          r.push({ kind: "UnknownField", modelKey: n2, fieldName: s });
          continue;
        }
        if (l.relationName) {
          r.push({ kind: "RelationInOmit", modelKey: n2, fieldName: s });
          continue;
        }
        typeof a != "boolean" && r.push({ kind: "InvalidFieldValue", modelKey: n2, fieldName: s });
      }
    }
    if (r.length > 0)
      throw new F(Cm(e, r));
  }, __internal: (e) => {
    if (!e)
      return;
    let t3 = ["debug", "engine", "configOverride"];
    if (typeof e != "object")
      throw new F(`Invalid value ${JSON.stringify(e)} for "__internal" to PrismaClient constructor`);
    for (let [r] of Object.entries(e))
      if (!t3.includes(r)) {
        let n2 = qt(r, t3);
        throw new F(`Invalid property ${JSON.stringify(r)} for "__internal" provided to PrismaClient constructor.${n2}`);
      }
  } };
  var tt = L("prisma:client");
  typeof globalThis == "object" && (globalThis.NODE_CLIENT = true);
  var Sm = { requestArgsToMiddlewareArgs: (e) => e, middlewareArgsToRequestArgs: (e) => e };
  var Am = Symbol.for("prisma.client.transaction.id");
  var Im = { id: 0, nextId() {
    return ++this.id;
  } };
  var km = new Set(["toJSON", "$$typeof", "asymmetricMatch", Symbol.iterator, Symbol.toStringTag, Symbol.isConcatSpreadable, Symbol.toPrimitive]);
  /*! Bundled license information:
  
  decimal.js/decimal.mjs:
    (*!
     *  decimal.js v10.4.3
     *  An arbitrary-precision Decimal type for JavaScript.
     *  https://github.com/MikeMcl/decimal.js
     *  Copyright (c) 2022 Michael Mclaughlin <M8ch88l@gmail.com>
     *  MIT Licence
     *)
  */
});

// node_modules/.prisma/client/index.js
var require_client = __commonJS((exports) => {
  var __dirname = "D:\\leviathan-war\\backend\\backend-leviathan\\node_modules\\.prisma\\client";
  Object.defineProperty(exports, "__esModule", { value: true });
  var {
    PrismaClientKnownRequestError: PrismaClientKnownRequestError2,
    PrismaClientUnknownRequestError: PrismaClientUnknownRequestError2,
    PrismaClientRustPanicError: PrismaClientRustPanicError2,
    PrismaClientInitializationError: PrismaClientInitializationError2,
    PrismaClientValidationError: PrismaClientValidationError2,
    NotFoundError: NotFoundError2,
    getPrismaClient: getPrismaClient2,
    sqltag: sqltag2,
    empty: empty2,
    join: join2,
    raw: raw2,
    skip: skip2,
    Decimal: Decimal2,
    Debug: Debug2,
    objectEnumValues: objectEnumValues2,
    makeStrictEnum: makeStrictEnum2,
    Extensions: Extensions2,
    warnOnce: warnOnce2,
    defineDmmfProperty: defineDmmfProperty2,
    Public: Public2,
    getRuntime: getRuntime2
  } = require_library();
  var Prisma = {};
  exports.Prisma = Prisma;
  exports.$Enums = {};
  Prisma.prismaVersion = {
    client: "5.21.0",
    engine: "08713a93b99d58f31485621c634b04983ae01d95"
  };
  Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError2;
  Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError2;
  Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError2;
  Prisma.PrismaClientInitializationError = PrismaClientInitializationError2;
  Prisma.PrismaClientValidationError = PrismaClientValidationError2;
  Prisma.NotFoundError = NotFoundError2;
  Prisma.Decimal = Decimal2;
  Prisma.sql = sqltag2;
  Prisma.empty = empty2;
  Prisma.join = join2;
  Prisma.raw = raw2;
  Prisma.validator = Public2.validator;
  Prisma.getExtensionContext = Extensions2.getExtensionContext;
  Prisma.defineExtension = Extensions2.defineExtension;
  Prisma.DbNull = objectEnumValues2.instances.DbNull;
  Prisma.JsonNull = objectEnumValues2.instances.JsonNull;
  Prisma.AnyNull = objectEnumValues2.instances.AnyNull;
  Prisma.NullTypes = {
    DbNull: objectEnumValues2.classes.DbNull,
    JsonNull: objectEnumValues2.classes.JsonNull,
    AnyNull: objectEnumValues2.classes.AnyNull
  };
  var path = import.meta.require("path");
  exports.Prisma.TransactionIsolationLevel = makeStrictEnum2({
    ReadUncommitted: "ReadUncommitted",
    ReadCommitted: "ReadCommitted",
    RepeatableRead: "RepeatableRead",
    Serializable: "Serializable"
  });
  exports.Prisma.UserScalarFieldEnum = {
    id: "id",
    nick: "nick",
    email: "email",
    password: "password",
    active: "active",
    activationCode: "activationCode",
    passwordResetCode: "passwordResetCode",
    intelligence: "intelligence",
    endurance: "endurance",
    coordination: "coordination",
    luck: "luck",
    region: "region",
    factory: "factory",
    pro: "pro",
    theme: "theme",
    exp: "exp",
    party: "party",
    residency: "residency",
    donations: "donations",
    birthday: "birthday",
    resting: "resting",
    fatigue: "fatigue",
    productivity: "productivity",
    timeToNextAction: "timeToNextAction",
    levcoins: "levcoins",
    country: "country",
    workPermit1: "workPermit1",
    workPermit2: "workPermit2",
    workPermit3: "workPermit3"
  };
  exports.Prisma.RegionScalarFieldEnum = {
    id: "id",
    name: "name",
    state: "state",
    schools: "schools",
    sportCenter: "sportCenter",
    universities: "universities",
    recreativeCenter: "recreativeCenter",
    policeStation: "policeStation",
    militaryCamps: "militaryCamps",
    coalPlants: "coalPlants",
    waterPlants: "waterPlants",
    healthCenters: "healthCenters",
    militaryBases: "militaryBases",
    happiness: "happiness",
    basicEducation: "basicEducation",
    healthSystem: "healthSystem",
    higherEducation: "higherEducation",
    coalBonus: "coalBonus",
    uraniumBonus: "uraniumBonus",
    lithiumBonus: "lithiumBonus",
    diamondBonus: "diamondBonus",
    waterBonus: "waterBonus",
    ironBonus: "ironBonus",
    oilBonus: "oilBonus",
    farmlandsBonus: "farmlandsBonus",
    terrain: "terrain",
    lat: "lat",
    lon: "lon",
    frontiers: "frontiers",
    countryCode: "countryCode",
    isoNumeric: "isoNumeric"
  };
  exports.Prisma.StateScalarFieldEnum = {
    id: "id",
    name: "name",
    levcoins: "levcoins",
    uranium: "uranium",
    coal: "coal",
    lithium: "lithium",
    diamond: "diamond",
    water: "water",
    iron: "iron",
    oil: "oil",
    leader: "leader",
    ministerOfEconomics: "ministerOfEconomics",
    ministerOfDefense: "ministerOfDefense",
    ministerOfForeignAffairs: "ministerOfForeignAffairs",
    kindOfGovernment: "kindOfGovernment",
    electionsInProgress: "electionsInProgress"
  };
  exports.Prisma.PartyScalarFieldEnum = {
    id: "id",
    name: "name",
    state: "state",
    exp: "exp",
    leader: "leader",
    kindBonus: "kindBonus",
    positionsInParlament: "positionsInParlament"
  };
  exports.Prisma.FactoryScalarFieldEnum = {
    id: "id",
    name: "name",
    exp: "exp",
    kindFactory: "kindFactory",
    percent: "percent",
    qty: "qty",
    owner: "owner",
    salary: "salary",
    levcoins: "levcoins",
    region: "region"
  };
  exports.Prisma.SortOrder = {
    asc: "asc",
    desc: "desc"
  };
  exports.Prisma.QueryMode = {
    default: "default",
    insensitive: "insensitive"
  };
  exports.Prisma.NullsOrder = {
    first: "first",
    last: "last"
  };
  exports.Prisma.ModelName = {
    User: "User",
    Region: "Region",
    State: "State",
    Party: "Party",
    Factory: "Factory"
  };
  var config2 = {
    generator: {
      name: "client",
      provider: {
        fromEnvVar: null,
        value: "prisma-client-js"
      },
      output: {
        value: "D:\\leviathan-war\\backend\\backend-leviathan\\node_modules\\@prisma\\client",
        fromEnvVar: null
      },
      config: {
        engineType: "library"
      },
      binaryTargets: [
        {
          fromEnvVar: null,
          value: "windows",
          native: true
        }
      ],
      previewFeatures: [],
      sourceFilePath: "D:\\leviathan-war\\backend\\backend-leviathan\\prisma\\schema.prisma"
    },
    relativeEnvPaths: {
      rootEnvPath: null,
      schemaEnvPath: "../../../.env"
    },
    relativePath: "../../../prisma",
    clientVersion: "5.21.0",
    engineVersion: "08713a93b99d58f31485621c634b04983ae01d95",
    datasourceNames: [
      "db"
    ],
    activeProvider: "postgresql",
    inlineDatasources: {
      db: {
        url: {
          fromEnvVar: "DATABASE_URL",
          value: null
        }
      }
    },
    inlineSchema: "// This is your Prisma schema file,\n// learn more about it in the docs: https://pris.ly/d/prisma-schema\n\n// Looking for ways to speed up your queries, or scale easily with your serverless or edge functions?\n// Try Prisma Accelerate: https://pris.ly/cli/accelerate-init\n\nmodel User {\n  id                Int      @id @default(autoincrement())\n  nick              String\n  email             String   @unique\n  password          String\n  active            Boolean  @default(false)\n  activationCode    String? // Optional field\n  passwordResetCode String? // Optional field\n  intelligence      Int      @default(1)\n  endurance         Int      @default(1)\n  coordination      Int      @default(1)\n  luck              Int      @default(1)\n  region            Int? // Optional\n  factory           Int? // Optional\n  pro               Boolean  @default(false)\n  theme             String   @default(\"light\")\n  exp               Int      @default(420)\n  party             Int? // Optional\n  residency         Int? // Optional\n  donations         Int      @default(0)\n  birthday          DateTime @default(now())\n  resting           DateTime @default(now())\n  fatigue           Int      @default(0)\n  productivity      Int      @default(100)\n  timeToNextAction  DateTime @default(now())\n  levcoins          Int      @default(10)\n  country           String   @default(\"\")\n  workPermit1       Int? // Optional\n  workPermit2       Int? // Optional\n  workPermit3       Int? // Optional\n\n  regionInfo       Region?  @relation(\"UserRegion\", fields: [region], references: [id])\n  factoryInfo      Factory? @relation(\"UserFactory\", fields: [factory], references: [id])\n  partyInfo        Party?   @relation(\"PartyMembers\", fields: [party], references: [id])\n  stateWorkPermit1 State?   @relation(\"StatePermit1\", fields: [workPermit1], references: [id])\n  stateWorkPermit2 State?   @relation(\"StatePermit2\", fields: [workPermit2], references: [id])\n  stateWorkPermit3 State?   @relation(\"StatePermit3\", fields: [workPermit3], references: [id])\n\n  factories     Factory[] @relation(\"FactoryOwner\")\n  leaderOfParty Party?    @relation(\"PartyLeader\")\n}\n\nmodel Region {\n  id               Int       @id @default(autoincrement())\n  name             String    @unique\n  state            Int\n  users            User[]    @relation(\"UserRegion\") // Users that belong to this region\n  factories        Factory[]\n  stateInfo        State     @relation(fields: [state], references: [id])\n  schools          Int       @default(1)\n  sportCenter      Int       @default(1)\n  universities     Int       @default(1)\n  recreativeCenter Int       @default(1)\n  policeStation    Int       @default(1)\n  militaryCamps    Int       @default(1)\n  coalPlants       Int       @default(1)\n  waterPlants      Int       @default(1)\n  healthCenters    Int       @default(1)\n  militaryBases    Int       @default(1)\n  happiness        Int       @default(1)\n  basicEducation   Int       @default(1)\n  healthSystem     Int       @default(1)\n  higherEducation  Int       @default(1)\n  coalBonus        Int       @default(1)\n  uraniumBonus     Int       @default(1)\n  lithiumBonus     Int       @default(1)\n  diamondBonus     Int       @default(1)\n  waterBonus       Int       @default(1)\n  ironBonus        Int       @default(1)\n  oilBonus         Int       @default(1)\n  farmlandsBonus   Int       @default(1)\n  terrain          String    @default(\"Mountains\")\n  lat              Float     @default(1.0)\n  lon              Float     @default(1.0)\n  frontiers        String    @default(\"1\")\n  countryCode      String    @default(\"co\")\n  isoNumeric       Int       @default(1)\n}\n\nmodel State {\n  id                       Int      @id @default(autoincrement())\n  name                     String   @unique\n  levcoins                 Int      @default(1)\n  uranium                  Int      @default(1)\n  coal                     Int      @default(1)\n  lithium                  Int      @default(1)\n  diamond                  Int      @default(1)\n  water                    Int      @default(1)\n  iron                     Int      @default(1)\n  oil                      Int      @default(1)\n  leader                   Int?\n  ministerOfEconomics      Int?\n  ministerOfDefense        Int?\n  ministerOfForeignAffairs Int?\n  kindOfGovernment         Int      @default(0)\n  electionsInProgress      Boolean  @default(false)\n  parties                  Party[]\n  regions                  Region[]\n  workPermits1             User[]   @relation(\"StatePermit1\")\n  workPermits2             User[]   @relation(\"StatePermit2\")\n  workPermits3             User[]   @relation(\"StatePermit3\")\n}\n\nmodel Party {\n  id                   Int    @id @default(autoincrement())\n  name                 String @unique\n  state                Int\n  exp                  Int    @default(200)\n  leader               Int?   @unique // Add @unique here for one-to-one relation\n  kindBonus            String @default(\"damage\")\n  positionsInParlament Int    @default(0)\n\n  stateInfo  State  @relation(fields: [state], references: [id])\n  leaderInfo User?  @relation(\"PartyLeader\", fields: [leader], references: [id])\n  members    User[] @relation(\"PartyMembers\")\n}\n\nmodel Factory {\n  id          Int     @id @default(autoincrement())\n  name        String  @unique\n  exp         Int     @default(500)\n  kindFactory String  @default(\"farmland\")\n  percent     Boolean @default(true)\n  qty         Int     @default(0)\n  owner       Int\n  salary      Int     @default(0)\n  levcoins    Int     @default(0)\n  region      Int\n\n  workers    User[] @relation(\"UserFactory\") // Add the opposite relation here\n  ownerInfo  User   @relation(\"FactoryOwner\", fields: [owner], references: [id])\n  regionInfo Region @relation(fields: [region], references: [id])\n}\n\ngenerator client {\n  provider = \"prisma-client-js\"\n}\n\ndatasource db {\n  provider = \"postgresql\"\n  url      = env(\"DATABASE_URL\")\n}\n",
    inlineSchemaHash: "1e683f4ce3175659cd8e7e584be1e62fd57d830c6f9f3fca8fcf1426c91c42eb",
    copyEngine: true
  };
  var fs = import.meta.require("fs");
  config2.dirname = __dirname;
  if (!fs.existsSync(path.join(__dirname, "schema.prisma"))) {
    const alternativePaths = [
      "node_modules/.prisma/client",
      ".prisma/client"
    ];
    const alternativePath = alternativePaths.find((altPath) => {
      return fs.existsSync(path.join(process.cwd(), altPath, "schema.prisma"));
    }) ?? alternativePaths[0];
    config2.dirname = path.join(process.cwd(), alternativePath);
    config2.isBundled = true;
  }
  config2.runtimeDataModel = JSON.parse("{\"models\":{\"User\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nick\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"password\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"active\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"activationCode\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"passwordResetCode\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"intelligence\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":1,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"endurance\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":1,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"coordination\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":1,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"luck\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":1,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"region\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"factory\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pro\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"theme\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"light\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"exp\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":420,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"party\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"residency\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"donations\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"birthday\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"resting\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fatigue\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"productivity\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":100,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"timeToNextAction\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"levcoins\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":10,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"country\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"workPermit1\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"workPermit2\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"workPermit3\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"regionInfo\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Region\",\"relationName\":\"UserRegion\",\"relationFromFields\":[\"region\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"factoryInfo\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Factory\",\"relationName\":\"UserFactory\",\"relationFromFields\":[\"factory\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"partyInfo\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Party\",\"relationName\":\"PartyMembers\",\"relationFromFields\":[\"party\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"stateWorkPermit1\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"State\",\"relationName\":\"StatePermit1\",\"relationFromFields\":[\"workPermit1\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"stateWorkPermit2\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"State\",\"relationName\":\"StatePermit2\",\"relationFromFields\":[\"workPermit2\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"stateWorkPermit3\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"State\",\"relationName\":\"StatePermit3\",\"relationFromFields\":[\"workPermit3\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"factories\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Factory\",\"relationName\":\"FactoryOwner\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"leaderOfParty\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Party\",\"relationName\":\"PartyLeader\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Region\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"state\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"users\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"UserRegion\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"factories\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Factory\",\"relationName\":\"FactoryToRegion\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"stateInfo\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"State\",\"relationName\":\"RegionToState\",\"relationFromFields\":[\"state\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"schools\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":1,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sportCenter\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":1,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"universities\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":1,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"recreativeCenter\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":1,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"policeStation\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":1,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"militaryCamps\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":1,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"coalPlants\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":1,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"waterPlants\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":1,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"healthCenters\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":1,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"militaryBases\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":1,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"happiness\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":1,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"basicEducation\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":1,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"healthSystem\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":1,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"higherEducation\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":1,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"coalBonus\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":1,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"uraniumBonus\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":1,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lithiumBonus\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":1,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"diamondBonus\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":1,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"waterBonus\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":1,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ironBonus\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":1,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"oilBonus\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":1,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"farmlandsBonus\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":1,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"terrain\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"Mountains\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lat\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Float\",\"default\":1,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lon\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Float\",\"default\":1,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"frontiers\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"1\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"countryCode\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"co\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isoNumeric\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":1,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"State\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"levcoins\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":1,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"uranium\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":1,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"coal\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":1,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lithium\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":1,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"diamond\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":1,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"water\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":1,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"iron\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":1,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"oil\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":1,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"leader\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ministerOfEconomics\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ministerOfDefense\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ministerOfForeignAffairs\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"kindOfGovernment\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"electionsInProgress\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"parties\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Party\",\"relationName\":\"PartyToState\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"regions\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Region\",\"relationName\":\"RegionToState\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"workPermits1\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"StatePermit1\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"workPermits2\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"StatePermit2\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"workPermits3\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"StatePermit3\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Party\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"state\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"exp\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":200,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"leader\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"kindBonus\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"damage\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"positionsInParlament\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"stateInfo\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"State\",\"relationName\":\"PartyToState\",\"relationFromFields\":[\"state\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"leaderInfo\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"PartyLeader\",\"relationFromFields\":[\"leader\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"members\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"PartyMembers\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Factory\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"exp\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":500,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"kindFactory\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"farmland\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"percent\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"qty\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"owner\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"salary\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"levcoins\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"region\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"workers\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"UserFactory\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ownerInfo\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"FactoryOwner\",\"relationFromFields\":[\"owner\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"regionInfo\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Region\",\"relationName\":\"FactoryToRegion\",\"relationFromFields\":[\"region\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{},\"types\":{}}");
  defineDmmfProperty2(exports.Prisma, config2.runtimeDataModel);
  config2.engineWasm = undefined;
  var { warnEnvConflicts: warnEnvConflicts2 } = require_library();
  warnEnvConflicts2({
    rootEnvPath: config2.relativeEnvPaths.rootEnvPath && path.resolve(config2.dirname, config2.relativeEnvPaths.rootEnvPath),
    schemaEnvPath: config2.relativeEnvPaths.schemaEnvPath && path.resolve(config2.dirname, config2.relativeEnvPaths.schemaEnvPath)
  });
  var PrismaClient = getPrismaClient2(config2);
  exports.PrismaClient = PrismaClient;
  Object.assign(exports, Prisma);
  path.join(__dirname, "query_engine-windows.dll.node");
  path.join(process.cwd(), "node_modules/.prisma/client/query_engine-windows.dll.node");
  path.join(__dirname, "schema.prisma");
  path.join(process.cwd(), "node_modules/.prisma/client/schema.prisma");
});

// node_modules/.prisma/client/default.js
var require_default = __commonJS((exports, module) => {
  module.exports = { ...require_client() };
});

// node_modules/@prisma/client/default.js
var require_default2 = __commonJS((exports, module) => {
  module.exports = {
    ...require_default()
  };
});

// node_modules/@sinclair/typebox/build/esm/value/guard/guard.mjs
function IsAsyncIterator(value) {
  return IsObject(value) && Symbol.asyncIterator in value;
}
function IsIterator(value) {
  return IsObject(value) && Symbol.iterator in value;
}
function IsStandardObject(value) {
  return IsObject(value) && (Object.getPrototypeOf(value) === Object.prototype || Object.getPrototypeOf(value) === null);
}
function IsPromise(value) {
  return value instanceof Promise;
}
function IsDate(value) {
  return value instanceof Date && Number.isFinite(value.getTime());
}
function IsTypedArray(value) {
  return ArrayBuffer.isView(value);
}
function IsUint8Array(value) {
  return value instanceof globalThis.Uint8Array;
}
function HasPropertyKey(value, key) {
  return key in value;
}
function IsObject(value) {
  return value !== null && typeof value === "object";
}
function IsArray(value) {
  return Array.isArray(value) && !ArrayBuffer.isView(value);
}
function IsUndefined(value) {
  return value === undefined;
}
function IsNull(value) {
  return value === null;
}
function IsBoolean(value) {
  return typeof value === "boolean";
}
function IsNumber(value) {
  return typeof value === "number";
}
function IsInteger(value) {
  return Number.isInteger(value);
}
function IsBigInt(value) {
  return typeof value === "bigint";
}
function IsString(value) {
  return typeof value === "string";
}
function IsFunction(value) {
  return typeof value === "function";
}
function IsSymbol(value) {
  return typeof value === "symbol";
}
function IsValueType(value) {
  return IsBigInt(value) || IsBoolean(value) || IsNull(value) || IsNumber(value) || IsString(value) || IsSymbol(value) || IsUndefined(value);
}
// node_modules/@sinclair/typebox/build/esm/system/policy.mjs
var TypeSystemPolicy;
(function(TypeSystemPolicy2) {
  TypeSystemPolicy2.ExactOptionalPropertyTypes = false;
  TypeSystemPolicy2.AllowArrayObject = false;
  TypeSystemPolicy2.AllowNaN = false;
  TypeSystemPolicy2.AllowNullVoid = false;
  function IsExactOptionalProperty(value, key) {
    return TypeSystemPolicy2.ExactOptionalPropertyTypes ? key in value : value[key] !== undefined;
  }
  TypeSystemPolicy2.IsExactOptionalProperty = IsExactOptionalProperty;
  function IsObjectLike(value) {
    const isObject = IsObject(value);
    return TypeSystemPolicy2.AllowArrayObject ? isObject : isObject && !IsArray(value);
  }
  TypeSystemPolicy2.IsObjectLike = IsObjectLike;
  function IsRecordLike(value) {
    return IsObjectLike(value) && !(value instanceof Date) && !(value instanceof Uint8Array);
  }
  TypeSystemPolicy2.IsRecordLike = IsRecordLike;
  function IsNumberLike(value) {
    return TypeSystemPolicy2.AllowNaN ? IsNumber(value) : Number.isFinite(value);
  }
  TypeSystemPolicy2.IsNumberLike = IsNumberLike;
  function IsVoidLike(value) {
    const isUndefined = IsUndefined(value);
    return TypeSystemPolicy2.AllowNullVoid ? isUndefined || value === null : isUndefined;
  }
  TypeSystemPolicy2.IsVoidLike = IsVoidLike;
})(TypeSystemPolicy || (TypeSystemPolicy = {}));
// node_modules/@sinclair/typebox/build/esm/type/registry/format.mjs
var exports_format = {};
__export(exports_format, {
  Set: () => Set2,
  Has: () => Has,
  Get: () => Get,
  Entries: () => Entries,
  Delete: () => Delete,
  Clear: () => Clear
});
function Entries() {
  return new Map(map);
}
function Clear() {
  return map.clear();
}
function Delete(format) {
  return map.delete(format);
}
function Has(format) {
  return map.has(format);
}
function Set2(format, func) {
  map.set(format, func);
}
function Get(format) {
  return map.get(format);
}
var map = new Map;
// node_modules/@sinclair/typebox/build/esm/type/registry/type.mjs
var exports_type = {};
__export(exports_type, {
  Set: () => Set3,
  Has: () => Has2,
  Get: () => Get2,
  Entries: () => Entries2,
  Delete: () => Delete2,
  Clear: () => Clear2
});
function Entries2() {
  return new Map(map2);
}
function Clear2() {
  return map2.clear();
}
function Delete2(kind) {
  return map2.delete(kind);
}
function Has2(kind) {
  return map2.has(kind);
}
function Set3(kind, func) {
  map2.set(kind, func);
}
function Get2(kind) {
  return map2.get(kind);
}
var map2 = new Map;
// node_modules/@sinclair/typebox/build/esm/type/symbols/symbols.mjs
var TransformKind = Symbol.for("TypeBox.Transform");
var ReadonlyKind = Symbol.for("TypeBox.Readonly");
var OptionalKind = Symbol.for("TypeBox.Optional");
var Hint = Symbol.for("TypeBox.Hint");
var Kind = Symbol.for("TypeBox.Kind");
// node_modules/@sinclair/typebox/build/esm/type/unsafe/unsafe.mjs
function Unsafe(options = {}) {
  return {
    ...options,
    [Kind]: options[Kind] ?? "Unsafe"
  };
}
// node_modules/@sinclair/typebox/build/esm/type/error/error.mjs
class TypeBoxError extends Error {
  constructor(message) {
    super(message);
  }
}
// node_modules/@sinclair/typebox/build/esm/system/system.mjs
class TypeSystemDuplicateTypeKind extends TypeBoxError {
  constructor(kind) {
    super(`Duplicate type kind '${kind}' detected`);
  }
}

class TypeSystemDuplicateFormat extends TypeBoxError {
  constructor(kind) {
    super(`Duplicate string format '${kind}' detected`);
  }
}
var TypeSystem;
(function(TypeSystem2) {
  function Type(kind, check) {
    if (exports_type.Has(kind))
      throw new TypeSystemDuplicateTypeKind(kind);
    exports_type.Set(kind, check);
    return (options = {}) => Unsafe({ ...options, [Kind]: kind });
  }
  TypeSystem2.Type = Type;
  function Format(format, check) {
    if (exports_format.Has(format))
      throw new TypeSystemDuplicateFormat(format);
    exports_format.Set(format, check);
    return format;
  }
  TypeSystem2.Format = Format;
})(TypeSystem || (TypeSystem = {}));
// node_modules/@sinclair/typebox/build/esm/type/mapped/mapped-result.mjs
function MappedResult(properties) {
  return {
    [Kind]: "MappedResult",
    properties
  };
}
// node_modules/@sinclair/typebox/build/esm/type/guard/value.mjs
var exports_value = {};
__export(exports_value, {
  IsUndefined: () => IsUndefined2,
  IsUint8Array: () => IsUint8Array2,
  IsSymbol: () => IsSymbol2,
  IsString: () => IsString2,
  IsRegExp: () => IsRegExp,
  IsObject: () => IsObject2,
  IsNumber: () => IsNumber2,
  IsNull: () => IsNull2,
  IsIterator: () => IsIterator2,
  IsFunction: () => IsFunction2,
  IsDate: () => IsDate2,
  IsBoolean: () => IsBoolean2,
  IsBigInt: () => IsBigInt2,
  IsAsyncIterator: () => IsAsyncIterator2,
  IsArray: () => IsArray2
});
function IsAsyncIterator2(value) {
  return IsObject2(value) && !IsArray2(value) && !IsUint8Array2(value) && Symbol.asyncIterator in value;
}
function IsArray2(value) {
  return Array.isArray(value);
}
function IsBigInt2(value) {
  return typeof value === "bigint";
}
function IsBoolean2(value) {
  return typeof value === "boolean";
}
function IsDate2(value) {
  return value instanceof globalThis.Date;
}
function IsFunction2(value) {
  return typeof value === "function";
}
function IsIterator2(value) {
  return IsObject2(value) && !IsArray2(value) && !IsUint8Array2(value) && Symbol.iterator in value;
}
function IsNull2(value) {
  return value === null;
}
function IsNumber2(value) {
  return typeof value === "number";
}
function IsObject2(value) {
  return typeof value === "object" && value !== null;
}
function IsRegExp(value) {
  return value instanceof globalThis.RegExp;
}
function IsString2(value) {
  return typeof value === "string";
}
function IsSymbol2(value) {
  return typeof value === "symbol";
}
function IsUint8Array2(value) {
  return value instanceof globalThis.Uint8Array;
}
function IsUndefined2(value) {
  return value === undefined;
}

// node_modules/@sinclair/typebox/build/esm/type/clone/value.mjs
function ArrayType(value) {
  return value.map((value2) => Visit(value2));
}
function DateType(value) {
  return new Date(value.getTime());
}
function Uint8ArrayType(value) {
  return new Uint8Array(value);
}
function RegExpType(value) {
  return new RegExp(value.source, value.flags);
}
function ObjectType(value) {
  const result = {};
  for (const key of Object.getOwnPropertyNames(value)) {
    result[key] = Visit(value[key]);
  }
  for (const key of Object.getOwnPropertySymbols(value)) {
    result[key] = Visit(value[key]);
  }
  return result;
}
function Visit(value) {
  return IsArray2(value) ? ArrayType(value) : IsDate2(value) ? DateType(value) : IsUint8Array2(value) ? Uint8ArrayType(value) : IsRegExp(value) ? RegExpType(value) : IsObject2(value) ? ObjectType(value) : value;
}
function Clone(value) {
  return Visit(value);
}

// node_modules/@sinclair/typebox/build/esm/type/clone/type.mjs
function CloneRest(schemas) {
  return schemas.map((schema) => CloneType(schema));
}
function CloneType(schema, options = {}) {
  return { ...Clone(schema), ...options };
}

// node_modules/@sinclair/typebox/build/esm/type/discard/discard.mjs
function DiscardKey(value, key) {
  const { [key]: _, ...rest } = value;
  return rest;
}
function Discard(value, keys) {
  return keys.reduce((acc, key) => DiscardKey(acc, key), value);
}
// node_modules/@sinclair/typebox/build/esm/type/array/array.mjs
function Array2(schema, options = {}) {
  return {
    ...options,
    [Kind]: "Array",
    type: "array",
    items: CloneType(schema)
  };
}
// node_modules/@sinclair/typebox/build/esm/type/async-iterator/async-iterator.mjs
function AsyncIterator(items, options = {}) {
  return {
    ...options,
    [Kind]: "AsyncIterator",
    type: "AsyncIterator",
    items: CloneType(items)
  };
}
// node_modules/@sinclair/typebox/build/esm/type/constructor/constructor.mjs
function Constructor(parameters, returns, options) {
  return {
    ...options,
    [Kind]: "Constructor",
    type: "Constructor",
    parameters: CloneRest(parameters),
    returns: CloneType(returns)
  };
}
// node_modules/@sinclair/typebox/build/esm/type/function/function.mjs
function Function2(parameters, returns, options) {
  return {
    ...options,
    [Kind]: "Function",
    type: "Function",
    parameters: CloneRest(parameters),
    returns: CloneType(returns)
  };
}
// node_modules/@sinclair/typebox/build/esm/type/never/never.mjs
function Never(options = {}) {
  return {
    ...options,
    [Kind]: "Never",
    not: {}
  };
}
// node_modules/@sinclair/typebox/build/esm/type/guard/kind.mjs
function IsReadonly(value) {
  return IsObject2(value) && value[ReadonlyKind] === "Readonly";
}
function IsOptional(value) {
  return IsObject2(value) && value[OptionalKind] === "Optional";
}
function IsAny(value) {
  return IsKindOf(value, "Any");
}
function IsArray3(value) {
  return IsKindOf(value, "Array");
}
function IsAsyncIterator3(value) {
  return IsKindOf(value, "AsyncIterator");
}
function IsBigInt3(value) {
  return IsKindOf(value, "BigInt");
}
function IsBoolean3(value) {
  return IsKindOf(value, "Boolean");
}
function IsConstructor(value) {
  return IsKindOf(value, "Constructor");
}
function IsDate3(value) {
  return IsKindOf(value, "Date");
}
function IsFunction3(value) {
  return IsKindOf(value, "Function");
}
function IsInteger2(value) {
  return IsKindOf(value, "Integer");
}
function IsIntersect(value) {
  return IsKindOf(value, "Intersect");
}
function IsIterator3(value) {
  return IsKindOf(value, "Iterator");
}
function IsKindOf(value, kind) {
  return IsObject2(value) && Kind in value && value[Kind] === kind;
}
function IsLiteral(value) {
  return IsKindOf(value, "Literal");
}
function IsMappedKey(value) {
  return IsKindOf(value, "MappedKey");
}
function IsMappedResult(value) {
  return IsKindOf(value, "MappedResult");
}
function IsNever(value) {
  return IsKindOf(value, "Never");
}
function IsNot(value) {
  return IsKindOf(value, "Not");
}
function IsNull3(value) {
  return IsKindOf(value, "Null");
}
function IsNumber3(value) {
  return IsKindOf(value, "Number");
}
function IsObject3(value) {
  return IsKindOf(value, "Object");
}
function IsPromise2(value) {
  return IsKindOf(value, "Promise");
}
function IsRecord(value) {
  return IsKindOf(value, "Record");
}
function IsRef(value) {
  return IsKindOf(value, "Ref");
}
function IsRegExp2(value) {
  return IsKindOf(value, "RegExp");
}
function IsString3(value) {
  return IsKindOf(value, "String");
}
function IsSymbol3(value) {
  return IsKindOf(value, "Symbol");
}
function IsTemplateLiteral(value) {
  return IsKindOf(value, "TemplateLiteral");
}
function IsThis(value) {
  return IsKindOf(value, "This");
}
function IsTransform(value) {
  return IsObject2(value) && TransformKind in value;
}
function IsTuple(value) {
  return IsKindOf(value, "Tuple");
}
function IsUndefined3(value) {
  return IsKindOf(value, "Undefined");
}
function IsUnion(value) {
  return IsKindOf(value, "Union");
}
function IsUint8Array3(value) {
  return IsKindOf(value, "Uint8Array");
}
function IsUnknown(value) {
  return IsKindOf(value, "Unknown");
}
function IsUnsafe(value) {
  return IsKindOf(value, "Unsafe");
}
function IsVoid(value) {
  return IsKindOf(value, "Void");
}
function IsKind(value) {
  return IsObject2(value) && Kind in value && IsString2(value[Kind]);
}
function IsSchema(value) {
  return IsAny(value) || IsArray3(value) || IsBoolean3(value) || IsBigInt3(value) || IsAsyncIterator3(value) || IsConstructor(value) || IsDate3(value) || IsFunction3(value) || IsInteger2(value) || IsIntersect(value) || IsIterator3(value) || IsLiteral(value) || IsMappedKey(value) || IsMappedResult(value) || IsNever(value) || IsNot(value) || IsNull3(value) || IsNumber3(value) || IsObject3(value) || IsPromise2(value) || IsRecord(value) || IsRef(value) || IsRegExp2(value) || IsString3(value) || IsSymbol3(value) || IsTemplateLiteral(value) || IsThis(value) || IsTuple(value) || IsUndefined3(value) || IsUnion(value) || IsUint8Array3(value) || IsUnknown(value) || IsUnsafe(value) || IsVoid(value) || IsKind(value);
}

// node_modules/@sinclair/typebox/build/esm/type/optional/optional.mjs
function RemoveOptional(schema) {
  return Discard(CloneType(schema), [OptionalKind]);
}
function AddOptional(schema) {
  return { ...CloneType(schema), [OptionalKind]: "Optional" };
}
function OptionalWithFlag(schema, F) {
  return F === false ? RemoveOptional(schema) : AddOptional(schema);
}
function Optional(schema, enable) {
  const F = enable ?? true;
  return IsMappedResult(schema) ? OptionalFromMappedResult(schema, F) : OptionalWithFlag(schema, F);
}

// node_modules/@sinclair/typebox/build/esm/type/optional/optional-from-mapped-result.mjs
function FromProperties(P, F) {
  const Acc = {};
  for (const K2 of globalThis.Object.getOwnPropertyNames(P))
    Acc[K2] = Optional(P[K2], F);
  return Acc;
}
function FromMappedResult(R, F) {
  return FromProperties(R.properties, F);
}
function OptionalFromMappedResult(R, F) {
  const P = FromMappedResult(R, F);
  return MappedResult(P);
}
// node_modules/@sinclair/typebox/build/esm/type/intersect/intersect-create.mjs
function IntersectCreate(T, options) {
  const allObjects = T.every((schema) => IsObject3(schema));
  const clonedUnevaluatedProperties = IsSchema(options.unevaluatedProperties) ? { unevaluatedProperties: CloneType(options.unevaluatedProperties) } : {};
  return options.unevaluatedProperties === false || IsSchema(options.unevaluatedProperties) || allObjects ? { ...options, ...clonedUnevaluatedProperties, [Kind]: "Intersect", type: "object", allOf: CloneRest(T) } : { ...options, ...clonedUnevaluatedProperties, [Kind]: "Intersect", allOf: CloneRest(T) };
}

// node_modules/@sinclair/typebox/build/esm/type/intersect/intersect-evaluated.mjs
function IsIntersectOptional(T) {
  return T.every((L) => IsOptional(L));
}
function RemoveOptionalFromType(T) {
  return Discard(T, [OptionalKind]);
}
function RemoveOptionalFromRest(T) {
  return T.map((L) => IsOptional(L) ? RemoveOptionalFromType(L) : L);
}
function ResolveIntersect(T, options) {
  return IsIntersectOptional(T) ? Optional(IntersectCreate(RemoveOptionalFromRest(T), options)) : IntersectCreate(RemoveOptionalFromRest(T), options);
}
function IntersectEvaluated(T, options = {}) {
  if (T.length === 0)
    return Never(options);
  if (T.length === 1)
    return CloneType(T[0], options);
  if (T.some((schema) => IsTransform(schema)))
    throw new Error("Cannot intersect transform types");
  return ResolveIntersect(T, options);
}
// node_modules/@sinclair/typebox/build/esm/type/intersect/intersect.mjs
function Intersect(T, options = {}) {
  if (T.length === 0)
    return Never(options);
  if (T.length === 1)
    return CloneType(T[0], options);
  if (T.some((schema) => IsTransform(schema)))
    throw new Error("Cannot intersect transform types");
  return IntersectCreate(T, options);
}
// node_modules/@sinclair/typebox/build/esm/type/union/union-create.mjs
function UnionCreate(T, options) {
  return { ...options, [Kind]: "Union", anyOf: CloneRest(T) };
}

// node_modules/@sinclair/typebox/build/esm/type/union/union-evaluated.mjs
function IsUnionOptional(T) {
  return T.some((L) => IsOptional(L));
}
function RemoveOptionalFromRest2(T) {
  return T.map((L) => IsOptional(L) ? RemoveOptionalFromType2(L) : L);
}
function RemoveOptionalFromType2(T) {
  return Discard(T, [OptionalKind]);
}
function ResolveUnion(T, options) {
  return IsUnionOptional(T) ? Optional(UnionCreate(RemoveOptionalFromRest2(T), options)) : UnionCreate(RemoveOptionalFromRest2(T), options);
}
function UnionEvaluated(T, options = {}) {
  return T.length === 0 ? Never(options) : T.length === 1 ? CloneType(T[0], options) : ResolveUnion(T, options);
}
// node_modules/@sinclair/typebox/build/esm/type/union/union.mjs
function Union(T, options = {}) {
  return T.length === 0 ? Never(options) : T.length === 1 ? CloneType(T[0], options) : UnionCreate(T, options);
}
// node_modules/@sinclair/typebox/build/esm/type/template-literal/parse.mjs
function Unescape(pattern) {
  return pattern.replace(/\\\$/g, "$").replace(/\\\*/g, "*").replace(/\\\^/g, "^").replace(/\\\|/g, "|").replace(/\\\(/g, "(").replace(/\\\)/g, ")");
}
function IsNonEscaped(pattern, index, char) {
  return pattern[index] === char && pattern.charCodeAt(index - 1) !== 92;
}
function IsOpenParen(pattern, index) {
  return IsNonEscaped(pattern, index, "(");
}
function IsCloseParen(pattern, index) {
  return IsNonEscaped(pattern, index, ")");
}
function IsSeparator(pattern, index) {
  return IsNonEscaped(pattern, index, "|");
}
function IsGroup(pattern) {
  if (!(IsOpenParen(pattern, 0) && IsCloseParen(pattern, pattern.length - 1)))
    return false;
  let count = 0;
  for (let index = 0;index < pattern.length; index++) {
    if (IsOpenParen(pattern, index))
      count += 1;
    if (IsCloseParen(pattern, index))
      count -= 1;
    if (count === 0 && index !== pattern.length - 1)
      return false;
  }
  return true;
}
function InGroup(pattern) {
  return pattern.slice(1, pattern.length - 1);
}
function IsPrecedenceOr(pattern) {
  let count = 0;
  for (let index = 0;index < pattern.length; index++) {
    if (IsOpenParen(pattern, index))
      count += 1;
    if (IsCloseParen(pattern, index))
      count -= 1;
    if (IsSeparator(pattern, index) && count === 0)
      return true;
  }
  return false;
}
function IsPrecedenceAnd(pattern) {
  for (let index = 0;index < pattern.length; index++) {
    if (IsOpenParen(pattern, index))
      return true;
  }
  return false;
}
function Or(pattern) {
  let [count, start] = [0, 0];
  const expressions = [];
  for (let index = 0;index < pattern.length; index++) {
    if (IsOpenParen(pattern, index))
      count += 1;
    if (IsCloseParen(pattern, index))
      count -= 1;
    if (IsSeparator(pattern, index) && count === 0) {
      const range2 = pattern.slice(start, index);
      if (range2.length > 0)
        expressions.push(TemplateLiteralParse(range2));
      start = index + 1;
    }
  }
  const range = pattern.slice(start);
  if (range.length > 0)
    expressions.push(TemplateLiteralParse(range));
  if (expressions.length === 0)
    return { type: "const", const: "" };
  if (expressions.length === 1)
    return expressions[0];
  return { type: "or", expr: expressions };
}
function And(pattern) {
  function Group(value, index) {
    if (!IsOpenParen(value, index))
      throw new TemplateLiteralParserError(`TemplateLiteralParser: Index must point to open parens`);
    let count = 0;
    for (let scan = index;scan < value.length; scan++) {
      if (IsOpenParen(value, scan))
        count += 1;
      if (IsCloseParen(value, scan))
        count -= 1;
      if (count === 0)
        return [index, scan];
    }
    throw new TemplateLiteralParserError(`TemplateLiteralParser: Unclosed group parens in expression`);
  }
  function Range(pattern2, index) {
    for (let scan = index;scan < pattern2.length; scan++) {
      if (IsOpenParen(pattern2, scan))
        return [index, scan];
    }
    return [index, pattern2.length];
  }
  const expressions = [];
  for (let index = 0;index < pattern.length; index++) {
    if (IsOpenParen(pattern, index)) {
      const [start, end] = Group(pattern, index);
      const range = pattern.slice(start, end + 1);
      expressions.push(TemplateLiteralParse(range));
      index = end;
    } else {
      const [start, end] = Range(pattern, index);
      const range = pattern.slice(start, end);
      if (range.length > 0)
        expressions.push(TemplateLiteralParse(range));
      index = end - 1;
    }
  }
  return expressions.length === 0 ? { type: "const", const: "" } : expressions.length === 1 ? expressions[0] : { type: "and", expr: expressions };
}
function TemplateLiteralParse(pattern) {
  return IsGroup(pattern) ? TemplateLiteralParse(InGroup(pattern)) : IsPrecedenceOr(pattern) ? Or(pattern) : IsPrecedenceAnd(pattern) ? And(pattern) : { type: "const", const: Unescape(pattern) };
}
function TemplateLiteralParseExact(pattern) {
  return TemplateLiteralParse(pattern.slice(1, pattern.length - 1));
}

class TemplateLiteralParserError extends TypeBoxError {
}

// node_modules/@sinclair/typebox/build/esm/type/template-literal/finite.mjs
function IsNumberExpression(expression) {
  return expression.type === "or" && expression.expr.length === 2 && expression.expr[0].type === "const" && expression.expr[0].const === "0" && expression.expr[1].type === "const" && expression.expr[1].const === "[1-9][0-9]*";
}
function IsBooleanExpression(expression) {
  return expression.type === "or" && expression.expr.length === 2 && expression.expr[0].type === "const" && expression.expr[0].const === "true" && expression.expr[1].type === "const" && expression.expr[1].const === "false";
}
function IsStringExpression(expression) {
  return expression.type === "const" && expression.const === ".*";
}
function IsTemplateLiteralExpressionFinite(expression) {
  return IsNumberExpression(expression) || IsStringExpression(expression) ? false : IsBooleanExpression(expression) ? true : expression.type === "and" ? expression.expr.every((expr) => IsTemplateLiteralExpressionFinite(expr)) : expression.type === "or" ? expression.expr.every((expr) => IsTemplateLiteralExpressionFinite(expr)) : expression.type === "const" ? true : (() => {
    throw new TemplateLiteralFiniteError(`Unknown expression type`);
  })();
}
function IsTemplateLiteralFinite(schema) {
  const expression = TemplateLiteralParseExact(schema.pattern);
  return IsTemplateLiteralExpressionFinite(expression);
}

class TemplateLiteralFiniteError extends TypeBoxError {
}
// node_modules/@sinclair/typebox/build/esm/type/template-literal/generate.mjs
function* GenerateReduce(buffer) {
  if (buffer.length === 1)
    return yield* buffer[0];
  for (const left of buffer[0]) {
    for (const right of GenerateReduce(buffer.slice(1))) {
      yield `${left}${right}`;
    }
  }
}
function* GenerateAnd(expression) {
  return yield* GenerateReduce(expression.expr.map((expr) => [...TemplateLiteralExpressionGenerate(expr)]));
}
function* GenerateOr(expression) {
  for (const expr of expression.expr)
    yield* TemplateLiteralExpressionGenerate(expr);
}
function* GenerateConst(expression) {
  return yield expression.const;
}
function* TemplateLiteralExpressionGenerate(expression) {
  return expression.type === "and" ? yield* GenerateAnd(expression) : expression.type === "or" ? yield* GenerateOr(expression) : expression.type === "const" ? yield* GenerateConst(expression) : (() => {
    throw new TemplateLiteralGenerateError("Unknown expression");
  })();
}
function TemplateLiteralGenerate(schema) {
  const expression = TemplateLiteralParseExact(schema.pattern);
  return IsTemplateLiteralExpressionFinite(expression) ? [...TemplateLiteralExpressionGenerate(expression)] : [];
}

class TemplateLiteralGenerateError extends TypeBoxError {
}
// node_modules/@sinclair/typebox/build/esm/type/literal/literal.mjs
function Literal(value, options = {}) {
  return {
    ...options,
    [Kind]: "Literal",
    const: value,
    type: typeof value
  };
}
// node_modules/@sinclair/typebox/build/esm/type/boolean/boolean.mjs
function Boolean2(options = {}) {
  return {
    ...options,
    [Kind]: "Boolean",
    type: "boolean"
  };
}
// node_modules/@sinclair/typebox/build/esm/type/bigint/bigint.mjs
function BigInt2(options = {}) {
  return {
    ...options,
    [Kind]: "BigInt",
    type: "bigint"
  };
}
// node_modules/@sinclair/typebox/build/esm/type/number/number.mjs
function Number2(options = {}) {
  return {
    ...options,
    [Kind]: "Number",
    type: "number"
  };
}
// node_modules/@sinclair/typebox/build/esm/type/string/string.mjs
function String2(options = {}) {
  return { ...options, [Kind]: "String", type: "string" };
}
// node_modules/@sinclair/typebox/build/esm/type/template-literal/syntax.mjs
function* FromUnion(syntax) {
  const trim = syntax.trim().replace(/"|'/g, "");
  return trim === "boolean" ? yield Boolean2() : trim === "number" ? yield Number2() : trim === "bigint" ? yield BigInt2() : trim === "string" ? yield String2() : yield (() => {
    const literals = trim.split("|").map((literal2) => Literal(literal2.trim()));
    return literals.length === 0 ? Never() : literals.length === 1 ? literals[0] : UnionEvaluated(literals);
  })();
}
function* FromTerminal(syntax) {
  if (syntax[1] !== "{") {
    const L = Literal("$");
    const R = FromSyntax(syntax.slice(1));
    return yield* [L, ...R];
  }
  for (let i = 2;i < syntax.length; i++) {
    if (syntax[i] === "}") {
      const L = FromUnion(syntax.slice(2, i));
      const R = FromSyntax(syntax.slice(i + 1));
      return yield* [...L, ...R];
    }
  }
  yield Literal(syntax);
}
function* FromSyntax(syntax) {
  for (let i = 0;i < syntax.length; i++) {
    if (syntax[i] === "$") {
      const L = Literal(syntax.slice(0, i));
      const R = FromTerminal(syntax.slice(i));
      return yield* [L, ...R];
    }
  }
  yield Literal(syntax);
}
function TemplateLiteralSyntax(syntax) {
  return [...FromSyntax(syntax)];
}
// node_modules/@sinclair/typebox/build/esm/type/patterns/patterns.mjs
var PatternBoolean = "(true|false)";
var PatternNumber = "(0|[1-9][0-9]*)";
var PatternString = "(.*)";
var PatternBooleanExact = `^${PatternBoolean}\$`;
var PatternNumberExact = `^${PatternNumber}\$`;
var PatternStringExact = `^${PatternString}\$`;
// node_modules/@sinclair/typebox/build/esm/type/template-literal/pattern.mjs
function Escape(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function Visit2(schema, acc) {
  return IsTemplateLiteral(schema) ? schema.pattern.slice(1, schema.pattern.length - 1) : IsUnion(schema) ? `(${schema.anyOf.map((schema2) => Visit2(schema2, acc)).join("|")})` : IsNumber3(schema) ? `${acc}${PatternNumber}` : IsInteger2(schema) ? `${acc}${PatternNumber}` : IsBigInt3(schema) ? `${acc}${PatternNumber}` : IsString3(schema) ? `${acc}${PatternString}` : IsLiteral(schema) ? `${acc}${Escape(schema.const.toString())}` : IsBoolean3(schema) ? `${acc}${PatternBoolean}` : (() => {
    throw new TemplateLiteralPatternError(`Unexpected Kind '${schema[Kind]}'`);
  })();
}
function TemplateLiteralPattern(kinds) {
  return `^${kinds.map((schema) => Visit2(schema, "")).join("")}$`;
}

class TemplateLiteralPatternError extends TypeBoxError {
}
// node_modules/@sinclair/typebox/build/esm/type/template-literal/union.mjs
function TemplateLiteralToUnion(schema) {
  const R = TemplateLiteralGenerate(schema);
  const L = R.map((S) => Literal(S));
  return UnionEvaluated(L);
}
// node_modules/@sinclair/typebox/build/esm/type/template-literal/template-literal.mjs
function TemplateLiteral(unresolved, options = {}) {
  const pattern = IsString2(unresolved) ? TemplateLiteralPattern(TemplateLiteralSyntax(unresolved)) : TemplateLiteralPattern(unresolved);
  return { ...options, [Kind]: "TemplateLiteral", type: "string", pattern };
}
// node_modules/@sinclair/typebox/build/esm/type/indexed/indexed-property-keys.mjs
function FromTemplateLiteral(T) {
  const R = TemplateLiteralGenerate(T);
  return R.map((S) => S.toString());
}
function FromUnion2(T) {
  const Acc = [];
  for (const L of T)
    Acc.push(...IndexPropertyKeys(L));
  return Acc;
}
function FromLiteral(T) {
  return [T.toString()];
}
function IndexPropertyKeys(T) {
  return [...new Set(IsTemplateLiteral(T) ? FromTemplateLiteral(T) : IsUnion(T) ? FromUnion2(T.anyOf) : IsLiteral(T) ? FromLiteral(T.const) : IsNumber3(T) ? ["[number]"] : IsInteger2(T) ? ["[number]"] : [])];
}

// node_modules/@sinclair/typebox/build/esm/type/indexed/indexed-from-mapped-result.mjs
function FromProperties2(T, P, options) {
  const Acc = {};
  for (const K2 of Object.getOwnPropertyNames(P)) {
    Acc[K2] = Index(T, IndexPropertyKeys(P[K2]), options);
  }
  return Acc;
}
function FromMappedResult2(T, R, options) {
  return FromProperties2(T, R.properties, options);
}
function IndexFromMappedResult(T, R, options) {
  const P = FromMappedResult2(T, R, options);
  return MappedResult(P);
}

// node_modules/@sinclair/typebox/build/esm/type/indexed/indexed.mjs
function FromRest(T, K) {
  return T.map((L) => IndexFromPropertyKey(L, K));
}
function FromIntersectRest(T) {
  return T.filter((L) => !IsNever(L));
}
function FromIntersect(T, K) {
  return IntersectEvaluated(FromIntersectRest(FromRest(T, K)));
}
function FromUnionRest(T) {
  return T.some((L) => IsNever(L)) ? [] : T;
}
function FromUnion3(T, K) {
  return UnionEvaluated(FromUnionRest(FromRest(T, K)));
}
function FromTuple(T, K) {
  return K in T ? T[K] : K === "[number]" ? UnionEvaluated(T) : Never();
}
function FromArray(T, K) {
  return K === "[number]" ? T : Never();
}
function FromProperty(T, K) {
  return K in T ? T[K] : Never();
}
function IndexFromPropertyKey(T, K) {
  return IsIntersect(T) ? FromIntersect(T.allOf, K) : IsUnion(T) ? FromUnion3(T.anyOf, K) : IsTuple(T) ? FromTuple(T.items ?? [], K) : IsArray3(T) ? FromArray(T.items, K) : IsObject3(T) ? FromProperty(T.properties, K) : Never();
}
function IndexFromPropertyKeys(T, K) {
  return K.map((L) => IndexFromPropertyKey(T, L));
}
function FromSchema(T, K) {
  return UnionEvaluated(IndexFromPropertyKeys(T, K));
}
function Index(T, K, options = {}) {
  return IsMappedResult(K) ? CloneType(IndexFromMappedResult(T, K, options)) : IsMappedKey(K) ? CloneType(IndexFromMappedKey(T, K, options)) : IsSchema(K) ? CloneType(FromSchema(T, IndexPropertyKeys(K)), options) : CloneType(FromSchema(T, K), options);
}

// node_modules/@sinclair/typebox/build/esm/type/indexed/indexed-from-mapped-key.mjs
function MappedIndexPropertyKey(T, K, options) {
  return { [K]: Index(T, [K], options) };
}
function MappedIndexPropertyKeys(T, K, options) {
  return K.reduce((Acc, L) => {
    return { ...Acc, ...MappedIndexPropertyKey(T, L, options) };
  }, {});
}
function MappedIndexProperties(T, K, options) {
  return MappedIndexPropertyKeys(T, K.keys, options);
}
function IndexFromMappedKey(T, K, options) {
  const P = MappedIndexProperties(T, K, options);
  return MappedResult(P);
}
// node_modules/@sinclair/typebox/build/esm/type/iterator/iterator.mjs
function Iterator(items, options = {}) {
  return {
    ...options,
    [Kind]: "Iterator",
    type: "Iterator",
    items: CloneType(items)
  };
}
// node_modules/@sinclair/typebox/build/esm/type/object/object.mjs
function _Object(properties, options = {}) {
  const propertyKeys = globalThis.Object.getOwnPropertyNames(properties);
  const optionalKeys = propertyKeys.filter((key) => IsOptional(properties[key]));
  const requiredKeys = propertyKeys.filter((name) => !optionalKeys.includes(name));
  const clonedAdditionalProperties = IsSchema(options.additionalProperties) ? { additionalProperties: CloneType(options.additionalProperties) } : {};
  const clonedProperties = {};
  for (const key of propertyKeys)
    clonedProperties[key] = CloneType(properties[key]);
  return requiredKeys.length > 0 ? { ...options, ...clonedAdditionalProperties, [Kind]: "Object", type: "object", properties: clonedProperties, required: requiredKeys } : { ...options, ...clonedAdditionalProperties, [Kind]: "Object", type: "object", properties: clonedProperties };
}
var Object2 = _Object;
// node_modules/@sinclair/typebox/build/esm/type/promise/promise.mjs
function Promise2(item, options = {}) {
  return {
    ...options,
    [Kind]: "Promise",
    type: "Promise",
    item: CloneType(item)
  };
}
// node_modules/@sinclair/typebox/build/esm/type/readonly/readonly.mjs
function RemoveReadonly(schema) {
  return Discard(CloneType(schema), [ReadonlyKind]);
}
function AddReadonly(schema) {
  return { ...CloneType(schema), [ReadonlyKind]: "Readonly" };
}
function ReadonlyWithFlag(schema, F) {
  return F === false ? RemoveReadonly(schema) : AddReadonly(schema);
}
function Readonly(schema, enable) {
  const F = enable ?? true;
  return IsMappedResult(schema) ? ReadonlyFromMappedResult(schema, F) : ReadonlyWithFlag(schema, F);
}

// node_modules/@sinclair/typebox/build/esm/type/readonly/readonly-from-mapped-result.mjs
function FromProperties3(K, F) {
  const Acc = {};
  for (const K2 of globalThis.Object.getOwnPropertyNames(K))
    Acc[K2] = Readonly(K[K2], F);
  return Acc;
}
function FromMappedResult3(R, F) {
  return FromProperties3(R.properties, F);
}
function ReadonlyFromMappedResult(R, F) {
  const P = FromMappedResult3(R, F);
  return MappedResult(P);
}
// node_modules/@sinclair/typebox/build/esm/type/tuple/tuple.mjs
function Tuple(items, options = {}) {
  const [additionalItems, minItems, maxItems] = [false, items.length, items.length];
  return items.length > 0 ? { ...options, [Kind]: "Tuple", type: "array", items: CloneRest(items), additionalItems, minItems, maxItems } : { ...options, [Kind]: "Tuple", type: "array", minItems, maxItems };
}
// node_modules/@sinclair/typebox/build/esm/type/sets/set.mjs
function SetIncludes(T, S) {
  return T.includes(S);
}
function SetDistinct(T) {
  return [...new Set(T)];
}
function SetIntersect(T, S) {
  return T.filter((L) => S.includes(L));
}
function SetIntersectManyResolve(T, Init) {
  return T.reduce((Acc, L) => {
    return SetIntersect(Acc, L);
  }, Init);
}
function SetIntersectMany(T) {
  return T.length === 1 ? T[0] : T.length > 1 ? SetIntersectManyResolve(T.slice(1), T[0]) : [];
}
function SetUnionMany(T) {
  const Acc = [];
  for (const L of T)
    Acc.push(...L);
  return Acc;
}
// node_modules/@sinclair/typebox/build/esm/type/mapped/mapped.mjs
function FromMappedResult4(K, P) {
  return K in P ? FromSchemaType(K, P[K]) : MappedResult(P);
}
function MappedKeyToKnownMappedResultProperties(K) {
  return { [K]: Literal(K) };
}
function MappedKeyToUnknownMappedResultProperties(P) {
  const Acc = {};
  for (const L of P)
    Acc[L] = Literal(L);
  return Acc;
}
function MappedKeyToMappedResultProperties(K, P) {
  return SetIncludes(P, K) ? MappedKeyToKnownMappedResultProperties(K) : MappedKeyToUnknownMappedResultProperties(P);
}
function FromMappedKey(K, P) {
  const R = MappedKeyToMappedResultProperties(K, P);
  return FromMappedResult4(K, R);
}
function FromRest2(K, T) {
  return T.map((L) => FromSchemaType(K, L));
}
function FromProperties4(K, T) {
  const Acc = {};
  for (const K2 of globalThis.Object.getOwnPropertyNames(T))
    Acc[K2] = FromSchemaType(K, T[K2]);
  return Acc;
}
function FromSchemaType(K, T) {
  return IsOptional(T) ? Optional(FromSchemaType(K, Discard(T, [OptionalKind]))) : IsReadonly(T) ? Readonly(FromSchemaType(K, Discard(T, [ReadonlyKind]))) : IsMappedResult(T) ? FromMappedResult4(K, T.properties) : IsMappedKey(T) ? FromMappedKey(K, T.keys) : IsConstructor(T) ? Constructor(FromRest2(K, T.parameters), FromSchemaType(K, T.returns)) : IsFunction3(T) ? Function2(FromRest2(K, T.parameters), FromSchemaType(K, T.returns)) : IsAsyncIterator3(T) ? AsyncIterator(FromSchemaType(K, T.items)) : IsIterator3(T) ? Iterator(FromSchemaType(K, T.items)) : IsIntersect(T) ? Intersect(FromRest2(K, T.allOf)) : IsUnion(T) ? Union(FromRest2(K, T.anyOf)) : IsTuple(T) ? Tuple(FromRest2(K, T.items ?? [])) : IsObject3(T) ? Object2(FromProperties4(K, T.properties)) : IsArray3(T) ? Array2(FromSchemaType(K, T.items)) : IsPromise2(T) ? Promise2(FromSchemaType(K, T.item)) : T;
}
function MappedFunctionReturnType(K, T) {
  const Acc = {};
  for (const L of K)
    Acc[L] = FromSchemaType(L, T);
  return Acc;
}
function Mapped(key, map3, options = {}) {
  const K = IsSchema(key) ? IndexPropertyKeys(key) : key;
  const RT = map3({ [Kind]: "MappedKey", keys: K });
  const R = MappedFunctionReturnType(K, RT);
  return CloneType(Object2(R), options);
}
// node_modules/@sinclair/typebox/build/esm/type/keyof/keyof-property-keys.mjs
function FromRest3(T) {
  const Acc = [];
  for (const L of T)
    Acc.push(KeyOfPropertyKeys(L));
  return Acc;
}
function FromIntersect2(T) {
  const C = FromRest3(T);
  const R = SetUnionMany(C);
  return R;
}
function FromUnion4(T) {
  const C = FromRest3(T);
  const R = SetIntersectMany(C);
  return R;
}
function FromTuple2(T) {
  return T.map((_, I) => I.toString());
}
function FromArray2(_) {
  return ["[number]"];
}
function FromProperties5(T) {
  return globalThis.Object.getOwnPropertyNames(T);
}
function FromPatternProperties(patternProperties) {
  if (!includePatternProperties)
    return [];
  const patternPropertyKeys = globalThis.Object.getOwnPropertyNames(patternProperties);
  return patternPropertyKeys.map((key) => {
    return key[0] === "^" && key[key.length - 1] === "$" ? key.slice(1, key.length - 1) : key;
  });
}
function KeyOfPropertyKeys(T) {
  return IsIntersect(T) ? FromIntersect2(T.allOf) : IsUnion(T) ? FromUnion4(T.anyOf) : IsTuple(T) ? FromTuple2(T.items ?? []) : IsArray3(T) ? FromArray2(T.items) : IsObject3(T) ? FromProperties5(T.properties) : IsRecord(T) ? FromPatternProperties(T.patternProperties) : [];
}
function KeyOfPattern(schema) {
  includePatternProperties = true;
  const keys = KeyOfPropertyKeys(schema);
  includePatternProperties = false;
  const pattern2 = keys.map((key) => `(${key})`);
  return `^(${pattern2.join("|")})\$`;
}
var includePatternProperties = false;

// node_modules/@sinclair/typebox/build/esm/type/keyof/keyof.mjs
function KeyOfPropertyKeysToRest(T) {
  return T.map((L) => L === "[number]" ? Number2() : Literal(L));
}
function KeyOf(T, options = {}) {
  if (IsMappedResult(T)) {
    return KeyOfFromMappedResult(T, options);
  } else {
    const K = KeyOfPropertyKeys(T);
    const S = KeyOfPropertyKeysToRest(K);
    const U = UnionEvaluated(S);
    return CloneType(U, options);
  }
}

// node_modules/@sinclair/typebox/build/esm/type/keyof/keyof-from-mapped-result.mjs
function FromProperties6(K, options) {
  const Acc = {};
  for (const K2 of globalThis.Object.getOwnPropertyNames(K))
    Acc[K2] = KeyOf(K[K2], options);
  return Acc;
}
function FromMappedResult5(R, options) {
  return FromProperties6(R.properties, options);
}
function KeyOfFromMappedResult(R, options) {
  const P = FromMappedResult5(R, options);
  return MappedResult(P);
}
// node_modules/@sinclair/typebox/build/esm/type/keyof/keyof-property-entries.mjs
function KeyOfPropertyEntries(schema) {
  const keys = KeyOfPropertyKeys(schema);
  const schemas = IndexFromPropertyKeys(schema, keys);
  return keys.map((_, index) => [keys[index], schemas[index]]);
}
// node_modules/@sinclair/typebox/build/esm/type/extends/extends-undefined.mjs
function Intersect2(schema) {
  return schema.allOf.every((schema2) => ExtendsUndefinedCheck(schema2));
}
function Union2(schema) {
  return schema.anyOf.some((schema2) => ExtendsUndefinedCheck(schema2));
}
function Not(schema) {
  return !ExtendsUndefinedCheck(schema.not);
}
function ExtendsUndefinedCheck(schema) {
  return schema[Kind] === "Intersect" ? Intersect2(schema) : schema[Kind] === "Union" ? Union2(schema) : schema[Kind] === "Not" ? Not(schema) : schema[Kind] === "Undefined" ? true : false;
}

// node_modules/@sinclair/typebox/build/esm/errors/function.mjs
function DefaultErrorFunction(error2) {
  switch (error2.errorType) {
    case ValueErrorType.ArrayContains:
      return "Expected array to contain at least one matching value";
    case ValueErrorType.ArrayMaxContains:
      return `Expected array to contain no more than ${error2.schema.maxContains} matching values`;
    case ValueErrorType.ArrayMinContains:
      return `Expected array to contain at least ${error2.schema.minContains} matching values`;
    case ValueErrorType.ArrayMaxItems:
      return `Expected array length to be less or equal to ${error2.schema.maxItems}`;
    case ValueErrorType.ArrayMinItems:
      return `Expected array length to be greater or equal to ${error2.schema.minItems}`;
    case ValueErrorType.ArrayUniqueItems:
      return "Expected array elements to be unique";
    case ValueErrorType.Array:
      return "Expected array";
    case ValueErrorType.AsyncIterator:
      return "Expected AsyncIterator";
    case ValueErrorType.BigIntExclusiveMaximum:
      return `Expected bigint to be less than ${error2.schema.exclusiveMaximum}`;
    case ValueErrorType.BigIntExclusiveMinimum:
      return `Expected bigint to be greater than ${error2.schema.exclusiveMinimum}`;
    case ValueErrorType.BigIntMaximum:
      return `Expected bigint to be less or equal to ${error2.schema.maximum}`;
    case ValueErrorType.BigIntMinimum:
      return `Expected bigint to be greater or equal to ${error2.schema.minimum}`;
    case ValueErrorType.BigIntMultipleOf:
      return `Expected bigint to be a multiple of ${error2.schema.multipleOf}`;
    case ValueErrorType.BigInt:
      return "Expected bigint";
    case ValueErrorType.Boolean:
      return "Expected boolean";
    case ValueErrorType.DateExclusiveMinimumTimestamp:
      return `Expected Date timestamp to be greater than ${error2.schema.exclusiveMinimumTimestamp}`;
    case ValueErrorType.DateExclusiveMaximumTimestamp:
      return `Expected Date timestamp to be less than ${error2.schema.exclusiveMaximumTimestamp}`;
    case ValueErrorType.DateMinimumTimestamp:
      return `Expected Date timestamp to be greater or equal to ${error2.schema.minimumTimestamp}`;
    case ValueErrorType.DateMaximumTimestamp:
      return `Expected Date timestamp to be less or equal to ${error2.schema.maximumTimestamp}`;
    case ValueErrorType.DateMultipleOfTimestamp:
      return `Expected Date timestamp to be a multiple of ${error2.schema.multipleOfTimestamp}`;
    case ValueErrorType.Date:
      return "Expected Date";
    case ValueErrorType.Function:
      return "Expected function";
    case ValueErrorType.IntegerExclusiveMaximum:
      return `Expected integer to be less than ${error2.schema.exclusiveMaximum}`;
    case ValueErrorType.IntegerExclusiveMinimum:
      return `Expected integer to be greater than ${error2.schema.exclusiveMinimum}`;
    case ValueErrorType.IntegerMaximum:
      return `Expected integer to be less or equal to ${error2.schema.maximum}`;
    case ValueErrorType.IntegerMinimum:
      return `Expected integer to be greater or equal to ${error2.schema.minimum}`;
    case ValueErrorType.IntegerMultipleOf:
      return `Expected integer to be a multiple of ${error2.schema.multipleOf}`;
    case ValueErrorType.Integer:
      return "Expected integer";
    case ValueErrorType.IntersectUnevaluatedProperties:
      return "Unexpected property";
    case ValueErrorType.Intersect:
      return "Expected all values to match";
    case ValueErrorType.Iterator:
      return "Expected Iterator";
    case ValueErrorType.Literal:
      return `Expected ${typeof error2.schema.const === "string" ? `'${error2.schema.const}'` : error2.schema.const}`;
    case ValueErrorType.Never:
      return "Never";
    case ValueErrorType.Not:
      return "Value should not match";
    case ValueErrorType.Null:
      return "Expected null";
    case ValueErrorType.NumberExclusiveMaximum:
      return `Expected number to be less than ${error2.schema.exclusiveMaximum}`;
    case ValueErrorType.NumberExclusiveMinimum:
      return `Expected number to be greater than ${error2.schema.exclusiveMinimum}`;
    case ValueErrorType.NumberMaximum:
      return `Expected number to be less or equal to ${error2.schema.maximum}`;
    case ValueErrorType.NumberMinimum:
      return `Expected number to be greater or equal to ${error2.schema.minimum}`;
    case ValueErrorType.NumberMultipleOf:
      return `Expected number to be a multiple of ${error2.schema.multipleOf}`;
    case ValueErrorType.Number:
      return "Expected number";
    case ValueErrorType.Object:
      return "Expected object";
    case ValueErrorType.ObjectAdditionalProperties:
      return "Unexpected property";
    case ValueErrorType.ObjectMaxProperties:
      return `Expected object to have no more than ${error2.schema.maxProperties} properties`;
    case ValueErrorType.ObjectMinProperties:
      return `Expected object to have at least ${error2.schema.minProperties} properties`;
    case ValueErrorType.ObjectRequiredProperty:
      return "Required property";
    case ValueErrorType.Promise:
      return "Expected Promise";
    case ValueErrorType.RegExp:
      return "Expected string to match regular expression";
    case ValueErrorType.StringFormatUnknown:
      return `Unknown format '${error2.schema.format}'`;
    case ValueErrorType.StringFormat:
      return `Expected string to match '${error2.schema.format}' format`;
    case ValueErrorType.StringMaxLength:
      return `Expected string length less or equal to ${error2.schema.maxLength}`;
    case ValueErrorType.StringMinLength:
      return `Expected string length greater or equal to ${error2.schema.minLength}`;
    case ValueErrorType.StringPattern:
      return `Expected string to match '${error2.schema.pattern}'`;
    case ValueErrorType.String:
      return "Expected string";
    case ValueErrorType.Symbol:
      return "Expected symbol";
    case ValueErrorType.TupleLength:
      return `Expected tuple to have ${error2.schema.maxItems || 0} elements`;
    case ValueErrorType.Tuple:
      return "Expected tuple";
    case ValueErrorType.Uint8ArrayMaxByteLength:
      return `Expected byte length less or equal to ${error2.schema.maxByteLength}`;
    case ValueErrorType.Uint8ArrayMinByteLength:
      return `Expected byte length greater or equal to ${error2.schema.minByteLength}`;
    case ValueErrorType.Uint8Array:
      return "Expected Uint8Array";
    case ValueErrorType.Undefined:
      return "Expected undefined";
    case ValueErrorType.Union:
      return "Expected union value";
    case ValueErrorType.Void:
      return "Expected void";
    case ValueErrorType.Kind:
      return `Expected kind '${error2.schema[Kind]}'`;
    default:
      return "Unknown error type";
  }
}
function GetErrorFunction() {
  return errorFunction;
}
var errorFunction = DefaultErrorFunction;

// node_modules/@sinclair/typebox/build/esm/value/deref/deref.mjs
function Resolve(schema, references) {
  const target = references.find((target2) => target2.$id === schema.$ref);
  if (target === undefined)
    throw new TypeDereferenceError(schema);
  return Deref(target, references);
}
function Deref(schema, references) {
  return schema[Kind] === "This" || schema[Kind] === "Ref" ? Resolve(schema, references) : schema;
}

class TypeDereferenceError extends TypeBoxError {
  constructor(schema) {
    super(`Unable to dereference schema with \$id '${schema.$id}'`);
    this.schema = schema;
  }
}
// node_modules/@sinclair/typebox/build/esm/value/hash/hash.mjs
function* NumberToBytes(value) {
  const byteCount = value === 0 ? 1 : Math.ceil(Math.floor(Math.log2(value) + 1) / 8);
  for (let i = 0;i < byteCount; i++) {
    yield value >> 8 * (byteCount - 1 - i) & 255;
  }
}
function ArrayType2(value) {
  FNV1A64(ByteMarker.Array);
  for (const item of value) {
    Visit3(item);
  }
}
function BooleanType(value) {
  FNV1A64(ByteMarker.Boolean);
  FNV1A64(value ? 1 : 0);
}
function BigIntType(value) {
  FNV1A64(ByteMarker.BigInt);
  F64In.setBigInt64(0, value);
  for (const byte of F64Out) {
    FNV1A64(byte);
  }
}
function DateType2(value) {
  FNV1A64(ByteMarker.Date);
  Visit3(value.getTime());
}
function NullType(value) {
  FNV1A64(ByteMarker.Null);
}
function NumberType(value) {
  FNV1A64(ByteMarker.Number);
  F64In.setFloat64(0, value);
  for (const byte of F64Out) {
    FNV1A64(byte);
  }
}
function ObjectType2(value) {
  FNV1A64(ByteMarker.Object);
  for (const key of globalThis.Object.getOwnPropertyNames(value).sort()) {
    Visit3(key);
    Visit3(value[key]);
  }
}
function StringType(value) {
  FNV1A64(ByteMarker.String);
  for (let i = 0;i < value.length; i++) {
    for (const byte of NumberToBytes(value.charCodeAt(i))) {
      FNV1A64(byte);
    }
  }
}
function SymbolType(value) {
  FNV1A64(ByteMarker.Symbol);
  Visit3(value.description);
}
function Uint8ArrayType2(value) {
  FNV1A64(ByteMarker.Uint8Array);
  for (let i = 0;i < value.length; i++) {
    FNV1A64(value[i]);
  }
}
function UndefinedType(value) {
  return FNV1A64(ByteMarker.Undefined);
}
function Visit3(value) {
  if (IsArray(value))
    return ArrayType2(value);
  if (IsBoolean(value))
    return BooleanType(value);
  if (IsBigInt(value))
    return BigIntType(value);
  if (IsDate(value))
    return DateType2(value);
  if (IsNull(value))
    return NullType(value);
  if (IsNumber(value))
    return NumberType(value);
  if (IsStandardObject(value))
    return ObjectType2(value);
  if (IsString(value))
    return StringType(value);
  if (IsSymbol(value))
    return SymbolType(value);
  if (IsUint8Array(value))
    return Uint8ArrayType2(value);
  if (IsUndefined(value))
    return UndefinedType(value);
  throw new ValueHashError(value);
}
function FNV1A64(byte) {
  Accumulator = Accumulator ^ Bytes[byte];
  Accumulator = Accumulator * Prime % Size;
}
function Hash(value) {
  Accumulator = BigInt("14695981039346656037");
  Visit3(value);
  return Accumulator;
}

class ValueHashError extends TypeBoxError {
  constructor(value) {
    super(`Unable to hash value`);
    this.value = value;
  }
}
var ByteMarker;
(function(ByteMarker2) {
  ByteMarker2[ByteMarker2["Undefined"] = 0] = "Undefined";
  ByteMarker2[ByteMarker2["Null"] = 1] = "Null";
  ByteMarker2[ByteMarker2["Boolean"] = 2] = "Boolean";
  ByteMarker2[ByteMarker2["Number"] = 3] = "Number";
  ByteMarker2[ByteMarker2["String"] = 4] = "String";
  ByteMarker2[ByteMarker2["Object"] = 5] = "Object";
  ByteMarker2[ByteMarker2["Array"] = 6] = "Array";
  ByteMarker2[ByteMarker2["Date"] = 7] = "Date";
  ByteMarker2[ByteMarker2["Uint8Array"] = 8] = "Uint8Array";
  ByteMarker2[ByteMarker2["Symbol"] = 9] = "Symbol";
  ByteMarker2[ByteMarker2["BigInt"] = 10] = "BigInt";
})(ByteMarker || (ByteMarker = {}));
var Accumulator = BigInt("14695981039346656037");
var [Prime, Size] = [BigInt("1099511628211"), BigInt("2") ** BigInt("64")];
var Bytes = Array.from({ length: 256 }).map((_, i) => BigInt(i));
var F64 = new Float64Array(1);
var F64In = new DataView(F64.buffer);
var F64Out = new Uint8Array(F64.buffer);
// node_modules/@sinclair/typebox/build/esm/errors/errors.mjs
function EscapeKey(key) {
  return key.replace(/~/g, "~0").replace(/\//g, "~1");
}
function IsDefined(value) {
  return value !== undefined;
}
function Create(errorType, schema, path, value) {
  return { type: errorType, schema, path, value, message: GetErrorFunction()({ errorType, path, schema, value }) };
}
function* FromAny(schema, references, path, value) {
}
function* FromArray3(schema, references, path, value) {
  if (!IsArray(value)) {
    return yield Create(ValueErrorType.Array, schema, path, value);
  }
  if (IsDefined(schema.minItems) && !(value.length >= schema.minItems)) {
    yield Create(ValueErrorType.ArrayMinItems, schema, path, value);
  }
  if (IsDefined(schema.maxItems) && !(value.length <= schema.maxItems)) {
    yield Create(ValueErrorType.ArrayMaxItems, schema, path, value);
  }
  for (let i = 0;i < value.length; i++) {
    yield* Visit4(schema.items, references, `${path}/${i}`, value[i]);
  }
  if (schema.uniqueItems === true && !function() {
    const set2 = new Set;
    for (const element of value) {
      const hashed = Hash(element);
      if (set2.has(hashed)) {
        return false;
      } else {
        set2.add(hashed);
      }
    }
    return true;
  }()) {
    yield Create(ValueErrorType.ArrayUniqueItems, schema, path, value);
  }
  if (!(IsDefined(schema.contains) || IsDefined(schema.minContains) || IsDefined(schema.maxContains))) {
    return;
  }
  const containsSchema = IsDefined(schema.contains) ? schema.contains : Never();
  const containsCount = value.reduce((acc, value2, index) => Visit4(containsSchema, references, `${path}${index}`, value2).next().done === true ? acc + 1 : acc, 0);
  if (containsCount === 0) {
    yield Create(ValueErrorType.ArrayContains, schema, path, value);
  }
  if (IsNumber(schema.minContains) && containsCount < schema.minContains) {
    yield Create(ValueErrorType.ArrayMinContains, schema, path, value);
  }
  if (IsNumber(schema.maxContains) && containsCount > schema.maxContains) {
    yield Create(ValueErrorType.ArrayMaxContains, schema, path, value);
  }
}
function* FromAsyncIterator(schema, references, path, value) {
  if (!IsAsyncIterator(value))
    yield Create(ValueErrorType.AsyncIterator, schema, path, value);
}
function* FromBigInt(schema, references, path, value) {
  if (!IsBigInt(value))
    return yield Create(ValueErrorType.BigInt, schema, path, value);
  if (IsDefined(schema.exclusiveMaximum) && !(value < schema.exclusiveMaximum)) {
    yield Create(ValueErrorType.BigIntExclusiveMaximum, schema, path, value);
  }
  if (IsDefined(schema.exclusiveMinimum) && !(value > schema.exclusiveMinimum)) {
    yield Create(ValueErrorType.BigIntExclusiveMinimum, schema, path, value);
  }
  if (IsDefined(schema.maximum) && !(value <= schema.maximum)) {
    yield Create(ValueErrorType.BigIntMaximum, schema, path, value);
  }
  if (IsDefined(schema.minimum) && !(value >= schema.minimum)) {
    yield Create(ValueErrorType.BigIntMinimum, schema, path, value);
  }
  if (IsDefined(schema.multipleOf) && !(value % schema.multipleOf === BigInt(0))) {
    yield Create(ValueErrorType.BigIntMultipleOf, schema, path, value);
  }
}
function* FromBoolean(schema, references, path, value) {
  if (!IsBoolean(value))
    yield Create(ValueErrorType.Boolean, schema, path, value);
}
function* FromConstructor(schema, references, path, value) {
  yield* Visit4(schema.returns, references, path, value.prototype);
}
function* FromDate(schema, references, path, value) {
  if (!IsDate(value))
    return yield Create(ValueErrorType.Date, schema, path, value);
  if (IsDefined(schema.exclusiveMaximumTimestamp) && !(value.getTime() < schema.exclusiveMaximumTimestamp)) {
    yield Create(ValueErrorType.DateExclusiveMaximumTimestamp, schema, path, value);
  }
  if (IsDefined(schema.exclusiveMinimumTimestamp) && !(value.getTime() > schema.exclusiveMinimumTimestamp)) {
    yield Create(ValueErrorType.DateExclusiveMinimumTimestamp, schema, path, value);
  }
  if (IsDefined(schema.maximumTimestamp) && !(value.getTime() <= schema.maximumTimestamp)) {
    yield Create(ValueErrorType.DateMaximumTimestamp, schema, path, value);
  }
  if (IsDefined(schema.minimumTimestamp) && !(value.getTime() >= schema.minimumTimestamp)) {
    yield Create(ValueErrorType.DateMinimumTimestamp, schema, path, value);
  }
  if (IsDefined(schema.multipleOfTimestamp) && !(value.getTime() % schema.multipleOfTimestamp === 0)) {
    yield Create(ValueErrorType.DateMultipleOfTimestamp, schema, path, value);
  }
}
function* FromFunction(schema, references, path, value) {
  if (!IsFunction(value))
    yield Create(ValueErrorType.Function, schema, path, value);
}
function* FromInteger(schema, references, path, value) {
  if (!IsInteger(value))
    return yield Create(ValueErrorType.Integer, schema, path, value);
  if (IsDefined(schema.exclusiveMaximum) && !(value < schema.exclusiveMaximum)) {
    yield Create(ValueErrorType.IntegerExclusiveMaximum, schema, path, value);
  }
  if (IsDefined(schema.exclusiveMinimum) && !(value > schema.exclusiveMinimum)) {
    yield Create(ValueErrorType.IntegerExclusiveMinimum, schema, path, value);
  }
  if (IsDefined(schema.maximum) && !(value <= schema.maximum)) {
    yield Create(ValueErrorType.IntegerMaximum, schema, path, value);
  }
  if (IsDefined(schema.minimum) && !(value >= schema.minimum)) {
    yield Create(ValueErrorType.IntegerMinimum, schema, path, value);
  }
  if (IsDefined(schema.multipleOf) && !(value % schema.multipleOf === 0)) {
    yield Create(ValueErrorType.IntegerMultipleOf, schema, path, value);
  }
}
function* FromIntersect3(schema, references, path, value) {
  for (const inner of schema.allOf) {
    const next = Visit4(inner, references, path, value).next();
    if (!next.done) {
      yield Create(ValueErrorType.Intersect, schema, path, value);
      yield next.value;
    }
  }
  if (schema.unevaluatedProperties === false) {
    const keyCheck = new RegExp(KeyOfPattern(schema));
    for (const valueKey of Object.getOwnPropertyNames(value)) {
      if (!keyCheck.test(valueKey)) {
        yield Create(ValueErrorType.IntersectUnevaluatedProperties, schema, `${path}/${valueKey}`, value);
      }
    }
  }
  if (typeof schema.unevaluatedProperties === "object") {
    const keyCheck = new RegExp(KeyOfPattern(schema));
    for (const valueKey of Object.getOwnPropertyNames(value)) {
      if (!keyCheck.test(valueKey)) {
        const next = Visit4(schema.unevaluatedProperties, references, `${path}/${valueKey}`, value[valueKey]).next();
        if (!next.done)
          yield next.value;
      }
    }
  }
}
function* FromIterator(schema, references, path, value) {
  if (!IsIterator(value))
    yield Create(ValueErrorType.Iterator, schema, path, value);
}
function* FromLiteral2(schema, references, path, value) {
  if (!(value === schema.const))
    yield Create(ValueErrorType.Literal, schema, path, value);
}
function* FromNever(schema, references, path, value) {
  yield Create(ValueErrorType.Never, schema, path, value);
}
function* FromNot(schema, references, path, value) {
  if (Visit4(schema.not, references, path, value).next().done === true)
    yield Create(ValueErrorType.Not, schema, path, value);
}
function* FromNull(schema, references, path, value) {
  if (!IsNull(value))
    yield Create(ValueErrorType.Null, schema, path, value);
}
function* FromNumber(schema, references, path, value) {
  if (!TypeSystemPolicy.IsNumberLike(value))
    return yield Create(ValueErrorType.Number, schema, path, value);
  if (IsDefined(schema.exclusiveMaximum) && !(value < schema.exclusiveMaximum)) {
    yield Create(ValueErrorType.NumberExclusiveMaximum, schema, path, value);
  }
  if (IsDefined(schema.exclusiveMinimum) && !(value > schema.exclusiveMinimum)) {
    yield Create(ValueErrorType.NumberExclusiveMinimum, schema, path, value);
  }
  if (IsDefined(schema.maximum) && !(value <= schema.maximum)) {
    yield Create(ValueErrorType.NumberMaximum, schema, path, value);
  }
  if (IsDefined(schema.minimum) && !(value >= schema.minimum)) {
    yield Create(ValueErrorType.NumberMinimum, schema, path, value);
  }
  if (IsDefined(schema.multipleOf) && !(value % schema.multipleOf === 0)) {
    yield Create(ValueErrorType.NumberMultipleOf, schema, path, value);
  }
}
function* FromObject(schema, references, path, value) {
  if (!TypeSystemPolicy.IsObjectLike(value))
    return yield Create(ValueErrorType.Object, schema, path, value);
  if (IsDefined(schema.minProperties) && !(Object.getOwnPropertyNames(value).length >= schema.minProperties)) {
    yield Create(ValueErrorType.ObjectMinProperties, schema, path, value);
  }
  if (IsDefined(schema.maxProperties) && !(Object.getOwnPropertyNames(value).length <= schema.maxProperties)) {
    yield Create(ValueErrorType.ObjectMaxProperties, schema, path, value);
  }
  const requiredKeys = Array.isArray(schema.required) ? schema.required : [];
  const knownKeys = Object.getOwnPropertyNames(schema.properties);
  const unknownKeys = Object.getOwnPropertyNames(value);
  for (const requiredKey of requiredKeys) {
    if (unknownKeys.includes(requiredKey))
      continue;
    yield Create(ValueErrorType.ObjectRequiredProperty, schema.properties[requiredKey], `${path}/${EscapeKey(requiredKey)}`, undefined);
  }
  if (schema.additionalProperties === false) {
    for (const valueKey of unknownKeys) {
      if (!knownKeys.includes(valueKey)) {
        yield Create(ValueErrorType.ObjectAdditionalProperties, schema, `${path}/${EscapeKey(valueKey)}`, value[valueKey]);
      }
    }
  }
  if (typeof schema.additionalProperties === "object") {
    for (const valueKey of unknownKeys) {
      if (knownKeys.includes(valueKey))
        continue;
      yield* Visit4(schema.additionalProperties, references, `${path}/${EscapeKey(valueKey)}`, value[valueKey]);
    }
  }
  for (const knownKey of knownKeys) {
    const property = schema.properties[knownKey];
    if (schema.required && schema.required.includes(knownKey)) {
      yield* Visit4(property, references, `${path}/${EscapeKey(knownKey)}`, value[knownKey]);
      if (ExtendsUndefinedCheck(schema) && !(knownKey in value)) {
        yield Create(ValueErrorType.ObjectRequiredProperty, property, `${path}/${EscapeKey(knownKey)}`, undefined);
      }
    } else {
      if (TypeSystemPolicy.IsExactOptionalProperty(value, knownKey)) {
        yield* Visit4(property, references, `${path}/${EscapeKey(knownKey)}`, value[knownKey]);
      }
    }
  }
}
function* FromPromise(schema, references, path, value) {
  if (!IsPromise(value))
    yield Create(ValueErrorType.Promise, schema, path, value);
}
function* FromRecord(schema, references, path, value) {
  if (!TypeSystemPolicy.IsRecordLike(value))
    return yield Create(ValueErrorType.Object, schema, path, value);
  if (IsDefined(schema.minProperties) && !(Object.getOwnPropertyNames(value).length >= schema.minProperties)) {
    yield Create(ValueErrorType.ObjectMinProperties, schema, path, value);
  }
  if (IsDefined(schema.maxProperties) && !(Object.getOwnPropertyNames(value).length <= schema.maxProperties)) {
    yield Create(ValueErrorType.ObjectMaxProperties, schema, path, value);
  }
  const [patternKey, patternSchema] = Object.entries(schema.patternProperties)[0];
  const regex = new RegExp(patternKey);
  for (const [propertyKey, propertyValue] of Object.entries(value)) {
    if (regex.test(propertyKey))
      yield* Visit4(patternSchema, references, `${path}/${EscapeKey(propertyKey)}`, propertyValue);
  }
  if (typeof schema.additionalProperties === "object") {
    for (const [propertyKey, propertyValue] of Object.entries(value)) {
      if (!regex.test(propertyKey))
        yield* Visit4(schema.additionalProperties, references, `${path}/${EscapeKey(propertyKey)}`, propertyValue);
    }
  }
  if (schema.additionalProperties === false) {
    for (const [propertyKey, propertyValue] of Object.entries(value)) {
      if (regex.test(propertyKey))
        continue;
      return yield Create(ValueErrorType.ObjectAdditionalProperties, schema, `${path}/${EscapeKey(propertyKey)}`, propertyValue);
    }
  }
}
function* FromRef(schema, references, path, value) {
  yield* Visit4(Deref(schema, references), references, path, value);
}
function* FromRegExp(schema, references, path, value) {
  if (!IsString(value))
    return yield Create(ValueErrorType.String, schema, path, value);
  if (IsDefined(schema.minLength) && !(value.length >= schema.minLength)) {
    yield Create(ValueErrorType.StringMinLength, schema, path, value);
  }
  if (IsDefined(schema.maxLength) && !(value.length <= schema.maxLength)) {
    yield Create(ValueErrorType.StringMaxLength, schema, path, value);
  }
  const regex = new RegExp(schema.source, schema.flags);
  if (!regex.test(value)) {
    return yield Create(ValueErrorType.RegExp, schema, path, value);
  }
}
function* FromString(schema, references, path, value) {
  if (!IsString(value))
    return yield Create(ValueErrorType.String, schema, path, value);
  if (IsDefined(schema.minLength) && !(value.length >= schema.minLength)) {
    yield Create(ValueErrorType.StringMinLength, schema, path, value);
  }
  if (IsDefined(schema.maxLength) && !(value.length <= schema.maxLength)) {
    yield Create(ValueErrorType.StringMaxLength, schema, path, value);
  }
  if (IsString(schema.pattern)) {
    const regex = new RegExp(schema.pattern);
    if (!regex.test(value)) {
      yield Create(ValueErrorType.StringPattern, schema, path, value);
    }
  }
  if (IsString(schema.format)) {
    if (!exports_format.Has(schema.format)) {
      yield Create(ValueErrorType.StringFormatUnknown, schema, path, value);
    } else {
      const format = exports_format.Get(schema.format);
      if (!format(value)) {
        yield Create(ValueErrorType.StringFormat, schema, path, value);
      }
    }
  }
}
function* FromSymbol(schema, references, path, value) {
  if (!IsSymbol(value))
    yield Create(ValueErrorType.Symbol, schema, path, value);
}
function* FromTemplateLiteral2(schema, references, path, value) {
  if (!IsString(value))
    return yield Create(ValueErrorType.String, schema, path, value);
  const regex = new RegExp(schema.pattern);
  if (!regex.test(value)) {
    yield Create(ValueErrorType.StringPattern, schema, path, value);
  }
}
function* FromThis(schema, references, path, value) {
  yield* Visit4(Deref(schema, references), references, path, value);
}
function* FromTuple3(schema, references, path, value) {
  if (!IsArray(value))
    return yield Create(ValueErrorType.Tuple, schema, path, value);
  if (schema.items === undefined && !(value.length === 0)) {
    return yield Create(ValueErrorType.TupleLength, schema, path, value);
  }
  if (!(value.length === schema.maxItems)) {
    return yield Create(ValueErrorType.TupleLength, schema, path, value);
  }
  if (!schema.items) {
    return;
  }
  for (let i = 0;i < schema.items.length; i++) {
    yield* Visit4(schema.items[i], references, `${path}/${i}`, value[i]);
  }
}
function* FromUndefined(schema, references, path, value) {
  if (!IsUndefined(value))
    yield Create(ValueErrorType.Undefined, schema, path, value);
}
function* FromUnion5(schema, references, path, value) {
  let count = 0;
  for (const subschema of schema.anyOf) {
    const errors = [...Visit4(subschema, references, path, value)];
    if (errors.length === 0)
      return;
    count += errors.length;
  }
  if (count > 0) {
    yield Create(ValueErrorType.Union, schema, path, value);
  }
}
function* FromUint8Array(schema, references, path, value) {
  if (!IsUint8Array(value))
    return yield Create(ValueErrorType.Uint8Array, schema, path, value);
  if (IsDefined(schema.maxByteLength) && !(value.length <= schema.maxByteLength)) {
    yield Create(ValueErrorType.Uint8ArrayMaxByteLength, schema, path, value);
  }
  if (IsDefined(schema.minByteLength) && !(value.length >= schema.minByteLength)) {
    yield Create(ValueErrorType.Uint8ArrayMinByteLength, schema, path, value);
  }
}
function* FromUnknown(schema, references, path, value) {
}
function* FromVoid(schema, references, path, value) {
  if (!TypeSystemPolicy.IsVoidLike(value))
    yield Create(ValueErrorType.Void, schema, path, value);
}
function* FromKind(schema, references, path, value) {
  const check = exports_type.Get(schema[Kind]);
  if (!check(schema, value))
    yield Create(ValueErrorType.Kind, schema, path, value);
}
function* Visit4(schema, references, path, value) {
  const references_ = IsDefined(schema.$id) ? [...references, schema] : references;
  const schema_ = schema;
  switch (schema_[Kind]) {
    case "Any":
      return yield* FromAny(schema_, references_, path, value);
    case "Array":
      return yield* FromArray3(schema_, references_, path, value);
    case "AsyncIterator":
      return yield* FromAsyncIterator(schema_, references_, path, value);
    case "BigInt":
      return yield* FromBigInt(schema_, references_, path, value);
    case "Boolean":
      return yield* FromBoolean(schema_, references_, path, value);
    case "Constructor":
      return yield* FromConstructor(schema_, references_, path, value);
    case "Date":
      return yield* FromDate(schema_, references_, path, value);
    case "Function":
      return yield* FromFunction(schema_, references_, path, value);
    case "Integer":
      return yield* FromInteger(schema_, references_, path, value);
    case "Intersect":
      return yield* FromIntersect3(schema_, references_, path, value);
    case "Iterator":
      return yield* FromIterator(schema_, references_, path, value);
    case "Literal":
      return yield* FromLiteral2(schema_, references_, path, value);
    case "Never":
      return yield* FromNever(schema_, references_, path, value);
    case "Not":
      return yield* FromNot(schema_, references_, path, value);
    case "Null":
      return yield* FromNull(schema_, references_, path, value);
    case "Number":
      return yield* FromNumber(schema_, references_, path, value);
    case "Object":
      return yield* FromObject(schema_, references_, path, value);
    case "Promise":
      return yield* FromPromise(schema_, references_, path, value);
    case "Record":
      return yield* FromRecord(schema_, references_, path, value);
    case "Ref":
      return yield* FromRef(schema_, references_, path, value);
    case "RegExp":
      return yield* FromRegExp(schema_, references_, path, value);
    case "String":
      return yield* FromString(schema_, references_, path, value);
    case "Symbol":
      return yield* FromSymbol(schema_, references_, path, value);
    case "TemplateLiteral":
      return yield* FromTemplateLiteral2(schema_, references_, path, value);
    case "This":
      return yield* FromThis(schema_, references_, path, value);
    case "Tuple":
      return yield* FromTuple3(schema_, references_, path, value);
    case "Undefined":
      return yield* FromUndefined(schema_, references_, path, value);
    case "Union":
      return yield* FromUnion5(schema_, references_, path, value);
    case "Uint8Array":
      return yield* FromUint8Array(schema_, references_, path, value);
    case "Unknown":
      return yield* FromUnknown(schema_, references_, path, value);
    case "Void":
      return yield* FromVoid(schema_, references_, path, value);
    default:
      if (!exports_type.Has(schema_[Kind]))
        throw new ValueErrorsUnknownTypeError(schema);
      return yield* FromKind(schema_, references_, path, value);
  }
}
function Errors(...args) {
  const iterator2 = args.length === 3 ? Visit4(args[0], args[1], "", args[2]) : Visit4(args[0], [], "", args[1]);
  return new ValueErrorIterator(iterator2);
}
var ValueErrorType;
(function(ValueErrorType2) {
  ValueErrorType2[ValueErrorType2["ArrayContains"] = 0] = "ArrayContains";
  ValueErrorType2[ValueErrorType2["ArrayMaxContains"] = 1] = "ArrayMaxContains";
  ValueErrorType2[ValueErrorType2["ArrayMaxItems"] = 2] = "ArrayMaxItems";
  ValueErrorType2[ValueErrorType2["ArrayMinContains"] = 3] = "ArrayMinContains";
  ValueErrorType2[ValueErrorType2["ArrayMinItems"] = 4] = "ArrayMinItems";
  ValueErrorType2[ValueErrorType2["ArrayUniqueItems"] = 5] = "ArrayUniqueItems";
  ValueErrorType2[ValueErrorType2["Array"] = 6] = "Array";
  ValueErrorType2[ValueErrorType2["AsyncIterator"] = 7] = "AsyncIterator";
  ValueErrorType2[ValueErrorType2["BigIntExclusiveMaximum"] = 8] = "BigIntExclusiveMaximum";
  ValueErrorType2[ValueErrorType2["BigIntExclusiveMinimum"] = 9] = "BigIntExclusiveMinimum";
  ValueErrorType2[ValueErrorType2["BigIntMaximum"] = 10] = "BigIntMaximum";
  ValueErrorType2[ValueErrorType2["BigIntMinimum"] = 11] = "BigIntMinimum";
  ValueErrorType2[ValueErrorType2["BigIntMultipleOf"] = 12] = "BigIntMultipleOf";
  ValueErrorType2[ValueErrorType2["BigInt"] = 13] = "BigInt";
  ValueErrorType2[ValueErrorType2["Boolean"] = 14] = "Boolean";
  ValueErrorType2[ValueErrorType2["DateExclusiveMaximumTimestamp"] = 15] = "DateExclusiveMaximumTimestamp";
  ValueErrorType2[ValueErrorType2["DateExclusiveMinimumTimestamp"] = 16] = "DateExclusiveMinimumTimestamp";
  ValueErrorType2[ValueErrorType2["DateMaximumTimestamp"] = 17] = "DateMaximumTimestamp";
  ValueErrorType2[ValueErrorType2["DateMinimumTimestamp"] = 18] = "DateMinimumTimestamp";
  ValueErrorType2[ValueErrorType2["DateMultipleOfTimestamp"] = 19] = "DateMultipleOfTimestamp";
  ValueErrorType2[ValueErrorType2["Date"] = 20] = "Date";
  ValueErrorType2[ValueErrorType2["Function"] = 21] = "Function";
  ValueErrorType2[ValueErrorType2["IntegerExclusiveMaximum"] = 22] = "IntegerExclusiveMaximum";
  ValueErrorType2[ValueErrorType2["IntegerExclusiveMinimum"] = 23] = "IntegerExclusiveMinimum";
  ValueErrorType2[ValueErrorType2["IntegerMaximum"] = 24] = "IntegerMaximum";
  ValueErrorType2[ValueErrorType2["IntegerMinimum"] = 25] = "IntegerMinimum";
  ValueErrorType2[ValueErrorType2["IntegerMultipleOf"] = 26] = "IntegerMultipleOf";
  ValueErrorType2[ValueErrorType2["Integer"] = 27] = "Integer";
  ValueErrorType2[ValueErrorType2["IntersectUnevaluatedProperties"] = 28] = "IntersectUnevaluatedProperties";
  ValueErrorType2[ValueErrorType2["Intersect"] = 29] = "Intersect";
  ValueErrorType2[ValueErrorType2["Iterator"] = 30] = "Iterator";
  ValueErrorType2[ValueErrorType2["Kind"] = 31] = "Kind";
  ValueErrorType2[ValueErrorType2["Literal"] = 32] = "Literal";
  ValueErrorType2[ValueErrorType2["Never"] = 33] = "Never";
  ValueErrorType2[ValueErrorType2["Not"] = 34] = "Not";
  ValueErrorType2[ValueErrorType2["Null"] = 35] = "Null";
  ValueErrorType2[ValueErrorType2["NumberExclusiveMaximum"] = 36] = "NumberExclusiveMaximum";
  ValueErrorType2[ValueErrorType2["NumberExclusiveMinimum"] = 37] = "NumberExclusiveMinimum";
  ValueErrorType2[ValueErrorType2["NumberMaximum"] = 38] = "NumberMaximum";
  ValueErrorType2[ValueErrorType2["NumberMinimum"] = 39] = "NumberMinimum";
  ValueErrorType2[ValueErrorType2["NumberMultipleOf"] = 40] = "NumberMultipleOf";
  ValueErrorType2[ValueErrorType2["Number"] = 41] = "Number";
  ValueErrorType2[ValueErrorType2["ObjectAdditionalProperties"] = 42] = "ObjectAdditionalProperties";
  ValueErrorType2[ValueErrorType2["ObjectMaxProperties"] = 43] = "ObjectMaxProperties";
  ValueErrorType2[ValueErrorType2["ObjectMinProperties"] = 44] = "ObjectMinProperties";
  ValueErrorType2[ValueErrorType2["ObjectRequiredProperty"] = 45] = "ObjectRequiredProperty";
  ValueErrorType2[ValueErrorType2["Object"] = 46] = "Object";
  ValueErrorType2[ValueErrorType2["Promise"] = 47] = "Promise";
  ValueErrorType2[ValueErrorType2["RegExp"] = 48] = "RegExp";
  ValueErrorType2[ValueErrorType2["StringFormatUnknown"] = 49] = "StringFormatUnknown";
  ValueErrorType2[ValueErrorType2["StringFormat"] = 50] = "StringFormat";
  ValueErrorType2[ValueErrorType2["StringMaxLength"] = 51] = "StringMaxLength";
  ValueErrorType2[ValueErrorType2["StringMinLength"] = 52] = "StringMinLength";
  ValueErrorType2[ValueErrorType2["StringPattern"] = 53] = "StringPattern";
  ValueErrorType2[ValueErrorType2["String"] = 54] = "String";
  ValueErrorType2[ValueErrorType2["Symbol"] = 55] = "Symbol";
  ValueErrorType2[ValueErrorType2["TupleLength"] = 56] = "TupleLength";
  ValueErrorType2[ValueErrorType2["Tuple"] = 57] = "Tuple";
  ValueErrorType2[ValueErrorType2["Uint8ArrayMaxByteLength"] = 58] = "Uint8ArrayMaxByteLength";
  ValueErrorType2[ValueErrorType2["Uint8ArrayMinByteLength"] = 59] = "Uint8ArrayMinByteLength";
  ValueErrorType2[ValueErrorType2["Uint8Array"] = 60] = "Uint8Array";
  ValueErrorType2[ValueErrorType2["Undefined"] = 61] = "Undefined";
  ValueErrorType2[ValueErrorType2["Union"] = 62] = "Union";
  ValueErrorType2[ValueErrorType2["Void"] = 63] = "Void";
})(ValueErrorType || (ValueErrorType = {}));

class ValueErrorsUnknownTypeError extends TypeBoxError {
  constructor(schema) {
    super("Unknown type");
    this.schema = schema;
  }
}

class ValueErrorIterator {
  constructor(iterator2) {
    this.iterator = iterator2;
  }
  [Symbol.iterator]() {
    return this.iterator;
  }
  First() {
    const next = this.iterator.next();
    return next.done ? undefined : next.value;
  }
}
// node_modules/@sinclair/typebox/build/esm/type/any/any.mjs
function Any(options = {}) {
  return { ...options, [Kind]: "Any" };
}
// node_modules/@sinclair/typebox/build/esm/type/unknown/unknown.mjs
function Unknown(options = {}) {
  return {
    ...options,
    [Kind]: "Unknown"
  };
}
// node_modules/@sinclair/typebox/build/esm/type/guard/type.mjs
var exports_type2 = {};
__export(exports_type2, {
  TypeGuardUnknownTypeError: () => TypeGuardUnknownTypeError,
  IsVoid: () => IsVoid2,
  IsUnsafe: () => IsUnsafe2,
  IsUnknown: () => IsUnknown2,
  IsUnionLiteral: () => IsUnionLiteral,
  IsUnion: () => IsUnion2,
  IsUndefined: () => IsUndefined4,
  IsUint8Array: () => IsUint8Array4,
  IsTuple: () => IsTuple2,
  IsTransform: () => IsTransform2,
  IsThis: () => IsThis2,
  IsTemplateLiteral: () => IsTemplateLiteral2,
  IsSymbol: () => IsSymbol4,
  IsString: () => IsString4,
  IsSchema: () => IsSchema2,
  IsRegExp: () => IsRegExp3,
  IsRef: () => IsRef2,
  IsRecursive: () => IsRecursive,
  IsRecord: () => IsRecord2,
  IsReadonly: () => IsReadonly2,
  IsProperties: () => IsProperties,
  IsPromise: () => IsPromise3,
  IsOptional: () => IsOptional2,
  IsObject: () => IsObject4,
  IsNumber: () => IsNumber4,
  IsNull: () => IsNull4,
  IsNot: () => IsNot2,
  IsNever: () => IsNever2,
  IsMappedResult: () => IsMappedResult2,
  IsMappedKey: () => IsMappedKey2,
  IsLiteralValue: () => IsLiteralValue,
  IsLiteralString: () => IsLiteralString,
  IsLiteralNumber: () => IsLiteralNumber,
  IsLiteralBoolean: () => IsLiteralBoolean,
  IsLiteral: () => IsLiteral2,
  IsKindOf: () => IsKindOf2,
  IsKind: () => IsKind2,
  IsIterator: () => IsIterator4,
  IsIntersect: () => IsIntersect2,
  IsInteger: () => IsInteger3,
  IsFunction: () => IsFunction4,
  IsDate: () => IsDate4,
  IsConstructor: () => IsConstructor2,
  IsBoolean: () => IsBoolean4,
  IsBigInt: () => IsBigInt4,
  IsAsyncIterator: () => IsAsyncIterator4,
  IsArray: () => IsArray4,
  IsAny: () => IsAny2
});
function IsPattern(value) {
  try {
    new RegExp(value);
    return true;
  } catch {
    return false;
  }
}
function IsControlCharacterFree(value) {
  if (!IsString2(value))
    return false;
  for (let i = 0;i < value.length; i++) {
    const code = value.charCodeAt(i);
    if (code >= 7 && code <= 13 || code === 27 || code === 127) {
      return false;
    }
  }
  return true;
}
function IsAdditionalProperties(value) {
  return IsOptionalBoolean(value) || IsSchema2(value);
}
function IsOptionalBigInt(value) {
  return IsUndefined2(value) || IsBigInt2(value);
}
function IsOptionalNumber(value) {
  return IsUndefined2(value) || IsNumber2(value);
}
function IsOptionalBoolean(value) {
  return IsUndefined2(value) || IsBoolean2(value);
}
function IsOptionalString(value) {
  return IsUndefined2(value) || IsString2(value);
}
function IsOptionalPattern(value) {
  return IsUndefined2(value) || IsString2(value) && IsControlCharacterFree(value) && IsPattern(value);
}
function IsOptionalFormat(value) {
  return IsUndefined2(value) || IsString2(value) && IsControlCharacterFree(value);
}
function IsOptionalSchema(value) {
  return IsUndefined2(value) || IsSchema2(value);
}
function IsReadonly2(value) {
  return IsObject2(value) && value[ReadonlyKind] === "Readonly";
}
function IsOptional2(value) {
  return IsObject2(value) && value[OptionalKind] === "Optional";
}
function IsAny2(value) {
  return IsKindOf2(value, "Any") && IsOptionalString(value.$id);
}
function IsArray4(value) {
  return IsKindOf2(value, "Array") && value.type === "array" && IsOptionalString(value.$id) && IsSchema2(value.items) && IsOptionalNumber(value.minItems) && IsOptionalNumber(value.maxItems) && IsOptionalBoolean(value.uniqueItems) && IsOptionalSchema(value.contains) && IsOptionalNumber(value.minContains) && IsOptionalNumber(value.maxContains);
}
function IsAsyncIterator4(value) {
  return IsKindOf2(value, "AsyncIterator") && value.type === "AsyncIterator" && IsOptionalString(value.$id) && IsSchema2(value.items);
}
function IsBigInt4(value) {
  return IsKindOf2(value, "BigInt") && value.type === "bigint" && IsOptionalString(value.$id) && IsOptionalBigInt(value.exclusiveMaximum) && IsOptionalBigInt(value.exclusiveMinimum) && IsOptionalBigInt(value.maximum) && IsOptionalBigInt(value.minimum) && IsOptionalBigInt(value.multipleOf);
}
function IsBoolean4(value) {
  return IsKindOf2(value, "Boolean") && value.type === "boolean" && IsOptionalString(value.$id);
}
function IsConstructor2(value) {
  return IsKindOf2(value, "Constructor") && value.type === "Constructor" && IsOptionalString(value.$id) && IsArray2(value.parameters) && value.parameters.every((schema) => IsSchema2(schema)) && IsSchema2(value.returns);
}
function IsDate4(value) {
  return IsKindOf2(value, "Date") && value.type === "Date" && IsOptionalString(value.$id) && IsOptionalNumber(value.exclusiveMaximumTimestamp) && IsOptionalNumber(value.exclusiveMinimumTimestamp) && IsOptionalNumber(value.maximumTimestamp) && IsOptionalNumber(value.minimumTimestamp) && IsOptionalNumber(value.multipleOfTimestamp);
}
function IsFunction4(value) {
  return IsKindOf2(value, "Function") && value.type === "Function" && IsOptionalString(value.$id) && IsArray2(value.parameters) && value.parameters.every((schema) => IsSchema2(schema)) && IsSchema2(value.returns);
}
function IsInteger3(value) {
  return IsKindOf2(value, "Integer") && value.type === "integer" && IsOptionalString(value.$id) && IsOptionalNumber(value.exclusiveMaximum) && IsOptionalNumber(value.exclusiveMinimum) && IsOptionalNumber(value.maximum) && IsOptionalNumber(value.minimum) && IsOptionalNumber(value.multipleOf);
}
function IsProperties(value) {
  return IsObject2(value) && Object.entries(value).every(([key, schema]) => IsControlCharacterFree(key) && IsSchema2(schema));
}
function IsIntersect2(value) {
  return IsKindOf2(value, "Intersect") && (IsString2(value.type) && value.type !== "object" ? false : true) && IsArray2(value.allOf) && value.allOf.every((schema) => IsSchema2(schema) && !IsTransform2(schema)) && IsOptionalString(value.type) && (IsOptionalBoolean(value.unevaluatedProperties) || IsOptionalSchema(value.unevaluatedProperties)) && IsOptionalString(value.$id);
}
function IsIterator4(value) {
  return IsKindOf2(value, "Iterator") && value.type === "Iterator" && IsOptionalString(value.$id) && IsSchema2(value.items);
}
function IsKindOf2(value, kind) {
  return IsObject2(value) && Kind in value && value[Kind] === kind;
}
function IsLiteralString(value) {
  return IsLiteral2(value) && IsString2(value.const);
}
function IsLiteralNumber(value) {
  return IsLiteral2(value) && IsNumber2(value.const);
}
function IsLiteralBoolean(value) {
  return IsLiteral2(value) && IsBoolean2(value.const);
}
function IsLiteral2(value) {
  return IsKindOf2(value, "Literal") && IsOptionalString(value.$id) && IsLiteralValue(value.const);
}
function IsLiteralValue(value) {
  return IsBoolean2(value) || IsNumber2(value) || IsString2(value);
}
function IsMappedKey2(value) {
  return IsKindOf2(value, "MappedKey") && IsArray2(value.keys) && value.keys.every((key) => IsNumber2(key) || IsString2(key));
}
function IsMappedResult2(value) {
  return IsKindOf2(value, "MappedResult") && IsProperties(value.properties);
}
function IsNever2(value) {
  return IsKindOf2(value, "Never") && IsObject2(value.not) && Object.getOwnPropertyNames(value.not).length === 0;
}
function IsNot2(value) {
  return IsKindOf2(value, "Not") && IsSchema2(value.not);
}
function IsNull4(value) {
  return IsKindOf2(value, "Null") && value.type === "null" && IsOptionalString(value.$id);
}
function IsNumber4(value) {
  return IsKindOf2(value, "Number") && value.type === "number" && IsOptionalString(value.$id) && IsOptionalNumber(value.exclusiveMaximum) && IsOptionalNumber(value.exclusiveMinimum) && IsOptionalNumber(value.maximum) && IsOptionalNumber(value.minimum) && IsOptionalNumber(value.multipleOf);
}
function IsObject4(value) {
  return IsKindOf2(value, "Object") && value.type === "object" && IsOptionalString(value.$id) && IsProperties(value.properties) && IsAdditionalProperties(value.additionalProperties) && IsOptionalNumber(value.minProperties) && IsOptionalNumber(value.maxProperties);
}
function IsPromise3(value) {
  return IsKindOf2(value, "Promise") && value.type === "Promise" && IsOptionalString(value.$id) && IsSchema2(value.item);
}
function IsRecord2(value) {
  return IsKindOf2(value, "Record") && value.type === "object" && IsOptionalString(value.$id) && IsAdditionalProperties(value.additionalProperties) && IsObject2(value.patternProperties) && ((schema) => {
    const keys = Object.getOwnPropertyNames(schema.patternProperties);
    return keys.length === 1 && IsPattern(keys[0]) && IsObject2(schema.patternProperties) && IsSchema2(schema.patternProperties[keys[0]]);
  })(value);
}
function IsRecursive(value) {
  return IsObject2(value) && Hint in value && value[Hint] === "Recursive";
}
function IsRef2(value) {
  return IsKindOf2(value, "Ref") && IsOptionalString(value.$id) && IsString2(value.$ref);
}
function IsRegExp3(value) {
  return IsKindOf2(value, "RegExp") && IsOptionalString(value.$id) && IsString2(value.source) && IsString2(value.flags) && IsOptionalNumber(value.maxLength) && IsOptionalNumber(value.minLength);
}
function IsString4(value) {
  return IsKindOf2(value, "String") && value.type === "string" && IsOptionalString(value.$id) && IsOptionalNumber(value.minLength) && IsOptionalNumber(value.maxLength) && IsOptionalPattern(value.pattern) && IsOptionalFormat(value.format);
}
function IsSymbol4(value) {
  return IsKindOf2(value, "Symbol") && value.type === "symbol" && IsOptionalString(value.$id);
}
function IsTemplateLiteral2(value) {
  return IsKindOf2(value, "TemplateLiteral") && value.type === "string" && IsString2(value.pattern) && value.pattern[0] === "^" && value.pattern[value.pattern.length - 1] === "$";
}
function IsThis2(value) {
  return IsKindOf2(value, "This") && IsOptionalString(value.$id) && IsString2(value.$ref);
}
function IsTransform2(value) {
  return IsObject2(value) && TransformKind in value;
}
function IsTuple2(value) {
  return IsKindOf2(value, "Tuple") && value.type === "array" && IsOptionalString(value.$id) && IsNumber2(value.minItems) && IsNumber2(value.maxItems) && value.minItems === value.maxItems && (IsUndefined2(value.items) && IsUndefined2(value.additionalItems) && value.minItems === 0 || IsArray2(value.items) && value.items.every((schema) => IsSchema2(schema)));
}
function IsUndefined4(value) {
  return IsKindOf2(value, "Undefined") && value.type === "undefined" && IsOptionalString(value.$id);
}
function IsUnionLiteral(value) {
  return IsUnion2(value) && value.anyOf.every((schema) => IsLiteralString(schema) || IsLiteralNumber(schema));
}
function IsUnion2(value) {
  return IsKindOf2(value, "Union") && IsOptionalString(value.$id) && IsObject2(value) && IsArray2(value.anyOf) && value.anyOf.every((schema) => IsSchema2(schema));
}
function IsUint8Array4(value) {
  return IsKindOf2(value, "Uint8Array") && value.type === "Uint8Array" && IsOptionalString(value.$id) && IsOptionalNumber(value.minByteLength) && IsOptionalNumber(value.maxByteLength);
}
function IsUnknown2(value) {
  return IsKindOf2(value, "Unknown") && IsOptionalString(value.$id);
}
function IsUnsafe2(value) {
  return IsKindOf2(value, "Unsafe");
}
function IsVoid2(value) {
  return IsKindOf2(value, "Void") && value.type === "void" && IsOptionalString(value.$id);
}
function IsKind2(value) {
  return IsObject2(value) && Kind in value && IsString2(value[Kind]) && !KnownTypes.includes(value[Kind]);
}
function IsSchema2(value) {
  return IsObject2(value) && (IsAny2(value) || IsArray4(value) || IsBoolean4(value) || IsBigInt4(value) || IsAsyncIterator4(value) || IsConstructor2(value) || IsDate4(value) || IsFunction4(value) || IsInteger3(value) || IsIntersect2(value) || IsIterator4(value) || IsLiteral2(value) || IsMappedKey2(value) || IsMappedResult2(value) || IsNever2(value) || IsNot2(value) || IsNull4(value) || IsNumber4(value) || IsObject4(value) || IsPromise3(value) || IsRecord2(value) || IsRef2(value) || IsRegExp3(value) || IsString4(value) || IsSymbol4(value) || IsTemplateLiteral2(value) || IsThis2(value) || IsTuple2(value) || IsUndefined4(value) || IsUnion2(value) || IsUint8Array4(value) || IsUnknown2(value) || IsUnsafe2(value) || IsVoid2(value) || IsKind2(value));
}

class TypeGuardUnknownTypeError extends TypeBoxError {
}
var KnownTypes = [
  "Any",
  "Array",
  "AsyncIterator",
  "BigInt",
  "Boolean",
  "Constructor",
  "Date",
  "Enum",
  "Function",
  "Integer",
  "Intersect",
  "Iterator",
  "Literal",
  "MappedKey",
  "MappedResult",
  "Not",
  "Null",
  "Number",
  "Object",
  "Promise",
  "Record",
  "Ref",
  "RegExp",
  "String",
  "Symbol",
  "TemplateLiteral",
  "This",
  "Tuple",
  "Undefined",
  "Union",
  "Uint8Array",
  "Unknown",
  "Void"
];
// node_modules/@sinclair/typebox/build/esm/type/extends/extends-check.mjs
function IntoBooleanResult(result) {
  return result === ExtendsResult.False ? result : ExtendsResult.True;
}
function Throw(message) {
  throw new ExtendsResolverError(message);
}
function IsStructuralRight(right) {
  return exports_type2.IsNever(right) || exports_type2.IsIntersect(right) || exports_type2.IsUnion(right) || exports_type2.IsUnknown(right) || exports_type2.IsAny(right);
}
function StructuralRight(left, right) {
  return exports_type2.IsNever(right) ? FromNeverRight(left, right) : exports_type2.IsIntersect(right) ? FromIntersectRight(left, right) : exports_type2.IsUnion(right) ? FromUnionRight(left, right) : exports_type2.IsUnknown(right) ? FromUnknownRight(left, right) : exports_type2.IsAny(right) ? FromAnyRight(left, right) : Throw("StructuralRight");
}
function FromAnyRight(left, right) {
  return ExtendsResult.True;
}
function FromAny2(left, right) {
  return exports_type2.IsIntersect(right) ? FromIntersectRight(left, right) : exports_type2.IsUnion(right) && right.anyOf.some((schema) => exports_type2.IsAny(schema) || exports_type2.IsUnknown(schema)) ? ExtendsResult.True : exports_type2.IsUnion(right) ? ExtendsResult.Union : exports_type2.IsUnknown(right) ? ExtendsResult.True : exports_type2.IsAny(right) ? ExtendsResult.True : ExtendsResult.Union;
}
function FromArrayRight(left, right) {
  return exports_type2.IsUnknown(left) ? ExtendsResult.False : exports_type2.IsAny(left) ? ExtendsResult.Union : exports_type2.IsNever(left) ? ExtendsResult.True : ExtendsResult.False;
}
function FromArray4(left, right) {
  return exports_type2.IsObject(right) && IsObjectArrayLike(right) ? ExtendsResult.True : IsStructuralRight(right) ? StructuralRight(left, right) : !exports_type2.IsArray(right) ? ExtendsResult.False : IntoBooleanResult(Visit5(left.items, right.items));
}
function FromAsyncIterator2(left, right) {
  return IsStructuralRight(right) ? StructuralRight(left, right) : !exports_type2.IsAsyncIterator(right) ? ExtendsResult.False : IntoBooleanResult(Visit5(left.items, right.items));
}
function FromBigInt2(left, right) {
  return IsStructuralRight(right) ? StructuralRight(left, right) : exports_type2.IsObject(right) ? FromObjectRight(left, right) : exports_type2.IsRecord(right) ? FromRecordRight(left, right) : exports_type2.IsBigInt(right) ? ExtendsResult.True : ExtendsResult.False;
}
function FromBooleanRight(left, right) {
  return exports_type2.IsLiteralBoolean(left) ? ExtendsResult.True : exports_type2.IsBoolean(left) ? ExtendsResult.True : ExtendsResult.False;
}
function FromBoolean2(left, right) {
  return IsStructuralRight(right) ? StructuralRight(left, right) : exports_type2.IsObject(right) ? FromObjectRight(left, right) : exports_type2.IsRecord(right) ? FromRecordRight(left, right) : exports_type2.IsBoolean(right) ? ExtendsResult.True : ExtendsResult.False;
}
function FromConstructor2(left, right) {
  return IsStructuralRight(right) ? StructuralRight(left, right) : exports_type2.IsObject(right) ? FromObjectRight(left, right) : !exports_type2.IsConstructor(right) ? ExtendsResult.False : left.parameters.length > right.parameters.length ? ExtendsResult.False : !left.parameters.every((schema, index) => IntoBooleanResult(Visit5(right.parameters[index], schema)) === ExtendsResult.True) ? ExtendsResult.False : IntoBooleanResult(Visit5(left.returns, right.returns));
}
function FromDate2(left, right) {
  return IsStructuralRight(right) ? StructuralRight(left, right) : exports_type2.IsObject(right) ? FromObjectRight(left, right) : exports_type2.IsRecord(right) ? FromRecordRight(left, right) : exports_type2.IsDate(right) ? ExtendsResult.True : ExtendsResult.False;
}
function FromFunction2(left, right) {
  return IsStructuralRight(right) ? StructuralRight(left, right) : exports_type2.IsObject(right) ? FromObjectRight(left, right) : !exports_type2.IsFunction(right) ? ExtendsResult.False : left.parameters.length > right.parameters.length ? ExtendsResult.False : !left.parameters.every((schema, index) => IntoBooleanResult(Visit5(right.parameters[index], schema)) === ExtendsResult.True) ? ExtendsResult.False : IntoBooleanResult(Visit5(left.returns, right.returns));
}
function FromIntegerRight(left, right) {
  return exports_type2.IsLiteral(left) && exports_value.IsNumber(left.const) ? ExtendsResult.True : exports_type2.IsNumber(left) || exports_type2.IsInteger(left) ? ExtendsResult.True : ExtendsResult.False;
}
function FromInteger2(left, right) {
  return exports_type2.IsInteger(right) || exports_type2.IsNumber(right) ? ExtendsResult.True : IsStructuralRight(right) ? StructuralRight(left, right) : exports_type2.IsObject(right) ? FromObjectRight(left, right) : exports_type2.IsRecord(right) ? FromRecordRight(left, right) : ExtendsResult.False;
}
function FromIntersectRight(left, right) {
  return right.allOf.every((schema) => Visit5(left, schema) === ExtendsResult.True) ? ExtendsResult.True : ExtendsResult.False;
}
function FromIntersect4(left, right) {
  return left.allOf.some((schema) => Visit5(schema, right) === ExtendsResult.True) ? ExtendsResult.True : ExtendsResult.False;
}
function FromIterator2(left, right) {
  return IsStructuralRight(right) ? StructuralRight(left, right) : !exports_type2.IsIterator(right) ? ExtendsResult.False : IntoBooleanResult(Visit5(left.items, right.items));
}
function FromLiteral3(left, right) {
  return exports_type2.IsLiteral(right) && right.const === left.const ? ExtendsResult.True : IsStructuralRight(right) ? StructuralRight(left, right) : exports_type2.IsObject(right) ? FromObjectRight(left, right) : exports_type2.IsRecord(right) ? FromRecordRight(left, right) : exports_type2.IsString(right) ? FromStringRight(left, right) : exports_type2.IsNumber(right) ? FromNumberRight(left, right) : exports_type2.IsInteger(right) ? FromIntegerRight(left, right) : exports_type2.IsBoolean(right) ? FromBooleanRight(left, right) : ExtendsResult.False;
}
function FromNeverRight(left, right) {
  return ExtendsResult.False;
}
function FromNever2(left, right) {
  return ExtendsResult.True;
}
function UnwrapTNot(schema) {
  let [current, depth] = [schema, 0];
  while (true) {
    if (!exports_type2.IsNot(current))
      break;
    current = current.not;
    depth += 1;
  }
  return depth % 2 === 0 ? current : Unknown();
}
function FromNot2(left, right) {
  return exports_type2.IsNot(left) ? Visit5(UnwrapTNot(left), right) : exports_type2.IsNot(right) ? Visit5(left, UnwrapTNot(right)) : Throw("Invalid fallthrough for Not");
}
function FromNull2(left, right) {
  return IsStructuralRight(right) ? StructuralRight(left, right) : exports_type2.IsObject(right) ? FromObjectRight(left, right) : exports_type2.IsRecord(right) ? FromRecordRight(left, right) : exports_type2.IsNull(right) ? ExtendsResult.True : ExtendsResult.False;
}
function FromNumberRight(left, right) {
  return exports_type2.IsLiteralNumber(left) ? ExtendsResult.True : exports_type2.IsNumber(left) || exports_type2.IsInteger(left) ? ExtendsResult.True : ExtendsResult.False;
}
function FromNumber2(left, right) {
  return IsStructuralRight(right) ? StructuralRight(left, right) : exports_type2.IsObject(right) ? FromObjectRight(left, right) : exports_type2.IsRecord(right) ? FromRecordRight(left, right) : exports_type2.IsInteger(right) || exports_type2.IsNumber(right) ? ExtendsResult.True : ExtendsResult.False;
}
function IsObjectPropertyCount(schema, count) {
  return Object.getOwnPropertyNames(schema.properties).length === count;
}
function IsObjectStringLike(schema) {
  return IsObjectArrayLike(schema);
}
function IsObjectSymbolLike(schema) {
  return IsObjectPropertyCount(schema, 0) || IsObjectPropertyCount(schema, 1) && "description" in schema.properties && exports_type2.IsUnion(schema.properties.description) && schema.properties.description.anyOf.length === 2 && (exports_type2.IsString(schema.properties.description.anyOf[0]) && exports_type2.IsUndefined(schema.properties.description.anyOf[1]) || exports_type2.IsString(schema.properties.description.anyOf[1]) && exports_type2.IsUndefined(schema.properties.description.anyOf[0]));
}
function IsObjectNumberLike(schema) {
  return IsObjectPropertyCount(schema, 0);
}
function IsObjectBooleanLike(schema) {
  return IsObjectPropertyCount(schema, 0);
}
function IsObjectBigIntLike(schema) {
  return IsObjectPropertyCount(schema, 0);
}
function IsObjectDateLike(schema) {
  return IsObjectPropertyCount(schema, 0);
}
function IsObjectUint8ArrayLike(schema) {
  return IsObjectArrayLike(schema);
}
function IsObjectFunctionLike(schema) {
  const length = Number2();
  return IsObjectPropertyCount(schema, 0) || IsObjectPropertyCount(schema, 1) && "length" in schema.properties && IntoBooleanResult(Visit5(schema.properties["length"], length)) === ExtendsResult.True;
}
function IsObjectConstructorLike(schema) {
  return IsObjectPropertyCount(schema, 0);
}
function IsObjectArrayLike(schema) {
  const length = Number2();
  return IsObjectPropertyCount(schema, 0) || IsObjectPropertyCount(schema, 1) && "length" in schema.properties && IntoBooleanResult(Visit5(schema.properties["length"], length)) === ExtendsResult.True;
}
function IsObjectPromiseLike(schema) {
  const then = Function2([Any()], Any());
  return IsObjectPropertyCount(schema, 0) || IsObjectPropertyCount(schema, 1) && "then" in schema.properties && IntoBooleanResult(Visit5(schema.properties["then"], then)) === ExtendsResult.True;
}
function Property(left, right) {
  return Visit5(left, right) === ExtendsResult.False ? ExtendsResult.False : exports_type2.IsOptional(left) && !exports_type2.IsOptional(right) ? ExtendsResult.False : ExtendsResult.True;
}
function FromObjectRight(left, right) {
  return exports_type2.IsUnknown(left) ? ExtendsResult.False : exports_type2.IsAny(left) ? ExtendsResult.Union : exports_type2.IsNever(left) || exports_type2.IsLiteralString(left) && IsObjectStringLike(right) || exports_type2.IsLiteralNumber(left) && IsObjectNumberLike(right) || exports_type2.IsLiteralBoolean(left) && IsObjectBooleanLike(right) || exports_type2.IsSymbol(left) && IsObjectSymbolLike(right) || exports_type2.IsBigInt(left) && IsObjectBigIntLike(right) || exports_type2.IsString(left) && IsObjectStringLike(right) || exports_type2.IsSymbol(left) && IsObjectSymbolLike(right) || exports_type2.IsNumber(left) && IsObjectNumberLike(right) || exports_type2.IsInteger(left) && IsObjectNumberLike(right) || exports_type2.IsBoolean(left) && IsObjectBooleanLike(right) || exports_type2.IsUint8Array(left) && IsObjectUint8ArrayLike(right) || exports_type2.IsDate(left) && IsObjectDateLike(right) || exports_type2.IsConstructor(left) && IsObjectConstructorLike(right) || exports_type2.IsFunction(left) && IsObjectFunctionLike(right) ? ExtendsResult.True : exports_type2.IsRecord(left) && exports_type2.IsString(RecordKey(left)) ? (() => {
    return right[Hint] === "Record" ? ExtendsResult.True : ExtendsResult.False;
  })() : exports_type2.IsRecord(left) && exports_type2.IsNumber(RecordKey(left)) ? (() => {
    return IsObjectPropertyCount(right, 0) ? ExtendsResult.True : ExtendsResult.False;
  })() : ExtendsResult.False;
}
function FromObject2(left, right) {
  return IsStructuralRight(right) ? StructuralRight(left, right) : exports_type2.IsRecord(right) ? FromRecordRight(left, right) : !exports_type2.IsObject(right) ? ExtendsResult.False : (() => {
    for (const key of Object.getOwnPropertyNames(right.properties)) {
      if (!(key in left.properties) && !exports_type2.IsOptional(right.properties[key])) {
        return ExtendsResult.False;
      }
      if (exports_type2.IsOptional(right.properties[key])) {
        return ExtendsResult.True;
      }
      if (Property(left.properties[key], right.properties[key]) === ExtendsResult.False) {
        return ExtendsResult.False;
      }
    }
    return ExtendsResult.True;
  })();
}
function FromPromise2(left, right) {
  return IsStructuralRight(right) ? StructuralRight(left, right) : exports_type2.IsObject(right) && IsObjectPromiseLike(right) ? ExtendsResult.True : !exports_type2.IsPromise(right) ? ExtendsResult.False : IntoBooleanResult(Visit5(left.item, right.item));
}
function RecordKey(schema) {
  return PatternNumberExact in schema.patternProperties ? Number2() : (PatternStringExact in schema.patternProperties) ? String2() : Throw("Unknown record key pattern");
}
function RecordValue(schema) {
  return PatternNumberExact in schema.patternProperties ? schema.patternProperties[PatternNumberExact] : (PatternStringExact in schema.patternProperties) ? schema.patternProperties[PatternStringExact] : Throw("Unable to get record value schema");
}
function FromRecordRight(left, right) {
  const [Key, Value] = [RecordKey(right), RecordValue(right)];
  return exports_type2.IsLiteralString(left) && exports_type2.IsNumber(Key) && IntoBooleanResult(Visit5(left, Value)) === ExtendsResult.True ? ExtendsResult.True : exports_type2.IsUint8Array(left) && exports_type2.IsNumber(Key) ? Visit5(left, Value) : exports_type2.IsString(left) && exports_type2.IsNumber(Key) ? Visit5(left, Value) : exports_type2.IsArray(left) && exports_type2.IsNumber(Key) ? Visit5(left, Value) : exports_type2.IsObject(left) ? (() => {
    for (const key of Object.getOwnPropertyNames(left.properties)) {
      if (Property(Value, left.properties[key]) === ExtendsResult.False) {
        return ExtendsResult.False;
      }
    }
    return ExtendsResult.True;
  })() : ExtendsResult.False;
}
function FromRecord2(left, right) {
  return IsStructuralRight(right) ? StructuralRight(left, right) : exports_type2.IsObject(right) ? FromObjectRight(left, right) : !exports_type2.IsRecord(right) ? ExtendsResult.False : Visit5(RecordValue(left), RecordValue(right));
}
function FromRegExp2(left, right) {
  const L = exports_type2.IsRegExp(left) ? String2() : left;
  const R = exports_type2.IsRegExp(right) ? String2() : right;
  return Visit5(L, R);
}
function FromStringRight(left, right) {
  return exports_type2.IsLiteral(left) && exports_value.IsString(left.const) ? ExtendsResult.True : exports_type2.IsString(left) ? ExtendsResult.True : ExtendsResult.False;
}
function FromString2(left, right) {
  return IsStructuralRight(right) ? StructuralRight(left, right) : exports_type2.IsObject(right) ? FromObjectRight(left, right) : exports_type2.IsRecord(right) ? FromRecordRight(left, right) : exports_type2.IsString(right) ? ExtendsResult.True : ExtendsResult.False;
}
function FromSymbol2(left, right) {
  return IsStructuralRight(right) ? StructuralRight(left, right) : exports_type2.IsObject(right) ? FromObjectRight(left, right) : exports_type2.IsRecord(right) ? FromRecordRight(left, right) : exports_type2.IsSymbol(right) ? ExtendsResult.True : ExtendsResult.False;
}
function FromTemplateLiteral3(left, right) {
  return exports_type2.IsTemplateLiteral(left) ? Visit5(TemplateLiteralToUnion(left), right) : exports_type2.IsTemplateLiteral(right) ? Visit5(left, TemplateLiteralToUnion(right)) : Throw("Invalid fallthrough for TemplateLiteral");
}
function IsArrayOfTuple(left, right) {
  return exports_type2.IsArray(right) && left.items !== undefined && left.items.every((schema) => Visit5(schema, right.items) === ExtendsResult.True);
}
function FromTupleRight(left, right) {
  return exports_type2.IsNever(left) ? ExtendsResult.True : exports_type2.IsUnknown(left) ? ExtendsResult.False : exports_type2.IsAny(left) ? ExtendsResult.Union : ExtendsResult.False;
}
function FromTuple4(left, right) {
  return IsStructuralRight(right) ? StructuralRight(left, right) : exports_type2.IsObject(right) && IsObjectArrayLike(right) ? ExtendsResult.True : exports_type2.IsArray(right) && IsArrayOfTuple(left, right) ? ExtendsResult.True : !exports_type2.IsTuple(right) ? ExtendsResult.False : exports_value.IsUndefined(left.items) && !exports_value.IsUndefined(right.items) || !exports_value.IsUndefined(left.items) && exports_value.IsUndefined(right.items) ? ExtendsResult.False : exports_value.IsUndefined(left.items) && !exports_value.IsUndefined(right.items) ? ExtendsResult.True : left.items.every((schema, index) => Visit5(schema, right.items[index]) === ExtendsResult.True) ? ExtendsResult.True : ExtendsResult.False;
}
function FromUint8Array2(left, right) {
  return IsStructuralRight(right) ? StructuralRight(left, right) : exports_type2.IsObject(right) ? FromObjectRight(left, right) : exports_type2.IsRecord(right) ? FromRecordRight(left, right) : exports_type2.IsUint8Array(right) ? ExtendsResult.True : ExtendsResult.False;
}
function FromUndefined2(left, right) {
  return IsStructuralRight(right) ? StructuralRight(left, right) : exports_type2.IsObject(right) ? FromObjectRight(left, right) : exports_type2.IsRecord(right) ? FromRecordRight(left, right) : exports_type2.IsVoid(right) ? FromVoidRight(left, right) : exports_type2.IsUndefined(right) ? ExtendsResult.True : ExtendsResult.False;
}
function FromUnionRight(left, right) {
  return right.anyOf.some((schema) => Visit5(left, schema) === ExtendsResult.True) ? ExtendsResult.True : ExtendsResult.False;
}
function FromUnion6(left, right) {
  return left.anyOf.every((schema) => Visit5(schema, right) === ExtendsResult.True) ? ExtendsResult.True : ExtendsResult.False;
}
function FromUnknownRight(left, right) {
  return ExtendsResult.True;
}
function FromUnknown2(left, right) {
  return exports_type2.IsNever(right) ? FromNeverRight(left, right) : exports_type2.IsIntersect(right) ? FromIntersectRight(left, right) : exports_type2.IsUnion(right) ? FromUnionRight(left, right) : exports_type2.IsAny(right) ? FromAnyRight(left, right) : exports_type2.IsString(right) ? FromStringRight(left, right) : exports_type2.IsNumber(right) ? FromNumberRight(left, right) : exports_type2.IsInteger(right) ? FromIntegerRight(left, right) : exports_type2.IsBoolean(right) ? FromBooleanRight(left, right) : exports_type2.IsArray(right) ? FromArrayRight(left, right) : exports_type2.IsTuple(right) ? FromTupleRight(left, right) : exports_type2.IsObject(right) ? FromObjectRight(left, right) : exports_type2.IsUnknown(right) ? ExtendsResult.True : ExtendsResult.False;
}
function FromVoidRight(left, right) {
  return exports_type2.IsUndefined(left) ? ExtendsResult.True : exports_type2.IsUndefined(left) ? ExtendsResult.True : ExtendsResult.False;
}
function FromVoid2(left, right) {
  return exports_type2.IsIntersect(right) ? FromIntersectRight(left, right) : exports_type2.IsUnion(right) ? FromUnionRight(left, right) : exports_type2.IsUnknown(right) ? FromUnknownRight(left, right) : exports_type2.IsAny(right) ? FromAnyRight(left, right) : exports_type2.IsObject(right) ? FromObjectRight(left, right) : exports_type2.IsVoid(right) ? ExtendsResult.True : ExtendsResult.False;
}
function Visit5(left, right) {
  return exports_type2.IsTemplateLiteral(left) || exports_type2.IsTemplateLiteral(right) ? FromTemplateLiteral3(left, right) : exports_type2.IsRegExp(left) || exports_type2.IsRegExp(right) ? FromRegExp2(left, right) : exports_type2.IsNot(left) || exports_type2.IsNot(right) ? FromNot2(left, right) : exports_type2.IsAny(left) ? FromAny2(left, right) : exports_type2.IsArray(left) ? FromArray4(left, right) : exports_type2.IsBigInt(left) ? FromBigInt2(left, right) : exports_type2.IsBoolean(left) ? FromBoolean2(left, right) : exports_type2.IsAsyncIterator(left) ? FromAsyncIterator2(left, right) : exports_type2.IsConstructor(left) ? FromConstructor2(left, right) : exports_type2.IsDate(left) ? FromDate2(left, right) : exports_type2.IsFunction(left) ? FromFunction2(left, right) : exports_type2.IsInteger(left) ? FromInteger2(left, right) : exports_type2.IsIntersect(left) ? FromIntersect4(left, right) : exports_type2.IsIterator(left) ? FromIterator2(left, right) : exports_type2.IsLiteral(left) ? FromLiteral3(left, right) : exports_type2.IsNever(left) ? FromNever2(left, right) : exports_type2.IsNull(left) ? FromNull2(left, right) : exports_type2.IsNumber(left) ? FromNumber2(left, right) : exports_type2.IsObject(left) ? FromObject2(left, right) : exports_type2.IsRecord(left) ? FromRecord2(left, right) : exports_type2.IsString(left) ? FromString2(left, right) : exports_type2.IsSymbol(left) ? FromSymbol2(left, right) : exports_type2.IsTuple(left) ? FromTuple4(left, right) : exports_type2.IsPromise(left) ? FromPromise2(left, right) : exports_type2.IsUint8Array(left) ? FromUint8Array2(left, right) : exports_type2.IsUndefined(left) ? FromUndefined2(left, right) : exports_type2.IsUnion(left) ? FromUnion6(left, right) : exports_type2.IsUnknown(left) ? FromUnknown2(left, right) : exports_type2.IsVoid(left) ? FromVoid2(left, right) : Throw(`Unknown left type operand '${left[Kind]}'`);
}
function ExtendsCheck(left, right) {
  return Visit5(left, right);
}

class ExtendsResolverError extends TypeBoxError {
}
var ExtendsResult;
(function(ExtendsResult2) {
  ExtendsResult2[ExtendsResult2["Union"] = 0] = "Union";
  ExtendsResult2[ExtendsResult2["True"] = 1] = "True";
  ExtendsResult2[ExtendsResult2["False"] = 2] = "False";
})(ExtendsResult || (ExtendsResult = {}));
// node_modules/@sinclair/typebox/build/esm/type/extends/extends-from-mapped-result.mjs
function FromProperties7(P, Right, True, False, options) {
  const Acc = {};
  for (const K2 of globalThis.Object.getOwnPropertyNames(P))
    Acc[K2] = Extends(P[K2], Right, True, False, options);
  return Acc;
}
function FromMappedResult6(Left, Right, True, False, options) {
  return FromProperties7(Left.properties, Right, True, False, options);
}
function ExtendsFromMappedResult(Left, Right, True, False, options) {
  const P = FromMappedResult6(Left, Right, True, False, options);
  return MappedResult(P);
}

// node_modules/@sinclair/typebox/build/esm/type/extends/extends.mjs
function ExtendsResolve(left, right, trueType, falseType) {
  const R = ExtendsCheck(left, right);
  return R === ExtendsResult.Union ? Union([trueType, falseType]) : R === ExtendsResult.True ? trueType : falseType;
}
function Extends(L, R, T, F, options = {}) {
  return IsMappedResult(L) ? ExtendsFromMappedResult(L, R, T, F, options) : IsMappedKey(L) ? CloneType(ExtendsFromMappedKey(L, R, T, F, options)) : CloneType(ExtendsResolve(L, R, T, F), options);
}

// node_modules/@sinclair/typebox/build/esm/type/extends/extends-from-mapped-key.mjs
function FromPropertyKey(K, U, L, R, options) {
  return {
    [K]: Extends(Literal(K), U, L, R, options)
  };
}
function FromPropertyKeys(K, U, L, R, options) {
  return K.reduce((Acc, LK) => {
    return { ...Acc, ...FromPropertyKey(LK, U, L, R, options) };
  }, {});
}
function FromMappedKey2(K, U, L, R, options) {
  return FromPropertyKeys(K.keys, U, L, R, options);
}
function ExtendsFromMappedKey(T, U, L, R, options) {
  const P = FromMappedKey2(T, U, L, R, options);
  return MappedResult(P);
}
// node_modules/@sinclair/typebox/build/esm/value/check/check.mjs
function IsAnyOrUnknown(schema) {
  return schema[Kind] === "Any" || schema[Kind] === "Unknown";
}
function IsDefined2(value) {
  return value !== undefined;
}
function FromAny3(schema, references, value) {
  return true;
}
function FromArray5(schema, references, value) {
  if (!IsArray(value))
    return false;
  if (IsDefined2(schema.minItems) && !(value.length >= schema.minItems)) {
    return false;
  }
  if (IsDefined2(schema.maxItems) && !(value.length <= schema.maxItems)) {
    return false;
  }
  if (!value.every((value2) => Visit6(schema.items, references, value2))) {
    return false;
  }
  if (schema.uniqueItems === true && !function() {
    const set2 = new Set;
    for (const element of value) {
      const hashed = Hash(element);
      if (set2.has(hashed)) {
        return false;
      } else {
        set2.add(hashed);
      }
    }
    return true;
  }()) {
    return false;
  }
  if (!(IsDefined2(schema.contains) || IsNumber(schema.minContains) || IsNumber(schema.maxContains))) {
    return true;
  }
  const containsSchema = IsDefined2(schema.contains) ? schema.contains : Never();
  const containsCount = value.reduce((acc, value2) => Visit6(containsSchema, references, value2) ? acc + 1 : acc, 0);
  if (containsCount === 0) {
    return false;
  }
  if (IsNumber(schema.minContains) && containsCount < schema.minContains) {
    return false;
  }
  if (IsNumber(schema.maxContains) && containsCount > schema.maxContains) {
    return false;
  }
  return true;
}
function FromAsyncIterator3(schema, references, value) {
  return IsAsyncIterator(value);
}
function FromBigInt3(schema, references, value) {
  if (!IsBigInt(value))
    return false;
  if (IsDefined2(schema.exclusiveMaximum) && !(value < schema.exclusiveMaximum)) {
    return false;
  }
  if (IsDefined2(schema.exclusiveMinimum) && !(value > schema.exclusiveMinimum)) {
    return false;
  }
  if (IsDefined2(schema.maximum) && !(value <= schema.maximum)) {
    return false;
  }
  if (IsDefined2(schema.minimum) && !(value >= schema.minimum)) {
    return false;
  }
  if (IsDefined2(schema.multipleOf) && !(value % schema.multipleOf === BigInt(0))) {
    return false;
  }
  return true;
}
function FromBoolean3(schema, references, value) {
  return IsBoolean(value);
}
function FromConstructor3(schema, references, value) {
  return Visit6(schema.returns, references, value.prototype);
}
function FromDate3(schema, references, value) {
  if (!IsDate(value))
    return false;
  if (IsDefined2(schema.exclusiveMaximumTimestamp) && !(value.getTime() < schema.exclusiveMaximumTimestamp)) {
    return false;
  }
  if (IsDefined2(schema.exclusiveMinimumTimestamp) && !(value.getTime() > schema.exclusiveMinimumTimestamp)) {
    return false;
  }
  if (IsDefined2(schema.maximumTimestamp) && !(value.getTime() <= schema.maximumTimestamp)) {
    return false;
  }
  if (IsDefined2(schema.minimumTimestamp) && !(value.getTime() >= schema.minimumTimestamp)) {
    return false;
  }
  if (IsDefined2(schema.multipleOfTimestamp) && !(value.getTime() % schema.multipleOfTimestamp === 0)) {
    return false;
  }
  return true;
}
function FromFunction3(schema, references, value) {
  return IsFunction(value);
}
function FromInteger3(schema, references, value) {
  if (!IsInteger(value)) {
    return false;
  }
  if (IsDefined2(schema.exclusiveMaximum) && !(value < schema.exclusiveMaximum)) {
    return false;
  }
  if (IsDefined2(schema.exclusiveMinimum) && !(value > schema.exclusiveMinimum)) {
    return false;
  }
  if (IsDefined2(schema.maximum) && !(value <= schema.maximum)) {
    return false;
  }
  if (IsDefined2(schema.minimum) && !(value >= schema.minimum)) {
    return false;
  }
  if (IsDefined2(schema.multipleOf) && !(value % schema.multipleOf === 0)) {
    return false;
  }
  return true;
}
function FromIntersect5(schema, references, value) {
  const check1 = schema.allOf.every((schema2) => Visit6(schema2, references, value));
  if (schema.unevaluatedProperties === false) {
    const keyPattern = new RegExp(KeyOfPattern(schema));
    const check2 = Object.getOwnPropertyNames(value).every((key) => keyPattern.test(key));
    return check1 && check2;
  } else if (IsSchema2(schema.unevaluatedProperties)) {
    const keyCheck = new RegExp(KeyOfPattern(schema));
    const check2 = Object.getOwnPropertyNames(value).every((key) => keyCheck.test(key) || Visit6(schema.unevaluatedProperties, references, value[key]));
    return check1 && check2;
  } else {
    return check1;
  }
}
function FromIterator3(schema, references, value) {
  return IsIterator(value);
}
function FromLiteral4(schema, references, value) {
  return value === schema.const;
}
function FromNever3(schema, references, value) {
  return false;
}
function FromNot3(schema, references, value) {
  return !Visit6(schema.not, references, value);
}
function FromNull3(schema, references, value) {
  return IsNull(value);
}
function FromNumber3(schema, references, value) {
  if (!TypeSystemPolicy.IsNumberLike(value))
    return false;
  if (IsDefined2(schema.exclusiveMaximum) && !(value < schema.exclusiveMaximum)) {
    return false;
  }
  if (IsDefined2(schema.exclusiveMinimum) && !(value > schema.exclusiveMinimum)) {
    return false;
  }
  if (IsDefined2(schema.minimum) && !(value >= schema.minimum)) {
    return false;
  }
  if (IsDefined2(schema.maximum) && !(value <= schema.maximum)) {
    return false;
  }
  if (IsDefined2(schema.multipleOf) && !(value % schema.multipleOf === 0)) {
    return false;
  }
  return true;
}
function FromObject3(schema, references, value) {
  if (!TypeSystemPolicy.IsObjectLike(value))
    return false;
  if (IsDefined2(schema.minProperties) && !(Object.getOwnPropertyNames(value).length >= schema.minProperties)) {
    return false;
  }
  if (IsDefined2(schema.maxProperties) && !(Object.getOwnPropertyNames(value).length <= schema.maxProperties)) {
    return false;
  }
  const knownKeys = Object.getOwnPropertyNames(schema.properties);
  for (const knownKey of knownKeys) {
    const property = schema.properties[knownKey];
    if (schema.required && schema.required.includes(knownKey)) {
      if (!Visit6(property, references, value[knownKey])) {
        return false;
      }
      if ((ExtendsUndefinedCheck(property) || IsAnyOrUnknown(property)) && !(knownKey in value)) {
        return false;
      }
    } else {
      if (TypeSystemPolicy.IsExactOptionalProperty(value, knownKey) && !Visit6(property, references, value[knownKey])) {
        return false;
      }
    }
  }
  if (schema.additionalProperties === false) {
    const valueKeys = Object.getOwnPropertyNames(value);
    if (schema.required && schema.required.length === knownKeys.length && valueKeys.length === knownKeys.length) {
      return true;
    } else {
      return valueKeys.every((valueKey) => knownKeys.includes(valueKey));
    }
  } else if (typeof schema.additionalProperties === "object") {
    const valueKeys = Object.getOwnPropertyNames(value);
    return valueKeys.every((key) => knownKeys.includes(key) || Visit6(schema.additionalProperties, references, value[key]));
  } else {
    return true;
  }
}
function FromPromise3(schema, references, value) {
  return IsPromise(value);
}
function FromRecord3(schema, references, value) {
  if (!TypeSystemPolicy.IsRecordLike(value)) {
    return false;
  }
  if (IsDefined2(schema.minProperties) && !(Object.getOwnPropertyNames(value).length >= schema.minProperties)) {
    return false;
  }
  if (IsDefined2(schema.maxProperties) && !(Object.getOwnPropertyNames(value).length <= schema.maxProperties)) {
    return false;
  }
  const [patternKey, patternSchema] = Object.entries(schema.patternProperties)[0];
  const regex = new RegExp(patternKey);
  const check1 = Object.entries(value).every(([key, value2]) => {
    return regex.test(key) ? Visit6(patternSchema, references, value2) : true;
  });
  const check2 = typeof schema.additionalProperties === "object" ? Object.entries(value).every(([key, value2]) => {
    return !regex.test(key) ? Visit6(schema.additionalProperties, references, value2) : true;
  }) : true;
  const check3 = schema.additionalProperties === false ? Object.getOwnPropertyNames(value).every((key) => {
    return regex.test(key);
  }) : true;
  return check1 && check2 && check3;
}
function FromRef2(schema, references, value) {
  return Visit6(Deref(schema, references), references, value);
}
function FromRegExp3(schema, references, value) {
  const regex = new RegExp(schema.source, schema.flags);
  if (IsDefined2(schema.minLength)) {
    if (!(value.length >= schema.minLength))
      return false;
  }
  if (IsDefined2(schema.maxLength)) {
    if (!(value.length <= schema.maxLength))
      return false;
  }
  return regex.test(value);
}
function FromString3(schema, references, value) {
  if (!IsString(value)) {
    return false;
  }
  if (IsDefined2(schema.minLength)) {
    if (!(value.length >= schema.minLength))
      return false;
  }
  if (IsDefined2(schema.maxLength)) {
    if (!(value.length <= schema.maxLength))
      return false;
  }
  if (IsDefined2(schema.pattern)) {
    const regex = new RegExp(schema.pattern);
    if (!regex.test(value))
      return false;
  }
  if (IsDefined2(schema.format)) {
    if (!exports_format.Has(schema.format))
      return false;
    const func = exports_format.Get(schema.format);
    return func(value);
  }
  return true;
}
function FromSymbol3(schema, references, value) {
  return IsSymbol(value);
}
function FromTemplateLiteral4(schema, references, value) {
  return IsString(value) && new RegExp(schema.pattern).test(value);
}
function FromThis2(schema, references, value) {
  return Visit6(Deref(schema, references), references, value);
}
function FromTuple5(schema, references, value) {
  if (!IsArray(value)) {
    return false;
  }
  if (schema.items === undefined && !(value.length === 0)) {
    return false;
  }
  if (!(value.length === schema.maxItems)) {
    return false;
  }
  if (!schema.items) {
    return true;
  }
  for (let i = 0;i < schema.items.length; i++) {
    if (!Visit6(schema.items[i], references, value[i]))
      return false;
  }
  return true;
}
function FromUndefined3(schema, references, value) {
  return IsUndefined(value);
}
function FromUnion7(schema, references, value) {
  return schema.anyOf.some((inner) => Visit6(inner, references, value));
}
function FromUint8Array3(schema, references, value) {
  if (!IsUint8Array(value)) {
    return false;
  }
  if (IsDefined2(schema.maxByteLength) && !(value.length <= schema.maxByteLength)) {
    return false;
  }
  if (IsDefined2(schema.minByteLength) && !(value.length >= schema.minByteLength)) {
    return false;
  }
  return true;
}
function FromUnknown3(schema, references, value) {
  return true;
}
function FromVoid3(schema, references, value) {
  return TypeSystemPolicy.IsVoidLike(value);
}
function FromKind2(schema, references, value) {
  if (!exports_type.Has(schema[Kind]))
    return false;
  const func = exports_type.Get(schema[Kind]);
  return func(schema, value);
}
function Visit6(schema, references, value) {
  const references_ = IsDefined2(schema.$id) ? [...references, schema] : references;
  const schema_ = schema;
  switch (schema_[Kind]) {
    case "Any":
      return FromAny3(schema_, references_, value);
    case "Array":
      return FromArray5(schema_, references_, value);
    case "AsyncIterator":
      return FromAsyncIterator3(schema_, references_, value);
    case "BigInt":
      return FromBigInt3(schema_, references_, value);
    case "Boolean":
      return FromBoolean3(schema_, references_, value);
    case "Constructor":
      return FromConstructor3(schema_, references_, value);
    case "Date":
      return FromDate3(schema_, references_, value);
    case "Function":
      return FromFunction3(schema_, references_, value);
    case "Integer":
      return FromInteger3(schema_, references_, value);
    case "Intersect":
      return FromIntersect5(schema_, references_, value);
    case "Iterator":
      return FromIterator3(schema_, references_, value);
    case "Literal":
      return FromLiteral4(schema_, references_, value);
    case "Never":
      return FromNever3(schema_, references_, value);
    case "Not":
      return FromNot3(schema_, references_, value);
    case "Null":
      return FromNull3(schema_, references_, value);
    case "Number":
      return FromNumber3(schema_, references_, value);
    case "Object":
      return FromObject3(schema_, references_, value);
    case "Promise":
      return FromPromise3(schema_, references_, value);
    case "Record":
      return FromRecord3(schema_, references_, value);
    case "Ref":
      return FromRef2(schema_, references_, value);
    case "RegExp":
      return FromRegExp3(schema_, references_, value);
    case "String":
      return FromString3(schema_, references_, value);
    case "Symbol":
      return FromSymbol3(schema_, references_, value);
    case "TemplateLiteral":
      return FromTemplateLiteral4(schema_, references_, value);
    case "This":
      return FromThis2(schema_, references_, value);
    case "Tuple":
      return FromTuple5(schema_, references_, value);
    case "Undefined":
      return FromUndefined3(schema_, references_, value);
    case "Union":
      return FromUnion7(schema_, references_, value);
    case "Uint8Array":
      return FromUint8Array3(schema_, references_, value);
    case "Unknown":
      return FromUnknown3(schema_, references_, value);
    case "Void":
      return FromVoid3(schema_, references_, value);
    default:
      if (!exports_type.Has(schema_[Kind]))
        throw new ValueCheckUnknownTypeError(schema_);
      return FromKind2(schema_, references_, value);
  }
}
function Check(...args) {
  return args.length === 3 ? Visit6(args[0], args[1], args[2]) : Visit6(args[0], [], args[1]);
}

class ValueCheckUnknownTypeError extends TypeBoxError {
  constructor(schema) {
    super(`Unknown type`);
    this.schema = schema;
  }
}
// node_modules/@sinclair/typebox/build/esm/value/clone/clone.mjs
function ObjectType3(value) {
  const Acc = {};
  for (const key of Object.getOwnPropertyNames(value)) {
    Acc[key] = Clone2(value[key]);
  }
  for (const key of Object.getOwnPropertySymbols(value)) {
    Acc[key] = Clone2(value[key]);
  }
  return Acc;
}
function ArrayType3(value) {
  return value.map((element) => Clone2(element));
}
function TypedArrayType(value) {
  return value.slice();
}
function DateType3(value) {
  return new Date(value.toISOString());
}
function ValueType(value) {
  return value;
}
function Clone2(value) {
  if (IsArray(value))
    return ArrayType3(value);
  if (IsDate(value))
    return DateType3(value);
  if (IsStandardObject(value))
    return ObjectType3(value);
  if (IsTypedArray(value))
    return TypedArrayType(value);
  if (IsValueType(value))
    return ValueType(value);
  throw new Error("ValueClone: Unable to clone value");
}
// node_modules/@sinclair/typebox/build/esm/value/create/create.mjs
function FromDefault(value) {
  return typeof value === "function" ? value : Clone2(value);
}
function FromAny4(schema, references) {
  if (HasPropertyKey(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    return {};
  }
}
function FromArray6(schema, references) {
  if (schema.uniqueItems === true && !HasPropertyKey(schema, "default")) {
    throw new ValueCreateError(schema, "Array with the uniqueItems constraint requires a default value");
  } else if ("contains" in schema && !HasPropertyKey(schema, "default")) {
    throw new ValueCreateError(schema, "Array with the contains constraint requires a default value");
  } else if ("default" in schema) {
    return FromDefault(schema.default);
  } else if (schema.minItems !== undefined) {
    return Array.from({ length: schema.minItems }).map((item) => {
      return Visit7(schema.items, references);
    });
  } else {
    return [];
  }
}
function FromAsyncIterator4(schema, references) {
  if (HasPropertyKey(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    return async function* () {
    }();
  }
}
function FromBigInt4(schema, references) {
  if (HasPropertyKey(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    return BigInt(0);
  }
}
function FromBoolean4(schema, references) {
  if (HasPropertyKey(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    return false;
  }
}
function FromConstructor4(schema, references) {
  if (HasPropertyKey(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    const value = Visit7(schema.returns, references);
    if (typeof value === "object" && !Array.isArray(value)) {
      return class {
        constructor() {
          for (const [key, val] of Object.entries(value)) {
            const self = this;
            self[key] = val;
          }
        }
      };
    } else {
      return class {
      };
    }
  }
}
function FromDate4(schema, references) {
  if (HasPropertyKey(schema, "default")) {
    return FromDefault(schema.default);
  } else if (schema.minimumTimestamp !== undefined) {
    return new Date(schema.minimumTimestamp);
  } else {
    return new Date;
  }
}
function FromFunction4(schema, references) {
  if (HasPropertyKey(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    return () => Visit7(schema.returns, references);
  }
}
function FromInteger4(schema, references) {
  if (HasPropertyKey(schema, "default")) {
    return FromDefault(schema.default);
  } else if (schema.minimum !== undefined) {
    return schema.minimum;
  } else {
    return 0;
  }
}
function FromIntersect6(schema, references) {
  if (HasPropertyKey(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    const value = schema.allOf.reduce((acc, schema2) => {
      const next = Visit7(schema2, references);
      return typeof next === "object" ? { ...acc, ...next } : next;
    }, {});
    if (!Check(schema, references, value))
      throw new ValueCreateError(schema, "Intersect produced invalid value. Consider using a default value.");
    return value;
  }
}
function FromIterator4(schema, references) {
  if (HasPropertyKey(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    return function* () {
    }();
  }
}
function FromLiteral5(schema, references) {
  if (HasPropertyKey(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    return schema.const;
  }
}
function FromNever4(schema, references) {
  if (HasPropertyKey(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    throw new ValueCreateError(schema, "Never types cannot be created. Consider using a default value.");
  }
}
function FromNot4(schema, references) {
  if (HasPropertyKey(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    throw new ValueCreateError(schema, "Not types must have a default value");
  }
}
function FromNull4(schema, references) {
  if (HasPropertyKey(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    return null;
  }
}
function FromNumber4(schema, references) {
  if (HasPropertyKey(schema, "default")) {
    return FromDefault(schema.default);
  } else if (schema.minimum !== undefined) {
    return schema.minimum;
  } else {
    return 0;
  }
}
function FromObject4(schema, references) {
  if (HasPropertyKey(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    const required = new Set(schema.required);
    const Acc = {};
    for (const [key, subschema] of Object.entries(schema.properties)) {
      if (!required.has(key))
        continue;
      Acc[key] = Visit7(subschema, references);
    }
    return Acc;
  }
}
function FromPromise4(schema, references) {
  if (HasPropertyKey(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    return Promise.resolve(Visit7(schema.item, references));
  }
}
function FromRecord4(schema, references) {
  const [keyPattern, valueSchema] = Object.entries(schema.patternProperties)[0];
  if (HasPropertyKey(schema, "default")) {
    return FromDefault(schema.default);
  } else if (!(keyPattern === PatternStringExact || keyPattern === PatternNumberExact)) {
    const propertyKeys = keyPattern.slice(1, keyPattern.length - 1).split("|");
    const Acc = {};
    for (const key of propertyKeys)
      Acc[key] = Visit7(valueSchema, references);
    return Acc;
  } else {
    return {};
  }
}
function FromRef3(schema, references) {
  if (HasPropertyKey(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    return Visit7(Deref(schema, references), references);
  }
}
function FromRegExp4(schema, references) {
  if (HasPropertyKey(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    throw new ValueCreateError(schema, "RegExp types cannot be created. Consider using a default value.");
  }
}
function FromString4(schema, references) {
  if (schema.pattern !== undefined) {
    if (!HasPropertyKey(schema, "default")) {
      throw new ValueCreateError(schema, "String types with patterns must specify a default value");
    } else {
      return FromDefault(schema.default);
    }
  } else if (schema.format !== undefined) {
    if (!HasPropertyKey(schema, "default")) {
      throw new ValueCreateError(schema, "String types with formats must specify a default value");
    } else {
      return FromDefault(schema.default);
    }
  } else {
    if (HasPropertyKey(schema, "default")) {
      return FromDefault(schema.default);
    } else if (schema.minLength !== undefined) {
      return Array.from({ length: schema.minLength }).map(() => " ").join("");
    } else {
      return "";
    }
  }
}
function FromSymbol4(schema, references) {
  if (HasPropertyKey(schema, "default")) {
    return FromDefault(schema.default);
  } else if ("value" in schema) {
    return Symbol.for(schema.value);
  } else {
    return Symbol();
  }
}
function FromTemplateLiteral5(schema, references) {
  if (HasPropertyKey(schema, "default")) {
    return FromDefault(schema.default);
  }
  if (!IsTemplateLiteralFinite(schema))
    throw new ValueCreateError(schema, "Can only create template literals that produce a finite variants. Consider using a default value.");
  const generated = TemplateLiteralGenerate(schema);
  return generated[0];
}
function FromThis3(schema, references) {
  if (recursiveDepth++ > recursiveMaxDepth)
    throw new ValueCreateError(schema, "Cannot create recursive type as it appears possibly infinite. Consider using a default.");
  if (HasPropertyKey(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    return Visit7(Deref(schema, references), references);
  }
}
function FromTuple6(schema, references) {
  if (HasPropertyKey(schema, "default")) {
    return FromDefault(schema.default);
  }
  if (schema.items === undefined) {
    return [];
  } else {
    return Array.from({ length: schema.minItems }).map((_, index) => Visit7(schema.items[index], references));
  }
}
function FromUndefined4(schema, references) {
  if (HasPropertyKey(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    return;
  }
}
function FromUnion8(schema, references) {
  if (HasPropertyKey(schema, "default")) {
    return FromDefault(schema.default);
  } else if (schema.anyOf.length === 0) {
    throw new Error("ValueCreate.Union: Cannot create Union with zero variants");
  } else {
    return Visit7(schema.anyOf[0], references);
  }
}
function FromUint8Array4(schema, references) {
  if (HasPropertyKey(schema, "default")) {
    return FromDefault(schema.default);
  } else if (schema.minByteLength !== undefined) {
    return new Uint8Array(schema.minByteLength);
  } else {
    return new Uint8Array(0);
  }
}
function FromUnknown4(schema, references) {
  if (HasPropertyKey(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    return {};
  }
}
function FromVoid4(schema, references) {
  if (HasPropertyKey(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    return;
  }
}
function FromKind3(schema, references) {
  if (HasPropertyKey(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    throw new Error("User defined types must specify a default value");
  }
}
function Visit7(schema, references) {
  const references_ = IsString(schema.$id) ? [...references, schema] : references;
  const schema_ = schema;
  switch (schema_[Kind]) {
    case "Any":
      return FromAny4(schema_, references_);
    case "Array":
      return FromArray6(schema_, references_);
    case "AsyncIterator":
      return FromAsyncIterator4(schema_, references_);
    case "BigInt":
      return FromBigInt4(schema_, references_);
    case "Boolean":
      return FromBoolean4(schema_, references_);
    case "Constructor":
      return FromConstructor4(schema_, references_);
    case "Date":
      return FromDate4(schema_, references_);
    case "Function":
      return FromFunction4(schema_, references_);
    case "Integer":
      return FromInteger4(schema_, references_);
    case "Intersect":
      return FromIntersect6(schema_, references_);
    case "Iterator":
      return FromIterator4(schema_, references_);
    case "Literal":
      return FromLiteral5(schema_, references_);
    case "Never":
      return FromNever4(schema_, references_);
    case "Not":
      return FromNot4(schema_, references_);
    case "Null":
      return FromNull4(schema_, references_);
    case "Number":
      return FromNumber4(schema_, references_);
    case "Object":
      return FromObject4(schema_, references_);
    case "Promise":
      return FromPromise4(schema_, references_);
    case "Record":
      return FromRecord4(schema_, references_);
    case "Ref":
      return FromRef3(schema_, references_);
    case "RegExp":
      return FromRegExp4(schema_, references_);
    case "String":
      return FromString4(schema_, references_);
    case "Symbol":
      return FromSymbol4(schema_, references_);
    case "TemplateLiteral":
      return FromTemplateLiteral5(schema_, references_);
    case "This":
      return FromThis3(schema_, references_);
    case "Tuple":
      return FromTuple6(schema_, references_);
    case "Undefined":
      return FromUndefined4(schema_, references_);
    case "Union":
      return FromUnion8(schema_, references_);
    case "Uint8Array":
      return FromUint8Array4(schema_, references_);
    case "Unknown":
      return FromUnknown4(schema_, references_);
    case "Void":
      return FromVoid4(schema_, references_);
    default:
      if (!exports_type.Has(schema_[Kind]))
        throw new ValueCreateError(schema_, "Unknown type");
      return FromKind3(schema_, references_);
  }
}
function Create2(...args) {
  recursiveDepth = 0;
  return args.length === 2 ? Visit7(args[0], args[1]) : Visit7(args[0], []);
}

class ValueCreateError extends TypeBoxError {
  constructor(schema, message) {
    super(message);
    this.schema = schema;
  }
}
var recursiveMaxDepth = 512;
var recursiveDepth = 0;
// node_modules/@sinclair/typebox/build/esm/value/cast/cast.mjs
function ScoreUnion(schema, references, value) {
  if (schema[Kind] === "Object" && typeof value === "object" && !IsNull(value)) {
    const object2 = schema;
    const keys = Object.getOwnPropertyNames(value);
    const entries = Object.entries(object2.properties);
    const [point, max] = [1 / entries.length, entries.length];
    return entries.reduce((acc, [key, schema2]) => {
      const literal2 = schema2[Kind] === "Literal" && schema2.const === value[key] ? max : 0;
      const checks = Check(schema2, references, value[key]) ? point : 0;
      const exists = keys.includes(key) ? point : 0;
      return acc + (literal2 + checks + exists);
    }, 0);
  } else {
    return Check(schema, references, value) ? 1 : 0;
  }
}
function SelectUnion(union3, references, value) {
  const schemas = union3.anyOf.map((schema) => Deref(schema, references));
  let [select, best] = [schemas[0], 0];
  for (const schema of schemas) {
    const score = ScoreUnion(schema, references, value);
    if (score > best) {
      select = schema;
      best = score;
    }
  }
  return select;
}
function CastUnion(union3, references, value) {
  if ("default" in union3) {
    return typeof value === "function" ? union3.default : Clone2(union3.default);
  } else {
    const schema = SelectUnion(union3, references, value);
    return Cast(schema, references, value);
  }
}
function DefaultClone(schema, references, value) {
  return Check(schema, references, value) ? Clone2(value) : Create2(schema, references);
}
function Default(schema, references, value) {
  return Check(schema, references, value) ? value : Create2(schema, references);
}
function FromArray7(schema, references, value) {
  if (Check(schema, references, value))
    return Clone2(value);
  const created = IsArray(value) ? Clone2(value) : Create2(schema, references);
  const minimum = IsNumber(schema.minItems) && created.length < schema.minItems ? [...created, ...Array.from({ length: schema.minItems - created.length }, () => null)] : created;
  const maximum = IsNumber(schema.maxItems) && minimum.length > schema.maxItems ? minimum.slice(0, schema.maxItems) : minimum;
  const casted = maximum.map((value2) => Visit8(schema.items, references, value2));
  if (schema.uniqueItems !== true)
    return casted;
  const unique = [...new Set(casted)];
  if (!Check(schema, references, unique))
    throw new ValueCastError(schema, "Array cast produced invalid data due to uniqueItems constraint");
  return unique;
}
function FromConstructor5(schema, references, value) {
  if (Check(schema, references, value))
    return Create2(schema, references);
  const required = new Set(schema.returns.required || []);
  const result = function() {
  };
  for (const [key, property] of Object.entries(schema.returns.properties)) {
    if (!required.has(key) && value.prototype[key] === undefined)
      continue;
    result.prototype[key] = Visit8(property, references, value.prototype[key]);
  }
  return result;
}
function FromIntersect7(schema, references, value) {
  const created = Create2(schema, references);
  const mapped2 = IsStandardObject(created) && IsStandardObject(value) ? { ...created, ...value } : value;
  return Check(schema, references, mapped2) ? mapped2 : Create2(schema, references);
}
function FromNever5(schema, references, value) {
  throw new ValueCastError(schema, "Never types cannot be cast");
}
function FromObject5(schema, references, value) {
  if (Check(schema, references, value))
    return value;
  if (value === null || typeof value !== "object")
    return Create2(schema, references);
  const required = new Set(schema.required || []);
  const result = {};
  for (const [key, property] of Object.entries(schema.properties)) {
    if (!required.has(key) && value[key] === undefined)
      continue;
    result[key] = Visit8(property, references, value[key]);
  }
  if (typeof schema.additionalProperties === "object") {
    const propertyNames = Object.getOwnPropertyNames(schema.properties);
    for (const propertyName of Object.getOwnPropertyNames(value)) {
      if (propertyNames.includes(propertyName))
        continue;
      result[propertyName] = Visit8(schema.additionalProperties, references, value[propertyName]);
    }
  }
  return result;
}
function FromRecord5(schema, references, value) {
  if (Check(schema, references, value))
    return Clone2(value);
  if (value === null || typeof value !== "object" || Array.isArray(value) || value instanceof Date)
    return Create2(schema, references);
  const subschemaPropertyName = Object.getOwnPropertyNames(schema.patternProperties)[0];
  const subschema = schema.patternProperties[subschemaPropertyName];
  const result = {};
  for (const [propKey, propValue] of Object.entries(value)) {
    result[propKey] = Visit8(subschema, references, propValue);
  }
  return result;
}
function FromRef4(schema, references, value) {
  return Visit8(Deref(schema, references), references, value);
}
function FromThis4(schema, references, value) {
  return Visit8(Deref(schema, references), references, value);
}
function FromTuple7(schema, references, value) {
  if (Check(schema, references, value))
    return Clone2(value);
  if (!IsArray(value))
    return Create2(schema, references);
  if (schema.items === undefined)
    return [];
  return schema.items.map((schema2, index) => Visit8(schema2, references, value[index]));
}
function FromUnion9(schema, references, value) {
  return Check(schema, references, value) ? Clone2(value) : CastUnion(schema, references, value);
}
function Visit8(schema, references, value) {
  const references_ = IsString(schema.$id) ? [...references, schema] : references;
  const schema_ = schema;
  switch (schema[Kind]) {
    case "Array":
      return FromArray7(schema_, references_, value);
    case "Constructor":
      return FromConstructor5(schema_, references_, value);
    case "Intersect":
      return FromIntersect7(schema_, references_, value);
    case "Never":
      return FromNever5(schema_, references_, value);
    case "Object":
      return FromObject5(schema_, references_, value);
    case "Record":
      return FromRecord5(schema_, references_, value);
    case "Ref":
      return FromRef4(schema_, references_, value);
    case "This":
      return FromThis4(schema_, references_, value);
    case "Tuple":
      return FromTuple7(schema_, references_, value);
    case "Union":
      return FromUnion9(schema_, references_, value);
    case "Date":
    case "Symbol":
    case "Uint8Array":
      return DefaultClone(schema, references, value);
    default:
      return Default(schema_, references_, value);
  }
}
function Cast(...args) {
  return args.length === 3 ? Visit8(args[0], args[1], args[2]) : Visit8(args[0], [], args[1]);
}

class ValueCastError extends TypeBoxError {
  constructor(schema, message) {
    super(message);
    this.schema = schema;
  }
}
// node_modules/@sinclair/typebox/build/esm/value/clean/clean.mjs
function IsCheckable(schema) {
  return IsSchema2(schema) && schema[Kind] !== "Unsafe";
}
function FromArray8(schema, references, value) {
  if (!IsArray(value))
    return value;
  return value.map((value2) => Visit9(schema.items, references, value2));
}
function FromIntersect8(schema, references, value) {
  const unevaluatedProperties = schema.unevaluatedProperties;
  const intersections = schema.allOf.map((schema2) => Visit9(schema2, references, Clone2(value)));
  const composite = intersections.reduce((acc, value2) => IsObject(value2) ? { ...acc, ...value2 } : value2, {});
  if (!IsObject(value) || !IsObject(composite) || !IsSchema2(unevaluatedProperties))
    return composite;
  const knownkeys = KeyOfPropertyKeys(schema);
  for (const key of Object.getOwnPropertyNames(value)) {
    if (knownkeys.includes(key))
      continue;
    if (Check(unevaluatedProperties, references, value[key])) {
      composite[key] = Visit9(unevaluatedProperties, references, value[key]);
    }
  }
  return composite;
}
function FromObject6(schema, references, value) {
  if (!IsObject(value) || IsArray(value))
    return value;
  const additionalProperties = schema.additionalProperties;
  for (const key of Object.getOwnPropertyNames(value)) {
    if (key in schema.properties) {
      value[key] = Visit9(schema.properties[key], references, value[key]);
      continue;
    }
    if (IsSchema2(additionalProperties) && Check(additionalProperties, references, value[key])) {
      value[key] = Visit9(additionalProperties, references, value[key]);
      continue;
    }
    delete value[key];
  }
  return value;
}
function FromRecord6(schema, references, value) {
  if (!IsObject(value))
    return value;
  const additionalProperties = schema.additionalProperties;
  const propertyKeys = Object.getOwnPropertyNames(value);
  const [propertyKey, propertySchema] = Object.entries(schema.patternProperties)[0];
  const propertyKeyTest = new RegExp(propertyKey);
  for (const key of propertyKeys) {
    if (propertyKeyTest.test(key)) {
      value[key] = Visit9(propertySchema, references, value[key]);
      continue;
    }
    if (IsSchema2(additionalProperties) && Check(additionalProperties, references, value[key])) {
      value[key] = Visit9(additionalProperties, references, value[key]);
      continue;
    }
    delete value[key];
  }
  return value;
}
function FromRef5(schema, references, value) {
  return Visit9(Deref(schema, references), references, value);
}
function FromThis5(schema, references, value) {
  return Visit9(Deref(schema, references), references, value);
}
function FromTuple8(schema, references, value) {
  if (!IsArray(value))
    return value;
  if (IsUndefined(schema.items))
    return [];
  const length = Math.min(value.length, schema.items.length);
  for (let i = 0;i < length; i++) {
    value[i] = Visit9(schema.items[i], references, value[i]);
  }
  return value.length > length ? value.slice(0, length) : value;
}
function FromUnion10(schema, references, value) {
  for (const inner of schema.anyOf) {
    if (IsCheckable(inner) && Check(inner, references, value)) {
      return Visit9(inner, references, value);
    }
  }
  return value;
}
function Visit9(schema, references, value) {
  const references_ = IsString(schema.$id) ? [...references, schema] : references;
  const schema_ = schema;
  switch (schema_[Kind]) {
    case "Array":
      return FromArray8(schema_, references_, value);
    case "Intersect":
      return FromIntersect8(schema_, references_, value);
    case "Object":
      return FromObject6(schema_, references_, value);
    case "Record":
      return FromRecord6(schema_, references_, value);
    case "Ref":
      return FromRef5(schema_, references_, value);
    case "This":
      return FromThis5(schema_, references_, value);
    case "Tuple":
      return FromTuple8(schema_, references_, value);
    case "Union":
      return FromUnion10(schema_, references_, value);
    default:
      return value;
  }
}
function Clean(...args) {
  return args.length === 3 ? Visit9(args[0], args[1], args[2]) : Visit9(args[0], [], args[1]);
}
// node_modules/@sinclair/typebox/build/esm/value/convert/convert.mjs
function IsStringNumeric(value) {
  return IsString(value) && !isNaN(value) && !isNaN(parseFloat(value));
}
function IsValueToString(value) {
  return IsBigInt(value) || IsBoolean(value) || IsNumber(value);
}
function IsValueTrue(value) {
  return value === true || IsNumber(value) && value === 1 || IsBigInt(value) && value === BigInt("1") || IsString(value) && (value.toLowerCase() === "true" || value === "1");
}
function IsValueFalse(value) {
  return value === false || IsNumber(value) && (value === 0 || Object.is(value, -0)) || IsBigInt(value) && value === BigInt("0") || IsString(value) && (value.toLowerCase() === "false" || value === "0" || value === "-0");
}
function IsTimeStringWithTimeZone(value) {
  return IsString(value) && /^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i.test(value);
}
function IsTimeStringWithoutTimeZone(value) {
  return IsString(value) && /^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)?$/i.test(value);
}
function IsDateTimeStringWithTimeZone(value) {
  return IsString(value) && /^\d\d\d\d-[0-1]\d-[0-3]\dt(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i.test(value);
}
function IsDateTimeStringWithoutTimeZone(value) {
  return IsString(value) && /^\d\d\d\d-[0-1]\d-[0-3]\dt(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)?$/i.test(value);
}
function IsDateString(value) {
  return IsString(value) && /^\d\d\d\d-[0-1]\d-[0-3]\d$/i.test(value);
}
function TryConvertLiteralString(value, target) {
  const conversion = TryConvertString(value);
  return conversion === target ? conversion : value;
}
function TryConvertLiteralNumber(value, target) {
  const conversion = TryConvertNumber(value);
  return conversion === target ? conversion : value;
}
function TryConvertLiteralBoolean(value, target) {
  const conversion = TryConvertBoolean(value);
  return conversion === target ? conversion : value;
}
function TryConvertLiteral(schema, value) {
  return IsString(schema.const) ? TryConvertLiteralString(value, schema.const) : IsNumber(schema.const) ? TryConvertLiteralNumber(value, schema.const) : IsBoolean(schema.const) ? TryConvertLiteralBoolean(value, schema.const) : Clone2(value);
}
function TryConvertBoolean(value) {
  return IsValueTrue(value) ? true : IsValueFalse(value) ? false : value;
}
function TryConvertBigInt(value) {
  return IsStringNumeric(value) ? BigInt(parseInt(value)) : IsNumber(value) ? BigInt(value | 0) : IsValueFalse(value) ? BigInt(0) : IsValueTrue(value) ? BigInt(1) : value;
}
function TryConvertString(value) {
  return IsValueToString(value) ? value.toString() : IsSymbol(value) && value.description !== undefined ? value.description.toString() : value;
}
function TryConvertNumber(value) {
  return IsStringNumeric(value) ? parseFloat(value) : IsValueTrue(value) ? 1 : IsValueFalse(value) ? 0 : value;
}
function TryConvertInteger(value) {
  return IsStringNumeric(value) ? parseInt(value) : IsNumber(value) ? value | 0 : IsValueTrue(value) ? 1 : IsValueFalse(value) ? 0 : value;
}
function TryConvertNull(value) {
  return IsString(value) && value.toLowerCase() === "null" ? null : value;
}
function TryConvertUndefined(value) {
  return IsString(value) && value === "undefined" ? undefined : value;
}
function TryConvertDate(value) {
  return IsDate(value) ? value : IsNumber(value) ? new Date(value) : IsValueTrue(value) ? new Date(1) : IsValueFalse(value) ? new Date(0) : IsStringNumeric(value) ? new Date(parseInt(value)) : IsTimeStringWithoutTimeZone(value) ? new Date(`1970-01-01T${value}.000Z`) : IsTimeStringWithTimeZone(value) ? new Date(`1970-01-01T${value}`) : IsDateTimeStringWithoutTimeZone(value) ? new Date(`${value}.000Z`) : IsDateTimeStringWithTimeZone(value) ? new Date(value) : IsDateString(value) ? new Date(`${value}T00:00:00.000Z`) : value;
}
function Default2(value) {
  return value;
}
function FromArray9(schema, references, value) {
  const elements = IsArray(value) ? value : [value];
  return elements.map((element) => Visit10(schema.items, references, element));
}
function FromBigInt5(schema, references, value) {
  return TryConvertBigInt(value);
}
function FromBoolean5(schema, references, value) {
  return TryConvertBoolean(value);
}
function FromDate5(schema, references, value) {
  return TryConvertDate(value);
}
function FromInteger5(schema, references, value) {
  return TryConvertInteger(value);
}
function FromIntersect9(schema, references, value) {
  return schema.allOf.reduce((value2, schema2) => Visit10(schema2, references, value2), value);
}
function FromLiteral6(schema, references, value) {
  return TryConvertLiteral(schema, value);
}
function FromNull5(schema, references, value) {
  return TryConvertNull(value);
}
function FromNumber5(schema, references, value) {
  return TryConvertNumber(value);
}
function FromObject7(schema, references, value) {
  const isConvertable = IsObject(value);
  if (!isConvertable)
    return value;
  const result = {};
  for (const key of Object.keys(value)) {
    result[key] = HasPropertyKey(schema.properties, key) ? Visit10(schema.properties[key], references, value[key]) : value[key];
  }
  return result;
}
function FromRecord7(schema, references, value) {
  const propertyKey = Object.getOwnPropertyNames(schema.patternProperties)[0];
  const property = schema.patternProperties[propertyKey];
  const result = {};
  for (const [propKey, propValue] of Object.entries(value)) {
    result[propKey] = Visit10(property, references, propValue);
  }
  return result;
}
function FromRef6(schema, references, value) {
  return Visit10(Deref(schema, references), references, value);
}
function FromString5(schema, references, value) {
  return TryConvertString(value);
}
function FromSymbol5(schema, references, value) {
  return IsString(value) || IsNumber(value) ? Symbol(value) : value;
}
function FromThis6(schema, references, value) {
  return Visit10(Deref(schema, references), references, value);
}
function FromTuple9(schema, references, value) {
  const isConvertable = IsArray(value) && !IsUndefined(schema.items);
  if (!isConvertable)
    return value;
  return value.map((value2, index) => {
    return index < schema.items.length ? Visit10(schema.items[index], references, value2) : value2;
  });
}
function FromUndefined5(schema, references, value) {
  return TryConvertUndefined(value);
}
function FromUnion11(schema, references, value) {
  for (const subschema of schema.anyOf) {
    const converted = Visit10(subschema, references, value);
    if (!Check(subschema, references, converted))
      continue;
    return converted;
  }
  return value;
}
function Visit10(schema, references, value) {
  const references_ = IsString(schema.$id) ? [...references, schema] : references;
  const schema_ = schema;
  switch (schema[Kind]) {
    case "Array":
      return FromArray9(schema_, references_, value);
    case "BigInt":
      return FromBigInt5(schema_, references_, value);
    case "Boolean":
      return FromBoolean5(schema_, references_, value);
    case "Date":
      return FromDate5(schema_, references_, value);
    case "Integer":
      return FromInteger5(schema_, references_, value);
    case "Intersect":
      return FromIntersect9(schema_, references_, value);
    case "Literal":
      return FromLiteral6(schema_, references_, value);
    case "Null":
      return FromNull5(schema_, references_, value);
    case "Number":
      return FromNumber5(schema_, references_, value);
    case "Object":
      return FromObject7(schema_, references_, value);
    case "Record":
      return FromRecord7(schema_, references_, value);
    case "Ref":
      return FromRef6(schema_, references_, value);
    case "String":
      return FromString5(schema_, references_, value);
    case "Symbol":
      return FromSymbol5(schema_, references_, value);
    case "This":
      return FromThis6(schema_, references_, value);
    case "Tuple":
      return FromTuple9(schema_, references_, value);
    case "Undefined":
      return FromUndefined5(schema_, references_, value);
    case "Union":
      return FromUnion11(schema_, references_, value);
    default:
      return Default2(value);
  }
}
function Convert(...args) {
  return args.length === 3 ? Visit10(args[0], args[1], args[2]) : Visit10(args[0], [], args[1]);
}
// node_modules/@sinclair/typebox/build/esm/value/default/default.mjs
function ValueOrDefault(schema, value) {
  return value === undefined && "default" in schema ? Clone2(schema.default) : value;
}
function IsCheckable2(schema) {
  return IsSchema2(schema) && schema[Kind] !== "Unsafe";
}
function IsDefaultSchema(value) {
  return IsSchema2(value) && "default" in value;
}
function FromArray10(schema, references, value) {
  const defaulted = ValueOrDefault(schema, value);
  if (!IsArray(defaulted))
    return defaulted;
  for (let i = 0;i < defaulted.length; i++) {
    defaulted[i] = Visit11(schema.items, references, defaulted[i]);
  }
  return defaulted;
}
function FromIntersect10(schema, references, value) {
  const defaulted = ValueOrDefault(schema, value);
  return schema.allOf.reduce((acc, schema2) => {
    const next = Visit11(schema2, references, defaulted);
    return IsObject(next) ? { ...acc, ...next } : next;
  }, {});
}
function FromObject8(schema, references, value) {
  const defaulted = ValueOrDefault(schema, value);
  if (!IsObject(defaulted))
    return defaulted;
  const additionalPropertiesSchema = schema.additionalProperties;
  const knownPropertyKeys = Object.getOwnPropertyNames(schema.properties);
  for (const key of knownPropertyKeys) {
    if (!IsDefaultSchema(schema.properties[key]))
      continue;
    defaulted[key] = Visit11(schema.properties[key], references, defaulted[key]);
  }
  if (!IsDefaultSchema(additionalPropertiesSchema))
    return defaulted;
  for (const key of Object.getOwnPropertyNames(defaulted)) {
    if (knownPropertyKeys.includes(key))
      continue;
    defaulted[key] = Visit11(additionalPropertiesSchema, references, defaulted[key]);
  }
  return defaulted;
}
function FromRecord8(schema, references, value) {
  const defaulted = ValueOrDefault(schema, value);
  if (!IsObject(defaulted))
    return defaulted;
  const additionalPropertiesSchema = schema.additionalProperties;
  const [propertyKeyPattern, propertySchema] = Object.entries(schema.patternProperties)[0];
  const knownPropertyKey = new RegExp(propertyKeyPattern);
  for (const key of Object.getOwnPropertyNames(defaulted)) {
    if (!(knownPropertyKey.test(key) && IsDefaultSchema(propertySchema)))
      continue;
    defaulted[key] = Visit11(propertySchema, references, defaulted[key]);
  }
  if (!IsDefaultSchema(additionalPropertiesSchema))
    return defaulted;
  for (const key of Object.getOwnPropertyNames(defaulted)) {
    if (knownPropertyKey.test(key))
      continue;
    defaulted[key] = Visit11(additionalPropertiesSchema, references, defaulted[key]);
  }
  return defaulted;
}
function FromRef7(schema, references, value) {
  return Visit11(Deref(schema, references), references, ValueOrDefault(schema, value));
}
function FromThis7(schema, references, value) {
  return Visit11(Deref(schema, references), references, value);
}
function FromTuple10(schema, references, value) {
  const defaulted = ValueOrDefault(schema, value);
  if (!IsArray(defaulted) || IsUndefined(schema.items))
    return defaulted;
  const [items, max] = [schema.items, Math.max(schema.items.length, defaulted.length)];
  for (let i = 0;i < max; i++) {
    if (i < items.length)
      defaulted[i] = Visit11(items[i], references, defaulted[i]);
  }
  return defaulted;
}
function FromUnion12(schema, references, value) {
  const defaulted = ValueOrDefault(schema, value);
  for (const inner of schema.anyOf) {
    const result = Visit11(inner, references, defaulted);
    if (IsCheckable2(inner) && Check(inner, result)) {
      return result;
    }
  }
  return defaulted;
}
function Visit11(schema, references, value) {
  const references_ = IsString(schema.$id) ? [...references, schema] : references;
  const schema_ = schema;
  switch (schema_[Kind]) {
    case "Array":
      return FromArray10(schema_, references_, value);
    case "Intersect":
      return FromIntersect10(schema_, references_, value);
    case "Object":
      return FromObject8(schema_, references_, value);
    case "Record":
      return FromRecord8(schema_, references_, value);
    case "Ref":
      return FromRef7(schema_, references_, value);
    case "This":
      return FromThis7(schema_, references_, value);
    case "Tuple":
      return FromTuple10(schema_, references_, value);
    case "Union":
      return FromUnion12(schema_, references_, value);
    default:
      return ValueOrDefault(schema_, value);
  }
}
function Default3(...args) {
  return args.length === 3 ? Visit11(args[0], args[1], args[2]) : Visit11(args[0], [], args[1]);
}
// node_modules/@sinclair/typebox/build/esm/value/pointer/pointer.mjs
var exports_pointer = {};
__export(exports_pointer, {
  ValuePointerRootSetError: () => ValuePointerRootSetError,
  ValuePointerRootDeleteError: () => ValuePointerRootDeleteError,
  Set: () => Set4,
  Has: () => Has3,
  Get: () => Get3,
  Format: () => Format,
  Delete: () => Delete3
});
function Escape2(component) {
  return component.indexOf("~") === -1 ? component : component.replace(/~1/g, "/").replace(/~0/g, "~");
}
function* Format(pointer) {
  if (pointer === "")
    return;
  let [start, end] = [0, 0];
  for (let i = 0;i < pointer.length; i++) {
    const char = pointer.charAt(i);
    if (char === "/") {
      if (i === 0) {
        start = i + 1;
      } else {
        end = i;
        yield Escape2(pointer.slice(start, end));
        start = i + 1;
      }
    } else {
      end = i;
    }
  }
  yield Escape2(pointer.slice(start));
}
function Set4(value, pointer, update) {
  if (pointer === "")
    throw new ValuePointerRootSetError(value, pointer, update);
  let [owner, next, key] = [null, value, ""];
  for (const component of Format(pointer)) {
    if (next[component] === undefined)
      next[component] = {};
    owner = next;
    next = next[component];
    key = component;
  }
  owner[key] = update;
}
function Delete3(value, pointer) {
  if (pointer === "")
    throw new ValuePointerRootDeleteError(value, pointer);
  let [owner, next, key] = [null, value, ""];
  for (const component of Format(pointer)) {
    if (next[component] === undefined || next[component] === null)
      return;
    owner = next;
    next = next[component];
    key = component;
  }
  if (Array.isArray(owner)) {
    const index = parseInt(key);
    owner.splice(index, 1);
  } else {
    delete owner[key];
  }
}
function Has3(value, pointer) {
  if (pointer === "")
    return true;
  let [owner, next, key] = [null, value, ""];
  for (const component of Format(pointer)) {
    if (next[component] === undefined)
      return false;
    owner = next;
    next = next[component];
    key = component;
  }
  return Object.getOwnPropertyNames(owner).includes(key);
}
function Get3(value, pointer) {
  if (pointer === "")
    return value;
  let current = value;
  for (const component of Format(pointer)) {
    if (current[component] === undefined)
      return;
    current = current[component];
  }
  return current;
}

class ValuePointerRootSetError extends TypeBoxError {
  constructor(value, path, update) {
    super("Cannot set root value");
    this.value = value;
    this.path = path;
    this.update = update;
  }
}

class ValuePointerRootDeleteError extends TypeBoxError {
  constructor(value, path) {
    super("Cannot delete root value");
    this.value = value;
    this.path = path;
  }
}
// node_modules/@sinclair/typebox/build/esm/value/delta/delta.mjs
function CreateUpdate(path, value) {
  return { type: "update", path, value };
}
function CreateInsert(path, value) {
  return { type: "insert", path, value };
}
function CreateDelete(path) {
  return { type: "delete", path };
}
function* ObjectType4(path, current, next) {
  if (!IsStandardObject(next))
    return yield CreateUpdate(path, next);
  const currentKeys = [...globalThis.Object.keys(current), ...globalThis.Object.getOwnPropertySymbols(current)];
  const nextKeys = [...globalThis.Object.keys(next), ...globalThis.Object.getOwnPropertySymbols(next)];
  for (const key of currentKeys) {
    if (IsSymbol(key))
      throw new ValueDeltaSymbolError(key);
    if (IsUndefined(next[key]) && nextKeys.includes(key))
      yield CreateUpdate(`${path}/${globalThis.String(key)}`, undefined);
  }
  for (const key of nextKeys) {
    if (IsUndefined(current[key]) || IsUndefined(next[key]))
      continue;
    if (IsSymbol(key))
      throw new ValueDeltaSymbolError(key);
    yield* Visit12(`${path}/${globalThis.String(key)}`, current[key], next[key]);
  }
  for (const key of nextKeys) {
    if (IsSymbol(key))
      throw new ValueDeltaSymbolError(key);
    if (IsUndefined(current[key]))
      yield CreateInsert(`${path}/${globalThis.String(key)}`, next[key]);
  }
  for (const key of currentKeys.reverse()) {
    if (IsSymbol(key))
      throw new ValueDeltaSymbolError(key);
    if (IsUndefined(next[key]) && !nextKeys.includes(key))
      yield CreateDelete(`${path}/${globalThis.String(key)}`);
  }
}
function* ArrayType4(path, current, next) {
  if (!IsArray(next))
    return yield CreateUpdate(path, next);
  for (let i = 0;i < Math.min(current.length, next.length); i++) {
    yield* Visit12(`${path}/${i}`, current[i], next[i]);
  }
  for (let i = 0;i < next.length; i++) {
    if (i < current.length)
      continue;
    yield CreateInsert(`${path}/${i}`, next[i]);
  }
  for (let i = current.length - 1;i >= 0; i--) {
    if (i < next.length)
      continue;
    yield CreateDelete(`${path}/${i}`);
  }
}
function* TypedArrayType2(path, current, next) {
  if (!IsTypedArray(next) || current.length !== next.length || globalThis.Object.getPrototypeOf(current).constructor.name !== globalThis.Object.getPrototypeOf(next).constructor.name)
    return yield CreateUpdate(path, next);
  for (let i = 0;i < Math.min(current.length, next.length); i++) {
    yield* Visit12(`${path}/${i}`, current[i], next[i]);
  }
}
function* ValueType2(path, current, next) {
  if (current === next)
    return;
  yield CreateUpdate(path, next);
}
function* Visit12(path, current, next) {
  if (IsStandardObject(current))
    return yield* ObjectType4(path, current, next);
  if (IsArray(current))
    return yield* ArrayType4(path, current, next);
  if (IsTypedArray(current))
    return yield* TypedArrayType2(path, current, next);
  if (IsValueType(current))
    return yield* ValueType2(path, current, next);
  throw new ValueDeltaError(current, "Unable to create diff edits for unknown value");
}
function Diff(current, next) {
  return [...Visit12("", current, next)];
}
function IsRootUpdate(edits) {
  return edits.length > 0 && edits[0].path === "" && edits[0].type === "update";
}
function IsIdentity(edits) {
  return edits.length === 0;
}
function Patch(current, edits) {
  if (IsRootUpdate(edits)) {
    return Clone2(edits[0].value);
  }
  if (IsIdentity(edits)) {
    return Clone2(current);
  }
  const clone2 = Clone2(current);
  for (const edit of edits) {
    switch (edit.type) {
      case "insert": {
        exports_pointer.Set(clone2, edit.path, edit.value);
        break;
      }
      case "update": {
        exports_pointer.Set(clone2, edit.path, edit.value);
        break;
      }
      case "delete": {
        exports_pointer.Delete(clone2, edit.path);
        break;
      }
    }
  }
  return clone2;
}
var Insert = Object2({
  type: Literal("insert"),
  path: String2(),
  value: Unknown()
});
var Update = Object2({
  type: Literal("update"),
  path: String2(),
  value: Unknown()
});
var Delete4 = Object2({
  type: Literal("delete"),
  path: String2()
});
var Edit = Union([Insert, Update, Delete4]);

class ValueDeltaError extends TypeBoxError {
  constructor(value, message) {
    super(message);
    this.value = value;
  }
}

class ValueDeltaSymbolError extends ValueDeltaError {
  constructor(value) {
    super(value, "Cannot diff objects with symbol keys");
    this.value = value;
  }
}
// node_modules/@sinclair/typebox/build/esm/value/equal/equal.mjs
function ObjectType5(left, right) {
  if (!IsStandardObject(right))
    return false;
  const leftKeys = [...Object.keys(left), ...Object.getOwnPropertySymbols(left)];
  const rightKeys = [...Object.keys(right), ...Object.getOwnPropertySymbols(right)];
  if (leftKeys.length !== rightKeys.length)
    return false;
  return leftKeys.every((key) => Equal(left[key], right[key]));
}
function DateType4(left, right) {
  return IsDate(right) && left.getTime() === right.getTime();
}
function ArrayType5(left, right) {
  if (!IsArray(right) || left.length !== right.length)
    return false;
  return left.every((value, index) => Equal(value, right[index]));
}
function TypedArrayType3(left, right) {
  if (!IsTypedArray(right) || left.length !== right.length || Object.getPrototypeOf(left).constructor.name !== Object.getPrototypeOf(right).constructor.name)
    return false;
  return left.every((value, index) => Equal(value, right[index]));
}
function ValueType3(left, right) {
  return left === right;
}
function Equal(left, right) {
  if (IsStandardObject(left))
    return ObjectType5(left, right);
  if (IsDate(left))
    return DateType4(left, right);
  if (IsTypedArray(left))
    return TypedArrayType3(left, right);
  if (IsArray(left))
    return ArrayType5(left, right);
  if (IsValueType(left))
    return ValueType3(left, right);
  throw new Error("ValueEquals: Unable to compare value");
}
// node_modules/@sinclair/typebox/build/esm/value/mutate/mutate.mjs
function ObjectType6(root, path, current, next) {
  if (!IsStandardObject(current)) {
    exports_pointer.Set(root, path, Clone2(next));
  } else {
    const currentKeys = Object.getOwnPropertyNames(current);
    const nextKeys = Object.getOwnPropertyNames(next);
    for (const currentKey of currentKeys) {
      if (!nextKeys.includes(currentKey)) {
        delete current[currentKey];
      }
    }
    for (const nextKey of nextKeys) {
      if (!currentKeys.includes(nextKey)) {
        current[nextKey] = null;
      }
    }
    for (const nextKey of nextKeys) {
      Visit13(root, `${path}/${nextKey}`, current[nextKey], next[nextKey]);
    }
  }
}
function ArrayType6(root, path, current, next) {
  if (!IsArray(current)) {
    exports_pointer.Set(root, path, Clone2(next));
  } else {
    for (let index = 0;index < next.length; index++) {
      Visit13(root, `${path}/${index}`, current[index], next[index]);
    }
    current.splice(next.length);
  }
}
function TypedArrayType4(root, path, current, next) {
  if (IsTypedArray(current) && current.length === next.length) {
    for (let i = 0;i < current.length; i++) {
      current[i] = next[i];
    }
  } else {
    exports_pointer.Set(root, path, Clone2(next));
  }
}
function ValueType4(root, path, current, next) {
  if (current === next)
    return;
  exports_pointer.Set(root, path, next);
}
function Visit13(root, path, current, next) {
  if (IsArray(next))
    return ArrayType6(root, path, current, next);
  if (IsTypedArray(next))
    return TypedArrayType4(root, path, current, next);
  if (IsStandardObject(next))
    return ObjectType6(root, path, current, next);
  if (IsValueType(next))
    return ValueType4(root, path, current, next);
}
function IsNonMutableValue(value) {
  return IsTypedArray(value) || IsValueType(value);
}
function IsMismatchedValue(current, next) {
  return IsStandardObject(current) && IsArray(next) || IsArray(current) && IsStandardObject(next);
}
function Mutate(current, next) {
  if (IsNonMutableValue(current) || IsNonMutableValue(next))
    throw new ValueMutateError("Only object and array types can be mutated at the root level");
  if (IsMismatchedValue(current, next))
    throw new ValueMutateError("Cannot assign due type mismatch of assignable values");
  Visit13(current, "", current, next);
}

class ValueMutateError extends TypeBoxError {
  constructor(message) {
    super(message);
  }
}
// node_modules/@sinclair/typebox/build/esm/value/transform/decode.mjs
function Default4(schema, path, value) {
  try {
    return IsTransform2(schema) ? schema[TransformKind].Decode(value) : value;
  } catch (error2) {
    throw new TransformDecodeError(schema, path, value, error2);
  }
}
function FromArray11(schema, references, path, value) {
  return IsArray(value) ? Default4(schema, path, value.map((value2, index) => Visit14(schema.items, references, `${path}/${index}`, value2))) : Default4(schema, path, value);
}
function FromIntersect11(schema, references, path, value) {
  if (!IsStandardObject(value) || IsValueType(value))
    return Default4(schema, path, value);
  const knownEntries = KeyOfPropertyEntries(schema);
  const knownKeys = knownEntries.map((entry) => entry[0]);
  const knownProperties = { ...value };
  for (const [knownKey, knownSchema] of knownEntries)
    if (knownKey in knownProperties) {
      knownProperties[knownKey] = Visit14(knownSchema, references, `${path}/${knownKey}`, knownProperties[knownKey]);
    }
  if (!IsTransform2(schema.unevaluatedProperties)) {
    return Default4(schema, path, knownProperties);
  }
  const unknownKeys = Object.getOwnPropertyNames(knownProperties);
  const unevaluatedProperties = schema.unevaluatedProperties;
  const unknownProperties = { ...knownProperties };
  for (const key of unknownKeys)
    if (!knownKeys.includes(key)) {
      unknownProperties[key] = Default4(unevaluatedProperties, `${path}/${key}`, unknownProperties[key]);
    }
  return Default4(schema, path, unknownProperties);
}
function FromNot5(schema, references, path, value) {
  return Default4(schema, path, Visit14(schema.not, references, path, value));
}
function FromObject9(schema, references, path, value) {
  if (!IsStandardObject(value))
    return Default4(schema, path, value);
  const knownKeys = KeyOfPropertyKeys(schema);
  const knownProperties = { ...value };
  for (const key of knownKeys)
    if (key in knownProperties) {
      knownProperties[key] = Visit14(schema.properties[key], references, `${path}/${key}`, knownProperties[key]);
    }
  if (!IsSchema2(schema.additionalProperties)) {
    return Default4(schema, path, knownProperties);
  }
  const unknownKeys = Object.getOwnPropertyNames(knownProperties);
  const additionalProperties = schema.additionalProperties;
  const unknownProperties = { ...knownProperties };
  for (const key of unknownKeys)
    if (!knownKeys.includes(key)) {
      unknownProperties[key] = Default4(additionalProperties, `${path}/${key}`, unknownProperties[key]);
    }
  return Default4(schema, path, unknownProperties);
}
function FromRecord9(schema, references, path, value) {
  if (!IsStandardObject(value))
    return Default4(schema, path, value);
  const pattern2 = Object.getOwnPropertyNames(schema.patternProperties)[0];
  const knownKeys = new RegExp(pattern2);
  const knownProperties = { ...value };
  for (const key of Object.getOwnPropertyNames(value))
    if (knownKeys.test(key)) {
      knownProperties[key] = Visit14(schema.patternProperties[pattern2], references, `${path}/${key}`, knownProperties[key]);
    }
  if (!IsSchema2(schema.additionalProperties)) {
    return Default4(schema, path, knownProperties);
  }
  const unknownKeys = Object.getOwnPropertyNames(knownProperties);
  const additionalProperties = schema.additionalProperties;
  const unknownProperties = { ...knownProperties };
  for (const key of unknownKeys)
    if (!knownKeys.test(key)) {
      unknownProperties[key] = Default4(additionalProperties, `${path}/${key}`, unknownProperties[key]);
    }
  return Default4(schema, path, unknownProperties);
}
function FromRef8(schema, references, path, value) {
  const target = Deref(schema, references);
  return Default4(schema, path, Visit14(target, references, path, value));
}
function FromThis8(schema, references, path, value) {
  const target = Deref(schema, references);
  return Default4(schema, path, Visit14(target, references, path, value));
}
function FromTuple11(schema, references, path, value) {
  return IsArray(value) && IsArray(schema.items) ? Default4(schema, path, schema.items.map((schema2, index) => Visit14(schema2, references, `${path}/${index}`, value[index]))) : Default4(schema, path, value);
}
function FromUnion13(schema, references, path, value) {
  for (const subschema of schema.anyOf) {
    if (!Check(subschema, references, value))
      continue;
    const decoded = Visit14(subschema, references, path, value);
    return Default4(schema, path, decoded);
  }
  return Default4(schema, path, value);
}
function Visit14(schema, references, path, value) {
  const references_ = typeof schema.$id === "string" ? [...references, schema] : references;
  const schema_ = schema;
  switch (schema[Kind]) {
    case "Array":
      return FromArray11(schema_, references_, path, value);
    case "Intersect":
      return FromIntersect11(schema_, references_, path, value);
    case "Not":
      return FromNot5(schema_, references_, path, value);
    case "Object":
      return FromObject9(schema_, references_, path, value);
    case "Record":
      return FromRecord9(schema_, references_, path, value);
    case "Ref":
      return FromRef8(schema_, references_, path, value);
    case "Symbol":
      return Default4(schema_, path, value);
    case "This":
      return FromThis8(schema_, references_, path, value);
    case "Tuple":
      return FromTuple11(schema_, references_, path, value);
    case "Union":
      return FromUnion13(schema_, references_, path, value);
    default:
      return Default4(schema_, path, value);
  }
}
function TransformDecode(schema, references, value) {
  return Visit14(schema, references, "", value);
}

class TransformDecodeCheckError extends TypeBoxError {
  constructor(schema, value, error2) {
    super(`Unable to decode value as it does not match the expected schema`);
    this.schema = schema;
    this.value = value;
    this.error = error2;
  }
}

class TransformDecodeError extends TypeBoxError {
  constructor(schema, path, value, error2) {
    super(error2 instanceof Error ? error2.message : "Unknown error");
    this.schema = schema;
    this.path = path;
    this.value = value;
    this.error = error2;
  }
}
// node_modules/@sinclair/typebox/build/esm/value/transform/encode.mjs
function Default5(schema, path, value) {
  try {
    return IsTransform2(schema) ? schema[TransformKind].Encode(value) : value;
  } catch (error2) {
    throw new TransformEncodeError(schema, path, value, error2);
  }
}
function FromArray12(schema, references, path, value) {
  const defaulted = Default5(schema, path, value);
  return IsArray(defaulted) ? defaulted.map((value2, index) => Visit15(schema.items, references, `${path}/${index}`, value2)) : defaulted;
}
function FromIntersect12(schema, references, path, value) {
  const defaulted = Default5(schema, path, value);
  if (!IsStandardObject(value) || IsValueType(value))
    return defaulted;
  const knownEntries = KeyOfPropertyEntries(schema);
  const knownKeys = knownEntries.map((entry) => entry[0]);
  const knownProperties = { ...defaulted };
  for (const [knownKey, knownSchema] of knownEntries)
    if (knownKey in knownProperties) {
      knownProperties[knownKey] = Visit15(knownSchema, references, `${path}/${knownKey}`, knownProperties[knownKey]);
    }
  if (!IsTransform2(schema.unevaluatedProperties)) {
    return Default5(schema, path, knownProperties);
  }
  const unknownKeys = Object.getOwnPropertyNames(knownProperties);
  const unevaluatedProperties = schema.unevaluatedProperties;
  const properties = { ...knownProperties };
  for (const key of unknownKeys)
    if (!knownKeys.includes(key)) {
      properties[key] = Default5(unevaluatedProperties, `${path}/${key}`, properties[key]);
    }
  return properties;
}
function FromNot6(schema, references, path, value) {
  return Default5(schema.not, path, Default5(schema, path, value));
}
function FromObject10(schema, references, path, value) {
  const defaulted = Default5(schema, path, value);
  if (!IsStandardObject(defaulted))
    return defaulted;
  const knownKeys = KeyOfPropertyKeys(schema);
  const knownProperties = { ...defaulted };
  for (const key of knownKeys)
    if (key in knownProperties) {
      knownProperties[key] = Visit15(schema.properties[key], references, `${path}/${key}`, knownProperties[key]);
    }
  if (!IsSchema2(schema.additionalProperties)) {
    return knownProperties;
  }
  const unknownKeys = Object.getOwnPropertyNames(knownProperties);
  const additionalProperties = schema.additionalProperties;
  const properties = { ...knownProperties };
  for (const key of unknownKeys)
    if (!knownKeys.includes(key)) {
      properties[key] = Default5(additionalProperties, `${path}/${key}`, properties[key]);
    }
  return properties;
}
function FromRecord10(schema, references, path, value) {
  const defaulted = Default5(schema, path, value);
  if (!IsStandardObject(value))
    return defaulted;
  const pattern2 = Object.getOwnPropertyNames(schema.patternProperties)[0];
  const knownKeys = new RegExp(pattern2);
  const knownProperties = { ...defaulted };
  for (const key of Object.getOwnPropertyNames(value))
    if (knownKeys.test(key)) {
      knownProperties[key] = Visit15(schema.patternProperties[pattern2], references, `${path}/${key}`, knownProperties[key]);
    }
  if (!IsSchema2(schema.additionalProperties)) {
    return Default5(schema, path, knownProperties);
  }
  const unknownKeys = Object.getOwnPropertyNames(knownProperties);
  const additionalProperties = schema.additionalProperties;
  const properties = { ...knownProperties };
  for (const key of unknownKeys)
    if (!knownKeys.test(key)) {
      properties[key] = Default5(additionalProperties, `${path}/${key}`, properties[key]);
    }
  return properties;
}
function FromRef9(schema, references, path, value) {
  const target = Deref(schema, references);
  const resolved = Visit15(target, references, path, value);
  return Default5(schema, path, resolved);
}
function FromThis9(schema, references, path, value) {
  const target = Deref(schema, references);
  const resolved = Visit15(target, references, path, value);
  return Default5(schema, path, resolved);
}
function FromTuple12(schema, references, path, value) {
  const value1 = Default5(schema, path, value);
  return IsArray(schema.items) ? schema.items.map((schema2, index) => Visit15(schema2, references, `${path}/${index}`, value1[index])) : [];
}
function FromUnion14(schema, references, path, value) {
  for (const subschema of schema.anyOf) {
    if (!Check(subschema, references, value))
      continue;
    const value1 = Visit15(subschema, references, path, value);
    return Default5(schema, path, value1);
  }
  for (const subschema of schema.anyOf) {
    const value1 = Visit15(subschema, references, path, value);
    if (!Check(schema, references, value1))
      continue;
    return Default5(schema, path, value1);
  }
  return Default5(schema, path, value);
}
function Visit15(schema, references, path, value) {
  const references_ = typeof schema.$id === "string" ? [...references, schema] : references;
  const schema_ = schema;
  switch (schema[Kind]) {
    case "Array":
      return FromArray12(schema_, references_, path, value);
    case "Intersect":
      return FromIntersect12(schema_, references_, path, value);
    case "Not":
      return FromNot6(schema_, references_, path, value);
    case "Object":
      return FromObject10(schema_, references_, path, value);
    case "Record":
      return FromRecord10(schema_, references_, path, value);
    case "Ref":
      return FromRef9(schema_, references_, path, value);
    case "This":
      return FromThis9(schema_, references_, path, value);
    case "Tuple":
      return FromTuple12(schema_, references_, path, value);
    case "Union":
      return FromUnion14(schema_, references_, path, value);
    default:
      return Default5(schema_, path, value);
  }
}
function TransformEncode(schema, references, value) {
  return Visit15(schema, references, "", value);
}

class TransformEncodeCheckError extends TypeBoxError {
  constructor(schema, value, error2) {
    super(`The encoded value does not match the expected schema`);
    this.schema = schema;
    this.value = value;
    this.error = error2;
  }
}

class TransformEncodeError extends TypeBoxError {
  constructor(schema, path, value, error2) {
    super(`${error2 instanceof Error ? error2.message : "Unknown error"}`);
    this.schema = schema;
    this.path = path;
    this.value = value;
    this.error = error2;
  }
}
// node_modules/@sinclair/typebox/build/esm/value/transform/has.mjs
function FromArray13(schema, references) {
  return IsTransform2(schema) || Visit16(schema.items, references);
}
function FromAsyncIterator5(schema, references) {
  return IsTransform2(schema) || Visit16(schema.items, references);
}
function FromConstructor6(schema, references) {
  return IsTransform2(schema) || Visit16(schema.returns, references) || schema.parameters.some((schema2) => Visit16(schema2, references));
}
function FromFunction5(schema, references) {
  return IsTransform2(schema) || Visit16(schema.returns, references) || schema.parameters.some((schema2) => Visit16(schema2, references));
}
function FromIntersect13(schema, references) {
  return IsTransform2(schema) || IsTransform2(schema.unevaluatedProperties) || schema.allOf.some((schema2) => Visit16(schema2, references));
}
function FromIterator5(schema, references) {
  return IsTransform2(schema) || Visit16(schema.items, references);
}
function FromNot7(schema, references) {
  return IsTransform2(schema) || Visit16(schema.not, references);
}
function FromObject11(schema, references) {
  return IsTransform2(schema) || Object.values(schema.properties).some((schema2) => Visit16(schema2, references)) || IsSchema2(schema.additionalProperties) && Visit16(schema.additionalProperties, references);
}
function FromPromise5(schema, references) {
  return IsTransform2(schema) || Visit16(schema.item, references);
}
function FromRecord11(schema, references) {
  const pattern2 = Object.getOwnPropertyNames(schema.patternProperties)[0];
  const property = schema.patternProperties[pattern2];
  return IsTransform2(schema) || Visit16(property, references) || IsSchema2(schema.additionalProperties) && IsTransform2(schema.additionalProperties);
}
function FromRef10(schema, references) {
  if (IsTransform2(schema))
    return true;
  return Visit16(Deref(schema, references), references);
}
function FromThis10(schema, references) {
  if (IsTransform2(schema))
    return true;
  return Visit16(Deref(schema, references), references);
}
function FromTuple13(schema, references) {
  return IsTransform2(schema) || !IsUndefined(schema.items) && schema.items.some((schema2) => Visit16(schema2, references));
}
function FromUnion15(schema, references) {
  return IsTransform2(schema) || schema.anyOf.some((schema2) => Visit16(schema2, references));
}
function Visit16(schema, references) {
  const references_ = IsString(schema.$id) ? [...references, schema] : references;
  const schema_ = schema;
  if (schema.$id && visited.has(schema.$id))
    return false;
  if (schema.$id)
    visited.add(schema.$id);
  switch (schema[Kind]) {
    case "Array":
      return FromArray13(schema_, references_);
    case "AsyncIterator":
      return FromAsyncIterator5(schema_, references_);
    case "Constructor":
      return FromConstructor6(schema_, references_);
    case "Function":
      return FromFunction5(schema_, references_);
    case "Intersect":
      return FromIntersect13(schema_, references_);
    case "Iterator":
      return FromIterator5(schema_, references_);
    case "Not":
      return FromNot7(schema_, references_);
    case "Object":
      return FromObject11(schema_, references_);
    case "Promise":
      return FromPromise5(schema_, references_);
    case "Record":
      return FromRecord11(schema_, references_);
    case "Ref":
      return FromRef10(schema_, references_);
    case "This":
      return FromThis10(schema_, references_);
    case "Tuple":
      return FromTuple13(schema_, references_);
    case "Union":
      return FromUnion15(schema_, references_);
    default:
      return IsTransform2(schema);
  }
}
function HasTransform(schema, references) {
  visited.clear();
  return Visit16(schema, references);
}
var visited = new Set;
// node_modules/@sinclair/typebox/build/esm/value/value/value.mjs
var exports_value2 = {};
__export(exports_value2, {
  Patch: () => Patch2,
  Mutate: () => Mutate2,
  Hash: () => Hash2,
  Errors: () => Errors2,
  Equal: () => Equal2,
  Encode: () => Encode,
  Diff: () => Diff2,
  Default: () => Default6,
  Decode: () => Decode,
  Create: () => Create3,
  Convert: () => Convert2,
  Clone: () => Clone3,
  Clean: () => Clean2,
  Check: () => Check2,
  Cast: () => Cast2
});
function Cast2(...args) {
  return Cast.apply(Cast, args);
}
function Create3(...args) {
  return Create2.apply(Create2, args);
}
function Check2(...args) {
  return Check.apply(Check, args);
}
function Clean2(...args) {
  return Clean.apply(Clean, args);
}
function Convert2(...args) {
  return Convert.apply(Convert, args);
}
function Clone3(value) {
  return Clone2(value);
}
function Decode(...args) {
  const [schema, references, value] = args.length === 3 ? [args[0], args[1], args[2]] : [args[0], [], args[1]];
  if (!Check2(schema, references, value))
    throw new TransformDecodeCheckError(schema, value, Errors2(schema, references, value).First());
  return HasTransform(schema, references) ? TransformDecode(schema, references, value) : value;
}
function Default6(...args) {
  return Default3.apply(Default3, args);
}
function Encode(...args) {
  const [schema, references, value] = args.length === 3 ? [args[0], args[1], args[2]] : [args[0], [], args[1]];
  const encoded = HasTransform(schema, references) ? TransformEncode(schema, references, value) : value;
  if (!Check2(schema, references, encoded))
    throw new TransformEncodeCheckError(schema, encoded, Errors2(schema, references, encoded).First());
  return encoded;
}
function Errors2(...args) {
  return Errors.apply(Errors, args);
}
function Equal2(left, right) {
  return Equal(left, right);
}
function Diff2(current, next) {
  return Diff(current, next);
}
function Hash2(value) {
  return Hash(value);
}
function Patch2(current, edits) {
  return Patch(current, edits);
}
function Mutate2(current, next) {
  Mutate(current, next);
}
// node_modules/@sinclair/typebox/build/esm/type/awaited/awaited.mjs
function FromRest4(T) {
  return T.map((L) => AwaitedResolve(L));
}
function FromIntersect14(T) {
  return Intersect(FromRest4(T));
}
function FromUnion16(T) {
  return Union(FromRest4(T));
}
function FromPromise6(T) {
  return AwaitedResolve(T);
}
function AwaitedResolve(T) {
  return IsIntersect(T) ? FromIntersect14(T.allOf) : IsUnion(T) ? FromUnion16(T.anyOf) : IsPromise2(T) ? FromPromise6(T.item) : T;
}
function Awaited(T, options = {}) {
  return CloneType(AwaitedResolve(T), options);
}
// node_modules/@sinclair/typebox/build/esm/type/composite/composite.mjs
function CompositeKeys(T) {
  const Acc = [];
  for (const L of T)
    Acc.push(...KeyOfPropertyKeys(L));
  return SetDistinct(Acc);
}
function FilterNever(T) {
  return T.filter((L) => !IsNever(L));
}
function CompositeProperty(T, K) {
  const Acc = [];
  for (const L of T)
    Acc.push(...IndexFromPropertyKeys(L, [K]));
  return FilterNever(Acc);
}
function CompositeProperties(T, K) {
  const Acc = {};
  for (const L of K) {
    Acc[L] = IntersectEvaluated(CompositeProperty(T, L));
  }
  return Acc;
}
function Composite(T, options = {}) {
  const K = CompositeKeys(T);
  const P = CompositeProperties(T, K);
  const R = Object2(P, options);
  return R;
}
// node_modules/@sinclair/typebox/build/esm/type/date/date.mjs
function Date2(options = {}) {
  return {
    ...options,
    [Kind]: "Date",
    type: "Date"
  };
}
// node_modules/@sinclair/typebox/build/esm/type/null/null.mjs
function Null(options = {}) {
  return {
    ...options,
    [Kind]: "Null",
    type: "null"
  };
}
// node_modules/@sinclair/typebox/build/esm/type/symbol/symbol.mjs
function Symbol2(options) {
  return { ...options, [Kind]: "Symbol", type: "symbol" };
}
// node_modules/@sinclair/typebox/build/esm/type/undefined/undefined.mjs
function Undefined(options = {}) {
  return { ...options, [Kind]: "Undefined", type: "undefined" };
}
// node_modules/@sinclair/typebox/build/esm/type/uint8array/uint8array.mjs
function Uint8Array2(options = {}) {
  return { ...options, [Kind]: "Uint8Array", type: "Uint8Array" };
}
// node_modules/@sinclair/typebox/build/esm/type/const/const.mjs
function FromArray14(T) {
  return T.map((L) => FromValue(L, false));
}
function FromProperties8(value2) {
  const Acc = {};
  for (const K of globalThis.Object.getOwnPropertyNames(value2))
    Acc[K] = Readonly(FromValue(value2[K], false));
  return Acc;
}
function ConditionalReadonly(T, root) {
  return root === true ? T : Readonly(T);
}
function FromValue(value2, root) {
  return IsAsyncIterator2(value2) ? ConditionalReadonly(Any(), root) : IsIterator2(value2) ? ConditionalReadonly(Any(), root) : IsArray2(value2) ? Readonly(Tuple(FromArray14(value2))) : IsUint8Array2(value2) ? Uint8Array2() : IsDate2(value2) ? Date2() : IsObject2(value2) ? ConditionalReadonly(Object2(FromProperties8(value2)), root) : IsFunction2(value2) ? ConditionalReadonly(Function2([], Unknown()), root) : IsUndefined2(value2) ? Undefined() : IsNull2(value2) ? Null() : IsSymbol2(value2) ? Symbol2() : IsBigInt2(value2) ? BigInt2() : IsNumber2(value2) ? Literal(value2) : IsBoolean2(value2) ? Literal(value2) : IsString2(value2) ? Literal(value2) : Object2({});
}
function Const(T, options = {}) {
  return CloneType(FromValue(T, true), options);
}
// node_modules/@sinclair/typebox/build/esm/type/constructor-parameters/constructor-parameters.mjs
function ConstructorParameters(schema, options = {}) {
  return Tuple(CloneRest(schema.parameters), { ...options });
}
// node_modules/@sinclair/typebox/build/esm/type/deref/deref.mjs
function FromRest5(schema, references) {
  return schema.map((schema2) => Deref2(schema2, references));
}
function FromProperties9(properties, references) {
  const Acc = {};
  for (const K of globalThis.Object.getOwnPropertyNames(properties)) {
    Acc[K] = Deref2(properties[K], references);
  }
  return Acc;
}
function FromConstructor7(schema, references) {
  schema.parameters = FromRest5(schema.parameters, references);
  schema.returns = Deref2(schema.returns, references);
  return schema;
}
function FromFunction6(schema, references) {
  schema.parameters = FromRest5(schema.parameters, references);
  schema.returns = Deref2(schema.returns, references);
  return schema;
}
function FromIntersect15(schema, references) {
  schema.allOf = FromRest5(schema.allOf, references);
  return schema;
}
function FromUnion17(schema, references) {
  schema.anyOf = FromRest5(schema.anyOf, references);
  return schema;
}
function FromTuple14(schema, references) {
  if (IsUndefined2(schema.items))
    return schema;
  schema.items = FromRest5(schema.items, references);
  return schema;
}
function FromArray15(schema, references) {
  schema.items = Deref2(schema.items, references);
  return schema;
}
function FromObject12(schema, references) {
  schema.properties = FromProperties9(schema.properties, references);
  return schema;
}
function FromPromise7(schema, references) {
  schema.item = Deref2(schema.item, references);
  return schema;
}
function FromAsyncIterator6(schema, references) {
  schema.items = Deref2(schema.items, references);
  return schema;
}
function FromIterator6(schema, references) {
  schema.items = Deref2(schema.items, references);
  return schema;
}
function FromRef11(schema, references) {
  const target = references.find((remote) => remote.$id === schema.$ref);
  if (target === undefined)
    throw Error(`Unable to dereference schema with \$id ${schema.$ref}`);
  const discard2 = Discard(target, ["$id"]);
  return Deref2(discard2, references);
}
function DerefResolve(schema, references) {
  return IsConstructor(schema) ? FromConstructor7(schema, references) : IsFunction3(schema) ? FromFunction6(schema, references) : IsIntersect(schema) ? FromIntersect15(schema, references) : IsUnion(schema) ? FromUnion17(schema, references) : IsTuple(schema) ? FromTuple14(schema, references) : IsArray3(schema) ? FromArray15(schema, references) : IsObject3(schema) ? FromObject12(schema, references) : IsPromise2(schema) ? FromPromise7(schema, references) : IsAsyncIterator3(schema) ? FromAsyncIterator6(schema, references) : IsIterator3(schema) ? FromIterator6(schema, references) : IsRef(schema) ? FromRef11(schema, references) : schema;
}
function Deref2(schema, references) {
  return DerefResolve(CloneType(schema), CloneRest(references));
}
// node_modules/@sinclair/typebox/build/esm/type/enum/enum.mjs
function Enum(item, options = {}) {
  if (IsUndefined2(item))
    throw new Error("Enum undefined or empty");
  const values1 = globalThis.Object.getOwnPropertyNames(item).filter((key) => isNaN(key)).map((key) => item[key]);
  const values2 = [...new Set(values1)];
  const anyOf = values2.map((value2) => Literal(value2));
  return Union(anyOf, { ...options, [Hint]: "Enum" });
}
// node_modules/@sinclair/typebox/build/esm/type/exclude/exclude-from-template-literal.mjs
function ExcludeFromTemplateLiteral(L, R) {
  return Exclude(TemplateLiteralToUnion(L), R);
}

// node_modules/@sinclair/typebox/build/esm/type/exclude/exclude.mjs
function ExcludeRest(L, R) {
  const excluded = L.filter((inner) => ExtendsCheck(inner, R) === ExtendsResult.False);
  return excluded.length === 1 ? excluded[0] : Union(excluded);
}
function Exclude(L, R, options = {}) {
  if (IsTemplateLiteral(L))
    return CloneType(ExcludeFromTemplateLiteral(L, R), options);
  if (IsMappedResult(L))
    return CloneType(ExcludeFromMappedResult(L, R), options);
  return CloneType(IsUnion(L) ? ExcludeRest(L.anyOf, R) : ExtendsCheck(L, R) !== ExtendsResult.False ? Never() : L, options);
}

// node_modules/@sinclair/typebox/build/esm/type/exclude/exclude-from-mapped-result.mjs
function FromProperties10(P, U) {
  const Acc = {};
  for (const K2 of globalThis.Object.getOwnPropertyNames(P))
    Acc[K2] = Exclude(P[K2], U);
  return Acc;
}
function FromMappedResult7(R, T) {
  return FromProperties10(R.properties, T);
}
function ExcludeFromMappedResult(R, T) {
  const P = FromMappedResult7(R, T);
  return MappedResult(P);
}
// node_modules/@sinclair/typebox/build/esm/type/extract/extract-from-template-literal.mjs
function ExtractFromTemplateLiteral(L, R) {
  return Extract(TemplateLiteralToUnion(L), R);
}

// node_modules/@sinclair/typebox/build/esm/type/extract/extract.mjs
function ExtractRest(L, R) {
  const extracted = L.filter((inner) => ExtendsCheck(inner, R) !== ExtendsResult.False);
  return extracted.length === 1 ? extracted[0] : Union(extracted);
}
function Extract(L, R, options = {}) {
  if (IsTemplateLiteral(L))
    return CloneType(ExtractFromTemplateLiteral(L, R), options);
  if (IsMappedResult(L))
    return CloneType(ExtractFromMappedResult(L, R), options);
  return CloneType(IsUnion(L) ? ExtractRest(L.anyOf, R) : ExtendsCheck(L, R) !== ExtendsResult.False ? L : Never(), options);
}

// node_modules/@sinclair/typebox/build/esm/type/extract/extract-from-mapped-result.mjs
function FromProperties11(P, T) {
  const Acc = {};
  for (const K2 of globalThis.Object.getOwnPropertyNames(P))
    Acc[K2] = Extract(P[K2], T);
  return Acc;
}
function FromMappedResult8(R, T) {
  return FromProperties11(R.properties, T);
}
function ExtractFromMappedResult(R, T) {
  const P = FromMappedResult8(R, T);
  return MappedResult(P);
}
// node_modules/@sinclair/typebox/build/esm/type/instance-type/instance-type.mjs
function InstanceType(schema, options = {}) {
  return CloneType(schema.returns, options);
}
// node_modules/@sinclair/typebox/build/esm/type/integer/integer.mjs
function Integer(options = {}) {
  return {
    ...options,
    [Kind]: "Integer",
    type: "integer"
  };
}
// node_modules/@sinclair/typebox/build/esm/type/intrinsic/intrinsic-from-mapped-key.mjs
function MappedIntrinsicPropertyKey(K, M, options) {
  return {
    [K]: Intrinsic(Literal(K), M, options)
  };
}
function MappedIntrinsicPropertyKeys(K, M, options) {
  return K.reduce((Acc, L) => {
    return { ...Acc, ...MappedIntrinsicPropertyKey(L, M, options) };
  }, {});
}
function MappedIntrinsicProperties(T, M, options) {
  return MappedIntrinsicPropertyKeys(T["keys"], M, options);
}
function IntrinsicFromMappedKey(T, M, options) {
  const P = MappedIntrinsicProperties(T, M, options);
  return MappedResult(P);
}

// node_modules/@sinclair/typebox/build/esm/type/intrinsic/intrinsic.mjs
function ApplyUncapitalize(value2) {
  const [first, rest] = [value2.slice(0, 1), value2.slice(1)];
  return [first.toLowerCase(), rest].join("");
}
function ApplyCapitalize(value2) {
  const [first, rest] = [value2.slice(0, 1), value2.slice(1)];
  return [first.toUpperCase(), rest].join("");
}
function ApplyUppercase(value2) {
  return value2.toUpperCase();
}
function ApplyLowercase(value2) {
  return value2.toLowerCase();
}
function FromTemplateLiteral6(schema, mode, options) {
  const expression = TemplateLiteralParseExact(schema.pattern);
  const finite2 = IsTemplateLiteralExpressionFinite(expression);
  if (!finite2)
    return { ...schema, pattern: FromLiteralValue(schema.pattern, mode) };
  const strings = [...TemplateLiteralExpressionGenerate(expression)];
  const literals = strings.map((value2) => Literal(value2));
  const mapped2 = FromRest6(literals, mode);
  const union3 = Union(mapped2);
  return TemplateLiteral([union3], options);
}
function FromLiteralValue(value2, mode) {
  return typeof value2 === "string" ? mode === "Uncapitalize" ? ApplyUncapitalize(value2) : mode === "Capitalize" ? ApplyCapitalize(value2) : mode === "Uppercase" ? ApplyUppercase(value2) : mode === "Lowercase" ? ApplyLowercase(value2) : value2 : value2.toString();
}
function FromRest6(T, M) {
  return T.map((L) => Intrinsic(L, M));
}
function Intrinsic(schema, mode, options = {}) {
  return IsMappedKey(schema) ? IntrinsicFromMappedKey(schema, mode, options) : IsTemplateLiteral(schema) ? FromTemplateLiteral6(schema, mode, schema) : IsUnion(schema) ? Union(FromRest6(schema.anyOf, mode), options) : IsLiteral(schema) ? Literal(FromLiteralValue(schema.const, mode), options) : schema;
}

// node_modules/@sinclair/typebox/build/esm/type/intrinsic/capitalize.mjs
function Capitalize(T, options = {}) {
  return Intrinsic(T, "Capitalize", options);
}
// node_modules/@sinclair/typebox/build/esm/type/intrinsic/lowercase.mjs
function Lowercase(T, options = {}) {
  return Intrinsic(T, "Lowercase", options);
}
// node_modules/@sinclair/typebox/build/esm/type/intrinsic/uncapitalize.mjs
function Uncapitalize(T, options = {}) {
  return Intrinsic(T, "Uncapitalize", options);
}
// node_modules/@sinclair/typebox/build/esm/type/intrinsic/uppercase.mjs
function Uppercase(T, options = {}) {
  return Intrinsic(T, "Uppercase", options);
}
// node_modules/@sinclair/typebox/build/esm/type/not/not.mjs
function Not2(schema, options) {
  return {
    ...options,
    [Kind]: "Not",
    not: CloneType(schema)
  };
}
// node_modules/@sinclair/typebox/build/esm/type/omit/omit-from-mapped-result.mjs
function FromProperties12(P, K, options) {
  const Acc = {};
  for (const K2 of globalThis.Object.getOwnPropertyNames(P))
    Acc[K2] = Omit(P[K2], K, options);
  return Acc;
}
function FromMappedResult9(R, K, options) {
  return FromProperties12(R.properties, K, options);
}
function OmitFromMappedResult(R, K, options) {
  const P = FromMappedResult9(R, K, options);
  return MappedResult(P);
}

// node_modules/@sinclair/typebox/build/esm/type/omit/omit.mjs
function FromIntersect16(T, K) {
  return T.map((T2) => OmitResolve(T2, K));
}
function FromUnion18(T, K) {
  return T.map((T2) => OmitResolve(T2, K));
}
function FromProperty2(T, K) {
  const { [K]: _, ...R } = T;
  return R;
}
function FromProperties13(T, K) {
  return K.reduce((T2, K2) => FromProperty2(T2, K2), T);
}
function OmitResolve(T, K) {
  return IsIntersect(T) ? Intersect(FromIntersect16(T.allOf, K)) : IsUnion(T) ? Union(FromUnion18(T.anyOf, K)) : IsObject3(T) ? Object2(FromProperties13(T.properties, K)) : Object2({});
}
function Omit(T, K, options = {}) {
  if (IsMappedKey(K))
    return OmitFromMappedKey(T, K, options);
  if (IsMappedResult(T))
    return OmitFromMappedResult(T, K, options);
  const I = IsSchema(K) ? IndexPropertyKeys(K) : K;
  const D = Discard(T, [TransformKind, "$id", "required"]);
  const R = CloneType(OmitResolve(T, I), options);
  return { ...D, ...R };
}

// node_modules/@sinclair/typebox/build/esm/type/omit/omit-from-mapped-key.mjs
function FromPropertyKey2(T, K, options) {
  return {
    [K]: Omit(T, [K], options)
  };
}
function FromPropertyKeys2(T, K, options) {
  return K.reduce((Acc, LK) => {
    return { ...Acc, ...FromPropertyKey2(T, LK, options) };
  }, {});
}
function FromMappedKey3(T, K, options) {
  return FromPropertyKeys2(T, K.keys, options);
}
function OmitFromMappedKey(T, K, options) {
  const P = FromMappedKey3(T, K, options);
  return MappedResult(P);
}
// node_modules/@sinclair/typebox/build/esm/type/parameters/parameters.mjs
function Parameters(schema, options = {}) {
  return Tuple(CloneRest(schema.parameters), { ...options });
}
// node_modules/@sinclair/typebox/build/esm/type/partial/partial.mjs
function FromRest7(T) {
  return T.map((L) => PartialResolve(L));
}
function FromProperties14(T) {
  const Acc = {};
  for (const K of globalThis.Object.getOwnPropertyNames(T))
    Acc[K] = Optional(T[K]);
  return Acc;
}
function PartialResolve(T) {
  return IsIntersect(T) ? Intersect(FromRest7(T.allOf)) : IsUnion(T) ? Union(FromRest7(T.anyOf)) : IsObject3(T) ? Object2(FromProperties14(T.properties)) : Object2({});
}
function Partial(T, options = {}) {
  if (IsMappedResult(T))
    return PartialFromMappedResult(T, options);
  const D = Discard(T, [TransformKind, "$id", "required"]);
  const R = CloneType(PartialResolve(T), options);
  return { ...D, ...R };
}

// node_modules/@sinclair/typebox/build/esm/type/partial/partial-from-mapped-result.mjs
function FromProperties15(K, options) {
  const Acc = {};
  for (const K2 of globalThis.Object.getOwnPropertyNames(K))
    Acc[K2] = Partial(K[K2], options);
  return Acc;
}
function FromMappedResult10(R, options) {
  return FromProperties15(R.properties, options);
}
function PartialFromMappedResult(R, options) {
  const P = FromMappedResult10(R, options);
  return MappedResult(P);
}
// node_modules/@sinclair/typebox/build/esm/type/pick/pick-from-mapped-result.mjs
function FromProperties16(P, K, options) {
  const Acc = {};
  for (const K2 of globalThis.Object.getOwnPropertyNames(P))
    Acc[K2] = Pick(P[K2], K, options);
  return Acc;
}
function FromMappedResult11(R, K, options) {
  return FromProperties16(R.properties, K, options);
}
function PickFromMappedResult(R, K, options) {
  const P = FromMappedResult11(R, K, options);
  return MappedResult(P);
}

// node_modules/@sinclair/typebox/build/esm/type/pick/pick.mjs
function FromIntersect17(T, K) {
  return T.map((T2) => PickResolve(T2, K));
}
function FromUnion19(T, K) {
  return T.map((T2) => PickResolve(T2, K));
}
function FromProperties17(T, K) {
  const Acc = {};
  for (const K2 of K)
    if (K2 in T)
      Acc[K2] = T[K2];
  return Acc;
}
function PickResolve(T, K) {
  return IsIntersect(T) ? Intersect(FromIntersect17(T.allOf, K)) : IsUnion(T) ? Union(FromUnion19(T.anyOf, K)) : IsObject3(T) ? Object2(FromProperties17(T.properties, K)) : Object2({});
}
function Pick(T, K, options = {}) {
  if (IsMappedKey(K))
    return PickFromMappedKey(T, K, options);
  if (IsMappedResult(T))
    return PickFromMappedResult(T, K, options);
  const I = IsSchema(K) ? IndexPropertyKeys(K) : K;
  const D = Discard(T, [TransformKind, "$id", "required"]);
  const R = CloneType(PickResolve(T, I), options);
  return { ...D, ...R };
}

// node_modules/@sinclair/typebox/build/esm/type/pick/pick-from-mapped-key.mjs
function FromPropertyKey3(T, K, options) {
  return {
    [K]: Pick(T, [K], options)
  };
}
function FromPropertyKeys3(T, K, options) {
  return K.reduce((Acc, LK) => {
    return { ...Acc, ...FromPropertyKey3(T, LK, options) };
  }, {});
}
function FromMappedKey4(T, K, options) {
  return FromPropertyKeys3(T, K.keys, options);
}
function PickFromMappedKey(T, K, options) {
  const P = FromMappedKey4(T, K, options);
  return MappedResult(P);
}
// node_modules/@sinclair/typebox/build/esm/type/readonly-optional/readonly-optional.mjs
function ReadonlyOptional(schema) {
  return Readonly(Optional(schema));
}
// node_modules/@sinclair/typebox/build/esm/type/record/record.mjs
function RecordCreateFromPattern(pattern2, T, options) {
  return {
    ...options,
    [Kind]: "Record",
    type: "object",
    patternProperties: { [pattern2]: CloneType(T) }
  };
}
function RecordCreateFromKeys(K, T, options) {
  const Acc = {};
  for (const K2 of K)
    Acc[K2] = CloneType(T);
  return Object2(Acc, { ...options, [Hint]: "Record" });
}
function FromTemplateLiteralKey(K, T, options) {
  return IsTemplateLiteralFinite(K) ? RecordCreateFromKeys(IndexPropertyKeys(K), T, options) : RecordCreateFromPattern(K.pattern, T, options);
}
function FromUnionKey(K, T, options) {
  return RecordCreateFromKeys(IndexPropertyKeys(Union(K)), T, options);
}
function FromLiteralKey(K, T, options) {
  return RecordCreateFromKeys([K.toString()], T, options);
}
function FromRegExpKey(K, T, options) {
  return RecordCreateFromPattern(K.source, T, options);
}
function FromStringKey(K, T, options) {
  const pattern2 = IsUndefined2(K.pattern) ? PatternStringExact : K.pattern;
  return RecordCreateFromPattern(pattern2, T, options);
}
function FromIntegerKey(_, T, options) {
  return RecordCreateFromPattern(PatternNumberExact, T, options);
}
function FromNumberKey(_, T, options) {
  return RecordCreateFromPattern(PatternNumberExact, T, options);
}
function Record(K, T, options = {}) {
  return IsUnion(K) ? FromUnionKey(K.anyOf, T, options) : IsTemplateLiteral(K) ? FromTemplateLiteralKey(K, T, options) : IsLiteral(K) ? FromLiteralKey(K.const, T, options) : IsInteger2(K) ? FromIntegerKey(K, T, options) : IsNumber3(K) ? FromNumberKey(K, T, options) : IsRegExp2(K) ? FromRegExpKey(K, T, options) : IsString3(K) ? FromStringKey(K, T, options) : Never(options);
}
// node_modules/@sinclair/typebox/build/esm/type/recursive/recursive.mjs
function Recursive(callback, options = {}) {
  if (IsUndefined2(options.$id))
    options.$id = `T${Ordinal++}`;
  const thisType = callback({ [Kind]: "This", $ref: `${options.$id}` });
  thisType.$id = options.$id;
  return CloneType({ ...options, [Hint]: "Recursive", ...thisType });
}
var Ordinal = 0;
// node_modules/@sinclair/typebox/build/esm/type/ref/ref.mjs
function Ref(unresolved, options = {}) {
  if (IsString2(unresolved))
    return { ...options, [Kind]: "Ref", $ref: unresolved };
  if (IsUndefined2(unresolved.$id))
    throw new Error("Reference target type must specify an $id");
  return {
    ...options,
    [Kind]: "Ref",
    $ref: unresolved.$id
  };
}
// node_modules/@sinclair/typebox/build/esm/type/regexp/regexp.mjs
function RegExp2(unresolved, options = {}) {
  const expr = IsString2(unresolved) ? new globalThis.RegExp(unresolved) : unresolved;
  return { ...options, [Kind]: "RegExp", type: "RegExp", source: expr.source, flags: expr.flags };
}
// node_modules/@sinclair/typebox/build/esm/type/required/required.mjs
function FromRest8(T) {
  return T.map((L) => RequiredResolve(L));
}
function FromProperties18(T) {
  const Acc = {};
  for (const K of globalThis.Object.getOwnPropertyNames(T))
    Acc[K] = Discard(T[K], [OptionalKind]);
  return Acc;
}
function RequiredResolve(T) {
  return IsIntersect(T) ? Intersect(FromRest8(T.allOf)) : IsUnion(T) ? Union(FromRest8(T.anyOf)) : IsObject3(T) ? Object2(FromProperties18(T.properties)) : Object2({});
}
function Required(T, options = {}) {
  if (IsMappedResult(T)) {
    return RequiredFromMappedResult(T, options);
  } else {
    const D = Discard(T, [TransformKind, "$id", "required"]);
    const R = CloneType(RequiredResolve(T), options);
    return { ...D, ...R };
  }
}

// node_modules/@sinclair/typebox/build/esm/type/required/required-from-mapped-result.mjs
function FromProperties19(P, options) {
  const Acc = {};
  for (const K2 of globalThis.Object.getOwnPropertyNames(P))
    Acc[K2] = Required(P[K2], options);
  return Acc;
}
function FromMappedResult12(R, options) {
  return FromProperties19(R.properties, options);
}
function RequiredFromMappedResult(R, options) {
  const P = FromMappedResult12(R, options);
  return MappedResult(P);
}
// node_modules/@sinclair/typebox/build/esm/type/rest/rest.mjs
function RestResolve(T) {
  return IsIntersect(T) ? CloneRest(T.allOf) : IsUnion(T) ? CloneRest(T.anyOf) : IsTuple(T) ? CloneRest(T.items ?? []) : [];
}
function Rest(T) {
  return CloneRest(RestResolve(T));
}
// node_modules/@sinclair/typebox/build/esm/type/return-type/return-type.mjs
function ReturnType(schema, options = {}) {
  return CloneType(schema.returns, options);
}
// node_modules/@sinclair/typebox/build/esm/type/strict/strict.mjs
function Strict(schema2) {
  return JSON.parse(JSON.stringify(schema2));
}
// node_modules/@sinclair/typebox/build/esm/type/transform/transform.mjs
function Transform(schema2) {
  return new TransformDecodeBuilder(schema2);
}

class TransformDecodeBuilder {
  constructor(schema2) {
    this.schema = schema2;
  }
  Decode(decode2) {
    return new TransformEncodeBuilder(this.schema, decode2);
  }
}

class TransformEncodeBuilder {
  constructor(schema2, decode2) {
    this.schema = schema2;
    this.decode = decode2;
  }
  EncodeTransform(encode2, schema2) {
    const Encode2 = (value2) => schema2[TransformKind].Encode(encode2(value2));
    const Decode2 = (value2) => this.decode(schema2[TransformKind].Decode(value2));
    const Codec = { Encode: Encode2, Decode: Decode2 };
    return { ...schema2, [TransformKind]: Codec };
  }
  EncodeSchema(encode2, schema2) {
    const Codec = { Decode: this.decode, Encode: encode2 };
    return { ...schema2, [TransformKind]: Codec };
  }
  Encode(encode2) {
    const schema2 = CloneType(this.schema);
    return IsTransform(schema2) ? this.EncodeTransform(encode2, schema2) : this.EncodeSchema(encode2, schema2);
  }
}
// node_modules/@sinclair/typebox/build/esm/type/void/void.mjs
function Void(options = {}) {
  return {
    ...options,
    [Kind]: "Void",
    type: "void"
  };
}
// node_modules/@sinclair/typebox/build/esm/type/type/type.mjs
var exports_type3 = {};
__export(exports_type3, {
  Void: () => Void,
  Uppercase: () => Uppercase,
  Unsafe: () => Unsafe,
  Unknown: () => Unknown,
  Union: () => Union,
  Undefined: () => Undefined,
  Uncapitalize: () => Uncapitalize,
  Uint8Array: () => Uint8Array2,
  Tuple: () => Tuple,
  Transform: () => Transform,
  TemplateLiteral: () => TemplateLiteral,
  Symbol: () => Symbol2,
  String: () => String2,
  Strict: () => Strict,
  ReturnType: () => ReturnType,
  Rest: () => Rest,
  Required: () => Required,
  RegExp: () => RegExp2,
  Ref: () => Ref,
  Recursive: () => Recursive,
  Record: () => Record,
  ReadonlyOptional: () => ReadonlyOptional,
  Readonly: () => Readonly,
  Promise: () => Promise2,
  Pick: () => Pick,
  Partial: () => Partial,
  Parameters: () => Parameters,
  Optional: () => Optional,
  Omit: () => Omit,
  Object: () => Object2,
  Number: () => Number2,
  Null: () => Null,
  Not: () => Not2,
  Never: () => Never,
  Mapped: () => Mapped,
  Lowercase: () => Lowercase,
  Literal: () => Literal,
  KeyOf: () => KeyOf,
  Iterator: () => Iterator,
  Intersect: () => Intersect,
  Integer: () => Integer,
  InstanceType: () => InstanceType,
  Index: () => Index,
  Function: () => Function2,
  Extract: () => Extract,
  Extends: () => Extends,
  Exclude: () => Exclude,
  Enum: () => Enum,
  Deref: () => Deref2,
  Date: () => Date2,
  ConstructorParameters: () => ConstructorParameters,
  Constructor: () => Constructor,
  Const: () => Const,
  Composite: () => Composite,
  Capitalize: () => Capitalize,
  Boolean: () => Boolean2,
  BigInt: () => BigInt2,
  Awaited: () => Awaited,
  AsyncIterator: () => AsyncIterator,
  Array: () => Array2,
  Any: () => Any
});

// node_modules/@sinclair/typebox/build/esm/type/type/index.mjs
var Type = exports_type3;
// node_modules/@sinclair/typebox/build/esm/compiler/compiler.mjs
class TypeCheck {
  constructor(schema3, references, checkFunc, code) {
    this.schema = schema3;
    this.references = references;
    this.checkFunc = checkFunc;
    this.code = code;
    this.hasTransform = HasTransform(schema3, references);
  }
  Code() {
    return this.code;
  }
  Errors(value2) {
    return Errors(this.schema, this.references, value2);
  }
  Check(value2) {
    return this.checkFunc(value2);
  }
  Decode(value2) {
    if (!this.checkFunc(value2))
      throw new TransformDecodeCheckError(this.schema, value2, this.Errors(value2).First());
    return this.hasTransform ? TransformDecode(this.schema, this.references, value2) : value2;
  }
  Encode(value2) {
    const encoded = this.hasTransform ? TransformEncode(this.schema, this.references, value2) : value2;
    if (!this.checkFunc(encoded))
      throw new TransformEncodeCheckError(this.schema, value2, this.Errors(value2).First());
    return encoded;
  }
}
var Character;
(function(Character2) {
  function DollarSign(code) {
    return code === 36;
  }
  Character2.DollarSign = DollarSign;
  function IsUnderscore(code) {
    return code === 95;
  }
  Character2.IsUnderscore = IsUnderscore;
  function IsAlpha(code) {
    return code >= 65 && code <= 90 || code >= 97 && code <= 122;
  }
  Character2.IsAlpha = IsAlpha;
  function IsNumeric(code) {
    return code >= 48 && code <= 57;
  }
  Character2.IsNumeric = IsNumeric;
})(Character || (Character = {}));
var MemberExpression;
(function(MemberExpression2) {
  function IsFirstCharacterNumeric(value2) {
    if (value2.length === 0)
      return false;
    return Character.IsNumeric(value2.charCodeAt(0));
  }
  function IsAccessor(value2) {
    if (IsFirstCharacterNumeric(value2))
      return false;
    for (let i = 0;i < value2.length; i++) {
      const code = value2.charCodeAt(i);
      const check3 = Character.IsAlpha(code) || Character.IsNumeric(code) || Character.DollarSign(code) || Character.IsUnderscore(code);
      if (!check3)
        return false;
    }
    return true;
  }
  function EscapeHyphen(key) {
    return key.replace(/'/g, "\\'");
  }
  function Encode2(object3, key) {
    return IsAccessor(key) ? `${object3}.${key}` : `${object3}['${EscapeHyphen(key)}']`;
  }
  MemberExpression2.Encode = Encode2;
})(MemberExpression || (MemberExpression = {}));
var Identifier;
(function(Identifier2) {
  function Encode2($id) {
    const buffer = [];
    for (let i = 0;i < $id.length; i++) {
      const code = $id.charCodeAt(i);
      if (Character.IsNumeric(code) || Character.IsAlpha(code)) {
        buffer.push($id.charAt(i));
      } else {
        buffer.push(`_${code}_`);
      }
    }
    return buffer.join("").replace(/__/g, "_");
  }
  Identifier2.Encode = Encode2;
})(Identifier || (Identifier = {}));
var LiteralString;
(function(LiteralString2) {
  function Escape3(content) {
    return content.replace(/'/g, "\\'");
  }
  LiteralString2.Escape = Escape3;
})(LiteralString || (LiteralString = {}));

class TypeCompilerUnknownTypeError extends TypeBoxError {
  constructor(schema3) {
    super("Unknown type");
    this.schema = schema3;
  }
}

class TypeCompilerTypeGuardError extends TypeBoxError {
  constructor(schema3) {
    super("Preflight validation check failed to guard for the given schema");
    this.schema = schema3;
  }
}
var Policy;
(function(Policy2) {
  function IsExactOptionalProperty(value2, key, expression) {
    return TypeSystemPolicy.ExactOptionalPropertyTypes ? `('${key}' in ${value2} ? ${expression} : true)` : `(${MemberExpression.Encode(value2, key)} !== undefined ? ${expression} : true)`;
  }
  Policy2.IsExactOptionalProperty = IsExactOptionalProperty;
  function IsObjectLike(value2) {
    return !TypeSystemPolicy.AllowArrayObject ? `(typeof ${value2} === 'object' && ${value2} !== null && !Array.isArray(${value2}))` : `(typeof ${value2} === 'object' && ${value2} !== null)`;
  }
  Policy2.IsObjectLike = IsObjectLike;
  function IsRecordLike(value2) {
    return !TypeSystemPolicy.AllowArrayObject ? `(typeof ${value2} === 'object' && ${value2} !== null && !Array.isArray(${value2}) && !(${value2} instanceof Date) && !(${value2} instanceof Uint8Array))` : `(typeof ${value2} === 'object' && ${value2} !== null && !(${value2} instanceof Date) && !(${value2} instanceof Uint8Array))`;
  }
  Policy2.IsRecordLike = IsRecordLike;
  function IsNumberLike(value2) {
    return TypeSystemPolicy.AllowNaN ? `typeof ${value2} === 'number'` : `Number.isFinite(${value2})`;
  }
  Policy2.IsNumberLike = IsNumberLike;
  function IsVoidLike(value2) {
    return TypeSystemPolicy.AllowNullVoid ? `(${value2} === undefined || ${value2} === null)` : `${value2} === undefined`;
  }
  Policy2.IsVoidLike = IsVoidLike;
})(Policy || (Policy = {}));
var TypeCompiler;
(function(TypeCompiler2) {
  function IsAnyOrUnknown2(schema3) {
    return schema3[Kind] === "Any" || schema3[Kind] === "Unknown";
  }
  function* FromAny5(schema3, references, value2) {
    yield "true";
  }
  function* FromArray16(schema3, references, value2) {
    yield `Array.isArray(${value2})`;
    const [parameter, accumulator] = [CreateParameter("value", "any"), CreateParameter("acc", "number")];
    if (IsNumber(schema3.maxItems))
      yield `${value2}.length <= ${schema3.maxItems}`;
    if (IsNumber(schema3.minItems))
      yield `${value2}.length >= ${schema3.minItems}`;
    const elementExpression = CreateExpression(schema3.items, references, "value");
    yield `${value2}.every((${parameter}) => ${elementExpression})`;
    if (IsSchema2(schema3.contains) || IsNumber(schema3.minContains) || IsNumber(schema3.maxContains)) {
      const containsSchema = IsSchema2(schema3.contains) ? schema3.contains : Never();
      const checkExpression = CreateExpression(containsSchema, references, "value");
      const checkMinContains = IsNumber(schema3.minContains) ? [`(count >= ${schema3.minContains})`] : [];
      const checkMaxContains = IsNumber(schema3.maxContains) ? [`(count <= ${schema3.maxContains})`] : [];
      const checkCount = `const count = value.reduce((${accumulator}, ${parameter}) => ${checkExpression} ? acc + 1 : acc, 0)`;
      const check3 = [`(count > 0)`, ...checkMinContains, ...checkMaxContains].join(" && ");
      yield `((${parameter}) => { ${checkCount}; return ${check3}})(${value2})`;
    }
    if (schema3.uniqueItems === true) {
      const check3 = `const hashed = hash(element); if(set.has(hashed)) { return false } else { set.add(hashed) } } return true`;
      const block = `const set = new Set(); for(const element of value) { ${check3} }`;
      yield `((${parameter}) => { ${block} )(${value2})`;
    }
  }
  function* FromAsyncIterator7(schema3, references, value2) {
    yield `(typeof value === 'object' && Symbol.asyncIterator in ${value2})`;
  }
  function* FromBigInt6(schema3, references, value2) {
    yield `(typeof ${value2} === 'bigint')`;
    if (IsBigInt(schema3.exclusiveMaximum))
      yield `${value2} < BigInt(${schema3.exclusiveMaximum})`;
    if (IsBigInt(schema3.exclusiveMinimum))
      yield `${value2} > BigInt(${schema3.exclusiveMinimum})`;
    if (IsBigInt(schema3.maximum))
      yield `${value2} <= BigInt(${schema3.maximum})`;
    if (IsBigInt(schema3.minimum))
      yield `${value2} >= BigInt(${schema3.minimum})`;
    if (IsBigInt(schema3.multipleOf))
      yield `(${value2} % BigInt(${schema3.multipleOf})) === 0`;
  }
  function* FromBoolean6(schema3, references, value2) {
    yield `(typeof ${value2} === 'boolean')`;
  }
  function* FromConstructor8(schema3, references, value2) {
    yield* Visit17(schema3.returns, references, `${value2}.prototype`);
  }
  function* FromDate6(schema3, references, value2) {
    yield `(${value2} instanceof Date) && Number.isFinite(${value2}.getTime())`;
    if (IsNumber(schema3.exclusiveMaximumTimestamp))
      yield `${value2}.getTime() < ${schema3.exclusiveMaximumTimestamp}`;
    if (IsNumber(schema3.exclusiveMinimumTimestamp))
      yield `${value2}.getTime() > ${schema3.exclusiveMinimumTimestamp}`;
    if (IsNumber(schema3.maximumTimestamp))
      yield `${value2}.getTime() <= ${schema3.maximumTimestamp}`;
    if (IsNumber(schema3.minimumTimestamp))
      yield `${value2}.getTime() >= ${schema3.minimumTimestamp}`;
    if (IsNumber(schema3.multipleOfTimestamp))
      yield `(${value2}.getTime() % ${schema3.multipleOfTimestamp}) === 0`;
  }
  function* FromFunction7(schema3, references, value2) {
    yield `(typeof ${value2} === 'function')`;
  }
  function* FromInteger6(schema3, references, value2) {
    yield `Number.isInteger(${value2})`;
    if (IsNumber(schema3.exclusiveMaximum))
      yield `${value2} < ${schema3.exclusiveMaximum}`;
    if (IsNumber(schema3.exclusiveMinimum))
      yield `${value2} > ${schema3.exclusiveMinimum}`;
    if (IsNumber(schema3.maximum))
      yield `${value2} <= ${schema3.maximum}`;
    if (IsNumber(schema3.minimum))
      yield `${value2} >= ${schema3.minimum}`;
    if (IsNumber(schema3.multipleOf))
      yield `(${value2} % ${schema3.multipleOf}) === 0`;
  }
  function* FromIntersect18(schema3, references, value2) {
    const check1 = schema3.allOf.map((schema4) => CreateExpression(schema4, references, value2)).join(" && ");
    if (schema3.unevaluatedProperties === false) {
      const keyCheck = CreateVariable(`${new RegExp(KeyOfPattern(schema3))};`);
      const check22 = `Object.getOwnPropertyNames(${value2}).every(key => ${keyCheck}.test(key))`;
      yield `(${check1} && ${check22})`;
    } else if (IsSchema2(schema3.unevaluatedProperties)) {
      const keyCheck = CreateVariable(`${new RegExp(KeyOfPattern(schema3))};`);
      const check22 = `Object.getOwnPropertyNames(${value2}).every(key => ${keyCheck}.test(key) || ${CreateExpression(schema3.unevaluatedProperties, references, `${value2}[key]`)})`;
      yield `(${check1} && ${check22})`;
    } else {
      yield `(${check1})`;
    }
  }
  function* FromIterator7(schema3, references, value2) {
    yield `(typeof value === 'object' && Symbol.iterator in ${value2})`;
  }
  function* FromLiteral7(schema3, references, value2) {
    if (typeof schema3.const === "number" || typeof schema3.const === "boolean") {
      yield `(${value2} === ${schema3.const})`;
    } else {
      yield `(${value2} === '${LiteralString.Escape(schema3.const)}')`;
    }
  }
  function* FromNever6(schema3, references, value2) {
    yield `false`;
  }
  function* FromNot8(schema3, references, value2) {
    const expression = CreateExpression(schema3.not, references, value2);
    yield `(!${expression})`;
  }
  function* FromNull6(schema3, references, value2) {
    yield `(${value2} === null)`;
  }
  function* FromNumber6(schema3, references, value2) {
    yield Policy.IsNumberLike(value2);
    if (IsNumber(schema3.exclusiveMaximum))
      yield `${value2} < ${schema3.exclusiveMaximum}`;
    if (IsNumber(schema3.exclusiveMinimum))
      yield `${value2} > ${schema3.exclusiveMinimum}`;
    if (IsNumber(schema3.maximum))
      yield `${value2} <= ${schema3.maximum}`;
    if (IsNumber(schema3.minimum))
      yield `${value2} >= ${schema3.minimum}`;
    if (IsNumber(schema3.multipleOf))
      yield `(${value2} % ${schema3.multipleOf}) === 0`;
  }
  function* FromObject13(schema3, references, value2) {
    yield Policy.IsObjectLike(value2);
    if (IsNumber(schema3.minProperties))
      yield `Object.getOwnPropertyNames(${value2}).length >= ${schema3.minProperties}`;
    if (IsNumber(schema3.maxProperties))
      yield `Object.getOwnPropertyNames(${value2}).length <= ${schema3.maxProperties}`;
    const knownKeys = Object.getOwnPropertyNames(schema3.properties);
    for (const knownKey of knownKeys) {
      const memberExpression = MemberExpression.Encode(value2, knownKey);
      const property = schema3.properties[knownKey];
      if (schema3.required && schema3.required.includes(knownKey)) {
        yield* Visit17(property, references, memberExpression);
        if (ExtendsUndefinedCheck(property) || IsAnyOrUnknown2(property))
          yield `('${knownKey}' in ${value2})`;
      } else {
        const expression = CreateExpression(property, references, memberExpression);
        yield Policy.IsExactOptionalProperty(value2, knownKey, expression);
      }
    }
    if (schema3.additionalProperties === false) {
      if (schema3.required && schema3.required.length === knownKeys.length) {
        yield `Object.getOwnPropertyNames(${value2}).length === ${knownKeys.length}`;
      } else {
        const keys = `[${knownKeys.map((key) => `'${key}'`).join(", ")}]`;
        yield `Object.getOwnPropertyNames(${value2}).every(key => ${keys}.includes(key))`;
      }
    }
    if (typeof schema3.additionalProperties === "object") {
      const expression = CreateExpression(schema3.additionalProperties, references, `${value2}[key]`);
      const keys = `[${knownKeys.map((key) => `'${key}'`).join(", ")}]`;
      yield `(Object.getOwnPropertyNames(${value2}).every(key => ${keys}.includes(key) || ${expression}))`;
    }
  }
  function* FromPromise8(schema3, references, value2) {
    yield `(typeof value === 'object' && typeof ${value2}.then === 'function')`;
  }
  function* FromRecord12(schema3, references, value2) {
    yield Policy.IsRecordLike(value2);
    if (IsNumber(schema3.minProperties))
      yield `Object.getOwnPropertyNames(${value2}).length >= ${schema3.minProperties}`;
    if (IsNumber(schema3.maxProperties))
      yield `Object.getOwnPropertyNames(${value2}).length <= ${schema3.maxProperties}`;
    const [patternKey, patternSchema] = Object.entries(schema3.patternProperties)[0];
    const variable = CreateVariable(`${new RegExp(patternKey)}`);
    const check1 = CreateExpression(patternSchema, references, "value");
    const check22 = IsSchema2(schema3.additionalProperties) ? CreateExpression(schema3.additionalProperties, references, value2) : schema3.additionalProperties === false ? "false" : "true";
    const expression = `(${variable}.test(key) ? ${check1} : ${check22})`;
    yield `(Object.entries(${value2}).every(([key, value]) => ${expression}))`;
  }
  function* FromRef12(schema3, references, value2) {
    const target = Deref(schema3, references);
    if (state.functions.has(schema3.$ref))
      return yield `${CreateFunctionName(schema3.$ref)}(${value2})`;
    yield* Visit17(target, references, value2);
  }
  function* FromRegExp5(schema3, references, value2) {
    const variable = CreateVariable(`${new RegExp(schema3.source, schema3.flags)};`);
    yield `(typeof ${value2} === 'string')`;
    if (IsNumber(schema3.maxLength))
      yield `${value2}.length <= ${schema3.maxLength}`;
    if (IsNumber(schema3.minLength))
      yield `${value2}.length >= ${schema3.minLength}`;
    yield `${variable}.test(${value2})`;
  }
  function* FromString6(schema3, references, value2) {
    yield `(typeof ${value2} === 'string')`;
    if (IsNumber(schema3.maxLength))
      yield `${value2}.length <= ${schema3.maxLength}`;
    if (IsNumber(schema3.minLength))
      yield `${value2}.length >= ${schema3.minLength}`;
    if (schema3.pattern !== undefined) {
      const variable = CreateVariable(`${new RegExp(schema3.pattern)};`);
      yield `${variable}.test(${value2})`;
    }
    if (schema3.format !== undefined) {
      yield `format('${schema3.format}', ${value2})`;
    }
  }
  function* FromSymbol6(schema3, references, value2) {
    yield `(typeof ${value2} === 'symbol')`;
  }
  function* FromTemplateLiteral7(schema3, references, value2) {
    yield `(typeof ${value2} === 'string')`;
    const variable = CreateVariable(`${new RegExp(schema3.pattern)};`);
    yield `${variable}.test(${value2})`;
  }
  function* FromThis11(schema3, references, value2) {
    yield `${CreateFunctionName(schema3.$ref)}(${value2})`;
  }
  function* FromTuple15(schema3, references, value2) {
    yield `Array.isArray(${value2})`;
    if (schema3.items === undefined)
      return yield `${value2}.length === 0`;
    yield `(${value2}.length === ${schema3.maxItems})`;
    for (let i = 0;i < schema3.items.length; i++) {
      const expression = CreateExpression(schema3.items[i], references, `${value2}[${i}]`);
      yield `${expression}`;
    }
  }
  function* FromUndefined6(schema3, references, value2) {
    yield `${value2} === undefined`;
  }
  function* FromUnion20(schema3, references, value2) {
    const expressions = schema3.anyOf.map((schema4) => CreateExpression(schema4, references, value2));
    yield `(${expressions.join(" || ")})`;
  }
  function* FromUint8Array5(schema3, references, value2) {
    yield `${value2} instanceof Uint8Array`;
    if (IsNumber(schema3.maxByteLength))
      yield `(${value2}.length <= ${schema3.maxByteLength})`;
    if (IsNumber(schema3.minByteLength))
      yield `(${value2}.length >= ${schema3.minByteLength})`;
  }
  function* FromUnknown5(schema3, references, value2) {
    yield "true";
  }
  function* FromVoid5(schema3, references, value2) {
    yield Policy.IsVoidLike(value2);
  }
  function* FromKind4(schema3, references, value2) {
    const instance = state.instances.size;
    state.instances.set(instance, schema3);
    yield `kind('${schema3[Kind]}', ${instance}, ${value2})`;
  }
  function* Visit17(schema3, references, value2, useHoisting = true) {
    const references_ = IsString(schema3.$id) ? [...references, schema3] : references;
    const schema_ = schema3;
    if (useHoisting && IsString(schema3.$id)) {
      const functionName = CreateFunctionName(schema3.$id);
      if (state.functions.has(functionName)) {
        return yield `${functionName}(${value2})`;
      } else {
        const functionCode = CreateFunction(functionName, schema3, references, "value", false);
        state.functions.set(functionName, functionCode);
        return yield `${functionName}(${value2})`;
      }
    }
    switch (schema_[Kind]) {
      case "Any":
        return yield* FromAny5(schema_, references_, value2);
      case "Array":
        return yield* FromArray16(schema_, references_, value2);
      case "AsyncIterator":
        return yield* FromAsyncIterator7(schema_, references_, value2);
      case "BigInt":
        return yield* FromBigInt6(schema_, references_, value2);
      case "Boolean":
        return yield* FromBoolean6(schema_, references_, value2);
      case "Constructor":
        return yield* FromConstructor8(schema_, references_, value2);
      case "Date":
        return yield* FromDate6(schema_, references_, value2);
      case "Function":
        return yield* FromFunction7(schema_, references_, value2);
      case "Integer":
        return yield* FromInteger6(schema_, references_, value2);
      case "Intersect":
        return yield* FromIntersect18(schema_, references_, value2);
      case "Iterator":
        return yield* FromIterator7(schema_, references_, value2);
      case "Literal":
        return yield* FromLiteral7(schema_, references_, value2);
      case "Never":
        return yield* FromNever6(schema_, references_, value2);
      case "Not":
        return yield* FromNot8(schema_, references_, value2);
      case "Null":
        return yield* FromNull6(schema_, references_, value2);
      case "Number":
        return yield* FromNumber6(schema_, references_, value2);
      case "Object":
        return yield* FromObject13(schema_, references_, value2);
      case "Promise":
        return yield* FromPromise8(schema_, references_, value2);
      case "Record":
        return yield* FromRecord12(schema_, references_, value2);
      case "Ref":
        return yield* FromRef12(schema_, references_, value2);
      case "RegExp":
        return yield* FromRegExp5(schema_, references_, value2);
      case "String":
        return yield* FromString6(schema_, references_, value2);
      case "Symbol":
        return yield* FromSymbol6(schema_, references_, value2);
      case "TemplateLiteral":
        return yield* FromTemplateLiteral7(schema_, references_, value2);
      case "This":
        return yield* FromThis11(schema_, references_, value2);
      case "Tuple":
        return yield* FromTuple15(schema_, references_, value2);
      case "Undefined":
        return yield* FromUndefined6(schema_, references_, value2);
      case "Union":
        return yield* FromUnion20(schema_, references_, value2);
      case "Uint8Array":
        return yield* FromUint8Array5(schema_, references_, value2);
      case "Unknown":
        return yield* FromUnknown5(schema_, references_, value2);
      case "Void":
        return yield* FromVoid5(schema_, references_, value2);
      default:
        if (!exports_type.Has(schema_[Kind]))
          throw new TypeCompilerUnknownTypeError(schema3);
        return yield* FromKind4(schema_, references_, value2);
    }
  }
  const state = {
    language: "javascript",
    functions: new Map,
    variables: new Map,
    instances: new Map
  };
  function CreateExpression(schema3, references, value2, useHoisting = true) {
    return `(${[...Visit17(schema3, references, value2, useHoisting)].join(" && ")})`;
  }
  function CreateFunctionName($id) {
    return `check_${Identifier.Encode($id)}`;
  }
  function CreateVariable(expression) {
    const variableName = `local_${state.variables.size}`;
    state.variables.set(variableName, `const ${variableName} = ${expression}`);
    return variableName;
  }
  function CreateFunction(name, schema3, references, value2, useHoisting = true) {
    const [newline, pad] = ["\n", (length) => "".padStart(length, " ")];
    const parameter = CreateParameter("value", "any");
    const returns = CreateReturns("boolean");
    const expression = [...Visit17(schema3, references, value2, useHoisting)].map((expression2) => `${pad(4)}${expression2}`).join(` &&${newline}`);
    return `function ${name}(${parameter})${returns} {${newline}${pad(2)}return (${newline}${expression}${newline}${pad(2)})\n}`;
  }
  function CreateParameter(name, type3) {
    const annotation = state.language === "typescript" ? `: ${type3}` : "";
    return `${name}${annotation}`;
  }
  function CreateReturns(type3) {
    return state.language === "typescript" ? `: ${type3}` : "";
  }
  function Build(schema3, references, options) {
    const functionCode = CreateFunction("check", schema3, references, "value");
    const parameter = CreateParameter("value", "any");
    const returns = CreateReturns("boolean");
    const functions = [...state.functions.values()];
    const variables = [...state.variables.values()];
    const checkFunction = IsString(schema3.$id) ? `return function check(${parameter})${returns} {\n  return ${CreateFunctionName(schema3.$id)}(value)\n}` : `return ${functionCode}`;
    return [...variables, ...functions, checkFunction].join("\n");
  }
  function Code(...args) {
    const defaults = { language: "javascript" };
    const [schema3, references, options] = args.length === 2 && IsArray(args[1]) ? [args[0], args[1], defaults] : args.length === 2 && !IsArray(args[1]) ? [args[0], [], args[1]] : args.length === 3 ? [args[0], args[1], args[2]] : args.length === 1 ? [args[0], [], defaults] : [null, [], defaults];
    state.language = options.language;
    state.variables.clear();
    state.functions.clear();
    state.instances.clear();
    if (!IsSchema2(schema3))
      throw new TypeCompilerTypeGuardError(schema3);
    for (const schema4 of references)
      if (!IsSchema2(schema4))
        throw new TypeCompilerTypeGuardError(schema4);
    return Build(schema3, references, options);
  }
  TypeCompiler2.Code = Code;
  function Compile(schema3, references = []) {
    const generatedCode = Code(schema3, references, { language: "javascript" });
    const compiledFunction = globalThis.Function("kind", "format", "hash", generatedCode);
    const instances = new Map(state.instances);
    function typeRegistryFunction(kind, instance, value2) {
      if (!exports_type.Has(kind) || !instances.has(instance))
        return false;
      const checkFunc = exports_type.Get(kind);
      const schema4 = instances.get(instance);
      return checkFunc(schema4, value2);
    }
    function formatRegistryFunction(format, value2) {
      if (!exports_format.Has(format))
        return false;
      const checkFunc = exports_format.Get(format);
      return checkFunc(value2);
    }
    function hashFunction(value2) {
      return Hash(value2);
    }
    const checkFunction = compiledFunction(typeRegistryFunction, formatRegistryFunction, hashFunction);
    return new TypeCheck(schema3, references, checkFunction, generatedCode);
  }
  TypeCompiler2.Compile = Compile;
})(TypeCompiler || (TypeCompiler = {}));
// node_modules/elysia/dist/bun/index.js
function u1($) {
  return $ % 4 === 0 && ($ % 100 !== 0 || $ % 400 === 0);
}
function i2($) {
  const W = h1.exec($);
  if (!W)
    return false;
  const X = +W[1], Z = +W[2], j = +W[3];
  return Z >= 1 && Z <= 12 && j >= 1 && j <= (Z === 2 && u1(X) ? 29 : m1[Z]);
}
function _2($) {
  return function W(X) {
    const Z = d1.exec(X);
    if (!Z)
      return false;
    const j = +Z[1], J = +Z[2], Y = +Z[3], G = Z[4], K = Z[5] === "-" ? -1 : 1, B = +(Z[6] || 0), U = +(Z[7] || 0);
    if (B > 23 || U > 59 || $ && !G)
      return false;
    if (j <= 23 && J <= 59 && Y < 60)
      return true;
    const w = J - U * K, F = j - B * K - (w < 0 ? 1 : 0);
    return (F === 23 || F === -1) && (w === 59 || w === -1) && Y < 61;
  };
}
function c2($) {
  const W = _2($);
  return function X(Z) {
    const j = Z.split(c1);
    return j.length === 2 && i2(j[0]) && W(j[1]);
  };
}
function i1($) {
  return p1.test($) && l1.test($);
}
function n1($) {
  return p2.lastIndex = 0, p2.test($);
}
function s1($) {
  return Number.isInteger($) && $ <= r1 && $ >= t1;
}
function a1($) {
  return Number.isInteger($);
}
function l2() {
  return true;
}
function e1($) {
  if (o1.test($))
    return false;
  try {
    return new RegExp($), true;
  } catch (W) {
    return false;
  }
}
function Q3($, W) {
  if (typeof $ !== "string")
    throw new TypeError("argument str must be a string");
  var X = {}, Z = W || {}, j = Z.decode || G3, J = 0;
  while (J < $.length) {
    var Y = $.indexOf("=", J);
    if (Y === -1)
      break;
    var G = $.indexOf(";", J);
    if (G === -1)
      G = $.length;
    else if (G < Y) {
      J = $.lastIndexOf(";", Y - 1) + 1;
      continue;
    }
    var K = $.slice(J, Y).trim();
    if (X[K] === undefined) {
      var B = $.slice(Y + 1, G).trim();
      if (B.charCodeAt(0) === 34)
        B = B.slice(1, -1);
      X[K] = U3(B, j);
    }
    J = G + 1;
  }
  return X;
}
function Y3($, W, X) {
  var Z = X || {}, j = Z.encode || B3;
  if (typeof j !== "function")
    throw new TypeError("option encode is invalid");
  if (!a0.test($))
    throw new TypeError("argument name is invalid");
  var J = j(W);
  if (J && !a0.test(J))
    throw new TypeError("argument val is invalid");
  var Y = $ + "=" + J;
  if (Z.maxAge != null) {
    var G = Z.maxAge - 0;
    if (isNaN(G) || !isFinite(G))
      throw new TypeError("option maxAge is invalid");
    Y += "; Max-Age=" + Math.floor(G);
  }
  if (Z.domain) {
    if (!a0.test(Z.domain))
      throw new TypeError("option domain is invalid");
    Y += "; Domain=" + Z.domain;
  }
  if (Z.path) {
    if (!a0.test(Z.path))
      throw new TypeError("option path is invalid");
    Y += "; Path=" + Z.path;
  }
  if (Z.expires) {
    var K = Z.expires;
    if (!K3(K) || isNaN(K.valueOf()))
      throw new TypeError("option expires is invalid");
    Y += "; Expires=" + K.toUTCString();
  }
  if (Z.httpOnly)
    Y += "; HttpOnly";
  if (Z.secure)
    Y += "; Secure";
  if (Z.partitioned)
    Y += "; Partitioned";
  if (Z.priority) {
    var B = typeof Z.priority === "string" ? Z.priority.toLowerCase() : Z.priority;
    switch (B) {
      case "low":
        Y += "; Priority=Low";
        break;
      case "medium":
        Y += "; Priority=Medium";
        break;
      case "high":
        Y += "; Priority=High";
        break;
      default:
        throw new TypeError("option priority is invalid");
    }
  }
  if (Z.sameSite) {
    var U = typeof Z.sameSite === "string" ? Z.sameSite.toLowerCase() : Z.sameSite;
    switch (U) {
      case true:
        Y += "; SameSite=Strict";
        break;
      case "lax":
        Y += "; SameSite=Lax";
        break;
      case "strict":
        Y += "; SameSite=Strict";
        break;
      case "none":
        Y += "; SameSite=None";
        break;
      default:
        throw new TypeError("option sameSite is invalid");
    }
  }
  return Y;
}
function G3($) {
  return $.indexOf("%") !== -1 ? decodeURIComponent($) : $;
}
function B3($) {
  return encodeURIComponent($);
}
function K3($) {
  return J3.call($) === "[object Date]" || $ instanceof Date;
}
function U3($, W) {
  try {
    return W($);
  } catch (X) {
    return $;
  }
}
async function* h0($) {
  const W = $.body;
  if (!W)
    return;
  const X = W.getReader(), Z = new TextDecoder;
  try {
    while (true) {
      const { done: j, value: J } = await X.read();
      if (j)
        break;
      yield Z.decode(J);
    }
  } finally {
    X.releaseLock();
  }
}
function A3($) {
  let W = $;
  while (W.endsWith("="))
    W = W.slice(0, -1);
  return W;
}
function G2($) {
  const W = {};
  if (typeof $ !== "string")
    return W;
  let X = "", Z = "", j = -1, J = -1, Y = 0;
  const G = $.length;
  for (let K = 0;K < G; K++)
    switch ($.charCodeAt(K)) {
      case 38:
        const B = J > j;
        if (!B)
          J = K;
        if (X = $.slice(j + 1, J), B || X.length > 0) {
          if (Y & 1)
            X = X.replace(f0, " ");
          if (Y & 2)
            X = O0.default(X) || X;
          if (!W[X]) {
            if (B) {
              if (Z = $.slice(J + 1, K), Y & 4)
                Z = Z.replace(f0, " ");
              if (Y & 8)
                Z = O0.default(Z) || Z;
            }
            W[X] = Z;
          }
        }
        X = "", Z = "", j = K, J = K, Y = 0;
        break;
      case 61:
        if (J <= j)
          J = K;
        else
          Y |= 8;
        break;
      case 43:
        if (J > j)
          Y |= 4;
        else
          Y |= 1;
        break;
      case 37:
        if (J > j)
          Y |= 8;
        else
          Y |= 2;
        break;
    }
  if (j < G) {
    const K = J > j;
    if (X = $.slice(j + 1, K ? J : G), K || X.length > 0) {
      if (Y & 1)
        X = X.replace(f0, " ");
      if (Y & 2)
        X = O0.default(X) || X;
      if (!W[X]) {
        if (K) {
          if (Z = $.slice(J + 1, G), Y & 4)
            Z = Z.replace(f0, " ");
          if (Y & 8)
            Z = O0.default(Z) || Z;
        }
        W[X] = Z;
      }
    }
  }
  return W;
}
var L1 = Object.create;
var { getPrototypeOf: T1, defineProperty: k2, getOwnPropertyNames: E1 } = Object;
var q1 = Object.prototype.hasOwnProperty;
var U2 = ($, W, X) => {
  X = $ != null ? L1(T1($)) : {};
  const Z = W || !$ || !$.__esModule ? k2(X, "default", { value: $, enumerable: true }) : X;
  for (let j of E1($))
    if (!q1.call(Z, j))
      k2(Z, j, { get: () => $[j], enumerable: true });
  return Z;
};
var H1 = ($, W) => () => (W || $((W = { exports: {} }).exports, W), W.exports);
var o0 = H1((G8, $1) => {
  function _3($) {
    var W = $.indexOf("%");
    if (W === -1)
      return $;
    var X = $.length, Z = "", j = 0, J = 0, Y = W, G = o2;
    while (W > -1 && W < X) {
      var K = e2($[W + 1], 4), B = e2($[W + 2], 0), U = K | B, w = N2[U];
      if (G = N2[256 + G + w], J = J << 6 | U & N2[364 + w], G === o2)
        Z += $.slice(j, Y), Z += J <= 65535 ? String.fromCharCode(J) : String.fromCharCode(55232 + (J >> 10), 56320 + (J & 1023)), J = 0, j = W + 3, W = Y = $.indexOf("%", j);
      else if (G === w3)
        return null;
      else {
        if (W += 3, W < X && $.charCodeAt(W) === 37)
          continue;
        return null;
      }
    }
    return Z + $.slice(j);
  }
  function e2($, W) {
    var X = F3[$];
    return X === undefined ? 255 : X << W;
  }
  var o2 = 12, w3 = 0, N2 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 8, 7, 7, 10, 9, 9, 9, 11, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 24, 36, 48, 60, 72, 84, 96, 0, 12, 12, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 24, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 48, 48, 48, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 48, 48, 0, 0, 0, 0, 0, 0, 0, 0, 0, 48, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 127, 63, 63, 63, 0, 31, 15, 15, 15, 7, 7, 7], F3 = { "0": 0, "1": 1, "2": 2, "3": 3, "4": 4, "5": 5, "6": 6, "7": 7, "8": 8, "9": 9, a: 10, A: 10, b: 11, B: 11, c: 12, C: 12, d: 13, D: 13, e: 14, E: 14, f: 15, F: 15 };
  $1.exports = _3;
});
var T0 = ($, W) => {
  const X = W?.length ? {} : null;
  if (X)
    for (let Z of W)
      X[Z.part.charCodeAt(0)] = Z;
  return { part: $, store: null, inert: X, params: null, wildcardStore: null };
};
var v2 = ($, W) => ({ ...$, part: W });
var u2 = ($) => ({ name: $, store: null, inert: null });

class M0 {
  root = {};
  history = [];
  static regex = { static: /:.+?(?=\/|$)/, params: /:.+?(?=\/|$)/g, optionalParams: /:.+?\?(?=\/|$)/g };
  add($, W, X, { ignoreError: Z = false, ignoreHistory: j = false } = {}) {
    if (typeof W !== "string")
      throw new TypeError("Route path must be a string");
    if (W === "")
      W = "/";
    else if (W[0] !== "/")
      W = `/${W}`;
    const J = W[W.length - 1] === "*", Y = W.match(M0.regex.optionalParams);
    if (Y) {
      const w = W.replaceAll("?", "");
      this.add($, w, X, { ignoreError: Z });
      for (let F = 0;F < Y.length; F++) {
        let Q = W.replace("/" + Y[F], "");
        this.add($, Q, X, { ignoreError: true });
      }
      return X;
    }
    if (Y)
      W = W.replaceAll("?", "");
    if (this.history.find(([w, F, Q]) => w === $ && F === W))
      return X;
    if (J || Y && W.charCodeAt(W.length - 1) === 63)
      W = W.slice(0, -1);
    if (!j)
      this.history.push([$, W, X]);
    const G = W.split(M0.regex.static), K = W.match(M0.regex.params) || [];
    if (G[G.length - 1] === "")
      G.pop();
    let B;
    if (!this.root[$])
      B = this.root[$] = T0("/");
    else
      B = this.root[$];
    let U = 0;
    for (let w = 0;w < G.length; ++w) {
      let F = G[w];
      if (w > 0) {
        const Q = K[U++].slice(1);
        if (B.params === null)
          B.params = u2(Q);
        else if (B.params.name !== Q)
          if (Z)
            return X;
          else
            throw new Error(`Cannot create route "${W}" with parameter "${Q}" because a route already exists with a different parameter name ("${B.params.name}") in the same location`);
        const z = B.params;
        if (z.inert === null) {
          B = z.inert = T0(F);
          continue;
        }
        B = z.inert;
      }
      for (let Q = 0;; ) {
        if (Q === F.length) {
          if (Q < B.part.length) {
            const z = v2(B, B.part.slice(Q));
            Object.assign(B, T0(F, [z]));
          }
          break;
        }
        if (Q === B.part.length) {
          if (B.inert === null)
            B.inert = {};
          const z = B.inert[F.charCodeAt(Q)];
          if (z) {
            B = z, F = F.slice(Q), Q = 0;
            continue;
          }
          const D = T0(F.slice(Q));
          B.inert[F.charCodeAt(Q)] = D, B = D;
          break;
        }
        if (F[Q] !== B.part[Q]) {
          const z = v2(B, B.part.slice(Q)), D = T0(F.slice(Q));
          Object.assign(B, T0(B.part.slice(0, Q), [z, D])), B = D;
          break;
        }
        ++Q;
      }
    }
    if (U < K.length) {
      const w = K[U].slice(1);
      if (B.params === null)
        B.params = u2(w);
      else if (B.params.name !== w)
        if (Z)
          return X;
        else
          throw new Error(`Cannot create route "${W}" with parameter "${w}" because a route already exists with a different parameter name ("${B.params.name}") in the same location`);
      if (B.params.store === null)
        B.params.store = X;
      return B.params.store;
    }
    if (J) {
      if (B.wildcardStore === null)
        B.wildcardStore = X;
      return B.wildcardStore;
    }
    if (B.store === null)
      B.store = X;
    return B.store;
  }
  find($, W) {
    const X = this.root[$];
    if (!X)
      return null;
    return w2(W, W.length, X, 0);
  }
}
var w2 = ($, W, X, Z) => {
  const j = X.part, J = j.length, Y = Z + J;
  if (J > 1) {
    if (Y > W)
      return null;
    if (J < 15) {
      for (let G = 1, K = Z + 1;G < J; ++G, ++K)
        if (j.charCodeAt(G) !== $.charCodeAt(K))
          return null;
    } else if ($.slice(Z, Y) !== j)
      return null;
  }
  if (Y === W) {
    if (X.store !== null)
      return { store: X.store, params: {} };
    if (X.wildcardStore !== null)
      return { store: X.wildcardStore, params: { "*": "" } };
    return null;
  }
  if (X.inert !== null) {
    const G = X.inert[$.charCodeAt(Y)];
    if (G !== undefined) {
      const K = w2($, W, G, Y);
      if (K !== null)
        return K;
    }
  }
  if (X.params !== null) {
    const { store: G, name: K, inert: B } = X.params, U = $.indexOf("/", Y);
    if (U !== Y) {
      if (U === -1 || U >= W) {
        if (G !== null) {
          const w = {};
          return w[K] = $.substring(Y, W), { store: G, params: w };
        }
      } else if (B !== null) {
        const w = w2($, W, B, U);
        if (w !== null)
          return w.params[K] = $.substring(Y, U), w;
      }
    }
  }
  if (X.wildcardStore !== null)
    return { store: X.wildcardStore, params: { "*": $.substring(Y, W) } };
  return null;
};
var E0 = ($) => {
  const W = typeof $ === "object" ? $.fn.toString() : typeof $ === "string" ? $.toString() : $, X = W.indexOf(")");
  if (W.charCodeAt(X + 2) === 61 && W.charCodeAt(X + 5) !== 123)
    return true;
  return W.includes("return");
};
var R1 = ($) => {
  if ($.startsWith("async"))
    $ = $.slice(5);
  $ = $.trimStart();
  let W = -1;
  if ($.charCodeAt(0) === 40) {
    if (W = $.indexOf("=>", $.indexOf(")")), W !== -1) {
      let j = W;
      while (j > 0)
        if ($.charCodeAt(--j) === 41)
          break;
      let J = $.slice(W + 2);
      if (J.charCodeAt(0) === 32)
        J = J.trimStart();
      return [$.slice(1, j), J, { isArrowReturn: J.charCodeAt(0) !== 123 }];
    }
  }
  if ($.startsWith("function")) {
    W = $.indexOf("(");
    const j = $.indexOf(")");
    return [$.slice(W + 1, j), $.slice(j + 2), { isArrowReturn: false }];
  }
  const X = $.indexOf("(");
  if (X !== -1) {
    const j = $.indexOf("\n", 2), J = $.slice(0, j), Y = J.lastIndexOf(")") + 1, G = $.slice(j + 1);
    return [J.slice(X, Y), "{" + G, { isArrowReturn: false }];
  }
  const Z = $.split("\n", 2);
  return [Z[0], Z[1], { isArrowReturn: false }];
};
var b1 = ($) => {
  const W = $.indexOf("{");
  if (W === -1)
    return [-1, 0];
  let X = W + 1, Z = 1;
  for (;X < $.length; X++) {
    const j = $.charCodeAt(X);
    if (j === 123)
      Z++;
    else if (j === 125)
      Z--;
    if (Z === 0)
      break;
  }
  if (Z !== 0)
    return [0, $.length];
  return [W, X + 1];
};
var x1 = ($) => {
  const W = $.lastIndexOf("}");
  if (W === -1)
    return [-1, 0];
  let X = W - 1, Z = 1;
  for (;X >= 0; X--) {
    const j = $.charCodeAt(X);
    if (j === 125)
      Z++;
    else if (j === 123)
      Z--;
    if (Z === 0)
      break;
  }
  if (Z !== 0)
    return [-1, 0];
  return [X, W + 1];
};
var h2 = ($) => {
  while (true) {
    const W = $.indexOf(":");
    if (W === -1)
      break;
    let X = $.indexOf(",", W);
    if (X === -1)
      X = $.indexOf("}", W) - 1;
    if (X === -2)
      X = $.length;
    $ = $.slice(0, W) + $.slice(X);
  }
  return $;
};
var m2 = ($) => {
  let W = false;
  if ($.charCodeAt(0) === 40)
    $ = $.slice(1, -1);
  if ($.charCodeAt(0) === 123)
    W = true, $ = $.slice(1, -1);
  $ = $.replace(/( |\t|\n)/g, "").trim();
  let X = [];
  while (true) {
    let [j, J] = b1($);
    if (j === -1)
      break;
    if (X.push($.slice(0, j - 1)), $.charCodeAt(J) === 44)
      J++;
    $ = $.slice(J);
  }
  if ($ = h2($), $)
    X = X.concat($.split(","));
  const Z = [];
  for (let j of X) {
    if (j.indexOf(",") === -1) {
      Z.push(j);
      continue;
    }
    for (let J of j.split(","))
      Z.push(J.trim());
  }
  return X = Z, { hasParenthesis: W, parameters: X };
};
var g1 = ($, W) => {
  const { parameters: X, hasParenthesis: Z } = m2($);
  if (!W.query && X.includes("query"))
    W.query = true;
  if (!W.headers && X.includes("headers"))
    W.headers = true;
  if (!W.body && X.includes("body"))
    W.body = true;
  if (!W.cookie && X.includes("cookie"))
    W.cookie = true;
  if (!W.set && X.includes("set"))
    W.set = true;
  if (!W.server && X.includes("server"))
    W.server = true;
  if (Z)
    return `{ ${X.join(", ")} }`;
  return X.join(", ");
};
var f1 = ($, W, X) => {
  const Z = W.indexOf($ + "\n", X), j = W.indexOf($ + "\t", X), J = W.indexOf($ + ",", X), Y = W.indexOf($ + ";", X), G = W.indexOf($ + " ", X);
  return [Z, j, J, Y, G].filter((K) => K > 0).sort((K, B) => K - B)[0] || -1;
};
var d2 = ($, W, X = 0) => {
  if (X > 5)
    return [];
  const Z = [];
  let j = W;
  while (true) {
    let J = f1(" = " + $, j);
    if (J === -1) {
      const K = j.indexOf(" = " + $);
      if (K + 3 + $.length !== j.length)
        break;
      J = K;
    }
    const Y = j.slice(0, J);
    let G = Y.slice(Y.lastIndexOf(" ") + 1);
    if (G === "}") {
      const [K, B] = x1(Y);
      Z.push(h2(j.slice(K, B))), j = j.slice(J + 3 + $.length);
      continue;
    }
    while (G.charCodeAt(0) === 44)
      G = G.slice(1);
    while (G.charCodeAt(0) === 9)
      G = G.slice(1);
    if (!G.includes("("))
      Z.push(G);
    j = j.slice(J + 3 + $.length);
  }
  for (let J of Z) {
    if (J.charCodeAt(0) === 123)
      continue;
    const Y = d2(J, W);
    if (Y.length > 0)
      Z.push(...Y);
  }
  return Z;
};
var y1 = ($) => {
  if (!$)
    return;
  if ($.charCodeAt(0) !== 123)
    return $;
  if ($ = $.slice(2, -2), !$.includes(",")) {
    if ($.includes("..."))
      return $.slice($.indexOf("...") + 3);
    return;
  }
  const X = $.indexOf("...");
  if (X === -1)
    return;
  return $.slice(X + 3).trimEnd();
};
var k1 = ($, W, X) => {
  const Z = (j, J) => $.includes(J + "." + j) || $.includes(J + '["' + j + '"]') || $.includes(J + "['" + j + "']");
  for (let j of W) {
    if (!j)
      continue;
    if (j.charCodeAt(0) === 123) {
      const J = m2(j).parameters;
      if (!X.query && J.includes("query"))
        X.query = true;
      if (!X.headers && J.includes("headers"))
        X.headers = true;
      if (!X.body && J.includes("body"))
        X.body = true;
      if (!X.cookie && J.includes("cookie"))
        X.cookie = true;
      if (!X.set && J.includes("set"))
        X.set = true;
      if (!X.query && J.includes("server"))
        X.server = true;
      continue;
    }
    if (!X.query && Z("query", j))
      X.query = true;
    if ($.includes("return " + j) || $.includes("return " + j + ".query"))
      X.query = true;
    if (!X.headers && Z("headers", j))
      X.headers = true;
    if (!X.body && Z("body", j))
      X.body = true;
    if (!X.cookie && Z("cookie", j))
      X.cookie = true;
    if (!X.set && Z("set", j))
      X.set = true;
    if (!X.server && Z("server", j))
      X.server = true;
    if (X.query && X.headers && X.body && X.cookie && X.set && X.server)
      break;
  }
  return W;
};
var v1 = ($, W, X) => {
  try {
    const Z = new RegExp(`(?:\\w)\\((?:.*)?${$}`, "gs");
    Z.test(W);
    const j = W.charCodeAt(Z.lastIndex);
    if (j === 41 || j === 44)
      return X.query = true, X.headers = true, X.body = true, X.cookie = true, X.set = true, X.server = true, true;
    return false;
  } catch (Z) {
    return console.log("[Sucrose] warning: unexpected isContextPassToFunction error, you may continue development as usual but please report the following to maintainers:"), console.log("--- body ---"), console.log(W), console.log("--- context ---"), console.log($), true;
  }
};
var r0 = ($, W = { query: false, headers: false, body: false, cookie: false, set: false, server: false }) => {
  const X = [];
  if ($.handler && typeof $.handler === "function")
    X.push($.handler);
  if ($.request?.length)
    X.push(...$.request);
  if ($.beforeHandle?.length)
    X.push(...$.beforeHandle);
  if ($.parse?.length)
    X.push(...$.parse);
  if ($.error?.length)
    X.push(...$.error);
  if ($.transform?.length)
    X.push(...$.transform);
  if ($.afterHandle?.length)
    X.push(...$.afterHandle);
  if ($.mapResponse?.length)
    X.push(...$.mapResponse);
  if ($.afterResponse?.length)
    X.push(...$.afterResponse);
  for (let Z of X) {
    if (!Z)
      continue;
    const j = "fn" in Z ? Z.fn : Z, [J, Y, { isArrowReturn: G }] = R1(j.toString()), K = g1(J, W), B = y1(K);
    if (B) {
      const U = d2(B, Y);
      if (U.splice(0, -1, B), !v1(B, Y, W))
        k1(Y, U, W);
      if (!W.query && Y.includes("return " + B + ".query"))
        W.query = true;
    }
    if (W.query && W.headers && W.body && W.cookie && W.set && W.server)
      break;
  }
  return W;
};
var s0 = { date: i2, time: _2(true), "date-time": c2(true), "iso-time": _2(false), "iso-date-time": c2(false), duration: /^P(?!$)((\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+S)?)?|(\d+W)?)$/, uri: i1, "uri-reference": /^(?:[a-z][a-z0-9+\-.]*:)?(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'"()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?(?:\?(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i, "uri-template": /^(?:(?:[^\x00-\x20"'<>%\\^`{|}]|%[0-9a-f]{2})|\{[+#./;?&=,!@|]?(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?(?:,(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?)*\})*$/i, url: /^(?:https?|ftp):\/\/(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u{00a1}-\u{ffff}]+-)*[a-z0-9\u{00a1}-\u{ffff}]+)(?:\.(?:[a-z0-9\u{00a1}-\u{ffff}]+-)*[a-z0-9\u{00a1}-\u{ffff}]+)*(?:\.(?:[a-z\u{00a1}-\u{ffff}]{2,})))(?::\d{2,5})?(?:\/[^\s]*)?$/iu, email: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i, hostname: /^(?=.{1,253}\.?$)[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[-0-9a-z]{0,61}[0-9a-z])?)*\.?$/i, ipv4: /^(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)$/, ipv6: /^((([0-9a-f]{1,4}:){7}([0-9a-f]{1,4}|:))|(([0-9a-f]{1,4}:){6}(:[0-9a-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9a-f]{1,4}:){5}(((:[0-9a-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9a-f]{1,4}:){4}(((:[0-9a-f]{1,4}){1,3})|((:[0-9a-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){3}(((:[0-9a-f]{1,4}){1,4})|((:[0-9a-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){2}(((:[0-9a-f]{1,4}){1,5})|((:[0-9a-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){1}(((:[0-9a-f]{1,4}){1,6})|((:[0-9a-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9a-f]{1,4}){1,7})|((:[0-9a-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))$/i, regex: e1, uuid: /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i, "json-pointer": /^(?:\/(?:[^~/]|~0|~1)*)*$/, "json-pointer-uri-fragment": /^#(?:\/(?:[a-z0-9_\-.!$&'()*+,;:=@]|%[0-9a-f]{2}|~0|~1)*)*$/i, "relative-json-pointer": /^(?:0|[1-9][0-9]*)(?:#|(?:\/(?:[^~/]|~0|~1)*)*)$/, byte: n1, int32: { type: "number", validate: s1 }, int64: { type: "number", validate: a1 }, float: { type: "number", validate: l2 }, double: { type: "number", validate: l2 }, password: true, binary: true };
var h1 = /^(\d\d\d\d)-(\d\d)-(\d\d)$/;
var m1 = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var d1 = /^(\d\d):(\d\d):(\d\d(?:\.\d+)?)(z|([+-])(\d\d)(?::?(\d\d))?)?$/i;
var c1 = /t|\s/i;
var p1 = /\/|:/;
var l1 = /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)(?:\?(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i;
var p2 = /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/gm;
var t1 = -2147483648;
var r1 = 2147483647;
var o1 = /[^\\]\\Z/;
var r2 = /(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))/;
var s2 = /(?:Sun|Mon|Tue|Wed|Thu|Fri|Sat)\s(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s\d{2}\s\d{4}\s\d{2}:\d{2}:\d{2}\sGMT(?:\+|-)\d{4}\s\([^)]+\)/;
var a2 = /^(?:(?:(?:(?:0?[1-9]|[12][0-9]|3[01])[/\s-](?:0?[1-9]|1[0-2])[/\s-](?:19|20)\d{2})|(?:(?:19|20)\d{2}[/\s-](?:0?[1-9]|1[0-2])[/\s-](?:0?[1-9]|[12][0-9]|3[01]))))(?:\s(?:1[012]|0?[1-9]):[0-5][0-9](?::[0-5][0-9])?(?:\s[AP]M)?)?$/;
var W3 = s0.date;
var X3 = s0["date-time"];
if (!exports_format.Has("date"))
  TypeSystem.Format("date", ($) => {
    const W = $.replace(/"/g, "");
    if (r2.test(W) || s2.test(W) || a2.test(W) || W3(W)) {
      const X = new Date(W);
      if (!Number.isNaN(X.getTime()))
        return true;
    }
    return false;
  });
if (!exports_format.Has("date-time"))
  TypeSystem.Format("date-time", ($) => {
    const W = $.replace(/"/g, "");
    if (r2.test(W) || s2.test(W) || a2.test(W) || X3(W)) {
      const X = new Date(W);
      if (!Number.isNaN(X.getTime()))
        return true;
    }
    return false;
  });
Object.entries(s0).forEach(($) => {
  const [W, X] = $;
  if (!exports_format.Has(W)) {
    if (X instanceof RegExp)
      TypeSystem.Format(W, (Z) => X.test(Z));
    else if (typeof X === "function")
      TypeSystem.Format(W, X);
  }
});
var V = Object.assign({}, Type);
var t2 = ($) => {
  if (typeof $ === "string")
    switch ($.slice(-1)) {
      case "k":
        return +$.slice(0, $.length - 1) * 1024;
      case "m":
        return +$.slice(0, $.length - 1) * 1048576;
      default:
        return +$;
    }
  return $;
};
var F2 = ($, W) => {
  if (!(W instanceof Blob))
    return false;
  if ($.minSize && W.size < t2($.minSize))
    return false;
  if ($.maxSize && W.size > t2($.maxSize))
    return false;
  if ($.extension)
    if (typeof $.extension === "string") {
      if (!W.type.startsWith($.extension))
        return false;
    } else {
      for (let X = 0;X < $.extension.length; X++)
        if (W.type.startsWith($.extension[X]))
          return true;
      return false;
    }
  return true;
};
var Z3 = exports_type.Get("Files") ?? TypeSystem.Type("File", F2);
var j3 = exports_type.Get("Files") ?? TypeSystem.Type("Files", ($, W) => {
  if (!Array.isArray(W))
    return F2($, W);
  if ($.minItems && W.length < $.minItems)
    return false;
  if ($.maxItems && W.length > $.maxItems)
    return false;
  for (let X = 0;X < W.length; X++)
    if (!F2($, W[X]))
      return false;
  return true;
});
if (!exports_format.Has("numeric"))
  exports_format.Set("numeric", ($) => !!$ && !isNaN(+$));
if (!exports_format.Has("boolean"))
  exports_format.Set("boolean", ($) => $ === "true" || $ === "false");
if (!exports_format.Has("ObjectString"))
  exports_format.Set("ObjectString", ($) => {
    let W = $.charCodeAt(0);
    if (W === 9 || W === 10 || W === 32)
      W = $.trimStart().charCodeAt(0);
    if (W !== 123 && W !== 91)
      return false;
    try {
      return JSON.parse($), true;
    } catch {
      return false;
    }
  });
if (!exports_format.Has("ArrayString"))
  exports_format.Set("ArrayString", ($) => {
    let W = $.charCodeAt(0);
    if (W === 9 || W === 10 || W === 32)
      W = $.trimStart().charCodeAt(0);
    if (W !== 123 && W !== 91)
      return false;
    try {
      return JSON.parse($), true;
    } catch {
      return false;
    }
  });
exports_type.Set("UnionEnum", ($, W) => {
  return (typeof W === "number" || typeof W === "string" || W === null) && $.enum.includes(W);
});
var X0 = { Numeric: ($) => {
  const W = Type.Number($);
  return V.Transform(V.Union([V.String({ format: "numeric", default: 0 }), V.Number($)], $)).Decode((X) => {
    const Z = +X;
    if (isNaN(Z))
      return X;
    if ($ && !exports_value2.Check(W, Z))
      throw new q("property", W, Z);
    return Z;
  }).Encode((X) => X);
}, Date: ($) => {
  const W = Type.Date($);
  return V.Transform(V.Union([Type.Date($), V.String({ format: "date", default: new Date().toISOString() }), V.String({ format: "date-time", default: new Date().toISOString() })], $)).Decode((X) => {
    if (X instanceof Date)
      return X;
    const Z = new Date(X);
    if (!exports_value2.Check(W, Z))
      throw new q("property", W, Z);
    return Z;
  }).Encode((X) => {
    if (typeof X === "string")
      return new Date(X);
    return X;
  });
}, BooleanString: ($) => {
  const W = Type.Boolean($);
  return V.Transform(V.Union([V.String({ format: "boolean", default: false }), V.Boolean($)], $)).Decode((X) => {
    if (typeof X === "string")
      return X === "true";
    if ($ && !exports_value2.Check(W, X))
      throw new q("property", W, X);
    return X;
  }).Encode((X) => X);
}, ObjectString: ($, W) => {
  const X = V.Object($, W), Z = JSON.stringify(exports_value2.Create(X));
  let j;
  try {
    j = TypeCompiler.Compile(X);
  } catch {
  }
  return V.Transform(V.Union([V.String({ format: "ObjectString", default: Z }), X])).Decode((J) => {
    if (typeof J === "string") {
      if (J.charCodeAt(0) !== 123)
        throw new q("property", X, J);
      try {
        J = JSON.parse(J);
      } catch {
        throw new q("property", X, J);
      }
      if (j) {
        if (!j.Check(J))
          throw new q("property", X, J);
        return j.Decode(J);
      }
      if (!exports_value2.Check(X, J))
        throw new q("property", X, J);
      return exports_value2.Decode(X, J);
    }
    return J;
  }).Encode((J) => {
    if (typeof J === "string")
      try {
        J = JSON.parse(J);
      } catch {
        throw new q("property", X, J);
      }
    if (!exports_value2.Check(X, J))
      throw new q("property", X, J);
    return JSON.stringify(J);
  });
}, ArrayString: ($ = {}, W) => {
  const X = V.Array($, W), Z = JSON.stringify(exports_value2.Create(X));
  let j;
  try {
    j = TypeCompiler.Compile(X);
  } catch {
  }
  return V.Transform(V.Union([V.String({ format: "ArrayString", default: Z }), X])).Decode((J) => {
    if (typeof J === "string") {
      if (J.charCodeAt(0) !== 91)
        throw new q("property", X, J);
      try {
        J = JSON.parse(J);
      } catch {
        throw new q("property", X, J);
      }
      if (j) {
        if (!j.Check(J))
          throw new q("property", X, J);
        return j.Decode(J);
      }
      if (!exports_value2.Check(X, J))
        throw new q("property", X, J);
      return exports_value2.Decode(X, J);
    }
    return J;
  }).Encode((J) => {
    if (typeof J === "string")
      try {
        J = JSON.parse(J);
      } catch {
        throw new q("property", X, J);
      }
    if (!exports_value2.Check(X, J))
      throw new q("property", X, J);
    return JSON.stringify(J);
  });
}, File: Z3, Files: ($ = {}) => V.Transform(j3($)).Decode((W) => {
  if (Array.isArray(W))
    return W;
  return [W];
}).Encode((W) => W), Nullable: ($) => V.Union([$, V.Null()]), MaybeEmpty: ($) => V.Union([$, V.Null(), V.Undefined()]), Cookie: ($, { domain: W, expires: X, httpOnly: Z, maxAge: j, path: J, priority: Y, sameSite: G, secure: K, secrets: B, sign: U, ...w } = {}) => {
  const F = V.Object($, w);
  return F.config = { domain: W, expires: X, httpOnly: Z, maxAge: j, path: J, priority: Y, sameSite: G, secure: K, secrets: B, sign: U }, F;
}, UnionEnum: ($, W = {}) => {
  const X = $.every((Z) => typeof Z === "string") ? { type: "string" } : $.every((Z) => typeof Z === "number") ? { type: "number" } : $.every((Z) => Z === null) ? { type: "null" } : {};
  if ($.some((Z) => typeof Z === "object" && Z !== null))
    throw new Error("This type does not support objects or arrays");
  return { default: $[0], ...W, [Kind]: "UnionEnum", ...X, enum: $ };
} };
V.BooleanString = X0.BooleanString;
V.ObjectString = X0.ObjectString;
V.ArrayString = X0.ArrayString;
V.Numeric = X0.Numeric;
V.File = ($ = {}) => X0.File({ default: "File", ...$, extension: $?.type, type: "string", format: "binary" });
V.Files = ($ = {}) => X0.Files({ ...$, elysiaMeta: "Files", default: "Files", extension: $?.type, type: "array", items: { ...$, default: "Files", type: "string", format: "binary" } });
V.Nullable = ($) => X0.Nullable($);
V.MaybeEmpty = X0.MaybeEmpty;
V.Cookie = X0.Cookie;
V.Date = X0.Date;
V.UnionEnum = X0.UnionEnum;
/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */
var z2 = Q3;
var D2 = Y3;
var J3 = Object.prototype.toString;
var a0 = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
var X1 = U2(o0(), 1);

class w0 {
  $;
  W;
  X;
  constructor($, W, X = {}) {
    this.name = $;
    this.jar = W;
    this.initial = X;
  }
  get cookie() {
    return this.jar[this.name] ?? this.initial;
  }
  set cookie($) {
    if (!(this.name in this.jar))
      this.jar[this.name] = this.initial;
    this.jar[this.name] = $;
  }
  get setCookie() {
    if (!(this.name in this.jar))
      this.jar[this.name] = this.initial;
    return this.jar[this.name];
  }
  set setCookie($) {
    this.cookie = $;
  }
  get value() {
    return this.cookie.value;
  }
  set value($) {
    this.setCookie.value = $;
  }
  get expires() {
    return this.cookie.expires;
  }
  set expires($) {
    this.setCookie.expires = $;
  }
  get maxAge() {
    return this.cookie.maxAge;
  }
  set maxAge($) {
    this.setCookie.maxAge = $;
  }
  get domain() {
    return this.cookie.domain;
  }
  set domain($) {
    this.setCookie.domain = $;
  }
  get path() {
    return this.cookie.path;
  }
  set path($) {
    this.setCookie.path = $;
  }
  get secure() {
    return this.cookie.secure;
  }
  set secure($) {
    this.setCookie.secure = $;
  }
  get httpOnly() {
    return this.cookie.httpOnly;
  }
  set httpOnly($) {
    this.setCookie.httpOnly = $;
  }
  get sameSite() {
    return this.cookie.sameSite;
  }
  set sameSite($) {
    this.setCookie.sameSite = $;
  }
  get priority() {
    return this.cookie.priority;
  }
  set priority($) {
    this.setCookie.priority = $;
  }
  get partitioned() {
    return this.cookie.partitioned;
  }
  set partitioned($) {
    this.setCookie.partitioned = $;
  }
  get secrets() {
    return this.cookie.secrets;
  }
  set secrets($) {
    this.setCookie.secrets = $;
  }
  update($) {
    return this.setCookie = Object.assign(this.cookie, typeof $ === "function" ? $(this.cookie) : $), this;
  }
  set($) {
    return this.setCookie = Object.assign({ ...this.initial, value: this.value }, typeof $ === "function" ? $(this.cookie) : $), this;
  }
  remove() {
    if (this.value === undefined)
      return;
    return this.set({ expires: new Date(0), maxAge: 0, value: "" }), this;
  }
  toString() {
    return typeof this.value === "object" ? JSON.stringify(this.value) : this.value?.toString() ?? "";
  }
}
var W1 = ($, W, X) => {
  if (!$.cookie)
    $.cookie = {};
  return new Proxy(W, { get(Z, j) {
    if (j in W)
      return new w0(j, $.cookie, Object.assign({}, X ?? {}, W[j]));
    return new w0(j, $.cookie, Object.assign({}, X));
  } });
};
var e0 = async ($, W, { secrets: X, sign: Z, ...j } = {}) => {
  if (!W)
    return W1($, {}, j);
  const J = typeof X === "string";
  if (Z && Z !== true && !Array.isArray(Z))
    Z = [Z];
  const Y = {}, G = z2(W);
  for (let [K, B] of Object.entries(G)) {
    let U = X1.default(B);
    if (Z === true || Z?.includes(K)) {
      if (!X)
        throw new Error("No secret is provided to cookie plugin");
      if (J) {
        const w = await P2(U, X);
        if (w === false)
          throw new v0(K);
        U = w;
      } else {
        let w = true;
        for (let F = 0;F < X.length; F++) {
          const Q = await P2(U, X[F]);
          if (Q !== false) {
            w = true, U = Q;
            break;
          }
        }
        if (!w)
          throw new v0(K);
      }
    }
    Y[K] = { value: U };
  }
  return W1($, Y, j);
};
var Z1 = "toJSON" in new Headers;
var c = ($) => {
  if (!$)
    return false;
  for (let W in $)
    return true;
  return false;
};
var u0 = ($, W) => {
  const X = $.size;
  if (!W && X || X && W && W.status !== 206 && W.status !== 304 && W.status !== 412 && W.status !== 416) {
    if (W && c(W.headers)) {
      if (W.headers instanceof Headers) {
        if (Z1)
          W.headers = W.headers.toJSON();
        else
          for (let [Z, j] of W.headers.entries())
            if (Z in W.headers)
              W.headers[Z] = j;
      }
      return new Response($, { status: W.status, headers: Object.assign({ "accept-ranges": "bytes", "content-range": `bytes 0-${X - 1}/${X}` }, W.headers) });
    }
    return new Response($, { headers: { "accept-ranges": "bytes", "content-range": `bytes 0-${X - 1}/${X}`, "transfer-encoding": "chunked" } });
  }
  return new Response($);
};
var j1 = ($, W) => {
  if (!$)
    return $;
  $.delete("set-cookie");
  for (let X = 0;X < W.length; X++) {
    const Z = W[X].indexOf("=");
    $.append("set-cookie", `${W[X].slice(0, Z)}=${W[X].slice(Z + 1) || ""}`);
  }
  return $;
};
var J1 = ($) => {
  if (!$ || !c($))
    return;
  const W = [];
  for (let [X, Z] of Object.entries($)) {
    if (!X || !Z)
      continue;
    const j = Z.value;
    if (j === undefined || j === null)
      continue;
    W.push(D2(X, typeof j === "object" ? JSON.stringify(j) : j + "", Z));
  }
  if (W.length === 0)
    return;
  if (W.length === 1)
    return W[0];
  return W;
};
var B0 = async ($, W, X) => {
  let Z = $.next();
  if (Z instanceof Promise)
    Z = await Z;
  if (Z.done) {
    if (W)
      return x(Z.value, W, X);
    return Z0(Z.value, X);
  }
  return new Response(new ReadableStream({ async start(j) {
    let J = false;
    if (X?.signal.addEventListener("abort", () => {
      J = true;
      try {
        j.close();
      } catch {
      }
    }), Z.value !== undefined && Z.value !== null)
      if (typeof Z.value === "object")
        try {
          j.enqueue(Buffer.from(JSON.stringify(Z.value)));
        } catch {
          j.enqueue(Buffer.from(Z.value.toString()));
        }
      else
        j.enqueue(Buffer.from(Z.value.toString()));
    for await (let Y of $) {
      if (J)
        break;
      if (Y === undefined || Y === null)
        continue;
      if (typeof Y === "object")
        try {
          j.enqueue(Buffer.from(JSON.stringify(Y)));
        } catch {
          j.enqueue(Buffer.from(Y.toString()));
        }
      else
        j.enqueue(Buffer.from(Y.toString()));
      await new Promise((G) => setTimeout(() => G(), 0));
    }
    try {
      j.close();
    } catch {
    }
  } }), { ...W, headers: { "transfer-encoding": "chunked", "content-type": "text/event-stream; charset=utf-8", ...W?.headers } });
};
var x = ($, W, X) => {
  if (c(W.headers) || W.status !== 200 || W.redirect || W.cookie) {
    if (typeof W.status === "string")
      W.status = _0[W.status];
    if (W.redirect) {
      if (W.headers.Location = W.redirect, !W.status || W.status < 300 || W.status >= 400)
        W.status = 302;
    }
    if (W.cookie && c(W.cookie)) {
      const Z = J1(W.cookie);
      if (Z)
        W.headers["set-cookie"] = Z;
    }
    if (W.headers["set-cookie"] && Array.isArray(W.headers["set-cookie"]))
      W.headers = j1(new Headers(W.headers), W.headers["set-cookie"]);
    switch ($?.constructor?.name) {
      case "String":
        return new Response($, W);
      case "Blob":
        return u0($, W);
      case "Array":
        return Response.json($, W);
      case "Object":
        return Response.json($, W);
      case "ElysiaCustomStatusResponse":
        return W.status = $.code, x($.response, W, X);
      case "ReadableStream":
        if (!W.headers["content-type"]?.startsWith("text/event-stream"))
          W.headers["content-type"] = "text/event-stream; charset=utf-8";
        return X?.signal.addEventListener("abort", { handleEvent() {
          if (!X?.signal.aborted)
            $.cancel(X);
        } }, { once: true }), new Response($, W);
      case undefined:
        if (!$)
          return new Response("", W);
        return Response.json($, W);
      case "Response":
        let Z = false;
        if (W.headers instanceof Headers)
          for (let j of W.headers.keys())
            if (j === "set-cookie") {
              if (Z)
                continue;
              Z = true;
              for (let J of W.headers.getSetCookie())
                $.headers.append("set-cookie", J);
            } else
              $.headers.append(j, W.headers?.get(j) ?? "");
        else
          for (let j in W.headers)
            $.headers.append(j, W.headers[j]);
        if ($.status !== W.status)
          W.status = $.status;
        if ($.headers.get("transfer-encoding") === "chunked")
          return B0(h0($), W, X);
        return $;
      case "Error":
        return K0($, W);
      case "Promise":
        return $.then((j) => x(j, W));
      case "Function":
        return x($(), W);
      case "Number":
      case "Boolean":
        return new Response($.toString(), W);
      case "Cookie":
        if ($ instanceof w0)
          return new Response($.value, W);
        return new Response($?.toString(), W);
      case "FormData":
        return new Response($, W);
      default:
        if ($ instanceof Response) {
          let j = false;
          if (W.headers instanceof Headers)
            for (let J of W.headers.keys())
              if (J === "set-cookie") {
                if (j)
                  continue;
                j = true;
                for (let Y of W.headers.getSetCookie())
                  $.headers.append("set-cookie", Y);
              } else
                $.headers.append(J, W.headers?.get(J) ?? "");
          else
            for (let J in W.headers)
              $.headers.append(J, W.headers[J]);
          if (Z1)
            W.headers = $.headers.toJSON();
          else
            for (let [J, Y] of $.headers.entries())
              if (J in W.headers)
                W.headers[J] = Y;
          return $;
        }
        if ($ instanceof Promise)
          return $.then((j) => x(j, W));
        if ($ instanceof Error)
          return K0($, W);
        if ($ instanceof p)
          return W.status = $.code, x($.response, W, X);
        if (typeof $?.next === "function")
          return B0($, W, X);
        if ("toResponse" in $)
          return x($.toResponse(), W);
        if ("charCodeAt" in $) {
          const j = $.charCodeAt(0);
          if (j === 123 || j === 91) {
            if (!W.headers["Content-Type"])
              W.headers["Content-Type"] = "application/json";
            return new Response(JSON.stringify($), W);
          }
        }
        return new Response($, W);
    }
  } else
    switch ($?.constructor?.name) {
      case "String":
        return new Response($);
      case "Blob":
        return u0($, W);
      case "Array":
        return Response.json($);
      case "Object":
        return Response.json($, W);
      case "ElysiaCustomStatusResponse":
        return W.status = $.code, x($.response, W, X);
      case "ReadableStream":
        return X?.signal.addEventListener("abort", { handleEvent() {
          if (!X?.signal.aborted)
            $.cancel(X);
        } }, { once: true }), new Response($, { headers: { "Content-Type": "text/event-stream; charset=utf-8" } });
      case undefined:
        if (!$)
          return new Response("");
        return new Response(JSON.stringify($), { headers: { "content-type": "application/json" } });
      case "Response":
        if ($.headers.get("transfer-encoding") === "chunked")
          return B0(h0($), W, X);
        return $;
      case "Error":
        return K0($, W);
      case "Promise":
        return $.then((Z) => {
          const j = Z0(Z, X);
          if (j !== undefined)
            return j;
          return new Response("");
        });
      case "Function":
        return Z0($(), X);
      case "Number":
      case "Boolean":
        return new Response($.toString());
      case "Cookie":
        if ($ instanceof w0)
          return new Response($.value, W);
        return new Response($?.toString(), W);
      case "FormData":
        return new Response($, W);
      default:
        if ($ instanceof Response)
          return $;
        if ($ instanceof Promise)
          return $.then((Z) => x(Z, W));
        if ($ instanceof Error)
          return K0($, W);
        if ($ instanceof p)
          return W.status = $.code, x($.response, W, X);
        if (typeof $?.next === "function")
          return B0($, W, X);
        if ("toResponse" in $)
          return x($.toResponse(), W);
        if ("charCodeAt" in $) {
          const Z = $.charCodeAt(0);
          if (Z === 123 || Z === 91) {
            if (!W.headers["Content-Type"])
              W.headers["Content-Type"] = "application/json";
            return new Response(JSON.stringify($), W);
          }
        }
        return new Response($);
    }
};
var y = ($, W, X) => {
  if ($ === undefined || $ === null)
    return;
  if (c(W.headers) || W.status !== 200 || W.redirect || W.cookie) {
    if (typeof W.status === "string")
      W.status = _0[W.status];
    if (W.redirect) {
      if (W.headers.Location = W.redirect, !W.status || W.status < 300 || W.status >= 400)
        W.status = 302;
    }
    if (W.cookie && c(W.cookie)) {
      const Z = J1(W.cookie);
      if (Z)
        W.headers["set-cookie"] = Z;
    }
    if (W.headers["set-cookie"] && Array.isArray(W.headers["set-cookie"]))
      W.headers = j1(new Headers(W.headers), W.headers["set-cookie"]);
    switch ($?.constructor?.name) {
      case "String":
        return new Response($, W);
      case "Blob":
        return u0($, W);
      case "Array":
        return Response.json($, W);
      case "Object":
        return Response.json($, W);
      case "ElysiaCustomStatusResponse":
        return W.status = $.code, y($.response, W, X);
      case "ReadableStream":
        if (!W.headers["content-type"]?.startsWith("text/event-stream"))
          W.headers["content-type"] = "text/event-stream; charset=utf-8";
        return X?.signal.addEventListener("abort", { handleEvent() {
          if (!X?.signal.aborted)
            $.cancel(X);
        } }, { once: true }), new Response($, W);
      case undefined:
        if (!$)
          return;
        return Response.json($, W);
      case "Response":
        let Z = false;
        if (W.headers instanceof Headers)
          for (let j of W.headers.keys())
            if (j === "set-cookie") {
              if (Z)
                continue;
              Z = true;
              for (let J of W.headers.getSetCookie())
                $.headers.append("set-cookie", J);
            } else
              $.headers.append(j, W.headers?.get(j) ?? "");
        else
          for (let j in W.headers)
            $.headers.append(j, W.headers[j]);
        if ($.status !== W.status)
          W.status = $.status;
        if ($.headers.get("transfer-encoding") === "chunked")
          return B0(h0($), W, X);
        return $;
      case "Promise":
        return $.then((j) => {
          const J = y(j, W);
          if (J !== undefined)
            return J;
        });
      case "Error":
        return K0($, W);
      case "Function":
        return y($(), W);
      case "Number":
      case "Boolean":
        return new Response($.toString(), W);
      case "FormData":
        return new Response($);
      case "Cookie":
        if ($ instanceof w0)
          return new Response($.value, W);
        return new Response($?.toString(), W);
      default:
        if ($ instanceof Response) {
          let j = false;
          if (W.headers instanceof Headers)
            for (let J of W.headers.keys())
              if (J === "set-cookie") {
                if (j)
                  continue;
                j = true;
                for (let Y of W.headers.getSetCookie())
                  $.headers.append("set-cookie", Y);
              } else
                $.headers.append(J, W.headers?.get(J) ?? "");
          else
            for (let J in W.headers)
              $.headers.append(J, W.headers[J]);
          if ($.status !== W.status)
            W.status = $.status;
          return $;
        }
        if ($ instanceof Promise)
          return $.then((j) => y(j, W));
        if ($ instanceof Error)
          return K0($, W);
        if ($ instanceof p)
          return W.status = $.code, y($.response, W, X);
        if (typeof $?.next === "function")
          return B0($, W, X);
        if ("toResponse" in $)
          return y($.toResponse(), W);
        if ("charCodeAt" in $) {
          const j = $.charCodeAt(0);
          if (j === 123 || j === 91) {
            if (!W.headers["Content-Type"])
              W.headers["Content-Type"] = "application/json";
            return new Response(JSON.stringify($), W);
          }
        }
        return new Response($, W);
    }
  } else
    switch ($?.constructor?.name) {
      case "String":
        return new Response($);
      case "Blob":
        return u0($, W);
      case "Array":
        return Response.json($);
      case "Object":
        return Response.json($, W);
      case "ElysiaCustomStatusResponse":
        return W.status = $.code, y($.response, W, X);
      case "ReadableStream":
        return X?.signal.addEventListener("abort", { handleEvent() {
          if (!X?.signal.aborted)
            $.cancel(X);
        } }, { once: true }), new Response($, { headers: { "Content-Type": "text/event-stream; charset=utf-8" } });
      case undefined:
        if (!$)
          return new Response("");
        return new Response(JSON.stringify($), { headers: { "content-type": "application/json" } });
      case "Response":
        if ($.headers.get("transfer-encoding") === "chunked")
          return B0(h0($));
        return $;
      case "Promise":
        return $.then((Z) => {
          const j = y(Z, W);
          if (j !== undefined)
            return j;
        });
      case "Error":
        return K0($, W);
      case "Function":
        return Z0($(), X);
      case "Number":
      case "Boolean":
        return new Response($.toString());
      case "Cookie":
        if ($ instanceof w0)
          return new Response($.value, W);
        return new Response($?.toString(), W);
      case "FormData":
        return new Response($);
      default:
        if ($ instanceof Response)
          return $;
        if ($ instanceof Promise)
          return $.then((Z) => y(Z, W));
        if ($ instanceof Error)
          return K0($, W);
        if ($ instanceof p)
          return W.status = $.code, y($.response, W, X);
        if (typeof $?.next === "function")
          return B0($, W, X);
        if ("toResponse" in $)
          return y($.toResponse(), W);
        if ("charCodeAt" in $) {
          const Z = $.charCodeAt(0);
          if (Z === 123 || Z === 91) {
            if (!W.headers["Content-Type"])
              W.headers["Content-Type"] = "application/json";
            return new Response(JSON.stringify($), W);
          }
        }
        return new Response($);
    }
};
var Z0 = ($, W) => {
  switch ($?.constructor?.name) {
    case "String":
      return new Response($);
    case "Blob":
      return u0($);
    case "Array":
      return Response.json($);
    case "Object":
      return Response.json($);
    case "ElysiaCustomStatusResponse":
      return x($.response, { status: $.code, headers: {} });
    case "ReadableStream":
      return W?.signal.addEventListener("abort", { handleEvent() {
        if (!W?.signal.aborted)
          $.cancel(W);
      } }, { once: true }), new Response($, { headers: { "Content-Type": "text/event-stream; charset=utf-8" } });
    case undefined:
      if (!$)
        return new Response("");
      return new Response(JSON.stringify($), { headers: { "content-type": "application/json" } });
    case "Response":
      if ($.headers.get("transfer-encoding") === "chunked")
        return B0(h0($));
      return $;
    case "Error":
      return K0($);
    case "Promise":
      return $.then((X) => Z0(X, W));
    case "Function":
      return Z0($(), W);
    case "Number":
    case "Boolean":
      return new Response($.toString());
    case "FormData":
      return new Response($);
    default:
      if ($ instanceof Response)
        return $;
      if ($ instanceof Promise)
        return $.then((X) => Z0(X, W));
      if ($ instanceof Error)
        return K0($);
      if ($ instanceof p)
        return x($.response, { status: $.code, headers: {} });
      if (typeof $?.next === "function")
        return B0($, undefined, W);
      if ("toResponse" in $)
        return Z0($.toResponse());
      if ("charCodeAt" in $) {
        const X = $.charCodeAt(0);
        if (X === 123 || X === 91)
          return new Response(JSON.stringify($), { headers: { "Content-Type": "application/json" } });
      }
      return new Response($);
  }
};
var K0 = ($, W) => new Response(JSON.stringify({ name: $?.name, message: $?.message, cause: $?.cause }), { status: W?.status !== 200 ? W?.status ?? 500 : 500, headers: W?.headers });
var Q1 = ($, W, X = {}) => {
  if (typeof $ === "function")
    return;
  const Z = x($, { headers: X });
  if (W.parse.length === 0 && W.transform.length === 0 && W.beforeHandle.length === 0 && W.afterHandle.length === 0)
    return Z.clone.bind(Z);
};
var Y1 = ($, W, X = {}) => {
  if (typeof $ === "function" || $ instanceof Blob)
    return;
  const Z = x($, { headers: X });
  if (W.parse.length === 0 && W.transform.length === 0 && W.beforeHandle.length === 0 && W.afterHandle.length === 0) {
    if (!Z.headers.has("content-type"))
      Z.headers.append("content-type", "text/plain;charset=utf-8");
    return Z.clone.bind(Z);
  }
};
var R0 = ($, W) => {
  const X = new URL($);
  return X.pathname = W, X.toString();
};
var M3 = ($) => typeof $ === "function" && /^\s*class\s+/.test($.toString()) || $.toString().startsWith("[object ") && $.toString() !== "[object Object]" || c(Object.getPrototypeOf($));
var I2 = ($) => $ && typeof $ === "object" && !Array.isArray($);
var d = ($, W, { skipKeys: X, override: Z = true } = {}) => {
  if (!I2($) || !I2(W))
    return $;
  for (let [j, J] of Object.entries(W)) {
    if (X?.includes(j))
      continue;
    if (!I2(J) || !(j in $) || M3(J)) {
      if (Z || !(j in $))
        $[j] = J;
      continue;
    }
    $[j] = d($[j], J, { skipKeys: X, override: Z });
  }
  return $;
};
var z3 = ($, W) => {
  const { properties: X, ...Z } = $ ?? {}, { properties: j, ...J } = W ?? {};
  return d(Z, J);
};
var f = ($ = [], W = []) => {
  if (!$)
    return [];
  if (!W)
    return $;
  const X = [], Z = [];
  if (!Array.isArray($))
    $ = [$];
  if (!Array.isArray(W))
    W = [W];
  for (let j of $)
    if (X.push(j), j.checksum)
      Z.push(j.checksum);
  for (let j of W)
    if (!Z.includes(j.checksum))
      X.push(j);
  return X;
};
var D3 = ["start", "request", "parse", "transform", "resolve", "beforeHandle", "afterHandle", "mapResponse", "afterResponse", "trace", "error", "stop", "body", "headers", "params", "query", "response", "type", "detail"];
var N3 = D3.reduce(($, W) => ($[W] = true, $), {});
var U1 = ($, W) => {
  const X = (Z) => typeof Z === "object" && Object.keys(Z).every(Z2);
  if (X($) && X(W))
    return { ...$, ...W };
  else if ($ && !X($) && X(W))
    return { 200: $, ...W };
  return W ?? $;
};
var b0 = ($, W) => {
  return { body: W?.body ?? $?.body, headers: W?.headers ?? $?.headers, params: W?.params ?? $?.params, query: W?.query ?? $?.query, cookie: W?.cookie ?? $?.cookie, response: U1($?.response, W?.response) };
};
var i = ($, W) => {
  return { ...$, ...W, body: W?.body ?? $?.body, headers: W?.headers ?? $?.headers, params: W?.params ?? $?.params, query: W?.query ?? $?.query, cookie: W?.cookie ?? $?.cookie, response: U1($?.response, W?.response), type: $?.type || W?.type, detail: d(W?.detail ?? {}, $?.detail ?? {}), parse: f($?.parse, W?.parse), transform: f($?.transform, W?.transform), beforeHandle: f($?.beforeHandle, W?.beforeHandle), afterHandle: f($?.afterHandle, W?.afterHandle), mapResponse: f($?.mapResponse, W?.mapResponse), afterResponse: f($?.afterResponse, W?.afterResponse), trace: f($?.trace, W?.trace), error: f($?.error, W?.error) };
};
var V2 = ($, W, X = true) => {
  if (!Array.isArray(W))
    return h($, W, X);
  for (let Z of W)
    $ = h($, Z, X);
  return $;
};
var h = ($, W, X = true) => {
  if (!$)
    return $;
  if (W.untilObjectFound && !X && $.type === "object")
    return $;
  const Z = W.from[Kind];
  if ($.oneOf) {
    for (let Y = 0;Y < $.oneOf.length; Y++)
      $.oneOf[Y] = h($.oneOf[Y], W, X);
    return $;
  }
  if ($.anyOf) {
    for (let Y = 0;Y < $.anyOf.length; Y++)
      $.anyOf[Y] = h($.anyOf[Y], W, X);
    return $;
  }
  if ($.allOf) {
    for (let Y = 0;Y < $.allOf.length; Y++)
      $.allOf[Y] = h($.allOf[Y], W, X);
    return $;
  }
  if ($.not) {
    for (let Y = 0;Y < $.not.length; Y++)
      $.not[Y] = h($.not[Y], W, X);
    return $;
  }
  const j = X && !!W.excludeRoot;
  if ($[Kind] === Z) {
    const { anyOf: Y, oneOf: G, allOf: K, not: B, properties: U, items: w, ...F } = $, Q = W.to(F);
    let z;
    const D = (M) => {
      if (U && M.type === "object") {
        const O = {};
        for (let [P, b] of Object.entries(U))
          O[P] = h(b, W, false);
        return { ...F, ...M, properties: O };
      }
      if (w && M.type === "array")
        return { ...F, ...M, items: h(w, W, false) };
      const I = { ...F, ...M };
      if (delete I.required, U && M.type === "string" && M.format === "ObjectString" && M.default === "{}")
        z = V.ObjectString(U, F), I.default = JSON.stringify(exports_value2.Create(V.Object(U))), I.properties = U;
      if (w && M.type === "string" && M.format === "ArrayString" && M.default === "[]")
        z = V.ArrayString(w, F), I.default = JSON.stringify(exports_value2.Create(V.Array(w))), I.items = w;
      return I;
    };
    if (j) {
      if (U) {
        const M = {};
        for (let [I, O] of Object.entries(U))
          M[I] = h(O, W, false);
        return { ...F, properties: M };
      } else if (w?.map)
        return { ...F, items: w.map((M) => h(M, W, false)) };
      return F;
    }
    if (Q.anyOf)
      for (let M = 0;M < Q.anyOf.length; M++)
        Q.anyOf[M] = D(Q.anyOf[M]);
    else if (Q.oneOf)
      for (let M = 0;M < Q.oneOf.length; M++)
        Q.oneOf[M] = D(Q.oneOf[M]);
    else if (Q.allOf)
      for (let M = 0;M < Q.allOf.length; M++)
        Q.allOf[M] = D(Q.allOf[M]);
    else if (Q.not)
      for (let M = 0;M < Q.not.length; M++)
        Q.not[M] = D(Q.not[M]);
    if (z)
      Q[TransformKind] = z[TransformKind];
    if (Q.anyOf || Q.oneOf || Q.allOf || Q.not)
      return Q;
    if (U) {
      const M = {};
      for (let [I, O] of Object.entries(U))
        M[I] = h(O, W, false);
      return { ...F, ...Q, properties: M };
    } else if (w?.map)
      return { ...F, ...Q, items: w.map((M) => h(M, W, false)) };
    return { ...F, ...Q };
  }
  const J = $?.properties;
  if (J && X && W.rootOnly !== true)
    for (let [Y, G] of Object.entries(J))
      switch (G[Kind]) {
        case Z:
          const { anyOf: K, oneOf: B, allOf: U, not: w, type: F, ...Q } = G, z = W.to(Q);
          if (z.anyOf)
            for (let D = 0;D < z.anyOf.length; D++)
              z.anyOf[D] = { ...Q, ...z.anyOf[D] };
          else if (z.oneOf)
            for (let D = 0;D < z.oneOf.length; D++)
              z.oneOf[D] = { ...Q, ...z.oneOf[D] };
          else if (z.allOf)
            for (let D = 0;D < z.allOf.length; D++)
              z.allOf[D] = { ...Q, ...z.allOf[D] };
          else if (z.not)
            for (let D = 0;D < z.not.length; D++)
              z.not[D] = { ...Q, ...z.not[D] };
          J[Y] = { ...Q, ...h(Q, W, false) };
          break;
        case "Object":
        case "Union":
          J[Y] = h(G, W, false);
          break;
        default:
          if (G.items)
            for (let D = 0;D < G.items.length; D++)
              G.items[D] = h(G.items[D], W, false);
          else if (G.anyOf || G.oneOf || G.allOf || G.not)
            J[Y] = h(G, W, false);
          break;
      }
  return $;
};
var m = ($, { models: W = {}, dynamic: X = false, normalize: Z = false, additionalProperties: j = false, coerce: J = false, additionalCoerce: Y = [] } = {}) => {
  if (!$)
    return;
  if (typeof $ === "string" && !($ in W))
    return;
  let G = typeof $ === "string" ? W[$] : $;
  if (J || Y)
    if (J)
      G = V2(G, [{ from: V.Number(), to: (U) => V.Numeric(U), untilObjectFound: true }, { from: V.Boolean(), to: (U) => V.BooleanString(U), untilObjectFound: true }, ...Array.isArray(Y) ? Y : [Y]]);
    else
      G = V2(G, [...Array.isArray(Y) ? Y : [Y]]);
  if (G.type === "object" && "additionalProperties" in G === false)
    G.additionalProperties = j;
  const K = (U) => exports_value2.Clean(G, U);
  if (X) {
    const U = { schema: G, references: "", checkFunc: () => {
    }, code: "", Check: (w) => exports_value2.Check(G, w), Errors: (w) => exports_value2.Errors(G, w), Code: () => "", Clean: K, Decode: (w) => exports_value2.Decode(G, w), Encode: (w) => exports_value2.Encode(G, w) };
    if (Z && G.additionalProperties === false)
      U.Clean = K;
    if (G.config) {
      if (U.config = G.config, U?.schema?.config)
        delete U.schema.config;
    }
    return U.parse = (w) => {
      try {
        return U.Decode(w);
      } catch (F) {
        throw [...U.Errors(w)].map(o);
      }
    }, U.safeParse = (w) => {
      try {
        return { success: true, data: U.Decode(w), error: null };
      } catch (F) {
        const Q = [...B.Errors(w)].map(o);
        return { success: false, data: null, error: Q[0]?.summary, errors: Q };
      }
    }, U;
  }
  const B = TypeCompiler.Compile(G, Object.values(W));
  if (B.Clean = K, G.config) {
    if (B.config = G.config, B?.schema?.config)
      delete B.schema.config;
  }
  return B.parse = (U) => {
    try {
      return B.Decode(U);
    } catch (w) {
      throw [...B.Errors(U)].map(o);
    }
  }, B.safeParse = (U) => {
    try {
      return { success: true, data: B.Decode(U), error: null };
    } catch (w) {
      const F = [...B.Errors(U)].map(o);
      return { success: false, data: null, error: F[0]?.summary, errors: F };
    }
  }, B;
};
var $2 = ($, { models: W = {}, dynamic: X = false, normalize: Z = false, additionalProperties: j = false }) => {
  if (!$)
    return;
  if (typeof $ === "string" && !($ in W))
    return;
  const J = typeof $ === "string" ? W[$] : $, Y = (K, B) => {
    const U = (F) => {
      if (!F || typeof F !== "object")
        return exports_value2.Clean(K, F);
      if (Array.isArray(F))
        F = exports_value2.Clean(K, F);
      else
        F = exports_value2.Clean(K, F);
      return F;
    };
    if (X)
      return { schema: K, references: "", checkFunc: () => {
      }, code: "", Check: (F) => exports_value2.Check(K, F), Errors: (F) => exports_value2.Errors(K, F), Code: () => "", Decode: (F) => exports_value2.Decode(K, F), Encode: (F) => exports_value2.Encode(K, F) };
    const w = TypeCompiler.Compile(K, B);
    if (Z && K.additionalProperties === false)
      w.Clean = U;
    return w;
  };
  if (Kind in J) {
    if ("additionalProperties" in J === false)
      J.additionalProperties = j;
    return { 200: Y(J, Object.values(W)) };
  }
  const G = {};
  return Object.keys(J).forEach((K) => {
    const B = J[+K];
    if (typeof B === "string") {
      if (B in W) {
        const U = W[B];
        U.type === "object" && "additionalProperties" in U, G[+K] = Kind in U ? Y(U, Object.values(W)) : U;
      }
      return;
    }
    if (B.type === "object" && "additionalProperties" in B === false)
      B.additionalProperties = j;
    G[+K] = Kind in B ? Y(B, Object.values(W)) : B;
  }), G;
};
var P3 = typeof Bun !== "undefined";
var I3 = P3 && typeof Bun.hash === "function";
var N0 = ($) => {
  if (I3)
    return Bun.hash($);
  let W = 9;
  for (let X = 0;X < $.length; )
    W = Math.imul(W ^ $.charCodeAt(X++), 387420489);
  return W = W ^ W >>> 9;
};
var A2;
var D0 = () => {
  if (!A2)
    A2 = [{ from: V.Object({}), to: () => V.ObjectString({}), excludeRoot: true }, { from: V.Array(V.Any()), to: () => V.ArrayString(V.Any()) }];
  return A2;
};
var O2;
var S2 = () => {
  if (!O2)
    O2 = [{ from: V.Number(), to: ($) => V.Numeric($), rootOnly: true }, { from: V.Boolean(), to: ($) => V.BooleanString($), rootOnly: true }];
  return O2;
};
var W2 = ({ validator: $, defaultConfig: W = {}, config: X, dynamic: Z, models: j }) => {
  let J = m($, { dynamic: Z, models: j, additionalProperties: true, coerce: true, additionalCoerce: D0() });
  if (c(W))
    if (J)
      J.config = z3(J.config, X);
    else
      J = m(V.Cookie({}), { dynamic: Z, models: j, additionalProperties: true }), J.config = W;
  return J;
};
var j0 = ($, W) => {
  if (!W)
    return;
  if (!Array.isArray(W)) {
    const Z = W;
    if ($ && !Z.checksum)
      Z.checksum = $;
    if (Z.scope === "scoped")
      Z.scope = "local";
    return Z;
  }
  const X = [...W];
  for (let Z of X) {
    if ($ && !Z.checksum)
      Z.checksum = $;
    if (Z.scope === "scoped")
      Z.scope = "local";
  }
  return X;
};
var C2 = ($, W, X) => {
  return { start: f($.start, j0(X, W?.start)), request: f($.request, j0(X, W?.request)), parse: f($.parse, j0(X, W?.parse)), transform: f($.transform, j0(X, W?.transform)), beforeHandle: f($.beforeHandle, j0(X, W?.beforeHandle)), afterHandle: f($.afterHandle, j0(X, W?.afterHandle)), mapResponse: f($.mapResponse, j0(X, W?.mapResponse)), afterResponse: f($.afterResponse, j0(X, W?.afterResponse)), trace: f($.trace, j0(X, W?.trace)), error: f($.error, j0(X, W?.error)), stop: f($.stop, j0(X, W?.stop)) };
};
var w1 = ($, W, { skipIfHasType: X = false } = {}) => {
  if (!$)
    return $;
  if (!Array.isArray($)) {
    if (X)
      $.scope ??= W;
    else
      $.scope = W;
    return $;
  }
  for (let Z of $)
    if (X)
      Z.scope ??= W;
    else
      Z.scope = W;
  return $;
};
var z0 = ($) => {
  if (!$)
    return $;
  if (!Array.isArray($))
    switch ($.scope) {
      case "global":
      case "scoped":
        return { ...$ };
      default:
        return { fn: $ };
    }
  const W = [];
  for (let X of $)
    switch (X.scope) {
      case "global":
      case "scoped":
        W.push({ ...X });
        break;
    }
  return W;
};
var L2 = ($) => {
  return { ...$, type: $?.type, detail: $?.detail, parse: z0($?.parse), transform: z0($?.transform), beforeHandle: z0($?.beforeHandle), afterHandle: z0($?.afterHandle), mapResponse: z0($?.mapResponse), afterResponse: z0($?.afterResponse), error: z0($?.error), trace: z0($?.trace) };
};
var _0 = { Continue: 100, "Switching Protocols": 101, Processing: 102, "Early Hints": 103, OK: 200, Created: 201, Accepted: 202, "Non-Authoritative Information": 203, "No Content": 204, "Reset Content": 205, "Partial Content": 206, "Multi-Status": 207, "Already Reported": 208, "Multiple Choices": 300, "Moved Permanently": 301, Found: 302, "See Other": 303, "Not Modified": 304, "Temporary Redirect": 307, "Permanent Redirect": 308, "Bad Request": 400, Unauthorized: 401, "Payment Required": 402, Forbidden: 403, "Not Found": 404, "Method Not Allowed": 405, "Not Acceptable": 406, "Proxy Authentication Required": 407, "Request Timeout": 408, Conflict: 409, Gone: 410, "Length Required": 411, "Precondition Failed": 412, "Payload Too Large": 413, "URI Too Long": 414, "Unsupported Media Type": 415, "Range Not Satisfiable": 416, "Expectation Failed": 417, "I'm a teapot": 418, "Misdirected Request": 421, "Unprocessable Content": 422, Locked: 423, "Failed Dependency": 424, "Too Early": 425, "Upgrade Required": 426, "Precondition Required": 428, "Too Many Requests": 429, "Request Header Fields Too Large": 431, "Unavailable For Legal Reasons": 451, "Internal Server Error": 500, "Not Implemented": 501, "Bad Gateway": 502, "Service Unavailable": 503, "Gateway Timeout": 504, "HTTP Version Not Supported": 505, "Variant Also Negotiates": 506, "Insufficient Storage": 507, "Loop Detected": 508, "Not Extended": 510, "Network Authentication Required": 511 };
var X2 = Object.fromEntries(Object.entries(_0).map(([$, W]) => [W, $]));
var B1 = new TextEncoder;
var x0 = async ($, W) => {
  if (typeof $ !== "string")
    throw new TypeError("Cookie value must be provided as a string.");
  if (W === null)
    throw new TypeError("Secret key must be provided.");
  const X = await crypto.subtle.importKey("raw", B1.encode(W), { name: "HMAC", hash: "SHA-256" }, false, ["sign"]), Z = await crypto.subtle.sign("HMAC", X, B1.encode($));
  return $ + "." + A3(Buffer.from(Z).toString("base64"));
};
var P2 = async ($, W) => {
  if (typeof $ !== "string")
    throw new TypeError("Signed cookie string must be provided.");
  if (W === null)
    throw new TypeError("Secret key must be provided.");
  const X = $.slice(0, $.lastIndexOf("."));
  return await x0(X, W) === $ ? X : false;
};
var _1 = ($, W) => {
  if (!$ || typeof $ !== "object" || !W)
    return;
  for (let [X, Z] of Object.entries(W)) {
    if (X in N3 || !(X in $))
      continue;
    const j = $[X];
    if (typeof j === "function")
      j(Z), delete W[X];
  }
};
var F1 = ({ globalHook: $, localHook: W }) => (X) => (Z, j) => {
  if (typeof Z === "function")
    Z = { fn: Z };
  if ("fn" in Z || Array.isArray(Z)) {
    if (!W[X])
      W[X] = [];
    if (typeof W[X] === "function")
      W[X] = [W[X]];
    if (Array.isArray(Z))
      W[X] = W[X].concat(Z);
    else
      W[X].push(Z);
    return;
  }
  const { insert: J = "after", stack: Y = "local" } = Z;
  if (typeof j === "function")
    j = { fn: j };
  if (Y === "global")
    if (!Array.isArray(j))
      if (J === "before")
        $[X].unshift(j);
      else
        $[X].push(j);
    else if (J === "before")
      $[X] = j.concat($[X]);
    else
      $[X] = $[X].concat(j);
  else {
    if (!W[X])
      W[X] = [];
    if (typeof W[X] === "function")
      W[X] = [W[X]];
    if (!Array.isArray(j))
      if (J === "before")
        W[X].unshift(j);
      else
        W[X].push(j);
    else if (J === "before")
      W[X] = j.concat(W[X]);
    else
      W[X] = W[X].concat(j);
  }
};
var O3 = ($) => {
  if (typeof $ === "number")
    return $;
  if ($.length < 16) {
    if ($.trim().length === 0)
      return null;
    const W = Number($);
    if (Number.isNaN(W))
      return null;
    return W;
  }
  if ($.length === 16) {
    if ($.trim().length === 0)
      return null;
    const W = Number($);
    if (Number.isNaN(W) || W.toString() !== $)
      return null;
    return W;
  }
  return null;
};
var Z2 = ($) => O3($) !== null;

class T2 {
  $;
  root = null;
  promises = [];
  constructor($ = console.error) {
    this.onError = $;
  }
  get size() {
    return this.promises.length;
  }
  add($) {
    return this.promises.push($), this.root ||= this.drain(), $;
  }
  async drain() {
    while (this.promises.length > 0) {
      try {
        await this.promises[0];
      } catch ($) {
        this.onError($);
      }
      this.promises.shift();
    }
    this.root = null;
  }
  then($, W) {
    return (this.root ?? Promise.resolve()).then($, W);
  }
}
var n = ($) => {
  if (!$)
    return $;
  if (!Array.isArray($)) {
    if (typeof $ === "function")
      return { fn: $ };
    else if ("fn" in $)
      return $;
  }
  const W = [];
  for (let X of $)
    if (typeof X === "function")
      W.push({ fn: X });
    else if ("fn" in X)
      W.push(X);
  return W;
};
var M1 = ($) => {
  return { ...$, start: n($?.start), request: n($?.request), parse: n($?.parse), transform: n($?.transform), beforeHandle: n($?.beforeHandle), afterHandle: n($?.afterHandle), mapResponse: n($?.mapResponse), afterResponse: n($?.afterResponse), trace: n($?.trace), error: n($?.error), stop: n($?.stop) };
};
var E2 = ($) => {
  return { ...$, start: $.start?.map((W) => W.fn), request: $.request?.map((W) => W.fn), parse: $.parse?.map((W) => W.fn), transform: $.transform?.map((W) => W.fn), beforeHandle: $.beforeHandle?.map((W) => W.fn), afterHandle: $.afterHandle?.map((W) => W.fn), afterResponse: $.afterResponse?.map((W) => W.fn), mapResponse: $.mapResponse?.map((W) => W.fn), trace: $.trace?.map((W) => W.fn), error: $.error?.map((W) => W.fn), stop: $.stop?.map((W) => W.fn) };
};
var m0 = ($) => ({ body: $.body, cookie: $.cookie, headers: $.headers, query: $.query, set: $.set, server: $.server });
var d0 = ($, W = 302) => Response.redirect($, W);
var V3 = Symbol("ElysiaFormData");
var P0 = Symbol("ElysiaRequestId");
var j2 = () => crypto.getRandomValues(new Uint32Array(1))[0];
var J2 = ($) => {
  const W = [];
  for (let X = 0;X < $.length; X++) {
    const Z = $[X];
    if (Z.checksum) {
      if (W.includes(Z.checksum))
        $.splice(X, 1), X--;
      W.push(Z.checksum);
    }
  }
  return $;
};
var v = ($, W = "scoped") => {
  if (W === "scoped") {
    for (let X of $)
      if ("scope" in X && X.scope === "local")
        X.scope = "scoped";
    return;
  }
  for (let X of $)
    if ("scope" in X)
      X.scope = "global";
};
var z1 = typeof Bun !== "undefined" ? Bun.env : typeof process !== "undefined" ? process?.env : undefined;
var I0 = Symbol("ElysiaErrorCode");
var p0 = (z1?.NODE_ENV ?? z1?.ENV) === "production";

class p {
  code;
  response;
  constructor($, W) {
    const X = W ?? ($ in X2 ? X2[$] : $);
    this.code = _0[$] ?? $, this.response = X;
  }
}
var q2 = ($, W) => new p($, W);

class Q2 extends Error {
  code = "INTERNAL_SERVER_ERROR";
  status = 500;
  constructor($) {
    super($ ?? "INTERNAL_SERVER_ERROR");
  }
}

class A0 extends Error {
  code = "NOT_FOUND";
  status = 404;
  constructor($) {
    super($ ?? "NOT_FOUND");
  }
}

class Y2 extends Error {
  code = "PARSE";
  status = 400;
  constructor() {
    super("Failed to parse body");
  }
}

class v0 extends Error {
  $;
  code = "INVALID_COOKIE_SIGNATURE";
  status = 400;
  constructor($, W) {
    super(W ?? `"${$}" has invalid cookie signature`);
    this.key = $;
  }
}
var o = ($) => {
  if (!$)
    return { summary: undefined };
  const { message: W, path: X, value: Z, type: j } = $, J = X.slice(1).replaceAll("/", "."), Y = X === "";
  switch (j) {
    case 42:
      return { ...$, summary: Y ? "Value should not be provided" : `Property '${J}' should not be provided` };
    case 45:
      return { ...$, summary: Y ? "Value is missing" : `Property '${J}' is missing` };
    case 50:
      const G = W.indexOf("'"), K = W.slice(G + 1, W.indexOf("'", G + 1));
      return { ...$, summary: Y ? "Value should be an email" : `Property '${J}' should be ${K}` };
    case 54:
      return { ...$, summary: `${W.slice(0, 9)} property '${J}' to be ${W.slice(8)} but found: ${Z}` };
    case 62:
      const B = $.schema.anyOf.map((U) => `'${U?.format ?? U.type}'`).join(", ");
      return { ...$, summary: Y ? `Value should be one of ${B}` : `Property '${J}' should be one of: ${B}` };
    default:
      return { summary: W, ...$ };
  }
};

class q extends Error {
  $;
  W;
  X;
  code = "VALIDATION";
  status = 422;
  constructor($, W, X) {
    if (X && typeof X === "object" && X instanceof p)
      X = X.response;
    const Z = p0 ? undefined : ("Errors" in W) ? W.Errors(X).First() : exports_value2.Errors(W, X).First(), j = Z?.schema.error !== undefined ? typeof Z.schema.error === "function" ? Z.schema.error({ type: $, validator: W, value: X, get errors() {
      return [...W.Errors(X)].map(o);
    } }) : Z.schema.error : undefined, J = Z?.path || "root";
    let Y = "";
    if (j !== undefined)
      Y = typeof j === "object" ? JSON.stringify(j) : j + "";
    else if (p0)
      Y = JSON.stringify({ type: "validation", on: $, summary: o(Z).summary, message: Z?.message, found: X });
    else {
      const G = W?.schema ?? W, K = "Errors" in W ? [...W.Errors(X)].map(o) : [...exports_value2.Errors(W, X)].map(o);
      let B;
      try {
        B = exports_value2.Create(G);
      } catch (U) {
        B = { type: "Could not create expected value", message: U?.message, error: U };
      }
      Y = JSON.stringify({ type: "validation", on: $, summary: K[0]?.summary, property: J, message: Z?.message, expected: B, found: X, errors: K }, null, 2);
    }
    super(Y);
    this.type = $;
    this.validator = W;
    this.value = X;
    Object.setPrototypeOf(this, q.prototype);
  }
  get all() {
    return "Errors" in this.validator ? [...this.validator.Errors(this.value)].map(o) : [...exports_value2.Errors(this.validator, this.value)].map(o);
  }
  static simplifyModel($) {
    const W = "schema" in $ ? $.schema : $;
    try {
      return exports_value2.Create(W);
    } catch {
      return W;
    }
  }
  get model() {
    return q.simplifyModel(this.validator);
  }
  toResponse($) {
    return new Response(this.message, { status: 400, headers: { ...$, "content-type": "application/json" } });
  }
}
var H2 = { open($) {
  $.data.open?.($);
}, message($, W) {
  $.data.message?.($, W);
}, drain($) {
  $.data.drain?.($);
}, close($, W, X) {
  $.data.close?.($, W, X);
} };

class g0 {
  $;
  W;
  validator;
  _validator;
  constructor($, W) {
    this.raw = $;
    this.data = W;
    if (this.validator = $.data.validator, $.data.id)
      this.id = $.data.id;
    else
      this.id = j2().toString();
  }
  get id() {
    return this.raw.data.id;
  }
  set id($) {
    this.raw.data.id = $;
  }
  get publish() {
    return ($, W = undefined, X) => {
      if (this.validator?.Check(W) === false)
        throw new q("message", this.validator, W);
      if (typeof W === "object")
        W = JSON.stringify(W);
      return this.raw.publish($, W, X), this;
    };
  }
  get send() {
    return ($) => {
      if (this.validator?.Check($) === false)
        throw new q("message", this.validator, $);
      if (Buffer.isBuffer($))
        return this.raw.send($), this;
      if (typeof $ === "object")
        $ = JSON.stringify($);
      return this.raw.send($), this;
    };
  }
  get subscribe() {
    return ($) => {
      return this.raw.subscribe($), this;
    };
  }
  get unsubscribe() {
    return ($) => {
      return this.raw.unsubscribe($), this;
    };
  }
  get cork() {
    return ($) => {
      return this.raw.cork($), this;
    };
  }
  get close() {
    return () => {
      return this.raw.close(), this;
    };
  }
  get terminate() {
    return this.raw.terminate.bind(this.raw);
  }
  get isSubscribed() {
    return this.raw.isSubscribed.bind(this.raw);
  }
  get remoteAddress() {
    return this.raw.remoteAddress;
  }
}
var R2 = "1.1.22";
var O0 = U2(o0(), 1);
var f0 = /\+/g;
var l0 = ($) => {
  const W = {};
  if (typeof $ !== "string")
    return W;
  const X = $.length;
  let Z = "", j = "", J = -1, Y = -1, G = false, K = false, B = false, U = false, w = false, F = 0;
  for (let Q = 0;Q < X + 1; Q++) {
    if (Q !== X)
      F = $.charCodeAt(Q);
    else
      F = 38;
    switch (F) {
      case 38: {
        if (w = Y > J, !w)
          Y = Q;
        if (Z = $.slice(J + 1, Y), w || Z.length > 0) {
          if (B)
            Z = Z.replace(f0, " ");
          if (G)
            Z = O0.default(Z) || Z;
          if (w) {
            if (j = $.slice(Y + 1, Q), U)
              j = j.replace(f0, " ");
            if (K)
              j = O0.default(j) || j;
          }
          const z = W[Z];
          if (z === undefined)
            W[Z] = j;
          else if (z.pop)
            z.push(j);
          else
            W[Z] = [z, j];
        }
        j = "", J = Q, Y = Q, G = false, K = false, B = false, U = false;
        break;
      }
      case 61:
        if (Y <= J)
          Y = Q;
        else
          K = true;
        break;
      case 43:
        if (Y > J)
          U = true;
        else
          B = true;
        break;
      case 37:
        if (Y > J)
          K = true;
        else
          G = true;
        break;
    }
  }
  return W;
};
var N1 = U2(o0(), 1);
var i0 = Symbol("ElysiaTrace");
var F0 = () => {
  const { promise: $, resolve: W } = Promise.withResolvers(), { promise: X, resolve: Z } = Promise.withResolvers(), { promise: j, resolve: J } = Promise.withResolvers(), Y = [], G = [];
  return [(K) => {
    if (K)
      Y.push(K);
    return $;
  }, (K) => {
    const B = [], U = [];
    let w = null;
    for (let Q = 0;Q < (K.total ?? 0); Q++) {
      const { promise: z, resolve: D } = Promise.withResolvers(), { promise: M, resolve: I } = Promise.withResolvers(), { promise: O, resolve: P } = Promise.withResolvers(), b = [], T = [];
      B.push((E) => {
        if (E)
          b.push(E);
        return z;
      }), U.push((E) => {
        const r = { ...E, end: M, error: O, index: Q, onStop(L) {
          if (L)
            T.push(L);
          return M;
        } };
        D(r);
        for (let L = 0;L < b.length; L++)
          b[L](r);
        return (L = null) => {
          const g = performance.now();
          if (L)
            w = L;
          const R = { end: g, error: L, get elapsed() {
            return g - E.begin;
          } };
          for (let Y0 = 0;Y0 < T.length; Y0++)
            T[Y0](R);
          I(g), P(L);
        };
      });
    }
    const F = { ...K, end: X, error: j, onEvent(Q) {
      for (let z = 0;z < B.length; z++)
        B[z](Q);
    }, onStop(Q) {
      if (Q)
        G.push(Q);
      return X;
    } };
    W(F);
    for (let Q = 0;Q < Y.length; Q++)
      Y[Q](F);
    return { resolveChild: U, resolve(Q = null) {
      const z = performance.now();
      if (!Q && w)
        Q = w;
      const D = { end: z, error: Q, get elapsed() {
        return z - K.begin;
      } };
      for (let M = 0;M < G.length; M++)
        G[M](D);
      Z(z), J(Q);
    } };
  }];
};
var D1 = ($) => {
  return (W) => {
    const [X, Z] = F0(), [j, J] = F0(), [Y, G] = F0(), [K, B] = F0(), [U, w] = F0(), [F, Q] = F0(), [z, D] = F0(), [M, I] = F0(), [O, P] = F0();
    return $({ id: W[P0], context: W, set: W.set, onRequest: X, onParse: j, onTransform: Y, onBeforeHandle: K, onHandle: U, onAfterHandle: F, onMapResponse: M, onAfterResponse: O, onError: z }), { request: Z, parse: J, transform: G, beforeHandle: B, handle: w, afterHandle: Q, error: D, mapResponse: I, afterResponse: P };
  };
};
var T3 = new Headers().toJSON;
var P1 = { optional: Symbol.for("TypeBox.Optional"), kind: Symbol.for("TypeBox.Kind") };
var t = ($) => {
  if (!$)
    return false;
  const W = $?.schema;
  return !!W && P1.optional in W;
};
var J0 = ($) => {
  if (!$)
    return false;
  const W = $?.schema ?? $;
  if (W.anyOf)
    return W.anyOf.some(J0);
  if (W.someOf)
    return W.someOf.some(J0);
  if (W.allOf)
    return W.allOf.some(J0);
  if (W.not)
    return W.not.some(J0);
  if (W.type === "object") {
    const X = W.properties;
    if ("additionalProperties" in W)
      return W.additionalProperties;
    for (let Z of Object.keys(X)) {
      const j = X[Z];
      if (j.type === "object") {
        if (J0(j))
          return true;
      } else if (j.anyOf) {
        for (let J = 0;J < j.anyOf.length; J++)
          if (J0(j.anyOf[J]))
            return true;
      }
      return j.additionalProperties;
    }
    return false;
  }
  return false;
};
var x2 = ({ context: $ = "c", trace: W, addFn: X }) => {
  if (!W.length)
    return () => {
      return { resolveChild() {
        return () => {
        };
      }, resolve() {
      } };
    };
  for (let Z = 0;Z < W.length; Z++)
    X(`let report${Z}, reportChild${Z}, reportErr${Z}, reportErrChild${Z}; let trace${Z} = ${$}[ELYSIA_TRACE]?.[${Z}] ?? trace[${Z}](${$});\n`);
  return (Z, { name: j, total: J = 0 } = {}) => {
    if (!j)
      j = "anonymous";
    const Y = Z === "error" ? "reportErr" : "report";
    for (let G = 0;G < W.length; G++)
      X(`\n${Y}${G} = trace${G}.${Z}({id,event: '${Z}',name: '${j}',begin: performance.now(),total: ${J}})\n`);
    return { resolve() {
      for (let G = 0;G < W.length; G++)
        X(`\n${Y}${G}.resolve()\n`);
    }, resolveChild(G) {
      for (let K = 0;K < W.length; K++)
        X(`${Y}Child${K} = ${Y}${K}.resolveChild?.shift()?.({id,event: '${Z}',name: '${G}',begin: performance.now()})\n`);
      return (K) => {
        for (let B = 0;B < W.length; B++)
          if (K)
            X(`
                             	if (${K} instanceof Error)
                    				${Y}Child${B}?.(${K})
                           		else
                             		${Y}Child${B}?.()\n`);
          else
            X(`${Y}Child${B}?.()\n`);
      };
    } };
  };
};
var E3 = ({ injectResponse: $ = "", normalize: W = false, validator: X }) => ({ composeValidation: (Z, j = `c.${Z}`) => `c.set.status = 422; throw new ValidationError('${Z}', validator.${Z}, ${j})`, composeResponseValidation: (Z = "r") => {
  let j = "\n" + $ + "\n";
  j += `if(${Z} instanceof ElysiaCustomStatusResponse) {
			c.set.status = ${Z}.code
			${Z} = ${Z}.response
		}

		const isResponse = ${Z} instanceof Response\n\n`, j += "switch(c.set.status) {\n";
  for (let [J, Y] of Object.entries(X.response)) {
    if (j += `\tcase ${J}:
				if (!isResponse) {\n`, W && "Clean" in Y && !J0(Y))
      j += `${Z} = validator.response['${J}'].Clean(${Z})\n`;
    j += `if(validator.response['${J}'].Check(${Z}) === false) {
					c.set.status = 422

					throw new ValidationError('response', validator.response['${J}'], ${Z})
				}

				c.set.status = ${J}
			}

			break\n\n`;
  }
  return j += "\n}\n", j;
} });
var n8 = Symbol.for("TypeBox.Kind");
var V0 = ($, W) => {
  if (!W)
    return;
  if (W.type === "object") {
    const X = W.properties;
    if (!X)
      return false;
    for (let Z of Object.keys(X)) {
      const j = X[Z];
      if ($ in j)
        return true;
      if (j.type === "object") {
        if (V0($, j))
          return true;
      } else if (j.anyOf) {
        for (let J = 0;J < j.anyOf.length; J++)
          if (V0($, j.anyOf[J]))
            return true;
      }
    }
    return false;
  }
  return $ in W;
};
var b2 = Symbol.for("TypeBox.Transform");
var S0 = ($) => {
  if (!$)
    return;
  if ($.type === "object" && $.properties) {
    const W = $.properties;
    for (let X of Object.keys(W)) {
      const Z = W[X];
      if (Z.type === "object") {
        if (S0(Z))
          return true;
      } else if (Z.anyOf) {
        for (let J = 0;J < Z.anyOf.length; J++)
          if (S0(Z.anyOf[J]))
            return true;
      }
      if (b2 in Z)
        return true;
    }
    return false;
  }
  return b2 in $ || $.properties && b2 in $.properties;
};
var q3 = /(?:return|=>) \S+\(/g;
var C0 = ($) => {
  return ($?.fn ?? $).constructor.name === "AsyncFunction";
};
var k = ($) => {
  const W = $?.fn ?? $;
  if (W.constructor.name === "AsyncFunction")
    return true;
  const X = W.toString();
  if (X.includes("=> response.clone("))
    return false;
  if (X.includes("await"))
    return true;
  if (X.includes("async"))
    return true;
  return !!X.match(q3);
};
var B2 = ($) => {
  const W = $?.fn ?? $;
  return W.constructor.name === "AsyncGeneratorFunction" || W.constructor.name === "GeneratorFunction";
};
var I1 = ({ app: $, path: W, method: X, localHook: Z, hooks: j, validator: J, handler: Y, allowMeta: G = false, inference: K }) => {
  const B = typeof Y === "function";
  if (!B) {
    if (Y = x(Y, { headers: $.setHeaders ?? {} }), j.parse.length === 0 && j.transform.length === 0 && j.beforeHandle.length === 0 && j.afterHandle.length === 0)
      return Function("a", "return function () { return a.clone() }")(Y);
  }
  const U = B ? "handler(c)" : "handler", w = j.afterResponse.length > 0, F = j.trace.length > 0;
  let Q = "";
  if (K = r0(Object.assign(Z, { handler: Y }), K), K.server)
    Q += `\nObject.defineProperty(c, 'server', {
			get: function() { return getServer() }
		})\n`;
  if (K.body)
    Q += "let isParsing = false\n";
  J.createBody?.(), J.createQuery?.(), J.createHeaders?.(), J.createParams?.(), J.createCookie?.(), J.createResponse?.();
  const z = K.query || !!J.query, D = X !== "$INTERNALWS" && X !== "GET" && X !== "HEAD" && (K.body || !!J.body || j.parse.length), M = $.setHeaders, I = M && !!Object.keys(M).length, O = K.headers || J.headers, P = K.cookie || !!J.cookie, b = P ? W2({ validator: J.cookie, defaultConfig: $.config.cookie, dynamic: !!$.config.aot, config: J.cookie?.config ?? {}, models: $.definitions.type }) : undefined, T = b?.config;
  let E = "";
  if (T?.sign) {
    if (!T.secrets)
      throw new Error(`t.Cookie required secret which is not set in (${X}) ${W}.`);
    const N = !T.secrets ? undefined : typeof T.secrets === "string" ? T.secrets : T.secrets[0];
    if (E += `const _setCookie = c.set.cookie
		if(_setCookie) {`, T.sign === true)
      E += `for(const [key, cookie] of Object.entries(_setCookie)) {
				c.set.cookie[key].value = await signCookie(cookie.value, '${N}')
			}`;
    else
      for (let _ of T.sign)
        E += `if(_setCookie['${_}']?.value) { c.set.cookie['${_}'].value = await signCookie(_setCookie['${_}'].value, '${N}') }\n`;
    E += "}\n";
  }
  const r = $.config.normalize, { composeValidation: L, composeResponseValidation: g } = E3({ normalize: r, validator: J });
  if (O)
    Q += T3 ? "c.headers = c.request.headers.toJSON()\n" : `c.headers = {}
                for (const [key, value] of c.request.headers.entries())
					c.headers[key] = value
				`;
  if (P) {
    const N = (A, S) => {
      const C = T?.[A] ?? S;
      if (!C)
        return typeof S === "string" ? `${A}: "${S}",` : `${A}: ${S},`;
      if (typeof C === "string")
        return `${A}: '${C}',`;
      if (C instanceof Date)
        return `${A}: new Date(${C.getTime()}),`;
      return `${A}: ${C},`;
    }, _ = T ? `{
			secrets: ${T.secrets !== undefined ? typeof T.secrets === "string" ? `'${T.secrets}'` : "[" + T.secrets.reduce((A, S) => A + `'${S}',`, "") + "]" : "undefined"},
			sign: ${T.sign === true ? true : T.sign !== undefined ? "[" + T.sign.reduce((A, S) => A + `'${S}',`, "") + "]" : "undefined"},
			${N("domain")}
			${N("expires")}
			${N("httpOnly")}
			${N("maxAge")}
			${N("path", "/")}
			${N("priority")}
			${N("sameSite")}
			${N("secure")}
		}` : "undefined";
    if (O)
      Q += `\nc.cookie = await parseCookie(c.set, c.headers.cookie, ${_})\n`;
    else
      Q += `\nc.cookie = await parseCookie(c.set, c.request.headers.get('cookie'), ${_})\n`;
  }
  if (z) {
    const N = [];
    if (J.query && J.query.schema.type === "object") {
      const _ = J.query.schema.properties;
      if (!J0(J.query))
        for (let [A, S] of Object.entries(_)) {
          let C = S;
          if (C && P1.optional in C && C.type === "array" && C.items)
            C = C.items;
          const { type: a, anyOf: H } = C, U0 = a === "array" || H?.some((u) => u.type === "string" && u.format === "ArrayString");
          N.push({ key: A, isArray: U0, isNestedObjectArray: U0 && C.items?.type === "object" || !!C.items?.anyOf?.some((u) => u.type === "object" || u.type === "array"), isObject: a === "object" || H?.some((u) => u.type === "string" && u.format === "ArrayString"), anyOf: !!H });
        }
    }
    if (!N.length)
      Q += `if(c.qi === -1) {
				c.query = {}
			} else {
				c.query = parseQueryFromURL(c.url.slice(c.qi + 1))
			}`;
    else
      Q += `if(c.qi !== -1) {
				let url = '&' + c.url.slice(c.qi + 1)

				${N.map(({ key: _, isArray: A, isObject: S, isNestedObjectArray: C, anyOf: a }, H) => {
        const U0 = `${H === 0 ? "let" : ""} memory = url.indexOf('&${_}=')
							let a${H}\n`;
        if (A)
          return U0 + (C ? `while (memory !== -1) {
											const start = memory + ${_.length + 2}
											memory = url.indexOf('&', start)

											if(a${H} === undefined)
												a${H} = ''
											else
												a${H} += ','

											let temp

											if(memory === -1) temp = decodeURIComponent(url.slice(start).replace(/\\+/g, ' '))
											else temp = decodeURIComponent(url.slice(start, memory).replace(/\\+/g, ' '))

											const charCode = temp.charCodeAt(0)
											if(charCode !== 91 && charCode !== 123)
												temp = '"' + temp + '"'

											a${H} += temp

											if(memory === -1) break

											memory = url.indexOf('&${_}=', memory)
											if(memory === -1) break
										}

										try {
										    if(a${H}.charCodeAt(0) === 91)
												a${H} = JSON.parse(a${H})
											else
												a${H} = JSON.parse('[' + a${H} + ']')
										} catch {}\n` : `while (memory !== -1) {
											const start = memory + ${_.length + 2}
											memory = url.indexOf('&', start)

											if(a${H} === undefined)
												a${H} = []

											if(memory === -1) {
												a${H}.push(decodeURIComponent(url.slice(start)).replace(/\\+/g, ' '))
												break
											}
											else a${H}.push(decodeURIComponent(url.slice(start, memory)).replace(/\\+/g, ' '))

											memory = url.indexOf('&${_}=', memory)
											if(memory === -1) break
										}\n`);
        if (S)
          return U0 + `if (memory !== -1) {
										const start = memory + ${_.length + 2}
										memory = url.indexOf('&', start)

										if(memory === -1) a${H} = decodeURIComponent(url.slice(start).replace(/\\+/g, ' '))
										else a${H} = decodeURIComponent(url.slice(start, memory).replace(/\\+/g, ' '))

										if (a${H} !== undefined) {
											try {
												a${H} = JSON.parse(a${H})
											} catch {}
										}
									}`;
        return U0 + `if (memory !== -1) {
										const start = memory + ${_.length + 2}
										memory = url.indexOf('&', start)

										if(memory === -1) a${H} = decodeURIComponent(url.slice(start).replace(/\\+/g, ' '))
										else {
											a${H} = decodeURIComponent(url.slice(start, memory).replace(/\\+/g, ' '))

											${a ? `
											let deepMemory = url.indexOf('&${_}=', memory)

											if(deepMemory !== -1) {
												a${H} = [a${H}]
												let first = true

												while(true) {
													const start = deepMemory + ${_.length + 2}
													if(first)
														first = false
													else
														deepMemory = url.indexOf('&', start)

													let value
													if(deepMemory === -1) value = decodeURIComponent(url.slice(start).replace(/\\+/g, ' '))
													else value = decodeURIComponent(url.slice(start, deepMemory).replace(/\\+/g, ' '))

													const vStart = value.charCodeAt(0)
													const vEnd = value.charCodeAt(value.length - 1)

													if((vStart === 91 && vEnd === 93) || (vStart === 123 && vEnd === 125))
														try {
															a${H}.push(JSON.parse(value))
														} catch {
														 	a${H}.push(value)
														}

													if(deepMemory === -1) break
												}
											}
												` : ""}
										}
									}`;
      }).join("\n")}

				c.query = {
					${N.map(({ key: _ }, A) => `'${_}': a${A}`).join(", ")}
				}
			} else {
				c.query = {}
			}`;
  }
  if (F)
    Q += "\nconst id = c[ELYSIA_REQUEST_ID]\n";
  const R = x2({ trace: j.trace, addFn: (N) => {
    Q += N;
  } });
  Q += "\ntry {\n";
  const Y0 = typeof Y === "function" && k(Y), e = F || j.afterResponse.length > 0 ? "c.response = " : "", y0 = P || D || Y0 || j.parse.length > 0 || j.afterHandle.some(k) || j.beforeHandle.some(k) || j.transform.some(k) || j.mapResponse.some(k), O1 = (typeof Y === "function" ? B2(Y) : false) || j.beforeHandle.some(B2) || j.afterHandle.some(B2) || j.transform.some(B2), t0 = K.cookie || K.set || O || F || J.response || B && I || O1, s = ", c.request";
  Q += `c.route = \`${W}\`\n`;
  const V1 = R("parse", { total: j.parse.length });
  if (D) {
    const N = j.parse.length || K.body || J.body;
    if (Q += "isParsing = true\n", j.type && !j.parse.length)
      switch (j.type) {
        case "json":
        case "application/json":
          if (t(J.body))
            Q += "try { c.body = await c.request.json() } catch {}";
          else
            Q += "c.body = await c.request.json()";
          break;
        case "text":
        case "text/plain":
          Q += "c.body = await c.request.text()\n";
          break;
        case "urlencoded":
        case "application/x-www-form-urlencoded":
          Q += "c.body = parseQuery(await c.request.text())\n";
          break;
        case "arrayBuffer":
        case "application/octet-stream":
          Q += "c.body = await c.request.arrayBuffer()\n";
          break;
        case "formdata":
        case "multipart/form-data":
          if (Q += "c.body = {}\n", t(J.body))
            Q += "let form; try { form = await c.request.formData() } catch {}";
          else
            Q += "const form = await c.request.formData()";
          Q += `\nif(form)
						for (const key of form.keys()) {
							if (c.body[key])
								continue

							const value = form.getAll(key)
							if (value.length === 1)
								c.body[key] = value[0]
							else c.body[key] = value
						} else form = {}\n`;
          break;
      }
    else if (N) {
      if (Q += "\n", Q += O ? "let contentType = c.headers['content-type']" : "let contentType = c.request.headers.get('content-type')", Q += `
				if (contentType) {
					const index = contentType.indexOf(';')
					if (index !== -1) contentType = contentType.substring(0, index)\n
					c.contentType = contentType\n`, j.parse.length) {
        Q += "let used = false\n";
        const _ = R("parse", { total: j.parse.length });
        for (let A = 0;A < j.parse.length; A++) {
          const S = _.resolveChild(j.parse[A].fn.name), C = `bo${A}`;
          if (A !== 0)
            Q += "if(!used) {\n";
          if (Q += `let ${C} = parse[${A}](c, contentType)\n`, Q += `if(${C} instanceof Promise) ${C} = await ${C}\n`, Q += `if(${C} !== undefined) { c.body = ${C}; used = true }\n`, S(), A !== 0)
            Q += "}";
        }
        _.resolve();
      }
      if (Q += "\ndelete c.contentType\n", j.parse.length)
        Q += "if (!used) {";
      if (j.type && !Array.isArray(j.type))
        switch (j.type) {
          case "json":
          case "application/json":
            if (t(J.body))
              Q += "try { c.body = await c.request.json() } catch {}";
            else
              Q += "c.body = await c.request.json()";
            break;
          case "text":
          case "text/plain":
            Q += "c.body = await c.request.text()\n";
            break;
          case "urlencoded":
          case "application/x-www-form-urlencoded":
            Q += "c.body = parseQuery(await c.request.text())\n";
            break;
          case "arrayBuffer":
          case "application/octet-stream":
            Q += "c.body = await c.request.arrayBuffer()\n";
            break;
          case "formdata":
          case "multipart/form-data":
            Q += `c.body = {}

							const form = await c.request.formData()
							for (const key of form.keys()) {
								if (c.body[key])
									continue

								const value = form.getAll(key)
								if (value.length === 1)
									c.body[key] = value[0]
								else c.body[key] = value
							}\n`;
            break;
        }
      else
        Q += `
					switch (contentType) {
						case 'application/json':
							${t(J.body) ? "try { c.body = await c.request.json() } catch {}" : "c.body = await c.request.json()"}
							break

						case 'text/plain':
							c.body = await c.request.text()
							break

						case 'application/x-www-form-urlencoded':
							c.body = parseQuery(await c.request.text())
							break

						case 'application/octet-stream':
							c.body = await c.request.arrayBuffer();
							break

						case 'multipart/form-data':
							c.body = {}

							const form = await c.request.formData()
							for (const key of form.keys()) {
								if (c.body[key])
									continue

								const value = form.getAll(key)
								if (value.length === 1)
									c.body[key] = value[0]
								else c.body[key] = value
							}

							break
					}`;
      if (j.parse.length)
        Q += "}";
      Q += "}\n";
    }
    Q += "\nisParsing = false\n";
  }
  if (V1.resolve(), j?.transform) {
    const N = R("transform", { total: j.transform.length });
    if (j.transform.length)
      Q += "\nlet transformed\n";
    for (let _ = 0;_ < j.transform.length; _++) {
      const A = j.transform[_], S = N.resolveChild(A.fn.name);
      if (Q += k(A) ? `transformed = await transform[${_}](c)\n` : `transformed = transform[${_}](c)\n`, A.subType === "mapDerive")
        Q += `if(transformed instanceof ElysiaCustomStatusResponse)
					throw transformed
				else {
					transformed.request = c.request
					transformed.store = c.store
					transformed.qi = c.qi
					transformed.path = c.path
					transformed.url = c.url
					transformed.redirect = c.redirect
					transformed.set = c.set
					transformed.error = c.error

					c = transformed
			}`;
      else
        Q += `if(transformed instanceof ElysiaCustomStatusResponse)
					throw transformed
				else
					Object.assign(c, transformed)\n`;
      S();
    }
    N.resolve();
  }
  if (J) {
    if (Q += "\n", J.headers) {
      if (r && "Clean" in J.headers && !J0(J.headers))
        Q += "c.headers = validator.headers.Clean(c.headers);\n";
      if (V0("default", J.headers.schema))
        for (let [N, _] of Object.entries(exports_value2.Default(J.headers.schema, {}))) {
          const A = typeof _ === "object" ? JSON.stringify(_) : typeof _ === "string" ? `'${_}'` : _;
          if (A !== undefined)
            Q += `c.headers['${N}'] ??= ${A}\n`;
        }
      if (t(J.headers))
        Q += "if(isNotEmpty(c.headers)) {";
      if (Q += `if(validator.headers.Check(c.headers) === false) {
				${L("headers")}
			}`, S0(J.headers.schema))
        Q += "c.headers = validator.headers.Decode(c.headers)\n";
      if (t(J.headers))
        Q += "}";
    }
    if (J.params) {
      if (V0("default", J.params.schema))
        for (let [N, _] of Object.entries(exports_value2.Default(J.params.schema, {}))) {
          const A = typeof _ === "object" ? JSON.stringify(_) : typeof _ === "string" ? `'${_}'` : _;
          if (A !== undefined)
            Q += `c.params['${N}'] ??= ${A}\n`;
        }
      if (Q += `if(validator.params.Check(c.params) === false) {
				${L("params")}
			}`, S0(J.params.schema))
        Q += "\nc.params = validator.params.Decode(c.params)\n";
    }
    if (J.query) {
      if (r && "Clean" in J.query && !J0(J.query))
        Q += "c.query = validator.query.Clean(c.query);\n";
      if (V0("default", J.query.schema))
        for (let [N, _] of Object.entries(exports_value2.Default(J.query.schema, {}))) {
          const A = typeof _ === "object" ? JSON.stringify(_) : typeof _ === "string" ? `'${_}'` : _;
          if (A !== undefined)
            Q += `if(c.query['${N}'] === undefined) c.query['${N}'] = ${A}\n`;
        }
      if (t(J.query))
        Q += "if(isNotEmpty(c.query)) {";
      if (Q += `if(validator.query.Check(c.query) === false) {
          		${L("query")}
			}`, S0(J.query.schema))
        Q += "\nc.query = validator.query.Decode(Object.assign({}, c.query))\n";
      if (t(J.query))
        Q += "}";
    }
    if (J.body) {
      if (r && "Clean" in J.body && !J0(J.body))
        Q += "c.body = validator.body.Clean(c.body);\n";
      const N = S0(J.body.schema);
      if (N || t(J.body))
        Q += '\nconst isNotEmptyObject = c.body && (typeof c.body === "object" && isNotEmpty(c.body))\n';
      if (V0("default", J.body.schema)) {
        const _ = exports_value2.Default(J.body.schema, J.body.schema.type === "object" ? {} : undefined), A = typeof _ === "object" ? JSON.stringify(_) : typeof _ === "string" ? `'${_}'` : _;
        if (Q += `if(validator.body.Check(c.body) === false) {
					if (typeof c.body === 'object') {
						c.body = Object.assign(${A}, c.body)
					} else { c.body = ${A} }`, t(J.body))
          Q += `
					    if(isNotEmptyObject && validator.body.Check(c.body) === false) {
            				${L("body")}
             			}
                    }`;
        else
          Q += `
    				if(validator.body.Check(c.body) === false) {
        				${L("body")}
         			}
                }`;
      } else if (t(J.body))
        Q += `if(isNotEmptyObject && validator.body.Check(c.body) === false) {
         			${L("body")}
          		}`;
      else
        Q += `if(validator.body.Check(c.body) === false) {
         			${L("body")}
          		}`;
      if (N)
        Q += "\nif(isNotEmptyObject) c.body = validator.body.Decode(c.body)\n";
    }
    if (c(b?.schema?.properties ?? b?.schema?.schema ?? {})) {
      if (Q += `const cookieValue = {}
    			for(const [key, value] of Object.entries(c.cookie))
    				cookieValue[key] = value.value\n`, V0("default", b.schema))
        for (let [N, _] of Object.entries(exports_value2.Default(b.schema, {})))
          Q += `cookieValue['${N}'] = ${typeof _ === "object" ? JSON.stringify(_) : _}\n`;
      if (t(J.cookie))
        Q += "if(isNotEmpty(c.cookie)) {";
      if (Q += `if(validator.cookie.Check(cookieValue) === false) {
				${L("cookie", "cookieValue")}
			}`, S0(J.cookie.schema))
        Q += `\nfor(const [key, value] of Object.entries(validator.cookie.Decode(cookieValue)))
					c.cookie[key].value = value\n`;
      if (t(J.cookie))
        Q += "}";
    }
  }
  if (j?.beforeHandle) {
    const N = R("beforeHandle", { total: j.beforeHandle.length });
    let _ = false;
    for (let A = 0;A < j.beforeHandle.length; A++) {
      const S = j.beforeHandle[A], C = N.resolveChild(S.fn.name), a = E0(S);
      if (S.subType === "resolve" || S.subType === "mapResolve") {
        if (!_)
          _ = true, Q += "\nlet resolved\n";
        if (Q += k(S) ? `resolved = await beforeHandle[${A}](c);\n` : `resolved = beforeHandle[${A}](c);\n`, S.subType === "mapResolve")
          Q += `if(resolved instanceof ElysiaCustomStatusResponse)
						throw resolved
					else {
						resolved.request = c.request
						resolved.store = c.store
						resolved.qi = c.qi
						resolved.path = c.path
						resolved.url = c.url
						resolved.redirect = c.redirect
						resolved.set = c.set
						resolved.error = c.error

						c = resolved
					}`;
        else
          Q += `if(resolved instanceof ElysiaCustomStatusResponse)
						throw resolved
					else
						Object.assign(c, resolved)\n`;
      } else if (!a)
        Q += k(S) ? `await beforeHandle[${A}](c);\n` : `beforeHandle[${A}](c);\n`, C();
      else {
        if (Q += k(S) ? `be = await beforeHandle[${A}](c);\n` : `be = beforeHandle[${A}](c);\n`, C("be"), Q += "if(be !== undefined) {\n", N.resolve(), j.afterHandle?.length) {
          R("handle", { name: B ? Y.name : undefined }).resolve();
          const u = R("afterHandle", { total: j.afterHandle.length });
          for (let G0 = 0;G0 < j.afterHandle.length; G0++) {
            const L0 = j.afterHandle[G0], S1 = E0(L0), C1 = u.resolveChild(L0.fn.name);
            if (Q += "c.response = be\n", !S1)
              Q += k(L0.fn) ? `await afterHandle[${G0}](c, be)\n` : `afterHandle[${G0}](c, be)\n`;
            else
              Q += k(L0.fn) ? `af = await afterHandle[${G0}](c)\n` : `af = afterHandle[${G0}](c)\n`, Q += "if(af !== undefined) { c.response = be = af }\n";
            C1("af");
          }
          u.resolve();
        }
        if (J.response)
          Q += g("be");
        const U0 = R("mapResponse", { total: j.mapResponse.length });
        if (j.mapResponse.length) {
          Q += "\nc.response = be\n";
          for (let u = 0;u < j.mapResponse.length; u++) {
            const G0 = j.mapResponse[u], L0 = U0.resolveChild(G0.fn.name);
            Q += `\nif(mr === undefined) {
							mr = ${C0(G0) ? "await" : ""} onMapResponse[${u}](c)
							if(mr !== undefined) be = c.response = mr
						}\n`, L0();
          }
        }
        U0.resolve(), Q += E, Q += `return mapEarlyResponse(${e} be, c.set ${s})}\n`;
      }
    }
    N.resolve();
  }
  if (j?.afterHandle.length) {
    const N = R("handle", { name: B ? Y.name : undefined });
    if (j.afterHandle.length)
      Q += Y0 ? `let r = c.response = await ${U};\n` : `let r = c.response = ${U};\n`;
    else
      Q += Y0 ? `let r = await ${U};\n` : `let r = ${U};\n`;
    N.resolve();
    const _ = R("afterHandle", { total: j.afterHandle.length });
    for (let S = 0;S < j.afterHandle.length; S++) {
      const C = j.afterHandle[S], a = E0(C), H = _.resolveChild(C.fn.name);
      if (!a)
        Q += k(C.fn) ? `await afterHandle[${S}](c)\n` : `afterHandle[${S}](c)\n`, H();
      else if (Q += k(C.fn) ? `af = await afterHandle[${S}](c)\n` : `af = afterHandle[${S}](c)\n`, H("af"), J.response)
        Q += "if(af !== undefined) {", _.resolve(), Q += g("af"), Q += "c.response = af }";
      else
        Q += "if(af !== undefined) {", _.resolve(), Q += "c.response = af}\n";
    }
    if (_.resolve(), Q += "r = c.response\n", J.response)
      Q += g();
    Q += E;
    const A = R("mapResponse", { total: j.mapResponse.length });
    if (j.mapResponse.length)
      for (let S = 0;S < j.mapResponse.length; S++) {
        const C = j.mapResponse[S], a = A.resolveChild(C.fn.name);
        Q += `\nmr = ${C0(C) ? "await" : ""} onMapResponse[${S}](c)
				if(mr !== undefined) r = c.response = mr\n`, a();
      }
    if (A.resolve(), t0)
      Q += `return mapResponse(${e} r, c.set ${s})\n`;
    else
      Q += `return mapCompactResponse(${e} r ${s})\n`;
  } else {
    const N = R("handle", { name: B ? Y.name : undefined });
    if (J.response || j.mapResponse.length) {
      if (Q += Y0 ? `let r = await ${U};\n` : `let r = ${U};\n`, N.resolve(), J.response)
        Q += g();
      R("afterHandle").resolve();
      const _ = R("mapResponse", { total: j.mapResponse.length });
      if (j.mapResponse.length) {
        Q += "\nc.response = r\n";
        for (let A = 0;A < j.mapResponse.length; A++) {
          const S = j.mapResponse[A], C = _.resolveChild(S.fn.name);
          Q += `\nif(mr === undefined) {
						mr = ${C0(S) ? "await" : ""} onMapResponse[${A}](c)
    					if(mr !== undefined) r = c.response = mr
					}\n`, C();
        }
      }
      if (_.resolve(), Q += E, Y instanceof Response)
        Q += K.set ? `if(
					isNotEmpty(c.set.headers) ||
					c.set.status !== 200 ||
					c.set.redirect ||
					c.set.cookie
				)
					return mapResponse(${e} ${U}.clone(), c.set ${s})
				else
					return ${U}.clone()` : `return ${U}.clone()`, Q += "\n";
      else if (t0)
        Q += `return mapResponse(${e} r, c.set ${s})\n`;
      else
        Q += `return mapCompactResponse(${e} r ${s})\n`;
    } else if (P || F) {
      Q += Y0 ? `let r = await ${U};\n` : `let r = ${U};\n`, N.resolve(), R("afterHandle").resolve();
      const _ = R("mapResponse", { total: j.mapResponse.length });
      if (j.mapResponse.length) {
        Q += "\nc.response = r\n";
        for (let A = 0;A < j.mapResponse.length; A++) {
          const S = j.mapResponse[A], C = _.resolveChild(S.fn.name);
          Q += `\nif(mr === undefined) {
							mr = ${C0(S) ? "await" : ""} onMapResponse[${A}](c)
    						if(mr !== undefined) r = c.response = mr
						}\n`, C();
        }
      }
      if (_.resolve(), Q += E, t0)
        Q += `return mapResponse(${e} r, c.set ${s})\n`;
      else
        Q += `return mapCompactResponse(${e} r ${s})\n`;
    } else {
      N.resolve();
      const _ = Y0 ? `await ${U}` : U;
      if (R("afterHandle").resolve(), Y instanceof Response)
        Q += K.set ? `if(
					isNotEmpty(c.set.headers) ||
					c.set.status !== 200 ||
					c.set.redirect ||
					c.set.cookie
				)
					return mapResponse(${e} ${U}.clone(), c.set ${s})
				else
					return ${U}.clone()` : `return ${U}.clone()`, Q += "\n";
      else if (t0)
        Q += `return mapResponse(${e} ${_}, c.set ${s})\n`;
      else
        Q += `return mapCompactResponse(${e} ${_} ${s})\n`;
    }
  }
  if (Q += "\n} catch(error) {", D)
    Q += "\nif(isParsing) error = new ParseError()\n";
  if (!y0)
    Q += "\nreturn (async () => {\n";
  if (Q += "\nconst set = c.set\nif (!set.status || set.status < 300) set.status = error?.status || 500\n", F)
    for (let N = 0;N < j.trace.length; N++)
      Q += `report${N}?.resolve(error);reportChild${N}?.(error);\n`;
  const K2 = R("error", { total: j.error.length });
  if (j.error.length) {
    Q += `
				c.error = error
				if(error instanceof TypeBoxError) {
					c.code = "VALIDATION"
					c.set.status = 422
				} else
					c.code = error.code ?? error[ERROR_CODE] ?? "UNKNOWN"
				let er
			`;
    for (let N = 0;N < j.error.length; N++) {
      const _ = K2.resolveChild(j.error[N].fn.name);
      if (k(j.error[N]))
        Q += `\ner = await handleErrors[${N}](c)\n`;
      else
        Q += `\ner = handleErrors[${N}](c)\nif (er instanceof Promise) er = await er\n`;
      _();
      const A = R("mapResponse", { total: j.mapResponse.length });
      if (j.mapResponse.length)
        for (let S = 0;S < j.mapResponse.length; S++) {
          const C = j.mapResponse[S], a = A.resolveChild(C.fn.name);
          Q += `\nc.response = er\n
							er = ${C0(C) ? "await" : ""} onMapResponse[${S}](c)
							if(er instanceof Promise) er = await er\n`, a();
        }
      if (A.resolve(), Q += `er = mapEarlyResponse(er, set ${s})\n`, Q += "if (er) {", F) {
        for (let S = 0;S < j.trace.length; S++)
          Q += `\nreport${S}.resolve()\n`;
        K2.resolve();
      }
      Q += "return er\n}\n";
    }
  }
  if (K2.resolve(), Q += "return handleError(c, error, true)\n", !y0)
    Q += "})()";
  if (Q += "}", w || F) {
    if (Q += " finally { ", !y0)
      Q += ";(async () => {";
    const N = R("afterResponse", { total: j.afterResponse.length });
    if (w)
      for (let _ = 0;_ < j.afterResponse.length; _++) {
        const A = N.resolveChild(j.afterResponse[_].fn.name);
        Q += `\nawait afterResponse[${_}](c);\n`, A();
      }
    if (N.resolve(), !y0)
      Q += "})();";
    Q += "}";
  }
  Q = `const {
		handler,
		handleError,
		hooks: {
			transform,
			resolve,
			beforeHandle,
			afterHandle,
			mapResponse: onMapResponse,
			parse,
			error: handleErrors,
			afterResponse,
			trace: _trace
		},
		validator,
		utils: {
			mapResponse,
			mapCompactResponse,
			mapEarlyResponse,
			parseQuery,
			parseQueryFromURL,
			isNotEmpty
		},
		error: {
			NotFoundError,
			ValidationError,
			InternalServerError,
			ParseError
		},
		schema,
		definitions,
		ERROR_CODE,
		parseCookie,
		signCookie,
		decodeURIComponent,
		ElysiaCustomStatusResponse,
		ELYSIA_TRACE,
		ELYSIA_REQUEST_ID,
		getServer,
		TypeBoxError
	} = hooks

	const trace = _trace.map(x => typeof x === 'function' ? x : x.fn)

	return ${y0 ? "async" : ""} function handle(c) {
		${j.beforeHandle.length ? "let be" : ""}
		${j.afterHandle.length ? "let af" : ""}
		${j.mapResponse.length ? "let mr" : ""}

		${G ? "c.schema = schema; c.defs = definitions" : ""}
		${Q}
	}`;
  try {
    return Function("hooks", Q)({ handler: Y, hooks: E2(j), validator: J, handleError: $.handleError, utils: { mapResponse: x, mapCompactResponse: Z0, mapEarlyResponse: y, parseQuery: l0, parseQueryFromURL: G2, isNotEmpty: c }, error: { NotFoundError: A0, ValidationError: q, InternalServerError: Q2, ParseError: Y2 }, schema: $.router.history, definitions: $.definitions.type, ERROR_CODE: I0, parseCookie: e0, signCookie: x0, decodeURIComponent: N1.default, ElysiaCustomStatusResponse: p, ELYSIA_TRACE: i0, ELYSIA_REQUEST_ID: P0, getServer: () => $.getServer(), TypeBoxError });
  } catch {
    const N = E2(j);
    console.log("[Composer] failed to generate optimized handler"), console.log("Please report the following to SaltyAom privately as it may include sensitive information about your codebase:"), console.log("---"), console.log({ handler: typeof Y === "function" ? Y.toString() : Y, hooks: { ...N, transform: N?.transform?.map?.((_) => _.toString()), resolve: N?.resolve?.map?.((_) => _.toString()), beforeHandle: N?.beforeHandle?.map?.((_) => _.toString()), afterHandle: N?.afterHandle?.map?.((_) => _.toString()), mapResponse: N?.mapResponse?.map?.((_) => _.toString()), parse: N?.parse?.map?.((_) => _.toString()), error: N?.error?.map?.((_) => _.toString()), afterResponse: N?.afterResponse?.map?.((_) => _.toString()), stop: N?.stop?.map?.((_) => _.toString()) }, validator: J, definitions: $.definitions.type }), console.log("---"), process.exit(1);
  }
};
var g2 = ($) => {
  const W = $.config.handler?.standardHostname ?? true;
  let X = "", Z = "";
  const j = $.setHeaders;
  for (let D of Object.keys($.singleton.decorator))
    X += `,${D}: app.singleton.decorator.${D}`;
  const J = $.router, Y = $.event.trace.length > 0;
  let G = `
	const route = router.find(request.method, path) ${J.http.root.ALL ? '?? router.find("ALL", path)' : ""}

	if (route === null)
		return ${$.event.error.length ? "app.handleError(ctx, notFound)" : $.event.request.length ? `new Response(error404Message, {
					status: ctx.set.status === 200 ? 404 : ctx.set.status,
					headers: ctx.set.headers
				})` : "error404.clone()"}

	ctx.params = route.params\n`;
  G += `if(route.store.handler) return route.store.handler(ctx)
	return (route.store.handler = route.store.compile())(ctx)\n`;
  let K = "";
  for (let [D, { code: M, all: I, static: O }] of Object.entries(J.static.http.map)) {
    if (O)
      K += `case '${D}':\nswitch(request.method) {\n${M}\n${I ?? "default: break map"}}\n\n`;
    K += `case '${D}':\nswitch(request.method) {\n${M}\n${I ?? "default: break map"}}\n\n`;
  }
  const B = $.event.request.some(k);
  if (Z += `const {
		app,
		mapEarlyResponse,
		NotFoundError,
		randomId,
		handleError,
		error,
		redirect,
		ELYSIA_TRACE,
		ELYSIA_REQUEST_ID,
		getServer
	} = data

	const store = app.singleton.store
	const staticRouter = app.router.static.http
	const st = staticRouter.handlers
	const wsRouter = app.router.ws
	const router = app.router.http
	const trace = app.event.trace.map(x => typeof x === 'function' ? x : x.fn)

	const notFound = new NotFoundError()
	const hoc = app.extender.higherOrderFunctions.map(x => x.fn)

	${$.event.request.length ? "const onRequest = app.event.request.map(x => x.fn)" : ""}
	${$.event.error.length ? "" : `\nconst error404Message = notFound.message.toString()
	const error404 = new Response(error404Message, { status: 404 });\n`}

	${$.event.trace.length ? `const ${$.event.trace.map((D, M) => `tr${M} = app.event.trace[${M}].fn`).join(",")}` : ""}

	${B ? "async" : ""} function map(request) {\n`, $.event.request.length)
    Z += "let re";
  if (Z += `\nconst url = request.url
		const s = url.indexOf('/', ${W ? 11 : 7})
		const qi = url.indexOf('?', s + 1)
		let path
		if(qi === -1)
			path = url.substring(s)
		else
			path = url.substring(s, qi)\n`, Z += `${Y ? "const id = randomId()" : ""}
		const ctx = {
			request,
			store,
			qi,
			path,
			url,
			redirect,
			set: {
				headers: ${Object.keys(j ?? {}).length ? "Object.assign({}, app.setHeaders)" : "{}"},
				status: 200
			},
			error
			${$.inference.server ? `, get server() {
							return getServer()
						}` : ""}
			${Y ? ",[ELYSIA_REQUEST_ID]: id" : ""}
			${X}
		}\n`, $.event.trace.length)
    Z += `\nctx[ELYSIA_TRACE] = [${$.event.trace.map((D, M) => `tr${M}(ctx)`).join(",")}]\n`;
  const w = x2({ context: "ctx", trace: $.event.trace, addFn(D) {
    Z += D;
  } })("request", { attribute: "ctx", total: $.event.request.length });
  if ($.event.request.length) {
    Z += "\n try {\n";
    for (let D = 0;D < $.event.request.length; D++) {
      const M = $.event.request[D], I = E0(M), O = k(M), P = w.resolveChild($.event.request[D].fn.name);
      if (I)
        Z += `re = mapEarlyResponse(
					${O ? "await" : ""} onRequest[${D}](ctx),
					ctx.set,
					request
				)\n`, P("re"), Z += "if(re !== undefined) return re\n";
      else
        Z += `${O ? "await" : ""} onRequest[${D}](ctx)\n`, P();
    }
    Z += `} catch (error) {
			return app.handleError(ctx, error)
		}`;
  }
  w.resolve();
  const F = $.router.static.ws, Q = $.router.ws;
  if (Object.keys(F).length || Q.history.length) {
    Z += `
			if(request.method === 'GET') {
				switch(path) {`;
    for (let [D, M] of Object.entries(F))
      Z += `
					case '${D}':
						if(request.headers.get('upgrade') === 'websocket')
							return st[${M}](ctx)

						break`;
    Z += `
				default:
					if(request.headers.get('upgrade') === 'websocket') {
						const route = wsRouter.find('ws', path)

						if(route) {
							ctx.params = route.params

							if(route.store.handler)
							    return route.store.handler(ctx)

							return (route.store.handler = route.store.compile())(ctx)
						}
					}

					break
			}
		}\n`;
  }
  if (Z += `
		map: switch(path) {
			${K}

			default:
				break
		}

		${G}
	}\n`, $.extender.higherOrderFunctions.length) {
    let D = "map";
    for (let M = 0;M < $.extender.higherOrderFunctions.length; M++)
      D = `hoc[${M}](${D}, request)`;
    Z += `return function hocMap(request) { return ${D}(request) }`;
  } else
    Z += "return map";
  const z = f2($);
  return $.handleError = z, Function("data", Z)({ app: $, mapEarlyResponse: y, NotFoundError: A0, randomId: j2, handleError: z, error: q2, redirect: d0, ELYSIA_TRACE: i0, ELYSIA_REQUEST_ID: P0, getServer: () => $.getServer() });
};
var f2 = ($) => {
  const W = $.event;
  let X = "";
  X += `const {
		app: { event: { error: onErrorContainer, afterResponse: resContainer, mapResponse: _onMapResponse, trace: _trace } },
		mapResponse,
		ERROR_CODE,
		ElysiaCustomStatusResponse,
		ELYSIA_TRACE,
		ELYSIA_REQUEST_ID
	} = inject

	const trace = _trace.map(x => typeof x === 'function' ? x : x.fn)
	const onMapResponse = []

	for(let i = 0; i < _onMapResponse.length; i++)
		onMapResponse.push(_onMapResponse[i].fn ?? _onMapResponse[i])

	delete _onMapResponse

	const onError = onErrorContainer.map(x => x.fn)
	const res = resContainer.map(x => x.fn)

	return ${$.event.error.find(k) || $.event.mapResponse.find(k) ? "async" : ""} function(context, error, skipGlobal) {`;
  const Z = $.event.trace.length > 0;
  if (Z)
    X += "\nconst id = context[ELYSIA_REQUEST_ID]\n";
  const j = x2({ context: "context", trace: W.trace, addFn: (G) => {
    X += G;
  } });
  X += `
		const set = context.set
		let r

		if(!context.code)
			context.code = error.code ?? error[ERROR_CODE]

		if(!(context.error instanceof Error))
			context.error = error

		if(error instanceof ElysiaCustomStatusResponse) {
			error.status = error.code
			error.message = error.response
		}\n`;
  const J = Z || W.afterResponse.length > 0 || W.afterResponse.length > 0 ? "context.response = " : "";
  for (let G = 0;G < $.event.error.length; G++) {
    const K = $.event.error[G], B = `${k(K) ? "await " : ""}onError[${G}](context)`;
    if (X += "\nif(skipGlobal !== true) {\n", E0(K)) {
      X += `r = ${B}; if(r !== undefined) {
				if(r instanceof Response) return r

				if(r instanceof ElysiaCustomStatusResponse) {
					error.status = error.code
					error.message = error.response
				}

				if(set.status === 200) set.status = error.status\n`;
      const U = j("mapResponse", { total: W.mapResponse.length, name: "context" });
      if (W.mapResponse.length)
        for (let w = 0;w < W.mapResponse.length; w++) {
          const F = W.mapResponse[w], Q = U.resolveChild(F.fn.name);
          X += `\ncontext.response = r
						r = ${C0(F) ? "await" : ""} onMapResponse[${w}](context)\n`, Q();
        }
      U.resolve(), X += `return mapResponse(${J} r, set, context.request)}\n`;
    } else
      X += B + "\n";
    X += "\n}\n";
  }
  X += `if(error.constructor.name === "ValidationError" || error.constructor.name === "TransformDecodeError") {
		set.status = error.status ?? 422
		return new Response(
			error.message,
			{
				headers: Object.assign(
					{ 'content-type': 'application/json'},
					set.headers
				),
				status: set.status
			}
		)
	} else {
		if(error.code && typeof error.status === "number")
			return new Response(
				error.message,
				{ headers: set.headers, status: error.status }
			)\n`;
  const Y = j("mapResponse", { total: W.mapResponse.length, name: "context" });
  if (W.mapResponse.length)
    for (let G = 0;G < W.mapResponse.length; G++) {
      const K = W.mapResponse[G], B = Y.resolveChild(K.fn.name);
      X += `\ncontext.response = error
			error = ${C0(K) ? "await" : ""} onMapResponse[${G}](context)\n`, B();
    }
  return Y.resolve(), X += `\nreturn mapResponse(${J} error, set, context.request)\n}\n}`, Function("inject", X)({ app: $, mapResponse: x, ERROR_CODE: I0, ElysiaCustomStatusResponse: p, ELYSIA_TRACE: i0, ELYSIA_REQUEST_ID: P0 });
};
var y2 = ($) => async (W) => {
  const X = W.url, Z = X.indexOf("/", 11), j = X.indexOf("?", Z + 1), J = j === -1 ? X.substring(Z) : X.substring(Z, j), Y = { cookie: {}, status: 200, headers: {} }, G = Object.assign({}, $.singleton.decorator, { set: Y, store: $.singleton.store, request: W, path: J, qi: j, redirect: d0 });
  try {
    for (let I = 0;I < $.event.request.length; I++) {
      const O = $.event.request[I].fn;
      let P = O(G);
      if (P instanceof Promise)
        P = await P;
      if (P = y(P, Y), P)
        return G.response = P;
    }
    const K = $.router.dynamic.find(W.method, J) ?? $.router.dynamic.find("ALL", J);
    if (!K)
      throw new A0;
    const { handle: B, hooks: U, validator: w, content: F } = K.store;
    let Q;
    if (W.method !== "GET" && W.method !== "HEAD")
      if (F)
        switch (F) {
          case "application/json":
            Q = await W.json();
            break;
          case "text/plain":
            Q = await W.text();
            break;
          case "application/x-www-form-urlencoded":
            Q = l0(await W.text());
            break;
          case "application/octet-stream":
            Q = await W.arrayBuffer();
            break;
          case "multipart/form-data":
            Q = {};
            const I = await W.formData();
            for (let O of I.keys()) {
              if (Q[O])
                continue;
              const P = I.getAll(O);
              if (P.length === 1)
                Q[O] = P[0];
              else
                Q[O] = P;
            }
            break;
        }
      else {
        let I = W.headers.get("content-type");
        if (I) {
          const O = I.indexOf(";");
          if (O !== -1)
            I = I.slice(0, O);
          G.contentType = I;
          for (let P = 0;P < U.parse.length; P++) {
            const b = U.parse[P].fn;
            let T = b(G, I);
            if (T instanceof Promise)
              T = await T;
            if (T) {
              Q = T;
              break;
            }
          }
          if (delete G.contentType, Q === undefined)
            switch (I) {
              case "application/json":
                Q = await W.json();
                break;
              case "text/plain":
                Q = await W.text();
                break;
              case "application/x-www-form-urlencoded":
                Q = l0(await W.text());
                break;
              case "application/octet-stream":
                Q = await W.arrayBuffer();
                break;
              case "multipart/form-data":
                Q = {};
                const P = await W.formData();
                for (let b of P.keys()) {
                  if (Q[b])
                    continue;
                  const T = P.getAll(b);
                  if (T.length === 1)
                    Q[b] = T[0];
                  else
                    Q[b] = T;
                }
                break;
            }
        }
      }
    G.body = Q, G.params = K?.params || undefined, G.query = j === -1 ? {} : G2(X.substring(j + 1)), G.headers = {};
    for (let [I, O] of W.headers.entries())
      G.headers[I] = O;
    const z = Object.assign({}, $.config?.cookie, w?.cookie?.config), D = W.headers.get("cookie");
    G.cookie = await e0(G.set, D, z ? { secrets: z.secrets !== undefined ? typeof z.secrets === "string" ? z.secrets : z.secrets.join(",") : undefined, sign: z.sign === true ? true : z.sign !== undefined ? typeof z.sign === "string" ? z.sign : z.sign.join(",") : undefined } : undefined);
    for (let I = 0;I < U.transform.length; I++) {
      const O = U.transform[I], P = O.fn(G);
      if (O.subType === "derive")
        if (P instanceof Promise)
          Object.assign(G, await P);
        else
          Object.assign(G, P);
      else if (P instanceof Promise)
        await P;
    }
    if (w) {
      if (w.createHeaders?.()) {
        const I = {};
        for (let O in W.headers)
          I[O] = W.headers.get(O);
        if (w.headers.Check(I) === false)
          throw new q("header", w.headers, I);
      } else if (w.headers?.Decode)
        G.headers = w.headers.Decode(G.headers);
      if (w.createParams?.()?.Check(G.params) === false)
        throw new q("params", w.params, G.params);
      else if (w.params?.Decode)
        G.params = w.params.Decode(G.params);
      if (w.createQuery?.()?.Check(G.query) === false)
        throw new q("query", w.query, G.query);
      else if (w.query?.Decode)
        G.query = w.query.Decode(G.query);
      if (w.createCookie?.()) {
        let I = {};
        for (let [O, P] of Object.entries(G.cookie))
          I[O] = P.value;
        if (w.cookie.Check(I) === false)
          throw new q("cookie", w.cookie, I);
        else if (w.cookie?.Decode)
          I = w.cookie.Decode(I);
      }
      if (w.createBody?.()?.Check(Q) === false)
        throw new q("body", w.body, Q);
      else if (w.body?.Decode)
        G.body = w.body.Decode(Q);
    }
    for (let I = 0;I < U.beforeHandle.length; I++) {
      const O = U.beforeHandle[I];
      let P = O.fn(G);
      if (O.subType === "resolve") {
        if (P instanceof Promise)
          Object.assign(G, await P);
        else
          Object.assign(G, P);
        continue;
      } else if (P instanceof Promise)
        P = await P;
      if (P !== undefined) {
        G.response = P;
        for (let T = 0;T < U.afterHandle.length; T++) {
          let E = U.afterHandle[T].fn(G);
          if (E instanceof Promise)
            E = await E;
          if (E)
            P = E;
        }
        const b = y(P, G.set);
        if (b)
          return G.response = b;
      }
    }
    let M = B(G);
    if (M instanceof Promise)
      M = await M;
    if (!U.afterHandle.length) {
      const I = M instanceof p ? M.code : Y.status ? typeof Y.status === "string" ? _0[Y.status] : Y.status : 200, O = w?.createResponse?.()?.[I];
      if (O?.Check(M) === false)
        throw new q("response", O, M);
      else if (O?.Decode)
        M = O.Decode(M);
    } else {
      G.response = M;
      for (let I = 0;I < U.afterHandle.length; I++) {
        let O = U.afterHandle[I].fn(G);
        if (O instanceof Promise)
          O = await O;
        const P = y(O, G.set);
        if (P !== undefined) {
          const b = w?.response?.[P.status];
          if (b?.Check(P) === false)
            throw new q("response", b, P);
          else if (b?.Decode)
            M = b.Decode(M);
          return G.response = P;
        }
      }
    }
    if (G.set.cookie && z?.sign) {
      const I = !z.secrets ? undefined : typeof z.secrets === "string" ? z.secrets : z.secrets[0];
      if (z.sign === true)
        for (let [O, P] of Object.entries(G.set.cookie))
          G.set.cookie[O].value = await x0(P.value, "${secret}");
      else {
        const O = w?.cookie?.schema?.properties;
        for (let P of z.sign) {
          if (!(P in O))
            continue;
          if (G.set.cookie[P]?.value)
            G.set.cookie[P].value = await x0(G.set.cookie[P].value, I);
        }
      }
    }
    return G.response = x(M, G.set);
  } catch (K) {
    if (K.status)
      Y.status = K.status;
    return $.handleError(G, K);
  } finally {
    for (let K of $.event.afterResponse)
      await K.fn(G);
  }
};
var A1 = ($) => async (W, X) => {
  const Z = Object.assign(W, { error: X, code: X.code });
  Z.set = W.set;
  for (let j = 0;j < $.event.error.length; j++) {
    let Y = $.event.error[j].fn(Z);
    if (Y instanceof Promise)
      Y = await Y;
    if (Y !== undefined && Y !== null)
      return W.response = x(Y, W.set);
  }
  return new Response(typeof X.cause === "string" ? X.cause : X.message, { headers: W.set.headers, status: X.status ?? 500 });
};

class Q0 {
  config;
  server = null;
  dependencies = {};
  _routes = {};
  _types = { Prefix: "", Scoped: false, Singleton: {}, Definitions: {}, Metadata: {} };
  _ephemeral = {};
  _volatile = {};
  static version = R2;
  version = R2;
  singleton = { decorator: {}, store: {}, derive: {}, resolve: {} };
  get store() {
    return this.singleton.store;
  }
  get decorator() {
    return this.singleton.decorator;
  }
  get _scoped() {
    return this.config.scoped;
  }
  definitions = { type: {}, error: {} };
  extender = { macros: [], higherOrderFunctions: [] };
  validator = { global: null, scoped: null, local: null, getCandidate() {
    return b0(b0(this.global, this.scoped), this.local);
  } };
  event = { start: [], request: [], parse: [], transform: [], beforeHandle: [], afterHandle: [], mapResponse: [], afterResponse: [], trace: [], error: [], stop: [] };
  telemetry = { stack: undefined };
  router = { http: new M0, ws: new M0, dynamic: new M0, static: { http: { static: {}, handlers: [], map: {}, all: "" }, ws: {} }, history: [] };
  routeTree = new Map;
  get routes() {
    return this.router.history;
  }
  getGlobalRoutes() {
    return this.router.history;
  }
  inference = { body: false, cookie: false, headers: false, query: false, set: false, server: false };
  getServer() {
    return this.server;
  }
  _promisedModules;
  get promisedModules() {
    if (!this._promisedModules)
      this._promisedModules = new T2;
    return this._promisedModules;
  }
  constructor($ = {}) {
    if ($.tags)
      if (!$.detail)
        $.detail = { tags: $.tags };
      else
        $.detail.tags = $.tags;
    if ($.nativeStaticResponse === undefined)
      $.nativeStaticResponse = true;
    if (this.config = {}, this.applyConfig($ ?? {}), $?.analytic && ($?.name || $?.seed !== undefined))
      this.telemetry.stack = new Error().stack;
  }
  env($, W = Bun?.env ?? process.env) {
    if (m($, { dynamic: true, additionalProperties: true, coerce: true }).Check(W) === false) {
      const Z = new q("env", $, W);
      throw new Error(Z.all.map((j) => j.summary).join("\n"));
    }
    return this;
  }
  wrap($) {
    return this.extender.higherOrderFunctions.push({ checksum: N0(JSON.stringify({ name: this.config.name, seed: this.config.seed, content: $.toString() })), fn: $ }), this;
  }
  applyMacro($) {
    if (this.extender.macros.length) {
      const W = F1({ globalHook: this.event, localHook: $ }), X = { events: { global: this.event, local: $ }, onParse: W("parse"), onTransform: W("transform"), onBeforeHandle: W("beforeHandle"), onAfterHandle: W("afterHandle"), mapResponse: W("mapResponse"), onAfterResponse: W("afterResponse"), onError: W("error") };
      for (let Z of this.extender.macros)
        _1(Z.fn(X), $);
    }
  }
  applyConfig($) {
    return this.config = { prefix: "", aot: true, strictPath: false, global: false, analytic: false, normalize: true, ...$, cookie: { path: "/", ...$?.cookie }, experimental: $?.experimental ?? {}, seed: $?.seed === undefined ? "" : $?.seed }, this;
  }
  get models() {
    const $ = {};
    for (let [W, X] of Object.entries(this.definitions.type))
      $[W] = m(X);
    return $;
  }
  add($, W, X, Z, { allowMeta: j = false, skipPrefix: J = false } = { allowMeta: false, skipPrefix: false }) {
    if (Z = M1(Z), W !== "" && W.charCodeAt(0) !== 47)
      W = "/" + W;
    if (this.config.prefix && !J && !this.config.scoped)
      W = this.config.prefix + W;
    if (Z?.type)
      switch (Z.type) {
        case "text":
          Z.type = "text/plain";
          break;
        case "json":
          Z.type = "application/json";
          break;
        case "formdata":
          Z.type = "multipart/form-data";
          break;
        case "urlencoded":
          Z.type = "application/x-www-form-urlencoded";
          break;
        case "arrayBuffer":
          Z.type = "application/octet-stream";
          break;
        default:
          break;
      }
    const Y = this.definitions.type, G = !this.config.aot, K = { ...this.validator.getCandidate() }, B = { body: Z?.body ?? K?.body, headers: Z?.headers ?? K?.headers, params: Z?.params ?? K?.params, query: Z?.query ?? K?.query, cookie: Z?.cookie ?? K?.cookie, response: Z?.response ?? K?.response }, U = () => B.cookie ? W2({ validator: B.cookie, defaultConfig: this.config.cookie, config: B.cookie?.config ?? {}, dynamic: G, models: Y }) : undefined, w = this.config.normalize, F = this.config.precompile === true || typeof this.config.precompile === "object" && this.config.precompile.schema === true ? { body: m(B.body, { dynamic: G, models: Y, normalize: w, additionalCoerce: S2() }), headers: m(B.headers, { dynamic: G, models: Y, additionalProperties: !this.config.normalize, coerce: true, additionalCoerce: D0() }), params: m(B.params, { dynamic: G, models: Y, coerce: true, additionalCoerce: D0() }), query: m(B.query, { dynamic: G, models: Y, normalize: w, coerce: true, additionalCoerce: D0() }), cookie: U(), response: $2(B.response, { dynamic: G, models: Y, normalize: w }) } : { createBody() {
      if (this.body)
        return this.body;
      return this.body = m(B.body, { dynamic: G, models: Y, normalize: w, additionalCoerce: S2() });
    }, createHeaders() {
      if (this.headers)
        return this.headers;
      return this.headers = m(B.headers, { dynamic: G, models: Y, additionalProperties: !w, coerce: true, additionalCoerce: D0() });
    }, createParams() {
      if (this.params)
        return this.params;
      return this.params = m(B.params, { dynamic: G, models: Y, coerce: true, additionalCoerce: D0() });
    }, createQuery() {
      if (this.query)
        return this.query;
      return this.query = m(B.query, { dynamic: G, models: Y, coerce: true, additionalCoerce: D0() });
    }, createCookie() {
      if (this.cookie)
        return this.cookie;
      return this.cookie = U();
    }, createResponse() {
      if (this.response)
        return this.response;
      return this.response = $2(B.response, { dynamic: G, models: Y, normalize: w });
    } }, Q = W.endsWith("/") ? W.slice(0, W.length - 1) : W + "/";
    if (Z = i(Z, K), Z.tags)
      if (!Z.detail)
        Z.detail = { tags: Z.tags };
      else
        Z.detail.tags = Z.tags;
    if (c(this.config.detail))
      Z.detail = d(Object.assign({}, this.config.detail), Z.detail);
    this.applyMacro(Z);
    const z = i(this.event, Z);
    if (this.config.aot === false) {
      if (this.router.dynamic.add($, W, { validator: F, hooks: z, content: Z?.type, handle: X }), this.config.strictPath === false)
        this.router.dynamic.add($, Q, { validator: F, hooks: z, content: Z?.type, handle: X });
      this.router.history.push({ method: $, path: W, composed: null, handler: X, hooks: z });
      return;
    }
    const D = this.config.precompile === true || typeof this.config.precompile === "object" && this.config.precompile.compose === true, M = m0(this.inference), I = typeof X !== "function" ? Q1(X, z, this.setHeaders) : undefined, O = typeof X !== "function" ? Y1(X, z, this.setHeaders) : undefined;
    if (this.config.nativeStaticResponse === true && O && ($ === "GET" || $ === "ALL"))
      this.router.static.http.static[W] = O();
    const P = () => I1({ app: this, path: W, method: $, localHook: i(Z), hooks: z, validator: F, handler: X, allowMeta: j, inference: M }), b = D ? P() : (L) => {
      return P()(L);
    }, T = this.router.history.length;
    if (this.routeTree.has($ + W))
      for (let L = 0;L < this.router.history.length; L++) {
        const g = this.router.history[L];
        if (g.path === W && g.method === $) {
          const R = this.router.history.splice(L, 1)[0];
          if (R && this.routeTree.has(R?.method + R?.path))
            this.routeTree.delete(R.method + R.path);
        }
      }
    else
      this.routeTree.set($ + W, T);
    this.router.history.push({ method: $, path: W, composed: b, handler: X, hooks: z });
    const E = this.router.static.http, r = { handler: D ? b : undefined, compile: P };
    if ($ === "$INTERNALWS") {
      const L = this.config.strictPath ? undefined : W.endsWith("/") ? W.slice(0, W.length - 1) : W + "/";
      if (W.indexOf(":") === -1 && W.indexOf("*") === -1) {
        const g = E.handlers.length;
        if (E.handlers.push((R) => (E.handlers[g] = P())(R)), this.router.static.ws[W] = g, L)
          this.router.static.ws[L] = g;
      } else if (this.router.ws.add("ws", W, r), L)
        this.router.ws.add("ws", L, r);
      return;
    }
    if (W.indexOf(":") === -1 && W.indexOf("*") === -1) {
      const L = E.handlers.length;
      if (E.handlers.push(I ?? ((R) => (E.handlers[L] = P())(R))), !E.map[W])
        E.map[W] = { code: "" };
      const g = I ? "" : "ctx";
      if ($ === "ALL")
        E.map[W].all = `default: return st[${L}](${g})\n`;
      else
        E.map[W].code = `case '${$}': return st[${L}](${g})\n${E.map[W].code}`;
      if (!this.config.strictPath) {
        if (!E.map[Q])
          E.map[Q] = { code: "" };
        if (this.config.nativeStaticResponse === true && O && ($ === "GET" || $ === "ALL"))
          this.router.static.http.static[Q] = O();
        if ($ === "ALL")
          E.map[Q].all = `default: return st[${L}](${g})\n`;
        else
          E.map[Q].code = `case '${$}': return st[${L}](${g})\n${E.map[Q].code}`;
      }
    } else if (this.router.http.add($, W, r), !this.config.strictPath) {
      const L = W.endsWith("/") ? W.slice(0, W.length - 1) : W + "/";
      if (this.config.nativeStaticResponse === true && I && ($ === "GET" || $ === "ALL"))
        this.router.static.http.static[L] = I();
      this.router.http.add($, L, r);
    }
  }
  setHeaders;
  headers($) {
    if (!$)
      return this;
    if (!this.setHeaders)
      this.setHeaders = {};
    return this.setHeaders = d(this.setHeaders, $), this;
  }
  onStart($) {
    return this.on("start", $), this;
  }
  onRequest($) {
    return this.on("request", $), this;
  }
  onParse($, W) {
    if (!W)
      return this.on("parse", $);
    return this.on($, "parse", W);
  }
  onTransform($, W) {
    if (!W)
      return this.on("transform", $);
    return this.on($, "transform", W);
  }
  resolve($, W) {
    if (!W)
      W = $, $ = { as: "local" };
    const X = { subType: "resolve", fn: W };
    return this.onBeforeHandle($, X);
  }
  mapResolve($, W) {
    if (!W)
      W = $, $ = { as: "local" };
    const X = { subType: "mapResolve", fn: W };
    return this.onBeforeHandle($, X);
  }
  onBeforeHandle($, W) {
    if (!W)
      return this.on("beforeHandle", $);
    return this.on($, "beforeHandle", W);
  }
  onAfterHandle($, W) {
    if (!W)
      return this.on("afterHandle", $);
    return this.on($, "afterHandle", W);
  }
  mapResponse($, W) {
    if (!W)
      return this.on("mapResponse", $);
    return this.on($, "mapResponse", W);
  }
  onAfterResponse($, W) {
    if (!W)
      return this.on("afterResponse", $);
    return this.on($, "afterResponse", W);
  }
  trace($, W) {
    if (!W)
      W = $, $ = { as: "local" };
    if (!Array.isArray(W))
      W = [W];
    for (let X of W)
      this.on($, "trace", D1(X));
    return this;
  }
  error($, W) {
    switch (typeof $) {
      case "string":
        return W.prototype[I0] = $, this.definitions.error[$] = W, this;
      case "function":
        return this.definitions.error = $(this.definitions.error), this;
    }
    for (let [X, Z] of Object.entries($))
      Z.prototype[I0] = X, this.definitions.error[X] = Z;
    return this;
  }
  onError($, W) {
    if (!W)
      return this.on("error", $);
    return this.on($, "error", W);
  }
  onStop($) {
    return this.on("stop", $), this;
  }
  on($, W, X) {
    let Z;
    switch (typeof $) {
      case "string":
        Z = $, X = W;
        break;
      case "object":
        if (Z = W, !Array.isArray(W) && typeof W === "object")
          X = W;
        break;
    }
    if (Array.isArray(X))
      X = n(X);
    else if (typeof X === "function")
      X = [{ fn: X }];
    else
      X = [X];
    const j = X;
    for (let J of j)
      J.scope = typeof $ === "string" ? "local" : $?.as ?? "local";
    if (Z !== "trace")
      r0({ [Z]: j.map((J) => J.fn) }, this.inference);
    for (let J of j) {
      const Y = w1(J, "global", { skipIfHasType: true });
      switch (Z) {
        case "start":
          this.event.start.push(Y);
          break;
        case "request":
          this.event.request.push(Y);
          break;
        case "parse":
          this.event.parse.push(Y);
          break;
        case "transform":
          this.event.transform.push(Y);
          break;
        case "beforeHandle":
          this.event.beforeHandle.push(Y);
          break;
        case "afterHandle":
          this.event.afterHandle.push(Y);
          break;
        case "mapResponse":
          this.event.mapResponse.push(Y);
          break;
        case "afterResponse":
          this.event.afterResponse.push(Y);
          break;
        case "trace":
          this.event.trace.push(Y);
          break;
        case "error":
          this.event.error.push(Y);
          break;
        case "stop":
          this.event.stop.push(Y);
          break;
      }
    }
    return this;
  }
  propagate() {
    return v(this.event.parse), v(this.event.transform), v(this.event.beforeHandle), v(this.event.afterHandle), v(this.event.mapResponse), v(this.event.afterResponse), v(this.event.trace), v(this.event.error), this;
  }
  as($) {
    const W = { plugin: "scoped", global: "global" }[$];
    if (v(this.event.parse, W), v(this.event.transform, W), v(this.event.beforeHandle, W), v(this.event.afterHandle, W), v(this.event.mapResponse, W), v(this.event.afterResponse, W), v(this.event.trace, W), v(this.event.error, W), $ === "plugin")
      this.validator.scoped = b0(this.validator.scoped, this.validator.local), this.validator.local = null;
    else if ($ === "global")
      this.validator.global = b0(this.validator.global, b0(this.validator.scoped, this.validator.local)), this.validator.scoped = null, this.validator.local = null;
    return this;
  }
  group($, W, X) {
    const Z = new Q0({ ...this.config, prefix: "" });
    Z.singleton = { ...this.singleton }, Z.definitions = { ...this.definitions }, Z.getServer = () => this.getServer(), Z.inference = m0(this.inference), Z.extender = { ...this.extender };
    const j = typeof W === "object", J = (j ? X : W)(Z);
    if (this.singleton = d(this.singleton, Z.singleton), this.definitions = d(this.definitions, Z.definitions), J.event.request.length)
      this.event.request = [...this.event.request || [], ...J.event.request || []];
    if (J.event.mapResponse.length)
      this.event.mapResponse = [...this.event.mapResponse || [], ...J.event.mapResponse || []];
    return this.model(J.definitions.type), Object.values(Z.router.history).forEach(({ method: Y, path: G, handler: K, hooks: B }) => {
      if (G = (j ? "" : this.config.prefix) + $ + G, j) {
        const U = W, w = B;
        this.add(Y, G, K, i(U, { ...w || {}, error: !w.error ? J.event.error : Array.isArray(w.error) ? [...w.error || {}, ...J.event.error || {}] : [w.error, ...J.event.error || {}] }));
      } else
        this.add(Y, G, K, i(B, { error: J.event.error }), { skipPrefix: true });
    }), this;
  }
  guard($, W) {
    if (!W) {
      if (typeof $ === "object") {
        this.applyMacro($);
        const j = $.as ?? "local";
        if (this.validator[j] = { body: $.body ?? this.validator[j]?.body, headers: $.headers ?? this.validator[j]?.headers, params: $.params ?? this.validator[j]?.params, query: $.query ?? this.validator[j]?.query, response: $.response ?? this.validator[j]?.response, cookie: $.cookie ?? this.validator[j]?.cookie }, $.parse)
          this.on({ as: j }, "parse", $.parse);
        if ($.transform)
          this.on({ as: j }, "transform", $.transform);
        if ($.beforeHandle)
          this.on({ as: j }, "beforeHandle", $.beforeHandle);
        if ($.afterHandle)
          this.on({ as: j }, "afterHandle", $.afterHandle);
        if ($.mapResponse)
          this.on({ as: j }, "mapResponse", $.mapResponse);
        if ($.afterResponse)
          this.on({ as: j }, "afterResponse", $.afterResponse);
        if ($.error)
          this.on({ as: j }, "error", $.error);
        if ($.detail)
          if (this.config.detail)
            this.config.detail = d(Object.assign({}, this.config.detail), $.detail);
          else
            this.config.detail = $.detail;
        if ($?.tags)
          if (!this.config.detail)
            this.config.detail = { tags: $.tags };
          else
            this.config.detail.tags = $.tags;
        return this;
      }
      return this.guard({}, $);
    }
    const X = new Q0({ ...this.config, prefix: "" });
    X.singleton = { ...this.singleton }, X.definitions = { ...this.definitions }, X.inference = m0(this.inference), X.extender = { ...this.extender };
    const Z = W(X);
    if (this.singleton = d(this.singleton, X.singleton), this.definitions = d(this.definitions, X.definitions), Z.getServer = () => this.server, Z.event.request.length)
      this.event.request = [...this.event.request || [], ...Z.event.request || []];
    if (Z.event.mapResponse.length)
      this.event.mapResponse = [...this.event.mapResponse || [], ...Z.event.mapResponse || []];
    return this.model(Z.definitions.type), Object.values(X.router.history).forEach(({ method: j, path: J, handler: Y, hooks: G }) => {
      this.add(j, J, Y, i($, { ...G || {}, error: !G.error ? Z.event.error : Array.isArray(G.error) ? [...G.error || {}, ...Z.event.error || []] : [G.error, ...Z.event.error || []] }));
    }), this;
  }
  use($, W) {
    if (W?.scoped)
      return this.guard({}, (X) => X.use($));
    if (Array.isArray($)) {
      let X = this;
      for (let Z of $)
        X = this.use(Z);
      return X;
    }
    if ($ instanceof Promise)
      return this.promisedModules.add($.then((X) => {
        if (typeof X === "function")
          return X(this);
        if (X instanceof Q0)
          return this._use(X).compile();
        if (typeof X.default === "function")
          return X.default(this);
        if (X.default instanceof Q0)
          return this._use(X.default);
        throw new Error('Invalid plugin type. Expected Elysia instance, function, or module with "default" as Elysia instance or function that returns Elysia instance.');
      }).then((X) => X.compile())), this;
    return this._use($);
  }
  _use($) {
    if (typeof $ === "function") {
      const j = $(this);
      if (j instanceof Promise)
        return this.promisedModules.add(j.then((J) => {
          if (J instanceof Q0) {
            J.getServer = () => this.getServer(), J.getGlobalRoutes = () => this.getGlobalRoutes(), J.model(this.definitions.type), J.error(this.definitions.error);
            for (let { method: Y, path: G, handler: K, hooks: B } of Object.values(J.router.history))
              this.add(Y, G, K, i(B, { error: J.event.error }));
            return J.compile(), J;
          }
          if (typeof J === "function")
            return J(this);
          if (typeof J.default === "function")
            return J.default(this);
          return this._use(J);
        }).then((J) => J.compile())), this;
      return j;
    }
    const { name: W, seed: X } = $.config;
    $.getServer = () => this.getServer(), $.getGlobalRoutes = () => this.getGlobalRoutes(), $.model(this.definitions.type), $.error(this.definitions.error);
    const Z = $.config.scoped;
    if (Z) {
      if (W) {
        if (!(W in this.dependencies))
          this.dependencies[W] = [];
        const J = X !== undefined ? N0(W + JSON.stringify(X)) : 0;
        if (this.dependencies[W].some(({ checksum: Y }) => J === Y))
          return this;
        this.dependencies[W].push(!this.config?.analytic ? { name: $.config.name, seed: $.config.seed, checksum: J, dependencies: $.dependencies } : { name: $.config.name, seed: $.config.seed, checksum: J, dependencies: $.dependencies, stack: $.telemetry.stack, routes: $.router.history, decorators: $.singleton.decorator, store: $.singleton.store, type: $.definitions.type, error: $.definitions.error, derive: $.event.transform.filter((Y) => Y.subType === "derive").map((Y) => ({ fn: Y.fn.toString(), stack: new Error().stack ?? "" })), resolve: $.event.transform.filter((Y) => Y.subType === "derive").map((Y) => ({ fn: Y.fn.toString(), stack: new Error().stack ?? "" })) });
      }
      $.extender.macros = this.extender.macros.concat($.extender.macros);
      const j = [];
      for (let J = 0;J < $.extender.macros.length; J++) {
        const Y = this.extender.macros[J];
        if (j.includes(Y.checksum))
          $.extender.macros.splice(J, 1), J--;
        j.push(Y.checksum);
      }
      if ($.onRequest((J) => {
        Object.assign(J, this.singleton.decorator), Object.assign(J.store, this.singleton.store);
      }), $.event.trace.length)
        $.event.trace.push(...$.event.trace);
      if (!$.config.prefix)
        console.warn("It's recommended to use scoped instance with a prefix to prevent collision routing with other instance.");
      if ($.event.error.length)
        $.event.error.push(...this.event.error);
      if ($.config.aot)
        $.compile();
      if (Z === true && $.config.prefix) {
        this.mount($.config.prefix + "/", $.fetch);
        for (let J of $.router.history)
          this.routeTree.set(J.method + `${$.config.prefix}${J.path}`, this.router.history.length), this.router.history.push({ ...J, path: `${$.config.prefix}${J.path}`, hooks: i(J.hooks, { error: this.event.error }) });
      } else {
        this.mount($.fetch);
        for (let J of $.router.history)
          this.routeTree.set(J.method + `${$.config.prefix}${J.path}`, this.router.history.length), this.router.history.push({ ...J, path: `${$.config.prefix}${J.path}`, hooks: i(J.hooks, { error: this.event.error }) });
      }
      return this;
    } else {
      if (this.headers($.setHeaders), W) {
        if (!(W in this.dependencies))
          this.dependencies[W] = [];
        const J = X !== undefined ? N0(W + JSON.stringify(X)) : 0;
        if (!this.dependencies[W].some(({ checksum: Y }) => J === Y))
          this.extender.macros = this.extender.macros.concat($.extender.macros), this.extender.higherOrderFunctions = this.extender.higherOrderFunctions.concat($.extender.higherOrderFunctions);
      } else
        this.extender.macros = this.extender.macros.concat($.extender.macros), this.extender.higherOrderFunctions = this.extender.higherOrderFunctions.concat($.extender.higherOrderFunctions);
      J2(this.extender.macros), J2(this.extender.higherOrderFunctions);
      const j = [];
      for (let J = 0;J < this.extender.higherOrderFunctions.length; J++) {
        const Y = this.extender.higherOrderFunctions[J];
        if (Y.checksum) {
          if (j.includes(Y.checksum))
            this.extender.higherOrderFunctions.splice(J, 1), J--;
          j.push(Y.checksum);
        }
      }
      this.inference = { body: this.inference.body || $.inference.body, cookie: this.inference.cookie || $.inference.cookie, headers: this.inference.headers || $.inference.headers, query: this.inference.query || $.inference.query, set: this.inference.set || $.inference.set, server: this.inference.server || $.inference.server };
    }
    this.decorate($.singleton.decorator), this.state($.singleton.store), this.model($.definitions.type), this.error($.definitions.error), $.extender.macros = this.extender.macros.concat($.extender.macros);
    for (let { method: j, path: J, handler: Y, hooks: G } of Object.values($.router.history))
      this.add(j, J, Y, i(G, { error: $.event.error }));
    if (!Z)
      if (W) {
        if (!(W in this.dependencies))
          this.dependencies[W] = [];
        const j = X !== undefined ? N0(W + JSON.stringify(X)) : 0;
        if (this.dependencies[W].some(({ checksum: J }) => j === J))
          return this;
        this.dependencies[W].push(!this.config?.analytic ? { name: $.config.name, seed: $.config.seed, checksum: j, dependencies: $.dependencies } : { name: $.config.name, seed: $.config.seed, checksum: j, dependencies: $.dependencies, stack: $.telemetry.stack, routes: $.router.history, decorators: $.singleton, store: $.singleton.store, type: $.definitions.type, error: $.definitions.error, derive: $.event.transform.filter((J) => J?.subType === "derive").map((J) => ({ fn: J.toString(), stack: new Error().stack ?? "" })), resolve: $.event.transform.filter((J) => J?.subType === "resolve").map((J) => ({ fn: J.toString(), stack: new Error().stack ?? "" })) }), this.event = C2(this.event, L2($.event), j);
      } else
        this.event = C2(this.event, L2($.event));
    return this.validator.global = i(this.validator.global, { ...$.validator.global }), this.validator.local = i(this.validator.local, { ...$.validator.scoped }), this;
  }
  macro($) {
    const W = { checksum: N0(JSON.stringify({ name: this.config.name, seed: this.config.seed, content: $.toString() })), fn: $ };
    return this.extender.macros.push(W), this;
  }
  mount($, W) {
    if ($ instanceof Q0 || typeof $ === "function" || $.length === 0 || $ === "/") {
      const j = typeof $ === "function" ? $ : $ instanceof Q0 ? $.compile().fetch : W instanceof Q0 ? W.compile().fetch : W, J = async ({ request: Y, path: G }) => {
        if (Y.method === "GET" || Y.method === "HEAD" || !Y.headers.get("content-type"))
          return j(new Request(R0(Y.url, G || "/"), Y));
        return j(new Request(R0(Y.url, G || "/"), { ...Y, body: await Y.arrayBuffer() }));
      };
      return this.all("/*", J, { type: "none" }), this;
    }
    const X = $.length;
    if (W instanceof Q0)
      W = W.compile().fetch;
    const Z = async ({ request: j, path: J }) => {
      if (j.method === "GET" || j.method === "HEAD" || !j.headers.get("content-type"))
        return W(new Request(R0(j.url, J.slice(X) || "/"), j));
      return W(new Request(R0(j.url, J.slice(X) || "/"), { ...j, body: await j.arrayBuffer() }));
    };
    return this.all($, Z, { type: "none" }), this.all($ + ($.endsWith("/") ? "*" : "/*"), Z, { type: "none" }), this;
  }
  get($, W, X) {
    return this.add("GET", $, W, X), this;
  }
  post($, W, X) {
    return this.add("POST", $, W, X), this;
  }
  put($, W, X) {
    return this.add("PUT", $, W, X), this;
  }
  patch($, W, X) {
    return this.add("PATCH", $, W, X), this;
  }
  delete($, W, X) {
    return this.add("DELETE", $, W, X), this;
  }
  options($, W, X) {
    return this.add("OPTIONS", $, W, X), this;
  }
  all($, W, X) {
    return this.add("ALL", $, W, X), this;
  }
  head($, W, X) {
    return this.add("HEAD", $, W, X), this;
  }
  connect($, W, X) {
    return this.add("CONNECT", $, W, X), this;
  }
  route($, W, X, Z) {
    return this.add($.toUpperCase(), W, X, Z, Z?.config), this;
  }
  ws($, W) {
    const X = W.transformMessage ? Array.isArray(W.transformMessage) ? W.transformMessage : [W.transformMessage] : undefined;
    let Z = null;
    const j = m(W?.body, { models: this.definitions.type, normalize: this.config.normalize }), J = m(W?.response, { models: this.definitions.type, normalize: this.config.normalize }), Y = (G) => {
      if (typeof G === "string") {
        const K = G?.charCodeAt(0);
        if (K === 47 || K === 123)
          try {
            G = JSON.parse(G);
          } catch {
          }
        else if (Z2(G))
          G = +G;
      }
      if (X?.length)
        for (let K = 0;K < X.length; K++) {
          const B = X[K](G);
          if (B !== undefined)
            G = B;
        }
      return G;
    };
    return this.route("$INTERNALWS", $, (G) => {
      const { set: K, path: B, qi: U, headers: w, query: F, params: Q } = G;
      if (Z === null)
        Z = this.getServer();
      if (Z?.upgrade(G.request, { headers: typeof W.upgrade === "function" ? W.upgrade(G) : W.upgrade, data: { validator: J, open(z) {
        W.open?.(new g0(z, G));
      }, message: (z, D) => {
        const M = Y(D);
        if (j?.Check(M) === false)
          return void z.send(new q("message", j, M).message);
        W.message?.(new g0(z, G), M);
      }, drain(z) {
        W.drain?.(new g0(z, G));
      }, close(z, D, M) {
        W.close?.(new g0(z, G), D, M);
      } } }))
        return;
      return K.status = 400, "Expected a websocket connection";
    }, { beforeHandle: W.beforeHandle, transform: W.transform, headers: W.headers, params: W.params, query: W.query }), this;
  }
  state($, W, X) {
    if (W === undefined)
      X = $, $ = { as: "append" }, W = "";
    else if (X === undefined) {
      if (typeof $ === "string")
        X = W, W = $, $ = { as: "append" };
      else if (typeof $ === "object")
        X = W, W = "";
    }
    const { as: Z } = $;
    if (typeof W !== "string")
      return this;
    switch (typeof X) {
      case "object":
        if (W) {
          if (W in this.singleton.store)
            this.singleton.store[W] = d(this.singleton.store[W], X, { override: Z === "override" });
          else
            this.singleton.store[W] = X;
          return this;
        }
        if (X === null)
          return this;
        return this.singleton.store = d(this.singleton.store, X, { override: Z === "override" }), this;
      case "function":
        if (W) {
          if (Z === "override" || !(W in this.singleton.store))
            this.singleton.store[W] = X;
        } else
          this.singleton.store = X(this.singleton.store);
        return this;
      default:
        if (Z === "override" || !(W in this.singleton.store))
          this.singleton.store[W] = X;
        return this;
    }
  }
  decorate($, W, X) {
    if (W === undefined)
      X = $, $ = { as: "append" }, W = "";
    else if (X === undefined) {
      if (typeof $ === "string")
        X = W, W = $, $ = { as: "append" };
      else if (typeof $ === "object")
        X = W, W = "";
    }
    const { as: Z } = $;
    if (typeof W !== "string")
      return this;
    switch (typeof X) {
      case "object":
        if (W) {
          if (W in this.singleton.decorator)
            this.singleton.decorator[W] = d(this.singleton.decorator[W], X, { override: Z === "override" });
          else
            this.singleton.decorator[W] = X;
          return this;
        }
        if (X === null)
          return this;
        return this.singleton.decorator = d(this.singleton.decorator, X, { override: Z === "override" }), this;
      case "function":
        if (W) {
          if (Z === "override" || !(W in this.singleton.decorator))
            this.singleton.decorator[W] = X;
        } else
          this.singleton.decorator = X(this.singleton.decorator);
        return this;
      default:
        if (Z === "override" || !(W in this.singleton.decorator))
          this.singleton.decorator[W] = X;
        return this;
    }
  }
  derive($, W) {
    if (!W)
      W = $, $ = { as: "local" };
    const X = { subType: "derive", fn: W };
    return this.onTransform($, X);
  }
  model($, W) {
    switch (typeof $) {
      case "object":
        return Object.entries($).forEach(([X, Z]) => {
          if (!(X in this.definitions.type))
            this.definitions.type[X] = Z;
        }), this;
      case "function":
        return this.definitions.type = $(this.definitions.type), this;
    }
    return this.definitions.type[$] = W, this;
  }
  mapDerive($, W) {
    if (!W)
      W = $, $ = { as: "local" };
    const X = { subType: "mapDerive", fn: W };
    return this.onTransform($, X);
  }
  affix($, W, X) {
    if (X === "")
      return this;
    const Z = ["_", "-", " "], j = (K) => K[0].toUpperCase() + K.slice(1), J = $ === "prefix" ? (K, B) => Z.includes(K.at(-1) ?? "") ? K + B : K + j(B) : Z.includes(X.at(-1) ?? "") ? (K, B) => B + K : (K, B) => B + j(K), Y = (K) => {
      const B = {};
      switch (K) {
        case "decorator":
          for (let U in this.singleton.decorator)
            B[J(X, U)] = this.singleton.decorator[U];
          this.singleton.decorator = B;
          break;
        case "state":
          for (let U in this.singleton.store)
            B[J(X, U)] = this.singleton.store[U];
          this.singleton.store = B;
          break;
        case "model":
          for (let U in this.definitions.type)
            B[J(X, U)] = this.definitions.type[U];
          this.definitions.type = B;
          break;
        case "error":
          for (let U in this.definitions.error)
            B[J(X, U)] = this.definitions.error[U];
          this.definitions.error = B;
          break;
      }
    }, G = Array.isArray(W) ? W : [W];
    for (let K of G.some((B) => B === "all") ? ["decorator", "state", "model", "error"] : G)
      Y(K);
    return this;
  }
  prefix($, W) {
    return this.affix("prefix", $, W);
  }
  suffix($, W) {
    return this.affix("suffix", $, W);
  }
  compile() {
    if (this.fetch = this.config.aot ? g2(this) : y2(this), typeof this.server?.reload === "function")
      this.server.reload({ ...this.server || {}, fetch: this.fetch });
    return this;
  }
  handle = async ($) => this.fetch($);
  fetch = ($) => {
    return (this.fetch = this.config.aot ? g2(this) : y2(this))($);
  };
  handleError = async ($, W) => (this.handleError = this.config.aot ? f2(this) : A1(this))($, W);
  outerErrorHandler = ($) => new Response($.message || $.name || "Error", { status: $?.status ?? 500 });
  listen = ($, W) => {
    if (typeof Bun === "undefined")
      throw new Error(".listen() is designed to run on Bun only. If you are running Elysia in other environment please use a dedicated plugin or export the handler via Elysia.fetch");
    if (this.compile(), typeof $ === "string") {
      if (!Z2($))
        throw new Error("Port must be a numeric value");
      $ = parseInt($);
    }
    const X = this.fetch, Z = typeof $ === "object" ? { development: !p0, reusePort: true, ...this.config.serve || {}, ...$ || {}, static: this.router.static.http.static, websocket: { ...this.config.websocket || {}, ...H2 || {} }, fetch: X, error: this.outerErrorHandler } : { development: !p0, reusePort: true, ...this.config.serve || {}, static: this.router.static.http.static, websocket: { ...this.config.websocket || {}, ...H2 || {} }, port: $, fetch: X, error: this.outerErrorHandler };
    this.server = Bun?.serve(Z);
    for (let j = 0;j < this.event.start.length; j++)
      this.event.start[j].fn(this);
    if (W)
      W(this.server);
    return process.on("beforeExit", () => {
      if (this.server) {
        this.server.stop(), this.server = null;
        for (let j = 0;j < this.event.stop.length; j++)
          this.event.stop[j].fn(this);
      }
    }), this.promisedModules.then(() => {
      Bun?.gc(false);
    }), this;
  };
  stop = async ($) => {
    if (!this.server)
      throw new Error("Elysia isn't running. Call `app.listen` to start the server.");
    if (this.server) {
      if (this.server.stop($), this.server = null, this.event.stop.length)
        for (let W = 0;W < this.event.stop.length; W++)
          this.event.stop[W].fn(this);
    }
  };
  get modules() {
    return Promise.all(this.promisedModules.promises);
  }
}

// src/prisma/prismaClient.ts
var import_client = __toESM(require_default2(), 1);
var prisma = new import_client.PrismaClient;
var prismaClient_default = prisma;

// src/utilities/error.ts
var errorHandler = (e) => {
  if (e instanceof Error) {
    return {
      message: e.message
    };
  }
  return {
    message: "An unexpected error occurred"
  };
};

// src/utilities/generators.ts
var randomHash = (data) => {
  const hasher = new Bun.CryptoHasher("md5");
  const date3 = new Date;
  hasher.update(date3 + data);
  return hasher.digest("hex");
};

// src/user/services.ts
var createUser = async ({ email, nick, password }) => {
  const activateHash = randomHash(email);
  const bcryptHash = await Bun.password.hash(password, {
    algorithm: "bcrypt",
    cost: 8
  });
  try {
    await prismaClient_default.user.create({
      data: {
        email,
        nick,
        password: bcryptHash,
        activationCode: activateHash
      }
    });
    return {
      status: 200,
      message: "Everything correct!"
    };
  } catch (e) {
    throw new Error("User already exist!");
  }
};
var getAll = async () => {
  try {
    const users = await prismaClient_default.user.findMany();
    return {
      status: 200,
      message: users
    };
  } catch (e) {
    return errorHandler(e);
  }
};
var deleteAll = async () => {
  try {
    const users = await prismaClient_default.user.deleteMany();
    return {
      status: 200,
      message: users
    };
  } catch (e) {
    return errorHandler(e);
  }
};

// src/user/userRouter.ts
var userRouter = new Q0({ prefix: "/users" }).post("/", async ({ body, error: error3 }) => {
  try {
    const answer = await createUser({ email: body.email, nick: body.nick, password: body.password });
    return answer;
  } catch (e) {
    return error3(401, errorHandler(e));
  }
}, {
  body: V.Object({
    nick: V.String(),
    email: V.String({ format: "email" }),
    password: V.String({ minLength: 8 })
  })
}).get("/", () => getAll()).get("/delete", () => deleteAll());

// node_modules/jose/dist/browser/runtime/webcrypto.js
var webcrypto_default = crypto;
var isCryptoKey = (key) => key instanceof CryptoKey;

// node_modules/jose/dist/browser/lib/buffer_utils.js
function concat(...buffers) {
  const size = buffers.reduce((acc, { length }) => acc + length, 0);
  const buf = new Uint8Array(size);
  let i3 = 0;
  buffers.forEach((buffer) => {
    buf.set(buffer, i3);
    i3 += buffer.length;
  });
  return buf;
}
var encoder = new TextEncoder;
var decoder = new TextDecoder;
var MAX_INT32 = 2 ** 32;

// node_modules/jose/dist/browser/runtime/base64url.js
var encodeBase64 = (input) => {
  let unencoded = input;
  if (typeof unencoded === "string") {
    unencoded = encoder.encode(unencoded);
  }
  const CHUNK_SIZE = 32768;
  const arr = [];
  for (let i3 = 0;i3 < unencoded.length; i3 += CHUNK_SIZE) {
    arr.push(String.fromCharCode.apply(null, unencoded.subarray(i3, i3 + CHUNK_SIZE)));
  }
  return btoa(arr.join(""));
};
var encode2 = (input) => {
  return encodeBase64(input).replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
};
var decodeBase64 = (encoded) => {
  const binary = atob(encoded);
  const bytes = new Uint8Array(binary.length);
  for (let i3 = 0;i3 < binary.length; i3++) {
    bytes[i3] = binary.charCodeAt(i3);
  }
  return bytes;
};
var decode2 = (input) => {
  let encoded = input;
  if (encoded instanceof Uint8Array) {
    encoded = decoder.decode(encoded);
  }
  encoded = encoded.replace(/-/g, "+").replace(/_/g, "/").replace(/\s/g, "");
  try {
    return decodeBase64(encoded);
  } catch (_a) {
    throw new TypeError("The input to be decoded is not correctly encoded.");
  }
};

// node_modules/jose/dist/browser/util/errors.js
class JOSEError extends Error {
  static get code() {
    return "ERR_JOSE_GENERIC";
  }
  constructor(message) {
    var _a;
    super(message);
    this.code = "ERR_JOSE_GENERIC";
    this.name = this.constructor.name;
    (_a = Error.captureStackTrace) === null || _a === undefined || _a.call(Error, this, this.constructor);
  }
}

class JWTClaimValidationFailed extends JOSEError {
  static get code() {
    return "ERR_JWT_CLAIM_VALIDATION_FAILED";
  }
  constructor(message, claim = "unspecified", reason = "unspecified") {
    super(message);
    this.code = "ERR_JWT_CLAIM_VALIDATION_FAILED";
    this.claim = claim;
    this.reason = reason;
  }
}

class JWTExpired extends JOSEError {
  static get code() {
    return "ERR_JWT_EXPIRED";
  }
  constructor(message, claim = "unspecified", reason = "unspecified") {
    super(message);
    this.code = "ERR_JWT_EXPIRED";
    this.claim = claim;
    this.reason = reason;
  }
}

class JOSEAlgNotAllowed extends JOSEError {
  constructor() {
    super(...arguments);
    this.code = "ERR_JOSE_ALG_NOT_ALLOWED";
  }
  static get code() {
    return "ERR_JOSE_ALG_NOT_ALLOWED";
  }
}

class JOSENotSupported extends JOSEError {
  constructor() {
    super(...arguments);
    this.code = "ERR_JOSE_NOT_SUPPORTED";
  }
  static get code() {
    return "ERR_JOSE_NOT_SUPPORTED";
  }
}
class JWSInvalid extends JOSEError {
  constructor() {
    super(...arguments);
    this.code = "ERR_JWS_INVALID";
  }
  static get code() {
    return "ERR_JWS_INVALID";
  }
}

class JWTInvalid extends JOSEError {
  constructor() {
    super(...arguments);
    this.code = "ERR_JWT_INVALID";
  }
  static get code() {
    return "ERR_JWT_INVALID";
  }
}
class JWSSignatureVerificationFailed extends JOSEError {
  constructor() {
    super(...arguments);
    this.code = "ERR_JWS_SIGNATURE_VERIFICATION_FAILED";
    this.message = "signature verification failed";
  }
  static get code() {
    return "ERR_JWS_SIGNATURE_VERIFICATION_FAILED";
  }
}

// node_modules/jose/dist/browser/lib/crypto_key.js
function unusable(name, prop = "algorithm.name") {
  return new TypeError(`CryptoKey does not support this operation, its ${prop} must be ${name}`);
}
function isAlgorithm(algorithm, name) {
  return algorithm.name === name;
}
function getHashLength(hash3) {
  return parseInt(hash3.name.slice(4), 10);
}
function getNamedCurve(alg) {
  switch (alg) {
    case "ES256":
      return "P-256";
    case "ES384":
      return "P-384";
    case "ES512":
      return "P-521";
    default:
      throw new Error("unreachable");
  }
}
function checkUsage(key, usages) {
  if (usages.length && !usages.some((expected) => key.usages.includes(expected))) {
    let msg = "CryptoKey does not support this operation, its usages must include ";
    if (usages.length > 2) {
      const last = usages.pop();
      msg += `one of ${usages.join(", ")}, or ${last}.`;
    } else if (usages.length === 2) {
      msg += `one of ${usages[0]} or ${usages[1]}.`;
    } else {
      msg += `${usages[0]}.`;
    }
    throw new TypeError(msg);
  }
}
function checkSigCryptoKey(key, alg, ...usages) {
  switch (alg) {
    case "HS256":
    case "HS384":
    case "HS512": {
      if (!isAlgorithm(key.algorithm, "HMAC"))
        throw unusable("HMAC");
      const expected = parseInt(alg.slice(2), 10);
      const actual = getHashLength(key.algorithm.hash);
      if (actual !== expected)
        throw unusable(`SHA-${expected}`, "algorithm.hash");
      break;
    }
    case "RS256":
    case "RS384":
    case "RS512": {
      if (!isAlgorithm(key.algorithm, "RSASSA-PKCS1-v1_5"))
        throw unusable("RSASSA-PKCS1-v1_5");
      const expected = parseInt(alg.slice(2), 10);
      const actual = getHashLength(key.algorithm.hash);
      if (actual !== expected)
        throw unusable(`SHA-${expected}`, "algorithm.hash");
      break;
    }
    case "PS256":
    case "PS384":
    case "PS512": {
      if (!isAlgorithm(key.algorithm, "RSA-PSS"))
        throw unusable("RSA-PSS");
      const expected = parseInt(alg.slice(2), 10);
      const actual = getHashLength(key.algorithm.hash);
      if (actual !== expected)
        throw unusable(`SHA-${expected}`, "algorithm.hash");
      break;
    }
    case "EdDSA": {
      if (key.algorithm.name !== "Ed25519" && key.algorithm.name !== "Ed448") {
        throw unusable("Ed25519 or Ed448");
      }
      break;
    }
    case "ES256":
    case "ES384":
    case "ES512": {
      if (!isAlgorithm(key.algorithm, "ECDSA"))
        throw unusable("ECDSA");
      const expected = getNamedCurve(alg);
      const actual = key.algorithm.namedCurve;
      if (actual !== expected)
        throw unusable(expected, "algorithm.namedCurve");
      break;
    }
    default:
      throw new TypeError("CryptoKey does not support this operation");
  }
  checkUsage(key, usages);
}

// node_modules/jose/dist/browser/lib/invalid_key_input.js
function message(msg, actual, ...types) {
  if (types.length > 2) {
    const last = types.pop();
    msg += `one of type ${types.join(", ")}, or ${last}.`;
  } else if (types.length === 2) {
    msg += `one of type ${types[0]} or ${types[1]}.`;
  } else {
    msg += `of type ${types[0]}.`;
  }
  if (actual == null) {
    msg += ` Received ${actual}`;
  } else if (typeof actual === "function" && actual.name) {
    msg += ` Received function ${actual.name}`;
  } else if (typeof actual === "object" && actual != null) {
    if (actual.constructor && actual.constructor.name) {
      msg += ` Received an instance of ${actual.constructor.name}`;
    }
  }
  return msg;
}
function withAlg(alg, actual, ...types) {
  return message(`Key for the ${alg} algorithm must be `, actual, ...types);
}
var invalid_key_input_default = (actual, ...types) => {
  return message("Key must be ", actual, ...types);
};

// node_modules/jose/dist/browser/runtime/is_key_like.js
var is_key_like_default = (key) => {
  return isCryptoKey(key);
};
var types = ["CryptoKey"];

// node_modules/jose/dist/browser/lib/is_disjoint.js
var isDisjoint = (...headers) => {
  const sources = headers.filter(Boolean);
  if (sources.length === 0 || sources.length === 1) {
    return true;
  }
  let acc;
  for (const header of sources) {
    const parameters3 = Object.keys(header);
    if (!acc || acc.size === 0) {
      acc = new Set(parameters3);
      continue;
    }
    for (const parameter of parameters3) {
      if (acc.has(parameter)) {
        return false;
      }
      acc.add(parameter);
    }
  }
  return true;
};
var is_disjoint_default = isDisjoint;

// node_modules/jose/dist/browser/lib/is_object.js
function isObjectLike(value2) {
  return typeof value2 === "object" && value2 !== null;
}
function isObject(input) {
  if (!isObjectLike(input) || Object.prototype.toString.call(input) !== "[object Object]") {
    return false;
  }
  if (Object.getPrototypeOf(input) === null) {
    return true;
  }
  let proto = input;
  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }
  return Object.getPrototypeOf(input) === proto;
}

// node_modules/jose/dist/browser/runtime/check_key_length.js
var check_key_length_default = (alg, key) => {
  if (alg.startsWith("RS") || alg.startsWith("PS")) {
    const { modulusLength } = key.algorithm;
    if (typeof modulusLength !== "number" || modulusLength < 2048) {
      throw new TypeError(`${alg} requires key modulusLength to be 2048 bits or larger`);
    }
  }
};

// node_modules/jose/dist/browser/lib/check_key_type.js
var symmetricTypeCheck = (alg, key) => {
  if (key instanceof Uint8Array)
    return;
  if (!is_key_like_default(key)) {
    throw new TypeError(withAlg(alg, key, ...types, "Uint8Array"));
  }
  if (key.type !== "secret") {
    throw new TypeError(`${types.join(" or ")} instances for symmetric algorithms must be of type "secret"`);
  }
};
var asymmetricTypeCheck = (alg, key, usage) => {
  if (!is_key_like_default(key)) {
    throw new TypeError(withAlg(alg, key, ...types));
  }
  if (key.type === "secret") {
    throw new TypeError(`${types.join(" or ")} instances for asymmetric algorithms must not be of type "secret"`);
  }
  if (usage === "sign" && key.type === "public") {
    throw new TypeError(`${types.join(" or ")} instances for asymmetric algorithm signing must be of type "private"`);
  }
  if (usage === "decrypt" && key.type === "public") {
    throw new TypeError(`${types.join(" or ")} instances for asymmetric algorithm decryption must be of type "private"`);
  }
  if (key.algorithm && usage === "verify" && key.type === "private") {
    throw new TypeError(`${types.join(" or ")} instances for asymmetric algorithm verifying must be of type "public"`);
  }
  if (key.algorithm && usage === "encrypt" && key.type === "private") {
    throw new TypeError(`${types.join(" or ")} instances for asymmetric algorithm encryption must be of type "public"`);
  }
};
var checkKeyType = (alg, key, usage) => {
  const symmetric = alg.startsWith("HS") || alg === "dir" || alg.startsWith("PBES2") || /^A\d{3}(?:GCM)?KW$/.test(alg);
  if (symmetric) {
    symmetricTypeCheck(alg, key);
  } else {
    asymmetricTypeCheck(alg, key, usage);
  }
};
var check_key_type_default = checkKeyType;

// node_modules/jose/dist/browser/lib/validate_crit.js
function validateCrit(Err, recognizedDefault, recognizedOption, protectedHeader, joseHeader) {
  if (joseHeader.crit !== undefined && protectedHeader.crit === undefined) {
    throw new Err('"crit" (Critical) Header Parameter MUST be integrity protected');
  }
  if (!protectedHeader || protectedHeader.crit === undefined) {
    return new Set;
  }
  if (!Array.isArray(protectedHeader.crit) || protectedHeader.crit.length === 0 || protectedHeader.crit.some((input) => typeof input !== "string" || input.length === 0)) {
    throw new Err('"crit" (Critical) Header Parameter MUST be an array of non-empty strings when present');
  }
  let recognized;
  if (recognizedOption !== undefined) {
    recognized = new Map([...Object.entries(recognizedOption), ...recognizedDefault.entries()]);
  } else {
    recognized = recognizedDefault;
  }
  for (const parameter of protectedHeader.crit) {
    if (!recognized.has(parameter)) {
      throw new JOSENotSupported(`Extension Header Parameter "${parameter}" is not recognized`);
    }
    if (joseHeader[parameter] === undefined) {
      throw new Err(`Extension Header Parameter "${parameter}" is missing`);
    } else if (recognized.get(parameter) && protectedHeader[parameter] === undefined) {
      throw new Err(`Extension Header Parameter "${parameter}" MUST be integrity protected`);
    }
  }
  return new Set(protectedHeader.crit);
}
var validate_crit_default = validateCrit;

// node_modules/jose/dist/browser/lib/validate_algorithms.js
var validateAlgorithms = (option, algorithms) => {
  if (algorithms !== undefined && (!Array.isArray(algorithms) || algorithms.some((s) => typeof s !== "string"))) {
    throw new TypeError(`"${option}" option must be an array of strings`);
  }
  if (!algorithms) {
    return;
  }
  return new Set(algorithms);
};
var validate_algorithms_default = validateAlgorithms;

// node_modules/jose/dist/browser/runtime/subtle_dsa.js
function subtleDsa(alg, algorithm) {
  const hash3 = `SHA-${alg.slice(-3)}`;
  switch (alg) {
    case "HS256":
    case "HS384":
    case "HS512":
      return { hash: hash3, name: "HMAC" };
    case "PS256":
    case "PS384":
    case "PS512":
      return { hash: hash3, name: "RSA-PSS", saltLength: alg.slice(-3) >> 3 };
    case "RS256":
    case "RS384":
    case "RS512":
      return { hash: hash3, name: "RSASSA-PKCS1-v1_5" };
    case "ES256":
    case "ES384":
    case "ES512":
      return { hash: hash3, name: "ECDSA", namedCurve: algorithm.namedCurve };
    case "EdDSA":
      return { name: algorithm.name };
    default:
      throw new JOSENotSupported(`alg ${alg} is not supported either by JOSE or your javascript runtime`);
  }
}

// node_modules/jose/dist/browser/runtime/get_sign_verify_key.js
function getCryptoKey(alg, key, usage) {
  if (isCryptoKey(key)) {
    checkSigCryptoKey(key, alg, usage);
    return key;
  }
  if (key instanceof Uint8Array) {
    if (!alg.startsWith("HS")) {
      throw new TypeError(invalid_key_input_default(key, ...types));
    }
    return webcrypto_default.subtle.importKey("raw", key, { hash: `SHA-${alg.slice(-3)}`, name: "HMAC" }, false, [usage]);
  }
  throw new TypeError(invalid_key_input_default(key, ...types, "Uint8Array"));
}

// node_modules/jose/dist/browser/runtime/verify.js
var verify = async (alg, key, signature, data) => {
  const cryptoKey = await getCryptoKey(alg, key, "verify");
  check_key_length_default(alg, cryptoKey);
  const algorithm = subtleDsa(alg, cryptoKey.algorithm);
  try {
    return await webcrypto_default.subtle.verify(algorithm, cryptoKey, signature, data);
  } catch (_a) {
    return false;
  }
};
var verify_default = verify;

// node_modules/jose/dist/browser/jws/flattened/verify.js
async function flattenedVerify(jws, key, options) {
  var _a;
  if (!isObject(jws)) {
    throw new JWSInvalid("Flattened JWS must be an object");
  }
  if (jws.protected === undefined && jws.header === undefined) {
    throw new JWSInvalid('Flattened JWS must have either of the "protected" or "header" members');
  }
  if (jws.protected !== undefined && typeof jws.protected !== "string") {
    throw new JWSInvalid("JWS Protected Header incorrect type");
  }
  if (jws.payload === undefined) {
    throw new JWSInvalid("JWS Payload missing");
  }
  if (typeof jws.signature !== "string") {
    throw new JWSInvalid("JWS Signature missing or incorrect type");
  }
  if (jws.header !== undefined && !isObject(jws.header)) {
    throw new JWSInvalid("JWS Unprotected Header incorrect type");
  }
  let parsedProt = {};
  if (jws.protected) {
    try {
      const protectedHeader = decode2(jws.protected);
      parsedProt = JSON.parse(decoder.decode(protectedHeader));
    } catch (_b) {
      throw new JWSInvalid("JWS Protected Header is invalid");
    }
  }
  if (!is_disjoint_default(parsedProt, jws.header)) {
    throw new JWSInvalid("JWS Protected and JWS Unprotected Header Parameter names must be disjoint");
  }
  const joseHeader = {
    ...parsedProt,
    ...jws.header
  };
  const extensions = validate_crit_default(JWSInvalid, new Map([["b64", true]]), options === null || options === undefined ? undefined : options.crit, parsedProt, joseHeader);
  let b64 = true;
  if (extensions.has("b64")) {
    b64 = parsedProt.b64;
    if (typeof b64 !== "boolean") {
      throw new JWSInvalid('The "b64" (base64url-encode payload) Header Parameter must be a boolean');
    }
  }
  const { alg } = joseHeader;
  if (typeof alg !== "string" || !alg) {
    throw new JWSInvalid('JWS "alg" (Algorithm) Header Parameter missing or invalid');
  }
  const algorithms = options && validate_algorithms_default("algorithms", options.algorithms);
  if (algorithms && !algorithms.has(alg)) {
    throw new JOSEAlgNotAllowed('"alg" (Algorithm) Header Parameter not allowed');
  }
  if (b64) {
    if (typeof jws.payload !== "string") {
      throw new JWSInvalid("JWS Payload must be a string");
    }
  } else if (typeof jws.payload !== "string" && !(jws.payload instanceof Uint8Array)) {
    throw new JWSInvalid("JWS Payload must be a string or an Uint8Array instance");
  }
  let resolvedKey = false;
  if (typeof key === "function") {
    key = await key(parsedProt, jws);
    resolvedKey = true;
  }
  check_key_type_default(alg, key, "verify");
  const data = concat(encoder.encode((_a = jws.protected) !== null && _a !== undefined ? _a : ""), encoder.encode("."), typeof jws.payload === "string" ? encoder.encode(jws.payload) : jws.payload);
  let signature;
  try {
    signature = decode2(jws.signature);
  } catch (_c) {
    throw new JWSInvalid("Failed to base64url decode the signature");
  }
  const verified = await verify_default(alg, key, signature, data);
  if (!verified) {
    throw new JWSSignatureVerificationFailed;
  }
  let payload;
  if (b64) {
    try {
      payload = decode2(jws.payload);
    } catch (_d) {
      throw new JWSInvalid("Failed to base64url decode the payload");
    }
  } else if (typeof jws.payload === "string") {
    payload = encoder.encode(jws.payload);
  } else {
    payload = jws.payload;
  }
  const result = { payload };
  if (jws.protected !== undefined) {
    result.protectedHeader = parsedProt;
  }
  if (jws.header !== undefined) {
    result.unprotectedHeader = jws.header;
  }
  if (resolvedKey) {
    return { ...result, key };
  }
  return result;
}

// node_modules/jose/dist/browser/jws/compact/verify.js
async function compactVerify(jws, key, options) {
  if (jws instanceof Uint8Array) {
    jws = decoder.decode(jws);
  }
  if (typeof jws !== "string") {
    throw new JWSInvalid("Compact JWS must be a string or Uint8Array");
  }
  const { 0: protectedHeader, 1: payload, 2: signature, length } = jws.split(".");
  if (length !== 3) {
    throw new JWSInvalid("Invalid Compact JWS");
  }
  const verified = await flattenedVerify({ payload, protected: protectedHeader, signature }, key, options);
  const result = { payload: verified.payload, protectedHeader: verified.protectedHeader };
  if (typeof key === "function") {
    return { ...result, key: verified.key };
  }
  return result;
}

// node_modules/jose/dist/browser/lib/epoch.js
var epoch_default = (date3) => Math.floor(date3.getTime() / 1000);

// node_modules/jose/dist/browser/lib/secs.js
var minute = 60;
var hour = minute * 60;
var day = hour * 24;
var week = day * 7;
var year = day * 365.25;
var REGEX = /^(\d+|\d+\.\d+) ?(seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)$/i;
var secs_default = (str) => {
  const matched = REGEX.exec(str);
  if (!matched) {
    throw new TypeError("Invalid time period format");
  }
  const value2 = parseFloat(matched[1]);
  const unit = matched[2].toLowerCase();
  switch (unit) {
    case "sec":
    case "secs":
    case "second":
    case "seconds":
    case "s":
      return Math.round(value2);
    case "minute":
    case "minutes":
    case "min":
    case "mins":
    case "m":
      return Math.round(value2 * minute);
    case "hour":
    case "hours":
    case "hr":
    case "hrs":
    case "h":
      return Math.round(value2 * hour);
    case "day":
    case "days":
    case "d":
      return Math.round(value2 * day);
    case "week":
    case "weeks":
    case "w":
      return Math.round(value2 * week);
    default:
      return Math.round(value2 * year);
  }
};

// node_modules/jose/dist/browser/lib/jwt_claims_set.js
var normalizeTyp = (value2) => value2.toLowerCase().replace(/^application\//, "");
var checkAudiencePresence = (audPayload, audOption) => {
  if (typeof audPayload === "string") {
    return audOption.includes(audPayload);
  }
  if (Array.isArray(audPayload)) {
    return audOption.some(Set.prototype.has.bind(new Set(audPayload)));
  }
  return false;
};
var jwt_claims_set_default = (protectedHeader, encodedPayload, options = {}) => {
  const { typ } = options;
  if (typ && (typeof protectedHeader.typ !== "string" || normalizeTyp(protectedHeader.typ) !== normalizeTyp(typ))) {
    throw new JWTClaimValidationFailed('unexpected "typ" JWT header value', "typ", "check_failed");
  }
  let payload;
  try {
    payload = JSON.parse(decoder.decode(encodedPayload));
  } catch (_a) {
  }
  if (!isObject(payload)) {
    throw new JWTInvalid("JWT Claims Set must be a top-level JSON object");
  }
  const { requiredClaims = [], issuer, subject, audience, maxTokenAge } = options;
  if (maxTokenAge !== undefined)
    requiredClaims.push("iat");
  if (audience !== undefined)
    requiredClaims.push("aud");
  if (subject !== undefined)
    requiredClaims.push("sub");
  if (issuer !== undefined)
    requiredClaims.push("iss");
  for (const claim of new Set(requiredClaims.reverse())) {
    if (!(claim in payload)) {
      throw new JWTClaimValidationFailed(`missing required "${claim}" claim`, claim, "missing");
    }
  }
  if (issuer && !(Array.isArray(issuer) ? issuer : [issuer]).includes(payload.iss)) {
    throw new JWTClaimValidationFailed('unexpected "iss" claim value', "iss", "check_failed");
  }
  if (subject && payload.sub !== subject) {
    throw new JWTClaimValidationFailed('unexpected "sub" claim value', "sub", "check_failed");
  }
  if (audience && !checkAudiencePresence(payload.aud, typeof audience === "string" ? [audience] : audience)) {
    throw new JWTClaimValidationFailed('unexpected "aud" claim value', "aud", "check_failed");
  }
  let tolerance;
  switch (typeof options.clockTolerance) {
    case "string":
      tolerance = secs_default(options.clockTolerance);
      break;
    case "number":
      tolerance = options.clockTolerance;
      break;
    case "undefined":
      tolerance = 0;
      break;
    default:
      throw new TypeError("Invalid clockTolerance option type");
  }
  const { currentDate } = options;
  const now = epoch_default(currentDate || new Date);
  if ((payload.iat !== undefined || maxTokenAge) && typeof payload.iat !== "number") {
    throw new JWTClaimValidationFailed('"iat" claim must be a number', "iat", "invalid");
  }
  if (payload.nbf !== undefined) {
    if (typeof payload.nbf !== "number") {
      throw new JWTClaimValidationFailed('"nbf" claim must be a number', "nbf", "invalid");
    }
    if (payload.nbf > now + tolerance) {
      throw new JWTClaimValidationFailed('"nbf" claim timestamp check failed', "nbf", "check_failed");
    }
  }
  if (payload.exp !== undefined) {
    if (typeof payload.exp !== "number") {
      throw new JWTClaimValidationFailed('"exp" claim must be a number', "exp", "invalid");
    }
    if (payload.exp <= now - tolerance) {
      throw new JWTExpired('"exp" claim timestamp check failed', "exp", "check_failed");
    }
  }
  if (maxTokenAge) {
    const age = now - payload.iat;
    const max = typeof maxTokenAge === "number" ? maxTokenAge : secs_default(maxTokenAge);
    if (age - tolerance > max) {
      throw new JWTExpired('"iat" claim timestamp check failed (too far in the past)', "iat", "check_failed");
    }
    if (age < 0 - tolerance) {
      throw new JWTClaimValidationFailed('"iat" claim timestamp check failed (it should be in the past)', "iat", "check_failed");
    }
  }
  return payload;
};

// node_modules/jose/dist/browser/jwt/verify.js
async function jwtVerify(jwt, key, options) {
  var _a;
  const verified = await compactVerify(jwt, key, options);
  if (((_a = verified.protectedHeader.crit) === null || _a === undefined ? undefined : _a.includes("b64")) && verified.protectedHeader.b64 === false) {
    throw new JWTInvalid("JWTs MUST NOT use unencoded payload");
  }
  const payload = jwt_claims_set_default(verified.protectedHeader, verified.payload, options);
  const result = { payload, protectedHeader: verified.protectedHeader };
  if (typeof key === "function") {
    return { ...result, key: verified.key };
  }
  return result;
}
// node_modules/jose/dist/browser/runtime/sign.js
var sign = async (alg, key, data) => {
  const cryptoKey = await getCryptoKey(alg, key, "sign");
  check_key_length_default(alg, cryptoKey);
  const signature = await webcrypto_default.subtle.sign(subtleDsa(alg, cryptoKey.algorithm), cryptoKey, data);
  return new Uint8Array(signature);
};
var sign_default = sign;

// node_modules/jose/dist/browser/jws/flattened/sign.js
class FlattenedSign {
  constructor(payload) {
    if (!(payload instanceof Uint8Array)) {
      throw new TypeError("payload must be an instance of Uint8Array");
    }
    this._payload = payload;
  }
  setProtectedHeader(protectedHeader) {
    if (this._protectedHeader) {
      throw new TypeError("setProtectedHeader can only be called once");
    }
    this._protectedHeader = protectedHeader;
    return this;
  }
  setUnprotectedHeader(unprotectedHeader) {
    if (this._unprotectedHeader) {
      throw new TypeError("setUnprotectedHeader can only be called once");
    }
    this._unprotectedHeader = unprotectedHeader;
    return this;
  }
  async sign(key, options) {
    if (!this._protectedHeader && !this._unprotectedHeader) {
      throw new JWSInvalid("either setProtectedHeader or setUnprotectedHeader must be called before #sign()");
    }
    if (!is_disjoint_default(this._protectedHeader, this._unprotectedHeader)) {
      throw new JWSInvalid("JWS Protected and JWS Unprotected Header Parameter names must be disjoint");
    }
    const joseHeader = {
      ...this._protectedHeader,
      ...this._unprotectedHeader
    };
    const extensions = validate_crit_default(JWSInvalid, new Map([["b64", true]]), options === null || options === undefined ? undefined : options.crit, this._protectedHeader, joseHeader);
    let b64 = true;
    if (extensions.has("b64")) {
      b64 = this._protectedHeader.b64;
      if (typeof b64 !== "boolean") {
        throw new JWSInvalid('The "b64" (base64url-encode payload) Header Parameter must be a boolean');
      }
    }
    const { alg } = joseHeader;
    if (typeof alg !== "string" || !alg) {
      throw new JWSInvalid('JWS "alg" (Algorithm) Header Parameter missing or invalid');
    }
    check_key_type_default(alg, key, "sign");
    let payload = this._payload;
    if (b64) {
      payload = encoder.encode(encode2(payload));
    }
    let protectedHeader;
    if (this._protectedHeader) {
      protectedHeader = encoder.encode(encode2(JSON.stringify(this._protectedHeader)));
    } else {
      protectedHeader = encoder.encode("");
    }
    const data = concat(protectedHeader, encoder.encode("."), payload);
    const signature = await sign_default(alg, key, data);
    const jws = {
      signature: encode2(signature),
      payload: ""
    };
    if (b64) {
      jws.payload = decoder.decode(payload);
    }
    if (this._unprotectedHeader) {
      jws.header = this._unprotectedHeader;
    }
    if (this._protectedHeader) {
      jws.protected = decoder.decode(protectedHeader);
    }
    return jws;
  }
}

// node_modules/jose/dist/browser/jws/compact/sign.js
class CompactSign {
  constructor(payload) {
    this._flattened = new FlattenedSign(payload);
  }
  setProtectedHeader(protectedHeader) {
    this._flattened.setProtectedHeader(protectedHeader);
    return this;
  }
  async sign(key, options) {
    const jws = await this._flattened.sign(key, options);
    if (jws.payload === undefined) {
      throw new TypeError("use the flattened module for creating JWS with b64: false");
    }
    return `${jws.protected}.${jws.payload}.${jws.signature}`;
  }
}

// node_modules/jose/dist/browser/jwt/produce.js
class ProduceJWT {
  constructor(payload) {
    if (!isObject(payload)) {
      throw new TypeError("JWT Claims Set MUST be an object");
    }
    this._payload = payload;
  }
  setIssuer(issuer) {
    this._payload = { ...this._payload, iss: issuer };
    return this;
  }
  setSubject(subject) {
    this._payload = { ...this._payload, sub: subject };
    return this;
  }
  setAudience(audience) {
    this._payload = { ...this._payload, aud: audience };
    return this;
  }
  setJti(jwtId) {
    this._payload = { ...this._payload, jti: jwtId };
    return this;
  }
  setNotBefore(input) {
    if (typeof input === "number") {
      this._payload = { ...this._payload, nbf: input };
    } else {
      this._payload = { ...this._payload, nbf: epoch_default(new Date) + secs_default(input) };
    }
    return this;
  }
  setExpirationTime(input) {
    if (typeof input === "number") {
      this._payload = { ...this._payload, exp: input };
    } else {
      this._payload = { ...this._payload, exp: epoch_default(new Date) + secs_default(input) };
    }
    return this;
  }
  setIssuedAt(input) {
    if (typeof input === "undefined") {
      this._payload = { ...this._payload, iat: epoch_default(new Date) };
    } else {
      this._payload = { ...this._payload, iat: input };
    }
    return this;
  }
}

// node_modules/jose/dist/browser/jwt/sign.js
class SignJWT extends ProduceJWT {
  setProtectedHeader(protectedHeader) {
    this._protectedHeader = protectedHeader;
    return this;
  }
  async sign(key, options) {
    var _a;
    const sig = new CompactSign(encoder.encode(JSON.stringify(this._payload)));
    sig.setProtectedHeader(this._protectedHeader);
    if (Array.isArray((_a = this._protectedHeader) === null || _a === undefined ? undefined : _a.crit) && this._protectedHeader.crit.includes("b64") && this._protectedHeader.b64 === false) {
      throw new JWTInvalid("JWTs MUST NOT use unencoded payload");
    }
    return sig.sign(key, options);
  }
}
// node_modules/@elysiajs/jwt/dist/index.mjs
function IsAsyncIterator5(value2) {
  return IsObject5(value2) && !IsArray5(value2) && !IsUint8Array5(value2) && Symbol.asyncIterator in value2;
}
function IsArray5(value2) {
  return Array.isArray(value2);
}
function IsBigInt5(value2) {
  return typeof value2 === "bigint";
}
function IsBoolean5(value2) {
  return typeof value2 === "boolean";
}
function IsDate5(value2) {
  return value2 instanceof globalThis.Date;
}
function IsFunction5(value2) {
  return typeof value2 === "function";
}
function IsIterator5(value2) {
  return IsObject5(value2) && !IsArray5(value2) && !IsUint8Array5(value2) && Symbol.iterator in value2;
}
function IsNull5(value2) {
  return value2 === null;
}
function IsNumber5(value2) {
  return typeof value2 === "number";
}
function IsObject5(value2) {
  return typeof value2 === "object" && value2 !== null;
}
function IsRegExp4(value2) {
  return value2 instanceof globalThis.RegExp;
}
function IsString5(value2) {
  return typeof value2 === "string";
}
function IsSymbol5(value2) {
  return typeof value2 === "symbol";
}
function IsUint8Array5(value2) {
  return value2 instanceof globalThis.Uint8Array;
}
function IsUndefined5(value2) {
  return value2 === undefined;
}
function ArrayType7(value2) {
  return value2.map((value22) => Visit17(value22));
}
function DateType5(value2) {
  return new Date(value2.getTime());
}
function Uint8ArrayType3(value2) {
  return new Uint8Array(value2);
}
function RegExpType2(value2) {
  return new RegExp(value2.source, value2.flags);
}
function ObjectType7(value2) {
  const result = {};
  for (const key of Object.getOwnPropertyNames(value2)) {
    result[key] = Visit17(value2[key]);
  }
  for (const key of Object.getOwnPropertySymbols(value2)) {
    result[key] = Visit17(value2[key]);
  }
  return result;
}
function Visit17(value2) {
  return IsArray5(value2) ? ArrayType7(value2) : IsDate5(value2) ? DateType5(value2) : IsUint8Array5(value2) ? Uint8ArrayType3(value2) : IsRegExp4(value2) ? RegExpType2(value2) : IsObject5(value2) ? ObjectType7(value2) : value2;
}
function Clone4(value2) {
  return Visit17(value2);
}
function CloneRest2(schemas) {
  return schemas.map((schema3) => CloneType2(schema3));
}
function CloneType2(schema3, options = {}) {
  return { ...Clone4(schema3), ...options };
}
function IsReadonly3(value2) {
  return IsObject5(value2) && value2[ReadonlyKind2] === "Readonly";
}
function IsOptional3(value2) {
  return IsObject5(value2) && value2[OptionalKind2] === "Optional";
}
function IsAny3(value2) {
  return IsKindOf3(value2, "Any");
}
function IsArray22(value2) {
  return IsKindOf3(value2, "Array");
}
function IsAsyncIterator22(value2) {
  return IsKindOf3(value2, "AsyncIterator");
}
function IsBigInt22(value2) {
  return IsKindOf3(value2, "BigInt");
}
function IsBoolean22(value2) {
  return IsKindOf3(value2, "Boolean");
}
function IsConstructor3(value2) {
  return IsKindOf3(value2, "Constructor");
}
function IsDate22(value2) {
  return IsKindOf3(value2, "Date");
}
function IsFunction22(value2) {
  return IsKindOf3(value2, "Function");
}
function IsInteger4(value2) {
  return IsKindOf3(value2, "Integer");
}
function IsIntersect3(value2) {
  return IsKindOf3(value2, "Intersect");
}
function IsIterator22(value2) {
  return IsKindOf3(value2, "Iterator");
}
function IsKindOf3(value2, kind) {
  return IsObject5(value2) && Kind2 in value2 && value2[Kind2] === kind;
}
function IsLiteral3(value2) {
  return IsKindOf3(value2, "Literal");
}
function IsMappedKey3(value2) {
  return IsKindOf3(value2, "MappedKey");
}
function IsMappedResult3(value2) {
  return IsKindOf3(value2, "MappedResult");
}
function IsNever3(value2) {
  return IsKindOf3(value2, "Never");
}
function IsNot3(value2) {
  return IsKindOf3(value2, "Not");
}
function IsNull22(value2) {
  return IsKindOf3(value2, "Null");
}
function IsNumber22(value2) {
  return IsKindOf3(value2, "Number");
}
function IsObject22(value2) {
  return IsKindOf3(value2, "Object");
}
function IsPromise4(value2) {
  return IsKindOf3(value2, "Promise");
}
function IsRecord3(value2) {
  return IsKindOf3(value2, "Record");
}
function IsRef3(value2) {
  return IsKindOf3(value2, "Ref");
}
function IsRegExp22(value2) {
  return IsKindOf3(value2, "RegExp");
}
function IsString22(value2) {
  return IsKindOf3(value2, "String");
}
function IsSymbol22(value2) {
  return IsKindOf3(value2, "Symbol");
}
function IsTemplateLiteral3(value2) {
  return IsKindOf3(value2, "TemplateLiteral");
}
function IsThis3(value2) {
  return IsKindOf3(value2, "This");
}
function IsTransform3(value2) {
  return IsObject5(value2) && TransformKind2 in value2;
}
function IsTuple3(value2) {
  return IsKindOf3(value2, "Tuple");
}
function IsUndefined22(value2) {
  return IsKindOf3(value2, "Undefined");
}
function IsUnion3(value2) {
  return IsKindOf3(value2, "Union");
}
function IsUint8Array22(value2) {
  return IsKindOf3(value2, "Uint8Array");
}
function IsUnknown3(value2) {
  return IsKindOf3(value2, "Unknown");
}
function IsUnsafe3(value2) {
  return IsKindOf3(value2, "Unsafe");
}
function IsVoid3(value2) {
  return IsKindOf3(value2, "Void");
}
function IsKind3(value2) {
  return IsObject5(value2) && Kind2 in value2 && IsString5(value2[Kind2]);
}
function IsSchema3(value2) {
  return IsAny3(value2) || IsArray22(value2) || IsBoolean22(value2) || IsBigInt22(value2) || IsAsyncIterator22(value2) || IsConstructor3(value2) || IsDate22(value2) || IsFunction22(value2) || IsInteger4(value2) || IsIntersect3(value2) || IsIterator22(value2) || IsLiteral3(value2) || IsMappedKey3(value2) || IsMappedResult3(value2) || IsNever3(value2) || IsNot3(value2) || IsNull22(value2) || IsNumber22(value2) || IsObject22(value2) || IsPromise4(value2) || IsRecord3(value2) || IsRef3(value2) || IsRegExp22(value2) || IsString22(value2) || IsSymbol22(value2) || IsTemplateLiteral3(value2) || IsThis3(value2) || IsTuple3(value2) || IsUndefined22(value2) || IsUnion3(value2) || IsUint8Array22(value2) || IsUnknown3(value2) || IsUnsafe3(value2) || IsVoid3(value2) || IsKind3(value2);
}
function IsPattern2(value2) {
  try {
    new RegExp(value2);
    return true;
  } catch {
    return false;
  }
}
function IsControlCharacterFree2(value2) {
  if (!IsString5(value2))
    return false;
  for (let i3 = 0;i3 < value2.length; i3++) {
    const code = value2.charCodeAt(i3);
    if (code >= 7 && code <= 13 || code === 27 || code === 127) {
      return false;
    }
  }
  return true;
}
function IsAdditionalProperties2(value2) {
  return IsOptionalBoolean2(value2) || IsSchema22(value2);
}
function IsOptionalBigInt2(value2) {
  return IsUndefined5(value2) || IsBigInt5(value2);
}
function IsOptionalNumber2(value2) {
  return IsUndefined5(value2) || IsNumber5(value2);
}
function IsOptionalBoolean2(value2) {
  return IsUndefined5(value2) || IsBoolean5(value2);
}
function IsOptionalString2(value2) {
  return IsUndefined5(value2) || IsString5(value2);
}
function IsOptionalPattern2(value2) {
  return IsUndefined5(value2) || IsString5(value2) && IsControlCharacterFree2(value2) && IsPattern2(value2);
}
function IsOptionalFormat2(value2) {
  return IsUndefined5(value2) || IsString5(value2) && IsControlCharacterFree2(value2);
}
function IsOptionalSchema2(value2) {
  return IsUndefined5(value2) || IsSchema22(value2);
}
function IsReadonly22(value2) {
  return IsObject5(value2) && value2[ReadonlyKind2] === "Readonly";
}
function IsOptional22(value2) {
  return IsObject5(value2) && value2[OptionalKind2] === "Optional";
}
function IsAny22(value2) {
  return IsKindOf22(value2, "Any") && IsOptionalString2(value2.$id);
}
function IsArray32(value2) {
  return IsKindOf22(value2, "Array") && value2.type === "array" && IsOptionalString2(value2.$id) && IsSchema22(value2.items) && IsOptionalNumber2(value2.minItems) && IsOptionalNumber2(value2.maxItems) && IsOptionalBoolean2(value2.uniqueItems) && IsOptionalSchema2(value2.contains) && IsOptionalNumber2(value2.minContains) && IsOptionalNumber2(value2.maxContains);
}
function IsAsyncIterator32(value2) {
  return IsKindOf22(value2, "AsyncIterator") && value2.type === "AsyncIterator" && IsOptionalString2(value2.$id) && IsSchema22(value2.items);
}
function IsBigInt32(value2) {
  return IsKindOf22(value2, "BigInt") && value2.type === "bigint" && IsOptionalString2(value2.$id) && IsOptionalBigInt2(value2.exclusiveMaximum) && IsOptionalBigInt2(value2.exclusiveMinimum) && IsOptionalBigInt2(value2.maximum) && IsOptionalBigInt2(value2.minimum) && IsOptionalBigInt2(value2.multipleOf);
}
function IsBoolean32(value2) {
  return IsKindOf22(value2, "Boolean") && value2.type === "boolean" && IsOptionalString2(value2.$id);
}
function IsConstructor22(value2) {
  return IsKindOf22(value2, "Constructor") && value2.type === "Constructor" && IsOptionalString2(value2.$id) && IsArray5(value2.parameters) && value2.parameters.every((schema3) => IsSchema22(schema3)) && IsSchema22(value2.returns);
}
function IsDate32(value2) {
  return IsKindOf22(value2, "Date") && value2.type === "Date" && IsOptionalString2(value2.$id) && IsOptionalNumber2(value2.exclusiveMaximumTimestamp) && IsOptionalNumber2(value2.exclusiveMinimumTimestamp) && IsOptionalNumber2(value2.maximumTimestamp) && IsOptionalNumber2(value2.minimumTimestamp) && IsOptionalNumber2(value2.multipleOfTimestamp);
}
function IsFunction32(value2) {
  return IsKindOf22(value2, "Function") && value2.type === "Function" && IsOptionalString2(value2.$id) && IsArray5(value2.parameters) && value2.parameters.every((schema3) => IsSchema22(schema3)) && IsSchema22(value2.returns);
}
function IsInteger22(value2) {
  return IsKindOf22(value2, "Integer") && value2.type === "integer" && IsOptionalString2(value2.$id) && IsOptionalNumber2(value2.exclusiveMaximum) && IsOptionalNumber2(value2.exclusiveMinimum) && IsOptionalNumber2(value2.maximum) && IsOptionalNumber2(value2.minimum) && IsOptionalNumber2(value2.multipleOf);
}
function IsProperties2(value2) {
  return IsObject5(value2) && Object.entries(value2).every(([key, schema3]) => IsControlCharacterFree2(key) && IsSchema22(schema3));
}
function IsIntersect22(value2) {
  return IsKindOf22(value2, "Intersect") && (IsString5(value2.type) && value2.type !== "object" ? false : true) && IsArray5(value2.allOf) && value2.allOf.every((schema3) => IsSchema22(schema3) && !IsTransform22(schema3)) && IsOptionalString2(value2.type) && (IsOptionalBoolean2(value2.unevaluatedProperties) || IsOptionalSchema2(value2.unevaluatedProperties)) && IsOptionalString2(value2.$id);
}
function IsIterator32(value2) {
  return IsKindOf22(value2, "Iterator") && value2.type === "Iterator" && IsOptionalString2(value2.$id) && IsSchema22(value2.items);
}
function IsKindOf22(value2, kind) {
  return IsObject5(value2) && Kind2 in value2 && value2[Kind2] === kind;
}
function IsLiteralString2(value2) {
  return IsLiteral22(value2) && IsString5(value2.const);
}
function IsLiteralNumber2(value2) {
  return IsLiteral22(value2) && IsNumber5(value2.const);
}
function IsLiteralBoolean2(value2) {
  return IsLiteral22(value2) && IsBoolean5(value2.const);
}
function IsLiteral22(value2) {
  return IsKindOf22(value2, "Literal") && IsOptionalString2(value2.$id) && IsLiteralValue2(value2.const);
}
function IsLiteralValue2(value2) {
  return IsBoolean5(value2) || IsNumber5(value2) || IsString5(value2);
}
function IsMappedKey22(value2) {
  return IsKindOf22(value2, "MappedKey") && IsArray5(value2.keys) && value2.keys.every((key) => IsNumber5(key) || IsString5(key));
}
function IsMappedResult22(value2) {
  return IsKindOf22(value2, "MappedResult") && IsProperties2(value2.properties);
}
function IsNever22(value2) {
  return IsKindOf22(value2, "Never") && IsObject5(value2.not) && Object.getOwnPropertyNames(value2.not).length === 0;
}
function IsNot22(value2) {
  return IsKindOf22(value2, "Not") && IsSchema22(value2.not);
}
function IsNull32(value2) {
  return IsKindOf22(value2, "Null") && value2.type === "null" && IsOptionalString2(value2.$id);
}
function IsNumber32(value2) {
  return IsKindOf22(value2, "Number") && value2.type === "number" && IsOptionalString2(value2.$id) && IsOptionalNumber2(value2.exclusiveMaximum) && IsOptionalNumber2(value2.exclusiveMinimum) && IsOptionalNumber2(value2.maximum) && IsOptionalNumber2(value2.minimum) && IsOptionalNumber2(value2.multipleOf);
}
function IsObject32(value2) {
  return IsKindOf22(value2, "Object") && value2.type === "object" && IsOptionalString2(value2.$id) && IsProperties2(value2.properties) && IsAdditionalProperties2(value2.additionalProperties) && IsOptionalNumber2(value2.minProperties) && IsOptionalNumber2(value2.maxProperties);
}
function IsPromise22(value2) {
  return IsKindOf22(value2, "Promise") && value2.type === "Promise" && IsOptionalString2(value2.$id) && IsSchema22(value2.item);
}
function IsRecord22(value2) {
  return IsKindOf22(value2, "Record") && value2.type === "object" && IsOptionalString2(value2.$id) && IsAdditionalProperties2(value2.additionalProperties) && IsObject5(value2.patternProperties) && ((schema3) => {
    const keys = Object.getOwnPropertyNames(schema3.patternProperties);
    return keys.length === 1 && IsPattern2(keys[0]) && IsObject5(schema3.patternProperties) && IsSchema22(schema3.patternProperties[keys[0]]);
  })(value2);
}
function IsRecursive2(value2) {
  return IsObject5(value2) && Hint2 in value2 && value2[Hint2] === "Recursive";
}
function IsRef22(value2) {
  return IsKindOf22(value2, "Ref") && IsOptionalString2(value2.$id) && IsString5(value2.$ref);
}
function IsRegExp32(value2) {
  return IsKindOf22(value2, "RegExp") && IsOptionalString2(value2.$id) && IsString5(value2.source) && IsString5(value2.flags) && IsOptionalNumber2(value2.maxLength) && IsOptionalNumber2(value2.minLength);
}
function IsString32(value2) {
  return IsKindOf22(value2, "String") && value2.type === "string" && IsOptionalString2(value2.$id) && IsOptionalNumber2(value2.minLength) && IsOptionalNumber2(value2.maxLength) && IsOptionalPattern2(value2.pattern) && IsOptionalFormat2(value2.format);
}
function IsSymbol32(value2) {
  return IsKindOf22(value2, "Symbol") && value2.type === "symbol" && IsOptionalString2(value2.$id);
}
function IsTemplateLiteral22(value2) {
  return IsKindOf22(value2, "TemplateLiteral") && value2.type === "string" && IsString5(value2.pattern) && value2.pattern[0] === "^" && value2.pattern[value2.pattern.length - 1] === "$";
}
function IsThis22(value2) {
  return IsKindOf22(value2, "This") && IsOptionalString2(value2.$id) && IsString5(value2.$ref);
}
function IsTransform22(value2) {
  return IsObject5(value2) && TransformKind2 in value2;
}
function IsTuple22(value2) {
  return IsKindOf22(value2, "Tuple") && value2.type === "array" && IsOptionalString2(value2.$id) && IsNumber5(value2.minItems) && IsNumber5(value2.maxItems) && value2.minItems === value2.maxItems && (IsUndefined5(value2.items) && IsUndefined5(value2.additionalItems) && value2.minItems === 0 || IsArray5(value2.items) && value2.items.every((schema3) => IsSchema22(schema3)));
}
function IsUndefined32(value2) {
  return IsKindOf22(value2, "Undefined") && value2.type === "undefined" && IsOptionalString2(value2.$id);
}
function IsUnionLiteral2(value2) {
  return IsUnion22(value2) && value2.anyOf.every((schema3) => IsLiteralString2(schema3) || IsLiteralNumber2(schema3));
}
function IsUnion22(value2) {
  return IsKindOf22(value2, "Union") && IsOptionalString2(value2.$id) && IsObject5(value2) && IsArray5(value2.anyOf) && value2.anyOf.every((schema3) => IsSchema22(schema3));
}
function IsUint8Array32(value2) {
  return IsKindOf22(value2, "Uint8Array") && value2.type === "Uint8Array" && IsOptionalString2(value2.$id) && IsOptionalNumber2(value2.minByteLength) && IsOptionalNumber2(value2.maxByteLength);
}
function IsUnknown22(value2) {
  return IsKindOf22(value2, "Unknown") && IsOptionalString2(value2.$id);
}
function IsUnsafe22(value2) {
  return IsKindOf22(value2, "Unsafe");
}
function IsVoid22(value2) {
  return IsKindOf22(value2, "Void") && value2.type === "void" && IsOptionalString2(value2.$id);
}
function IsKind22(value2) {
  return IsObject5(value2) && Kind2 in value2 && IsString5(value2[Kind2]) && !KnownTypes2.includes(value2[Kind2]);
}
function IsSchema22(value2) {
  return IsObject5(value2) && (IsAny22(value2) || IsArray32(value2) || IsBoolean32(value2) || IsBigInt32(value2) || IsAsyncIterator32(value2) || IsConstructor22(value2) || IsDate32(value2) || IsFunction32(value2) || IsInteger22(value2) || IsIntersect22(value2) || IsIterator32(value2) || IsLiteral22(value2) || IsMappedKey22(value2) || IsMappedResult22(value2) || IsNever22(value2) || IsNot22(value2) || IsNull32(value2) || IsNumber32(value2) || IsObject32(value2) || IsPromise22(value2) || IsRecord22(value2) || IsRef22(value2) || IsRegExp32(value2) || IsString32(value2) || IsSymbol32(value2) || IsTemplateLiteral22(value2) || IsThis22(value2) || IsTuple22(value2) || IsUndefined32(value2) || IsUnion22(value2) || IsUint8Array32(value2) || IsUnknown22(value2) || IsUnsafe22(value2) || IsVoid22(value2) || IsKind22(value2));
}
function SetIncludes2(T, S) {
  return T.includes(S);
}
function SetDistinct2(T) {
  return [...new Set(T)];
}
function SetIntersect2(T, S) {
  return T.filter((L) => S.includes(L));
}
function SetIntersectManyResolve2(T, Init) {
  return T.reduce((Acc, L) => {
    return SetIntersect2(Acc, L);
  }, Init);
}
function SetIntersectMany2(T) {
  return T.length === 1 ? T[0] : T.length > 1 ? SetIntersectManyResolve2(T.slice(1), T[0]) : [];
}
function SetUnionMany2(T) {
  const Acc = [];
  for (const L of T)
    Acc.push(...L);
  return Acc;
}
function Any2(options = {}) {
  return { ...options, [Kind2]: "Any" };
}
function Array22(schema3, options = {}) {
  return {
    ...options,
    [Kind2]: "Array",
    type: "array",
    items: CloneType2(schema3)
  };
}
function AsyncIterator2(items, options = {}) {
  return {
    ...options,
    [Kind2]: "AsyncIterator",
    type: "AsyncIterator",
    items: CloneType2(items)
  };
}
function DiscardKey2(value2, key) {
  const { [key]: _, ...rest3 } = value2;
  return rest3;
}
function Discard2(value2, keys) {
  return keys.reduce((acc, key) => DiscardKey2(acc, key), value2);
}
function Never2(options = {}) {
  return {
    ...options,
    [Kind2]: "Never",
    not: {}
  };
}
function MappedResult2(properties) {
  return {
    [Kind2]: "MappedResult",
    properties
  };
}
function Constructor2(parameters3, returns, options) {
  return {
    ...options,
    [Kind2]: "Constructor",
    type: "Constructor",
    parameters: CloneRest2(parameters3),
    returns: CloneType2(returns)
  };
}
function Function3(parameters3, returns, options) {
  return {
    ...options,
    [Kind2]: "Function",
    type: "Function",
    parameters: CloneRest2(parameters3),
    returns: CloneType2(returns)
  };
}
function UnionCreate2(T, options) {
  return { ...options, [Kind2]: "Union", anyOf: CloneRest2(T) };
}
function IsUnionOptional2(T) {
  return T.some((L) => IsOptional3(L));
}
function RemoveOptionalFromRest3(T) {
  return T.map((L) => IsOptional3(L) ? RemoveOptionalFromType3(L) : L);
}
function RemoveOptionalFromType3(T) {
  return Discard2(T, [OptionalKind2]);
}
function ResolveUnion2(T, options) {
  return IsUnionOptional2(T) ? Optional2(UnionCreate2(RemoveOptionalFromRest3(T), options)) : UnionCreate2(RemoveOptionalFromRest3(T), options);
}
function UnionEvaluated2(T, options = {}) {
  return T.length === 0 ? Never2(options) : T.length === 1 ? CloneType2(T[0], options) : ResolveUnion2(T, options);
}
function Union3(T, options = {}) {
  return T.length === 0 ? Never2(options) : T.length === 1 ? CloneType2(T[0], options) : UnionCreate2(T, options);
}
function Unescape2(pattern2) {
  return pattern2.replace(/\\\$/g, "$").replace(/\\\*/g, "*").replace(/\\\^/g, "^").replace(/\\\|/g, "|").replace(/\\\(/g, "(").replace(/\\\)/g, ")");
}
function IsNonEscaped2(pattern2, index, char) {
  return pattern2[index] === char && pattern2.charCodeAt(index - 1) !== 92;
}
function IsOpenParen2(pattern2, index) {
  return IsNonEscaped2(pattern2, index, "(");
}
function IsCloseParen2(pattern2, index) {
  return IsNonEscaped2(pattern2, index, ")");
}
function IsSeparator2(pattern2, index) {
  return IsNonEscaped2(pattern2, index, "|");
}
function IsGroup2(pattern2) {
  if (!(IsOpenParen2(pattern2, 0) && IsCloseParen2(pattern2, pattern2.length - 1)))
    return false;
  let count = 0;
  for (let index = 0;index < pattern2.length; index++) {
    if (IsOpenParen2(pattern2, index))
      count += 1;
    if (IsCloseParen2(pattern2, index))
      count -= 1;
    if (count === 0 && index !== pattern2.length - 1)
      return false;
  }
  return true;
}
function InGroup2(pattern2) {
  return pattern2.slice(1, pattern2.length - 1);
}
function IsPrecedenceOr2(pattern2) {
  let count = 0;
  for (let index = 0;index < pattern2.length; index++) {
    if (IsOpenParen2(pattern2, index))
      count += 1;
    if (IsCloseParen2(pattern2, index))
      count -= 1;
    if (IsSeparator2(pattern2, index) && count === 0)
      return true;
  }
  return false;
}
function IsPrecedenceAnd2(pattern2) {
  for (let index = 0;index < pattern2.length; index++) {
    if (IsOpenParen2(pattern2, index))
      return true;
  }
  return false;
}
function Or2(pattern2) {
  let [count, start] = [0, 0];
  const expressions = [];
  for (let index = 0;index < pattern2.length; index++) {
    if (IsOpenParen2(pattern2, index))
      count += 1;
    if (IsCloseParen2(pattern2, index))
      count -= 1;
    if (IsSeparator2(pattern2, index) && count === 0) {
      const range2 = pattern2.slice(start, index);
      if (range2.length > 0)
        expressions.push(TemplateLiteralParse2(range2));
      start = index + 1;
    }
  }
  const range = pattern2.slice(start);
  if (range.length > 0)
    expressions.push(TemplateLiteralParse2(range));
  if (expressions.length === 0)
    return { type: "const", const: "" };
  if (expressions.length === 1)
    return expressions[0];
  return { type: "or", expr: expressions };
}
function And2(pattern2) {
  function Group(value2, index) {
    if (!IsOpenParen2(value2, index))
      throw new TemplateLiteralParserError2(`TemplateLiteralParser: Index must point to open parens`);
    let count = 0;
    for (let scan = index;scan < value2.length; scan++) {
      if (IsOpenParen2(value2, scan))
        count += 1;
      if (IsCloseParen2(value2, scan))
        count -= 1;
      if (count === 0)
        return [index, scan];
    }
    throw new TemplateLiteralParserError2(`TemplateLiteralParser: Unclosed group parens in expression`);
  }
  function Range(pattern22, index) {
    for (let scan = index;scan < pattern22.length; scan++) {
      if (IsOpenParen2(pattern22, scan))
        return [index, scan];
    }
    return [index, pattern22.length];
  }
  const expressions = [];
  for (let index = 0;index < pattern2.length; index++) {
    if (IsOpenParen2(pattern2, index)) {
      const [start, end] = Group(pattern2, index);
      const range = pattern2.slice(start, end + 1);
      expressions.push(TemplateLiteralParse2(range));
      index = end;
    } else {
      const [start, end] = Range(pattern2, index);
      const range = pattern2.slice(start, end);
      if (range.length > 0)
        expressions.push(TemplateLiteralParse2(range));
      index = end - 1;
    }
  }
  return expressions.length === 0 ? { type: "const", const: "" } : expressions.length === 1 ? expressions[0] : { type: "and", expr: expressions };
}
function TemplateLiteralParse2(pattern2) {
  return IsGroup2(pattern2) ? TemplateLiteralParse2(InGroup2(pattern2)) : IsPrecedenceOr2(pattern2) ? Or2(pattern2) : IsPrecedenceAnd2(pattern2) ? And2(pattern2) : { type: "const", const: Unescape2(pattern2) };
}
function TemplateLiteralParseExact2(pattern2) {
  return TemplateLiteralParse2(pattern2.slice(1, pattern2.length - 1));
}
function IsNumberExpression2(expression) {
  return expression.type === "or" && expression.expr.length === 2 && expression.expr[0].type === "const" && expression.expr[0].const === "0" && expression.expr[1].type === "const" && expression.expr[1].const === "[1-9][0-9]*";
}
function IsBooleanExpression2(expression) {
  return expression.type === "or" && expression.expr.length === 2 && expression.expr[0].type === "const" && expression.expr[0].const === "true" && expression.expr[1].type === "const" && expression.expr[1].const === "false";
}
function IsStringExpression2(expression) {
  return expression.type === "const" && expression.const === ".*";
}
function IsTemplateLiteralExpressionFinite2(expression) {
  return IsNumberExpression2(expression) || IsStringExpression2(expression) ? false : IsBooleanExpression2(expression) ? true : expression.type === "and" ? expression.expr.every((expr) => IsTemplateLiteralExpressionFinite2(expr)) : expression.type === "or" ? expression.expr.every((expr) => IsTemplateLiteralExpressionFinite2(expr)) : expression.type === "const" ? true : (() => {
    throw new TemplateLiteralFiniteError2(`Unknown expression type`);
  })();
}
function IsTemplateLiteralFinite2(schema3) {
  const expression = TemplateLiteralParseExact2(schema3.pattern);
  return IsTemplateLiteralExpressionFinite2(expression);
}
function* GenerateReduce2(buffer) {
  if (buffer.length === 1)
    return yield* buffer[0];
  for (const left of buffer[0]) {
    for (const right of GenerateReduce2(buffer.slice(1))) {
      yield `${left}${right}`;
    }
  }
}
function* GenerateAnd2(expression) {
  return yield* GenerateReduce2(expression.expr.map((expr) => [...TemplateLiteralExpressionGenerate2(expr)]));
}
function* GenerateOr2(expression) {
  for (const expr of expression.expr)
    yield* TemplateLiteralExpressionGenerate2(expr);
}
function* GenerateConst2(expression) {
  return yield expression.const;
}
function* TemplateLiteralExpressionGenerate2(expression) {
  return expression.type === "and" ? yield* GenerateAnd2(expression) : expression.type === "or" ? yield* GenerateOr2(expression) : expression.type === "const" ? yield* GenerateConst2(expression) : (() => {
    throw new TemplateLiteralGenerateError2("Unknown expression");
  })();
}
function TemplateLiteralGenerate2(schema3) {
  const expression = TemplateLiteralParseExact2(schema3.pattern);
  return IsTemplateLiteralExpressionFinite2(expression) ? [...TemplateLiteralExpressionGenerate2(expression)] : [];
}
function Literal2(value2, options = {}) {
  return {
    ...options,
    [Kind2]: "Literal",
    const: value2,
    type: typeof value2
  };
}
function Boolean3(options = {}) {
  return {
    ...options,
    [Kind2]: "Boolean",
    type: "boolean"
  };
}
function BigInt3(options = {}) {
  return {
    ...options,
    [Kind2]: "BigInt",
    type: "bigint"
  };
}
function Number3(options = {}) {
  return {
    ...options,
    [Kind2]: "Number",
    type: "number"
  };
}
function String3(options = {}) {
  return { ...options, [Kind2]: "String", type: "string" };
}
function* FromUnion20(syntax2) {
  const trim = syntax2.trim().replace(/"|'/g, "");
  return trim === "boolean" ? yield Boolean3() : trim === "number" ? yield Number3() : trim === "bigint" ? yield BigInt3() : trim === "string" ? yield String3() : yield (() => {
    const literals = trim.split("|").map((literal3) => Literal2(literal3.trim()));
    return literals.length === 0 ? Never2() : literals.length === 1 ? literals[0] : UnionEvaluated2(literals);
  })();
}
function* FromTerminal2(syntax2) {
  if (syntax2[1] !== "{") {
    const L = Literal2("$");
    const R = FromSyntax2(syntax2.slice(1));
    return yield* [L, ...R];
  }
  for (let i3 = 2;i3 < syntax2.length; i3++) {
    if (syntax2[i3] === "}") {
      const L = FromUnion20(syntax2.slice(2, i3));
      const R = FromSyntax2(syntax2.slice(i3 + 1));
      return yield* [...L, ...R];
    }
  }
  yield Literal2(syntax2);
}
function* FromSyntax2(syntax2) {
  for (let i3 = 0;i3 < syntax2.length; i3++) {
    if (syntax2[i3] === "$") {
      const L = Literal2(syntax2.slice(0, i3));
      const R = FromTerminal2(syntax2.slice(i3));
      return yield* [L, ...R];
    }
  }
  yield Literal2(syntax2);
}
function TemplateLiteralSyntax2(syntax2) {
  return [...FromSyntax2(syntax2)];
}
function Escape3(value2) {
  return value2.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function Visit22(schema3, acc) {
  return IsTemplateLiteral3(schema3) ? schema3.pattern.slice(1, schema3.pattern.length - 1) : IsUnion3(schema3) ? `(${schema3.anyOf.map((schema22) => Visit22(schema22, acc)).join("|")})` : IsNumber22(schema3) ? `${acc}${PatternNumber2}` : IsInteger4(schema3) ? `${acc}${PatternNumber2}` : IsBigInt22(schema3) ? `${acc}${PatternNumber2}` : IsString22(schema3) ? `${acc}${PatternString2}` : IsLiteral3(schema3) ? `${acc}${Escape3(schema3.const.toString())}` : IsBoolean22(schema3) ? `${acc}${PatternBoolean2}` : (() => {
    throw new TemplateLiteralPatternError2(`Unexpected Kind '${schema3[Kind2]}'`);
  })();
}
function TemplateLiteralPattern2(kinds) {
  return `^${kinds.map((schema3) => Visit22(schema3, "")).join("")}\$`;
}
function TemplateLiteralToUnion2(schema3) {
  const R = TemplateLiteralGenerate2(schema3);
  const L = R.map((S) => Literal2(S));
  return UnionEvaluated2(L);
}
function TemplateLiteral2(unresolved, options = {}) {
  const pattern2 = IsString5(unresolved) ? TemplateLiteralPattern2(TemplateLiteralSyntax2(unresolved)) : TemplateLiteralPattern2(unresolved);
  return { ...options, [Kind2]: "TemplateLiteral", type: "string", pattern: pattern2 };
}
function FromTemplateLiteral7(T) {
  const R = TemplateLiteralGenerate2(T);
  return R.map((S) => S.toString());
}
function FromUnion22(T) {
  const Acc = [];
  for (const L of T)
    Acc.push(...IndexPropertyKeys2(L));
  return Acc;
}
function FromLiteral7(T) {
  return [T.toString()];
}
function IndexPropertyKeys2(T) {
  return [...new Set(IsTemplateLiteral3(T) ? FromTemplateLiteral7(T) : IsUnion3(T) ? FromUnion22(T.anyOf) : IsLiteral3(T) ? FromLiteral7(T.const) : IsNumber22(T) ? ["[number]"] : IsInteger4(T) ? ["[number]"] : [])];
}
function FromProperties20(T, P, options) {
  const Acc = {};
  for (const K2 of Object.getOwnPropertyNames(P)) {
    Acc[K2] = Index2(T, IndexPropertyKeys2(P[K2]), options);
  }
  return Acc;
}
function FromMappedResult13(T, R, options) {
  return FromProperties20(T, R.properties, options);
}
function IndexFromMappedResult2(T, R, options) {
  const P = FromMappedResult13(T, R, options);
  return MappedResult2(P);
}
function FromRest9(T, K) {
  return T.map((L) => IndexFromPropertyKey2(L, K));
}
function FromIntersectRest2(T) {
  return T.filter((L) => !IsNever3(L));
}
function FromIntersect18(T, K) {
  return IntersectEvaluated2(FromIntersectRest2(FromRest9(T, K)));
}
function FromUnionRest2(T) {
  return T.some((L) => IsNever3(L)) ? [] : T;
}
function FromUnion32(T, K) {
  return UnionEvaluated2(FromUnionRest2(FromRest9(T, K)));
}
function FromTuple15(T, K) {
  return K in T ? T[K] : K === "[number]" ? UnionEvaluated2(T) : Never2();
}
function FromArray16(T, K) {
  return K === "[number]" ? T : Never2();
}
function FromProperty3(T, K) {
  return K in T ? T[K] : Never2();
}
function IndexFromPropertyKey2(T, K) {
  return IsIntersect3(T) ? FromIntersect18(T.allOf, K) : IsUnion3(T) ? FromUnion32(T.anyOf, K) : IsTuple3(T) ? FromTuple15(T.items ?? [], K) : IsArray22(T) ? FromArray16(T.items, K) : IsObject22(T) ? FromProperty3(T.properties, K) : Never2();
}
function IndexFromPropertyKeys2(T, K) {
  return K.map((L) => IndexFromPropertyKey2(T, L));
}
function FromSchema2(T, K) {
  return UnionEvaluated2(IndexFromPropertyKeys2(T, K));
}
function Index2(T, K, options = {}) {
  return IsMappedResult3(K) ? CloneType2(IndexFromMappedResult2(T, K, options)) : IsMappedKey3(K) ? CloneType2(IndexFromMappedKey2(T, K, options)) : IsSchema3(K) ? CloneType2(FromSchema2(T, IndexPropertyKeys2(K)), options) : CloneType2(FromSchema2(T, K), options);
}
function MappedIndexPropertyKey2(T, K, options) {
  return { [K]: Index2(T, [K], options) };
}
function MappedIndexPropertyKeys2(T, K, options) {
  return K.reduce((Acc, L) => {
    return { ...Acc, ...MappedIndexPropertyKey2(T, L, options) };
  }, {});
}
function MappedIndexProperties2(T, K, options) {
  return MappedIndexPropertyKeys2(T, K.keys, options);
}
function IndexFromMappedKey2(T, K, options) {
  const P = MappedIndexProperties2(T, K, options);
  return MappedResult2(P);
}
function Iterator2(items, options = {}) {
  return {
    ...options,
    [Kind2]: "Iterator",
    type: "Iterator",
    items: CloneType2(items)
  };
}
function _Object2(properties, options = {}) {
  const propertyKeys = globalThis.Object.getOwnPropertyNames(properties);
  const optionalKeys = propertyKeys.filter((key) => IsOptional3(properties[key]));
  const requiredKeys = propertyKeys.filter((name) => !optionalKeys.includes(name));
  const clonedAdditionalProperties = IsSchema3(options.additionalProperties) ? { additionalProperties: CloneType2(options.additionalProperties) } : {};
  const clonedProperties = {};
  for (const key of propertyKeys)
    clonedProperties[key] = CloneType2(properties[key]);
  return requiredKeys.length > 0 ? { ...options, ...clonedAdditionalProperties, [Kind2]: "Object", type: "object", properties: clonedProperties, required: requiredKeys } : { ...options, ...clonedAdditionalProperties, [Kind2]: "Object", type: "object", properties: clonedProperties };
}
function Promise22(item, options = {}) {
  return {
    ...options,
    [Kind2]: "Promise",
    type: "Promise",
    item: CloneType2(item)
  };
}
function RemoveReadonly2(schema3) {
  return Discard2(CloneType2(schema3), [ReadonlyKind2]);
}
function AddReadonly2(schema3) {
  return { ...CloneType2(schema3), [ReadonlyKind2]: "Readonly" };
}
function ReadonlyWithFlag2(schema3, F) {
  return F === false ? RemoveReadonly2(schema3) : AddReadonly2(schema3);
}
function Readonly2(schema3, enable) {
  const F = enable ?? true;
  return IsMappedResult3(schema3) ? ReadonlyFromMappedResult2(schema3, F) : ReadonlyWithFlag2(schema3, F);
}
function FromProperties22(K, F) {
  const Acc = {};
  for (const K2 of globalThis.Object.getOwnPropertyNames(K))
    Acc[K2] = Readonly2(K[K2], F);
  return Acc;
}
function FromMappedResult22(R, F) {
  return FromProperties22(R.properties, F);
}
function ReadonlyFromMappedResult2(R, F) {
  const P = FromMappedResult22(R, F);
  return MappedResult2(P);
}
function Tuple2(items, options = {}) {
  const [additionalItems, minItems, maxItems] = [false, items.length, items.length];
  return items.length > 0 ? { ...options, [Kind2]: "Tuple", type: "array", items: CloneRest2(items), additionalItems, minItems, maxItems } : { ...options, [Kind2]: "Tuple", type: "array", minItems, maxItems };
}
function FromMappedResult32(K, P) {
  return K in P ? FromSchemaType2(K, P[K]) : MappedResult2(P);
}
function MappedKeyToKnownMappedResultProperties2(K) {
  return { [K]: Literal2(K) };
}
function MappedKeyToUnknownMappedResultProperties2(P) {
  const Acc = {};
  for (const L of P)
    Acc[L] = Literal2(L);
  return Acc;
}
function MappedKeyToMappedResultProperties2(K, P) {
  return SetIncludes2(P, K) ? MappedKeyToKnownMappedResultProperties2(K) : MappedKeyToUnknownMappedResultProperties2(P);
}
function FromMappedKey5(K, P) {
  const R = MappedKeyToMappedResultProperties2(K, P);
  return FromMappedResult32(K, R);
}
function FromRest22(K, T) {
  return T.map((L) => FromSchemaType2(K, L));
}
function FromProperties32(K, T) {
  const Acc = {};
  for (const K2 of globalThis.Object.getOwnPropertyNames(T))
    Acc[K2] = FromSchemaType2(K, T[K2]);
  return Acc;
}
function FromSchemaType2(K, T) {
  return IsOptional3(T) ? Optional2(FromSchemaType2(K, Discard2(T, [OptionalKind2]))) : IsReadonly3(T) ? Readonly2(FromSchemaType2(K, Discard2(T, [ReadonlyKind2]))) : IsMappedResult3(T) ? FromMappedResult32(K, T.properties) : IsMappedKey3(T) ? FromMappedKey5(K, T.keys) : IsConstructor3(T) ? Constructor2(FromRest22(K, T.parameters), FromSchemaType2(K, T.returns)) : IsFunction22(T) ? Function3(FromRest22(K, T.parameters), FromSchemaType2(K, T.returns)) : IsAsyncIterator22(T) ? AsyncIterator2(FromSchemaType2(K, T.items)) : IsIterator22(T) ? Iterator2(FromSchemaType2(K, T.items)) : IsIntersect3(T) ? Intersect3(FromRest22(K, T.allOf)) : IsUnion3(T) ? Union3(FromRest22(K, T.anyOf)) : IsTuple3(T) ? Tuple2(FromRest22(K, T.items ?? [])) : IsObject22(T) ? Object22(FromProperties32(K, T.properties)) : IsArray22(T) ? Array22(FromSchemaType2(K, T.items)) : IsPromise4(T) ? Promise22(FromSchemaType2(K, T.item)) : T;
}
function MappedFunctionReturnType2(K, T) {
  const Acc = {};
  for (const L of K)
    Acc[L] = FromSchemaType2(L, T);
  return Acc;
}
function Mapped2(key, map3, options = {}) {
  const K = IsSchema3(key) ? IndexPropertyKeys2(key) : key;
  const RT = map3({ [Kind2]: "MappedKey", keys: K });
  const R = MappedFunctionReturnType2(K, RT);
  return CloneType2(Object22(R), options);
}
function RemoveOptional2(schema3) {
  return Discard2(CloneType2(schema3), [OptionalKind2]);
}
function AddOptional2(schema3) {
  return { ...CloneType2(schema3), [OptionalKind2]: "Optional" };
}
function OptionalWithFlag2(schema3, F) {
  return F === false ? RemoveOptional2(schema3) : AddOptional2(schema3);
}
function Optional2(schema3, enable) {
  const F = enable ?? true;
  return IsMappedResult3(schema3) ? OptionalFromMappedResult2(schema3, F) : OptionalWithFlag2(schema3, F);
}
function FromProperties42(P, F) {
  const Acc = {};
  for (const K2 of globalThis.Object.getOwnPropertyNames(P))
    Acc[K2] = Optional2(P[K2], F);
  return Acc;
}
function FromMappedResult42(R, F) {
  return FromProperties42(R.properties, F);
}
function OptionalFromMappedResult2(R, F) {
  const P = FromMappedResult42(R, F);
  return MappedResult2(P);
}
function IntersectCreate2(T, options) {
  const allObjects = T.every((schema3) => IsObject22(schema3));
  const clonedUnevaluatedProperties = IsSchema3(options.unevaluatedProperties) ? { unevaluatedProperties: CloneType2(options.unevaluatedProperties) } : {};
  return options.unevaluatedProperties === false || IsSchema3(options.unevaluatedProperties) || allObjects ? { ...options, ...clonedUnevaluatedProperties, [Kind2]: "Intersect", type: "object", allOf: CloneRest2(T) } : { ...options, ...clonedUnevaluatedProperties, [Kind2]: "Intersect", allOf: CloneRest2(T) };
}
function IsIntersectOptional2(T) {
  return T.every((L) => IsOptional3(L));
}
function RemoveOptionalFromType22(T) {
  return Discard2(T, [OptionalKind2]);
}
function RemoveOptionalFromRest22(T) {
  return T.map((L) => IsOptional3(L) ? RemoveOptionalFromType22(L) : L);
}
function ResolveIntersect2(T, options) {
  return IsIntersectOptional2(T) ? Optional2(IntersectCreate2(RemoveOptionalFromRest22(T), options)) : IntersectCreate2(RemoveOptionalFromRest22(T), options);
}
function IntersectEvaluated2(T, options = {}) {
  if (T.length === 0)
    return Never2(options);
  if (T.length === 1)
    return CloneType2(T[0], options);
  if (T.some((schema3) => IsTransform3(schema3)))
    throw new Error("Cannot intersect transform types");
  return ResolveIntersect2(T, options);
}
function Intersect3(T, options = {}) {
  if (T.length === 0)
    return Never2(options);
  if (T.length === 1)
    return CloneType2(T[0], options);
  if (T.some((schema3) => IsTransform3(schema3)))
    throw new Error("Cannot intersect transform types");
  return IntersectCreate2(T, options);
}
function FromRest32(T) {
  return T.map((L) => AwaitedResolve2(L));
}
function FromIntersect22(T) {
  return Intersect3(FromRest32(T));
}
function FromUnion42(T) {
  return Union3(FromRest32(T));
}
function FromPromise8(T) {
  return AwaitedResolve2(T);
}
function AwaitedResolve2(T) {
  return IsIntersect3(T) ? FromIntersect22(T.allOf) : IsUnion3(T) ? FromUnion42(T.anyOf) : IsPromise4(T) ? FromPromise8(T.item) : T;
}
function Awaited2(T, options = {}) {
  return CloneType2(AwaitedResolve2(T), options);
}
function FromRest42(T) {
  const Acc = [];
  for (const L of T)
    Acc.push(KeyOfPropertyKeys2(L));
  return Acc;
}
function FromIntersect32(T) {
  const C = FromRest42(T);
  const R = SetUnionMany2(C);
  return R;
}
function FromUnion52(T) {
  const C = FromRest42(T);
  const R = SetIntersectMany2(C);
  return R;
}
function FromTuple22(T) {
  return T.map((_, I) => I.toString());
}
function FromArray22(_) {
  return ["[number]"];
}
function FromProperties52(T) {
  return globalThis.Object.getOwnPropertyNames(T);
}
function FromPatternProperties2(patternProperties) {
  if (!includePatternProperties2)
    return [];
  const patternPropertyKeys = globalThis.Object.getOwnPropertyNames(patternProperties);
  return patternPropertyKeys.map((key) => {
    return key[0] === "^" && key[key.length - 1] === "$" ? key.slice(1, key.length - 1) : key;
  });
}
function KeyOfPropertyKeys2(T) {
  return IsIntersect3(T) ? FromIntersect32(T.allOf) : IsUnion3(T) ? FromUnion52(T.anyOf) : IsTuple3(T) ? FromTuple22(T.items ?? []) : IsArray22(T) ? FromArray22(T.items) : IsObject22(T) ? FromProperties52(T.properties) : IsRecord3(T) ? FromPatternProperties2(T.patternProperties) : [];
}
function KeyOfPropertyKeysToRest2(T) {
  return T.map((L) => L === "[number]" ? Number3() : Literal2(L));
}
function KeyOf2(T, options = {}) {
  if (IsMappedResult3(T)) {
    return KeyOfFromMappedResult2(T, options);
  } else {
    const K = KeyOfPropertyKeys2(T);
    const S = KeyOfPropertyKeysToRest2(K);
    const U = UnionEvaluated2(S);
    return CloneType2(U, options);
  }
}
function FromProperties62(K, options) {
  const Acc = {};
  for (const K2 of globalThis.Object.getOwnPropertyNames(K))
    Acc[K2] = KeyOf2(K[K2], options);
  return Acc;
}
function FromMappedResult52(R, options) {
  return FromProperties62(R.properties, options);
}
function KeyOfFromMappedResult2(R, options) {
  const P = FromMappedResult52(R, options);
  return MappedResult2(P);
}
function CompositeKeys2(T) {
  const Acc = [];
  for (const L of T)
    Acc.push(...KeyOfPropertyKeys2(L));
  return SetDistinct2(Acc);
}
function FilterNever2(T) {
  return T.filter((L) => !IsNever3(L));
}
function CompositeProperty2(T, K) {
  const Acc = [];
  for (const L of T)
    Acc.push(...IndexFromPropertyKeys2(L, [K]));
  return FilterNever2(Acc);
}
function CompositeProperties2(T, K) {
  const Acc = {};
  for (const L of K) {
    Acc[L] = IntersectEvaluated2(CompositeProperty2(T, L));
  }
  return Acc;
}
function Composite2(T, options = {}) {
  const K = CompositeKeys2(T);
  const P = CompositeProperties2(T, K);
  const R = Object22(P, options);
  return R;
}
function Date22(options = {}) {
  return {
    ...options,
    [Kind2]: "Date",
    type: "Date"
  };
}
function Null2(options = {}) {
  return {
    ...options,
    [Kind2]: "Null",
    type: "null"
  };
}
function Symbol22(options) {
  return { ...options, [Kind2]: "Symbol", type: "symbol" };
}
function Undefined2(options = {}) {
  return { ...options, [Kind2]: "Undefined", type: "undefined" };
}
function Uint8Array22(options = {}) {
  return { ...options, [Kind2]: "Uint8Array", type: "Uint8Array" };
}
function Unknown2(options = {}) {
  return {
    ...options,
    [Kind2]: "Unknown"
  };
}
function FromArray32(T) {
  return T.map((L) => FromValue2(L, false));
}
function FromProperties72(value2) {
  const Acc = {};
  for (const K of globalThis.Object.getOwnPropertyNames(value2))
    Acc[K] = Readonly2(FromValue2(value2[K], false));
  return Acc;
}
function ConditionalReadonly2(T, root) {
  return root === true ? T : Readonly2(T);
}
function FromValue2(value2, root) {
  return IsAsyncIterator5(value2) ? ConditionalReadonly2(Any2(), root) : IsIterator5(value2) ? ConditionalReadonly2(Any2(), root) : IsArray5(value2) ? Readonly2(Tuple2(FromArray32(value2))) : IsUint8Array5(value2) ? Uint8Array22() : IsDate5(value2) ? Date22() : IsObject5(value2) ? ConditionalReadonly2(Object22(FromProperties72(value2)), root) : IsFunction5(value2) ? ConditionalReadonly2(Function3([], Unknown2()), root) : IsUndefined5(value2) ? Undefined2() : IsNull5(value2) ? Null2() : IsSymbol5(value2) ? Symbol22() : IsBigInt5(value2) ? BigInt3() : IsNumber5(value2) ? Literal2(value2) : IsBoolean5(value2) ? Literal2(value2) : IsString5(value2) ? Literal2(value2) : Object22({});
}
function Const2(T, options = {}) {
  return CloneType2(FromValue2(T, true), options);
}
function ConstructorParameters2(schema3, options = {}) {
  return Tuple2(CloneRest2(schema3.parameters), { ...options });
}
function FromRest52(schema3, references) {
  return schema3.map((schema22) => Deref3(schema22, references));
}
function FromProperties82(properties, references) {
  const Acc = {};
  for (const K of globalThis.Object.getOwnPropertyNames(properties)) {
    Acc[K] = Deref3(properties[K], references);
  }
  return Acc;
}
function FromConstructor8(schema3, references) {
  schema3.parameters = FromRest52(schema3.parameters, references);
  schema3.returns = Deref3(schema3.returns, references);
  return schema3;
}
function FromFunction7(schema3, references) {
  schema3.parameters = FromRest52(schema3.parameters, references);
  schema3.returns = Deref3(schema3.returns, references);
  return schema3;
}
function FromIntersect42(schema3, references) {
  schema3.allOf = FromRest52(schema3.allOf, references);
  return schema3;
}
function FromUnion62(schema3, references) {
  schema3.anyOf = FromRest52(schema3.anyOf, references);
  return schema3;
}
function FromTuple32(schema3, references) {
  if (IsUndefined5(schema3.items))
    return schema3;
  schema3.items = FromRest52(schema3.items, references);
  return schema3;
}
function FromArray42(schema3, references) {
  schema3.items = Deref3(schema3.items, references);
  return schema3;
}
function FromObject13(schema3, references) {
  schema3.properties = FromProperties82(schema3.properties, references);
  return schema3;
}
function FromPromise22(schema3, references) {
  schema3.item = Deref3(schema3.item, references);
  return schema3;
}
function FromAsyncIterator7(schema3, references) {
  schema3.items = Deref3(schema3.items, references);
  return schema3;
}
function FromIterator7(schema3, references) {
  schema3.items = Deref3(schema3.items, references);
  return schema3;
}
function FromRef12(schema3, references) {
  const target = references.find((remote) => remote.$id === schema3.$ref);
  if (target === undefined)
    throw Error(`Unable to dereference schema with \$id ${schema3.$ref}`);
  const discard2 = Discard2(target, ["$id"]);
  return Deref3(discard2, references);
}
function DerefResolve2(schema3, references) {
  return IsConstructor3(schema3) ? FromConstructor8(schema3, references) : IsFunction22(schema3) ? FromFunction7(schema3, references) : IsIntersect3(schema3) ? FromIntersect42(schema3, references) : IsUnion3(schema3) ? FromUnion62(schema3, references) : IsTuple3(schema3) ? FromTuple32(schema3, references) : IsArray22(schema3) ? FromArray42(schema3, references) : IsObject22(schema3) ? FromObject13(schema3, references) : IsPromise4(schema3) ? FromPromise22(schema3, references) : IsAsyncIterator22(schema3) ? FromAsyncIterator7(schema3, references) : IsIterator22(schema3) ? FromIterator7(schema3, references) : IsRef3(schema3) ? FromRef12(schema3, references) : schema3;
}
function Deref3(schema3, references) {
  return DerefResolve2(CloneType2(schema3), CloneRest2(references));
}
function Enum2(item, options = {}) {
  if (IsUndefined5(item))
    throw new Error("Enum undefined or empty");
  const values1 = globalThis.Object.getOwnPropertyNames(item).filter((key) => isNaN(key)).map((key) => item[key]);
  const values2 = [...new Set(values1)];
  const anyOf = values2.map((value2) => Literal2(value2));
  return Union3(anyOf, { ...options, [Hint2]: "Enum" });
}
function IntoBooleanResult2(result) {
  return result === ExtendsResult2.False ? result : ExtendsResult2.True;
}
function Throw2(message2) {
  throw new ExtendsResolverError2(message2);
}
function IsStructuralRight2(right) {
  return type_exports.IsNever(right) || type_exports.IsIntersect(right) || type_exports.IsUnion(right) || type_exports.IsUnknown(right) || type_exports.IsAny(right);
}
function StructuralRight2(left, right) {
  return type_exports.IsNever(right) ? FromNeverRight2(left, right) : type_exports.IsIntersect(right) ? FromIntersectRight2(left, right) : type_exports.IsUnion(right) ? FromUnionRight2(left, right) : type_exports.IsUnknown(right) ? FromUnknownRight2(left, right) : type_exports.IsAny(right) ? FromAnyRight2(left, right) : Throw2("StructuralRight");
}
function FromAnyRight2(left, right) {
  return ExtendsResult2.True;
}
function FromAny5(left, right) {
  return type_exports.IsIntersect(right) ? FromIntersectRight2(left, right) : type_exports.IsUnion(right) && right.anyOf.some((schema3) => type_exports.IsAny(schema3) || type_exports.IsUnknown(schema3)) ? ExtendsResult2.True : type_exports.IsUnion(right) ? ExtendsResult2.Union : type_exports.IsUnknown(right) ? ExtendsResult2.True : type_exports.IsAny(right) ? ExtendsResult2.True : ExtendsResult2.Union;
}
function FromArrayRight2(left, right) {
  return type_exports.IsUnknown(left) ? ExtendsResult2.False : type_exports.IsAny(left) ? ExtendsResult2.Union : type_exports.IsNever(left) ? ExtendsResult2.True : ExtendsResult2.False;
}
function FromArray52(left, right) {
  return type_exports.IsObject(right) && IsObjectArrayLike2(right) ? ExtendsResult2.True : IsStructuralRight2(right) ? StructuralRight2(left, right) : !type_exports.IsArray(right) ? ExtendsResult2.False : IntoBooleanResult2(Visit32(left.items, right.items));
}
function FromAsyncIterator22(left, right) {
  return IsStructuralRight2(right) ? StructuralRight2(left, right) : !type_exports.IsAsyncIterator(right) ? ExtendsResult2.False : IntoBooleanResult2(Visit32(left.items, right.items));
}
function FromBigInt6(left, right) {
  return IsStructuralRight2(right) ? StructuralRight2(left, right) : type_exports.IsObject(right) ? FromObjectRight2(left, right) : type_exports.IsRecord(right) ? FromRecordRight2(left, right) : type_exports.IsBigInt(right) ? ExtendsResult2.True : ExtendsResult2.False;
}
function FromBooleanRight2(left, right) {
  return type_exports.IsLiteralBoolean(left) ? ExtendsResult2.True : type_exports.IsBoolean(left) ? ExtendsResult2.True : ExtendsResult2.False;
}
function FromBoolean6(left, right) {
  return IsStructuralRight2(right) ? StructuralRight2(left, right) : type_exports.IsObject(right) ? FromObjectRight2(left, right) : type_exports.IsRecord(right) ? FromRecordRight2(left, right) : type_exports.IsBoolean(right) ? ExtendsResult2.True : ExtendsResult2.False;
}
function FromConstructor22(left, right) {
  return IsStructuralRight2(right) ? StructuralRight2(left, right) : type_exports.IsObject(right) ? FromObjectRight2(left, right) : !type_exports.IsConstructor(right) ? ExtendsResult2.False : left.parameters.length > right.parameters.length ? ExtendsResult2.False : !left.parameters.every((schema3, index) => IntoBooleanResult2(Visit32(right.parameters[index], schema3)) === ExtendsResult2.True) ? ExtendsResult2.False : IntoBooleanResult2(Visit32(left.returns, right.returns));
}
function FromDate6(left, right) {
  return IsStructuralRight2(right) ? StructuralRight2(left, right) : type_exports.IsObject(right) ? FromObjectRight2(left, right) : type_exports.IsRecord(right) ? FromRecordRight2(left, right) : type_exports.IsDate(right) ? ExtendsResult2.True : ExtendsResult2.False;
}
function FromFunction22(left, right) {
  return IsStructuralRight2(right) ? StructuralRight2(left, right) : type_exports.IsObject(right) ? FromObjectRight2(left, right) : !type_exports.IsFunction(right) ? ExtendsResult2.False : left.parameters.length > right.parameters.length ? ExtendsResult2.False : !left.parameters.every((schema3, index) => IntoBooleanResult2(Visit32(right.parameters[index], schema3)) === ExtendsResult2.True) ? ExtendsResult2.False : IntoBooleanResult2(Visit32(left.returns, right.returns));
}
function FromIntegerRight2(left, right) {
  return type_exports.IsLiteral(left) && value_exports.IsNumber(left.const) ? ExtendsResult2.True : type_exports.IsNumber(left) || type_exports.IsInteger(left) ? ExtendsResult2.True : ExtendsResult2.False;
}
function FromInteger6(left, right) {
  return type_exports.IsInteger(right) || type_exports.IsNumber(right) ? ExtendsResult2.True : IsStructuralRight2(right) ? StructuralRight2(left, right) : type_exports.IsObject(right) ? FromObjectRight2(left, right) : type_exports.IsRecord(right) ? FromRecordRight2(left, right) : ExtendsResult2.False;
}
function FromIntersectRight2(left, right) {
  return right.allOf.every((schema3) => Visit32(left, schema3) === ExtendsResult2.True) ? ExtendsResult2.True : ExtendsResult2.False;
}
function FromIntersect52(left, right) {
  return left.allOf.some((schema3) => Visit32(schema3, right) === ExtendsResult2.True) ? ExtendsResult2.True : ExtendsResult2.False;
}
function FromIterator22(left, right) {
  return IsStructuralRight2(right) ? StructuralRight2(left, right) : !type_exports.IsIterator(right) ? ExtendsResult2.False : IntoBooleanResult2(Visit32(left.items, right.items));
}
function FromLiteral22(left, right) {
  return type_exports.IsLiteral(right) && right.const === left.const ? ExtendsResult2.True : IsStructuralRight2(right) ? StructuralRight2(left, right) : type_exports.IsObject(right) ? FromObjectRight2(left, right) : type_exports.IsRecord(right) ? FromRecordRight2(left, right) : type_exports.IsString(right) ? FromStringRight2(left, right) : type_exports.IsNumber(right) ? FromNumberRight2(left, right) : type_exports.IsInteger(right) ? FromIntegerRight2(left, right) : type_exports.IsBoolean(right) ? FromBooleanRight2(left, right) : ExtendsResult2.False;
}
function FromNeverRight2(left, right) {
  return ExtendsResult2.False;
}
function FromNever6(left, right) {
  return ExtendsResult2.True;
}
function UnwrapTNot2(schema3) {
  let [current, depth] = [schema3, 0];
  while (true) {
    if (!type_exports.IsNot(current))
      break;
    current = current.not;
    depth += 1;
  }
  return depth % 2 === 0 ? current : Unknown2();
}
function FromNot8(left, right) {
  return type_exports.IsNot(left) ? Visit32(UnwrapTNot2(left), right) : type_exports.IsNot(right) ? Visit32(left, UnwrapTNot2(right)) : Throw2("Invalid fallthrough for Not");
}
function FromNull6(left, right) {
  return IsStructuralRight2(right) ? StructuralRight2(left, right) : type_exports.IsObject(right) ? FromObjectRight2(left, right) : type_exports.IsRecord(right) ? FromRecordRight2(left, right) : type_exports.IsNull(right) ? ExtendsResult2.True : ExtendsResult2.False;
}
function FromNumberRight2(left, right) {
  return type_exports.IsLiteralNumber(left) ? ExtendsResult2.True : type_exports.IsNumber(left) || type_exports.IsInteger(left) ? ExtendsResult2.True : ExtendsResult2.False;
}
function FromNumber6(left, right) {
  return IsStructuralRight2(right) ? StructuralRight2(left, right) : type_exports.IsObject(right) ? FromObjectRight2(left, right) : type_exports.IsRecord(right) ? FromRecordRight2(left, right) : type_exports.IsInteger(right) || type_exports.IsNumber(right) ? ExtendsResult2.True : ExtendsResult2.False;
}
function IsObjectPropertyCount2(schema3, count) {
  return Object.getOwnPropertyNames(schema3.properties).length === count;
}
function IsObjectStringLike2(schema3) {
  return IsObjectArrayLike2(schema3);
}
function IsObjectSymbolLike2(schema3) {
  return IsObjectPropertyCount2(schema3, 0) || IsObjectPropertyCount2(schema3, 1) && "description" in schema3.properties && type_exports.IsUnion(schema3.properties.description) && schema3.properties.description.anyOf.length === 2 && (type_exports.IsString(schema3.properties.description.anyOf[0]) && type_exports.IsUndefined(schema3.properties.description.anyOf[1]) || type_exports.IsString(schema3.properties.description.anyOf[1]) && type_exports.IsUndefined(schema3.properties.description.anyOf[0]));
}
function IsObjectNumberLike2(schema3) {
  return IsObjectPropertyCount2(schema3, 0);
}
function IsObjectBooleanLike2(schema3) {
  return IsObjectPropertyCount2(schema3, 0);
}
function IsObjectBigIntLike2(schema3) {
  return IsObjectPropertyCount2(schema3, 0);
}
function IsObjectDateLike2(schema3) {
  return IsObjectPropertyCount2(schema3, 0);
}
function IsObjectUint8ArrayLike2(schema3) {
  return IsObjectArrayLike2(schema3);
}
function IsObjectFunctionLike2(schema3) {
  const length = Number3();
  return IsObjectPropertyCount2(schema3, 0) || IsObjectPropertyCount2(schema3, 1) && "length" in schema3.properties && IntoBooleanResult2(Visit32(schema3.properties["length"], length)) === ExtendsResult2.True;
}
function IsObjectConstructorLike2(schema3) {
  return IsObjectPropertyCount2(schema3, 0);
}
function IsObjectArrayLike2(schema3) {
  const length = Number3();
  return IsObjectPropertyCount2(schema3, 0) || IsObjectPropertyCount2(schema3, 1) && "length" in schema3.properties && IntoBooleanResult2(Visit32(schema3.properties["length"], length)) === ExtendsResult2.True;
}
function IsObjectPromiseLike2(schema3) {
  const then = Function3([Any2()], Any2());
  return IsObjectPropertyCount2(schema3, 0) || IsObjectPropertyCount2(schema3, 1) && "then" in schema3.properties && IntoBooleanResult2(Visit32(schema3.properties["then"], then)) === ExtendsResult2.True;
}
function Property2(left, right) {
  return Visit32(left, right) === ExtendsResult2.False ? ExtendsResult2.False : type_exports.IsOptional(left) && !type_exports.IsOptional(right) ? ExtendsResult2.False : ExtendsResult2.True;
}
function FromObjectRight2(left, right) {
  return type_exports.IsUnknown(left) ? ExtendsResult2.False : type_exports.IsAny(left) ? ExtendsResult2.Union : type_exports.IsNever(left) || type_exports.IsLiteralString(left) && IsObjectStringLike2(right) || type_exports.IsLiteralNumber(left) && IsObjectNumberLike2(right) || type_exports.IsLiteralBoolean(left) && IsObjectBooleanLike2(right) || type_exports.IsSymbol(left) && IsObjectSymbolLike2(right) || type_exports.IsBigInt(left) && IsObjectBigIntLike2(right) || type_exports.IsString(left) && IsObjectStringLike2(right) || type_exports.IsSymbol(left) && IsObjectSymbolLike2(right) || type_exports.IsNumber(left) && IsObjectNumberLike2(right) || type_exports.IsInteger(left) && IsObjectNumberLike2(right) || type_exports.IsBoolean(left) && IsObjectBooleanLike2(right) || type_exports.IsUint8Array(left) && IsObjectUint8ArrayLike2(right) || type_exports.IsDate(left) && IsObjectDateLike2(right) || type_exports.IsConstructor(left) && IsObjectConstructorLike2(right) || type_exports.IsFunction(left) && IsObjectFunctionLike2(right) ? ExtendsResult2.True : type_exports.IsRecord(left) && type_exports.IsString(RecordKey2(left)) ? (() => {
    return right[Hint2] === "Record" ? ExtendsResult2.True : ExtendsResult2.False;
  })() : type_exports.IsRecord(left) && type_exports.IsNumber(RecordKey2(left)) ? (() => {
    return IsObjectPropertyCount2(right, 0) ? ExtendsResult2.True : ExtendsResult2.False;
  })() : ExtendsResult2.False;
}
function FromObject22(left, right) {
  return IsStructuralRight2(right) ? StructuralRight2(left, right) : type_exports.IsRecord(right) ? FromRecordRight2(left, right) : !type_exports.IsObject(right) ? ExtendsResult2.False : (() => {
    for (const key of Object.getOwnPropertyNames(right.properties)) {
      if (!(key in left.properties) && !type_exports.IsOptional(right.properties[key])) {
        return ExtendsResult2.False;
      }
      if (type_exports.IsOptional(right.properties[key])) {
        return ExtendsResult2.True;
      }
      if (Property2(left.properties[key], right.properties[key]) === ExtendsResult2.False) {
        return ExtendsResult2.False;
      }
    }
    return ExtendsResult2.True;
  })();
}
function FromPromise32(left, right) {
  return IsStructuralRight2(right) ? StructuralRight2(left, right) : type_exports.IsObject(right) && IsObjectPromiseLike2(right) ? ExtendsResult2.True : !type_exports.IsPromise(right) ? ExtendsResult2.False : IntoBooleanResult2(Visit32(left.item, right.item));
}
function RecordKey2(schema3) {
  return PatternNumberExact2 in schema3.patternProperties ? Number3() : (PatternStringExact2 in schema3.patternProperties) ? String3() : Throw2("Unknown record key pattern");
}
function RecordValue2(schema3) {
  return PatternNumberExact2 in schema3.patternProperties ? schema3.patternProperties[PatternNumberExact2] : (PatternStringExact2 in schema3.patternProperties) ? schema3.patternProperties[PatternStringExact2] : Throw2("Unable to get record value schema");
}
function FromRecordRight2(left, right) {
  const [Key, Value] = [RecordKey2(right), RecordValue2(right)];
  return type_exports.IsLiteralString(left) && type_exports.IsNumber(Key) && IntoBooleanResult2(Visit32(left, Value)) === ExtendsResult2.True ? ExtendsResult2.True : type_exports.IsUint8Array(left) && type_exports.IsNumber(Key) ? Visit32(left, Value) : type_exports.IsString(left) && type_exports.IsNumber(Key) ? Visit32(left, Value) : type_exports.IsArray(left) && type_exports.IsNumber(Key) ? Visit32(left, Value) : type_exports.IsObject(left) ? (() => {
    for (const key of Object.getOwnPropertyNames(left.properties)) {
      if (Property2(Value, left.properties[key]) === ExtendsResult2.False) {
        return ExtendsResult2.False;
      }
    }
    return ExtendsResult2.True;
  })() : ExtendsResult2.False;
}
function FromRecord12(left, right) {
  return IsStructuralRight2(right) ? StructuralRight2(left, right) : type_exports.IsObject(right) ? FromObjectRight2(left, right) : !type_exports.IsRecord(right) ? ExtendsResult2.False : Visit32(RecordValue2(left), RecordValue2(right));
}
function FromRegExp5(left, right) {
  const L = type_exports.IsRegExp(left) ? String3() : left;
  const R = type_exports.IsRegExp(right) ? String3() : right;
  return Visit32(L, R);
}
function FromStringRight2(left, right) {
  return type_exports.IsLiteral(left) && value_exports.IsString(left.const) ? ExtendsResult2.True : type_exports.IsString(left) ? ExtendsResult2.True : ExtendsResult2.False;
}
function FromString6(left, right) {
  return IsStructuralRight2(right) ? StructuralRight2(left, right) : type_exports.IsObject(right) ? FromObjectRight2(left, right) : type_exports.IsRecord(right) ? FromRecordRight2(left, right) : type_exports.IsString(right) ? ExtendsResult2.True : ExtendsResult2.False;
}
function FromSymbol6(left, right) {
  return IsStructuralRight2(right) ? StructuralRight2(left, right) : type_exports.IsObject(right) ? FromObjectRight2(left, right) : type_exports.IsRecord(right) ? FromRecordRight2(left, right) : type_exports.IsSymbol(right) ? ExtendsResult2.True : ExtendsResult2.False;
}
function FromTemplateLiteral22(left, right) {
  return type_exports.IsTemplateLiteral(left) ? Visit32(TemplateLiteralToUnion2(left), right) : type_exports.IsTemplateLiteral(right) ? Visit32(left, TemplateLiteralToUnion2(right)) : Throw2("Invalid fallthrough for TemplateLiteral");
}
function IsArrayOfTuple2(left, right) {
  return type_exports.IsArray(right) && left.items !== undefined && left.items.every((schema3) => Visit32(schema3, right.items) === ExtendsResult2.True);
}
function FromTupleRight2(left, right) {
  return type_exports.IsNever(left) ? ExtendsResult2.True : type_exports.IsUnknown(left) ? ExtendsResult2.False : type_exports.IsAny(left) ? ExtendsResult2.Union : ExtendsResult2.False;
}
function FromTuple42(left, right) {
  return IsStructuralRight2(right) ? StructuralRight2(left, right) : type_exports.IsObject(right) && IsObjectArrayLike2(right) ? ExtendsResult2.True : type_exports.IsArray(right) && IsArrayOfTuple2(left, right) ? ExtendsResult2.True : !type_exports.IsTuple(right) ? ExtendsResult2.False : value_exports.IsUndefined(left.items) && !value_exports.IsUndefined(right.items) || !value_exports.IsUndefined(left.items) && value_exports.IsUndefined(right.items) ? ExtendsResult2.False : value_exports.IsUndefined(left.items) && !value_exports.IsUndefined(right.items) ? ExtendsResult2.True : left.items.every((schema3, index) => Visit32(schema3, right.items[index]) === ExtendsResult2.True) ? ExtendsResult2.True : ExtendsResult2.False;
}
function FromUint8Array5(left, right) {
  return IsStructuralRight2(right) ? StructuralRight2(left, right) : type_exports.IsObject(right) ? FromObjectRight2(left, right) : type_exports.IsRecord(right) ? FromRecordRight2(left, right) : type_exports.IsUint8Array(right) ? ExtendsResult2.True : ExtendsResult2.False;
}
function FromUndefined6(left, right) {
  return IsStructuralRight2(right) ? StructuralRight2(left, right) : type_exports.IsObject(right) ? FromObjectRight2(left, right) : type_exports.IsRecord(right) ? FromRecordRight2(left, right) : type_exports.IsVoid(right) ? FromVoidRight2(left, right) : type_exports.IsUndefined(right) ? ExtendsResult2.True : ExtendsResult2.False;
}
function FromUnionRight2(left, right) {
  return right.anyOf.some((schema3) => Visit32(left, schema3) === ExtendsResult2.True) ? ExtendsResult2.True : ExtendsResult2.False;
}
function FromUnion72(left, right) {
  return left.anyOf.every((schema3) => Visit32(schema3, right) === ExtendsResult2.True) ? ExtendsResult2.True : ExtendsResult2.False;
}
function FromUnknownRight2(left, right) {
  return ExtendsResult2.True;
}
function FromUnknown5(left, right) {
  return type_exports.IsNever(right) ? FromNeverRight2(left, right) : type_exports.IsIntersect(right) ? FromIntersectRight2(left, right) : type_exports.IsUnion(right) ? FromUnionRight2(left, right) : type_exports.IsAny(right) ? FromAnyRight2(left, right) : type_exports.IsString(right) ? FromStringRight2(left, right) : type_exports.IsNumber(right) ? FromNumberRight2(left, right) : type_exports.IsInteger(right) ? FromIntegerRight2(left, right) : type_exports.IsBoolean(right) ? FromBooleanRight2(left, right) : type_exports.IsArray(right) ? FromArrayRight2(left, right) : type_exports.IsTuple(right) ? FromTupleRight2(left, right) : type_exports.IsObject(right) ? FromObjectRight2(left, right) : type_exports.IsUnknown(right) ? ExtendsResult2.True : ExtendsResult2.False;
}
function FromVoidRight2(left, right) {
  return type_exports.IsUndefined(left) ? ExtendsResult2.True : type_exports.IsUndefined(left) ? ExtendsResult2.True : ExtendsResult2.False;
}
function FromVoid5(left, right) {
  return type_exports.IsIntersect(right) ? FromIntersectRight2(left, right) : type_exports.IsUnion(right) ? FromUnionRight2(left, right) : type_exports.IsUnknown(right) ? FromUnknownRight2(left, right) : type_exports.IsAny(right) ? FromAnyRight2(left, right) : type_exports.IsObject(right) ? FromObjectRight2(left, right) : type_exports.IsVoid(right) ? ExtendsResult2.True : ExtendsResult2.False;
}
function Visit32(left, right) {
  return type_exports.IsTemplateLiteral(left) || type_exports.IsTemplateLiteral(right) ? FromTemplateLiteral22(left, right) : type_exports.IsRegExp(left) || type_exports.IsRegExp(right) ? FromRegExp5(left, right) : type_exports.IsNot(left) || type_exports.IsNot(right) ? FromNot8(left, right) : type_exports.IsAny(left) ? FromAny5(left, right) : type_exports.IsArray(left) ? FromArray52(left, right) : type_exports.IsBigInt(left) ? FromBigInt6(left, right) : type_exports.IsBoolean(left) ? FromBoolean6(left, right) : type_exports.IsAsyncIterator(left) ? FromAsyncIterator22(left, right) : type_exports.IsConstructor(left) ? FromConstructor22(left, right) : type_exports.IsDate(left) ? FromDate6(left, right) : type_exports.IsFunction(left) ? FromFunction22(left, right) : type_exports.IsInteger(left) ? FromInteger6(left, right) : type_exports.IsIntersect(left) ? FromIntersect52(left, right) : type_exports.IsIterator(left) ? FromIterator22(left, right) : type_exports.IsLiteral(left) ? FromLiteral22(left, right) : type_exports.IsNever(left) ? FromNever6(left, right) : type_exports.IsNull(left) ? FromNull6(left, right) : type_exports.IsNumber(left) ? FromNumber6(left, right) : type_exports.IsObject(left) ? FromObject22(left, right) : type_exports.IsRecord(left) ? FromRecord12(left, right) : type_exports.IsString(left) ? FromString6(left, right) : type_exports.IsSymbol(left) ? FromSymbol6(left, right) : type_exports.IsTuple(left) ? FromTuple42(left, right) : type_exports.IsPromise(left) ? FromPromise32(left, right) : type_exports.IsUint8Array(left) ? FromUint8Array5(left, right) : type_exports.IsUndefined(left) ? FromUndefined6(left, right) : type_exports.IsUnion(left) ? FromUnion72(left, right) : type_exports.IsUnknown(left) ? FromUnknown5(left, right) : type_exports.IsVoid(left) ? FromVoid5(left, right) : Throw2(`Unknown left type operand '${left[Kind2]}'`);
}
function ExtendsCheck2(left, right) {
  return Visit32(left, right);
}
function FromProperties92(P, Right, True, False, options) {
  const Acc = {};
  for (const K2 of globalThis.Object.getOwnPropertyNames(P))
    Acc[K2] = Extends2(P[K2], Right, True, False, options);
  return Acc;
}
function FromMappedResult62(Left, Right, True, False, options) {
  return FromProperties92(Left.properties, Right, True, False, options);
}
function ExtendsFromMappedResult2(Left, Right, True, False, options) {
  const P = FromMappedResult62(Left, Right, True, False, options);
  return MappedResult2(P);
}
function ExtendsResolve2(left, right, trueType, falseType) {
  const R = ExtendsCheck2(left, right);
  return R === ExtendsResult2.Union ? Union3([trueType, falseType]) : R === ExtendsResult2.True ? trueType : falseType;
}
function Extends2(L, R, T, F, options = {}) {
  return IsMappedResult3(L) ? ExtendsFromMappedResult2(L, R, T, F, options) : IsMappedKey3(L) ? CloneType2(ExtendsFromMappedKey2(L, R, T, F, options)) : CloneType2(ExtendsResolve2(L, R, T, F), options);
}
function FromPropertyKey4(K, U, L, R, options) {
  return {
    [K]: Extends2(Literal2(K), U, L, R, options)
  };
}
function FromPropertyKeys4(K, U, L, R, options) {
  return K.reduce((Acc, LK) => {
    return { ...Acc, ...FromPropertyKey4(LK, U, L, R, options) };
  }, {});
}
function FromMappedKey22(K, U, L, R, options) {
  return FromPropertyKeys4(K.keys, U, L, R, options);
}
function ExtendsFromMappedKey2(T, U, L, R, options) {
  const P = FromMappedKey22(T, U, L, R, options);
  return MappedResult2(P);
}
function ExcludeFromTemplateLiteral2(L, R) {
  return Exclude2(TemplateLiteralToUnion2(L), R);
}
function ExcludeRest2(L, R) {
  const excluded = L.filter((inner) => ExtendsCheck2(inner, R) === ExtendsResult2.False);
  return excluded.length === 1 ? excluded[0] : Union3(excluded);
}
function Exclude2(L, R, options = {}) {
  if (IsTemplateLiteral3(L))
    return CloneType2(ExcludeFromTemplateLiteral2(L, R), options);
  if (IsMappedResult3(L))
    return CloneType2(ExcludeFromMappedResult2(L, R), options);
  return CloneType2(IsUnion3(L) ? ExcludeRest2(L.anyOf, R) : ExtendsCheck2(L, R) !== ExtendsResult2.False ? Never2() : L, options);
}
function FromProperties102(P, U) {
  const Acc = {};
  for (const K2 of globalThis.Object.getOwnPropertyNames(P))
    Acc[K2] = Exclude2(P[K2], U);
  return Acc;
}
function FromMappedResult72(R, T) {
  return FromProperties102(R.properties, T);
}
function ExcludeFromMappedResult2(R, T) {
  const P = FromMappedResult72(R, T);
  return MappedResult2(P);
}
function ExtractFromTemplateLiteral2(L, R) {
  return Extract2(TemplateLiteralToUnion2(L), R);
}
function ExtractRest2(L, R) {
  const extracted = L.filter((inner) => ExtendsCheck2(inner, R) !== ExtendsResult2.False);
  return extracted.length === 1 ? extracted[0] : Union3(extracted);
}
function Extract2(L, R, options = {}) {
  if (IsTemplateLiteral3(L))
    return CloneType2(ExtractFromTemplateLiteral2(L, R), options);
  if (IsMappedResult3(L))
    return CloneType2(ExtractFromMappedResult2(L, R), options);
  return CloneType2(IsUnion3(L) ? ExtractRest2(L.anyOf, R) : ExtendsCheck2(L, R) !== ExtendsResult2.False ? L : Never2(), options);
}
function FromProperties112(P, T) {
  const Acc = {};
  for (const K2 of globalThis.Object.getOwnPropertyNames(P))
    Acc[K2] = Extract2(P[K2], T);
  return Acc;
}
function FromMappedResult82(R, T) {
  return FromProperties112(R.properties, T);
}
function ExtractFromMappedResult2(R, T) {
  const P = FromMappedResult82(R, T);
  return MappedResult2(P);
}
function InstanceType2(schema3, options = {}) {
  return CloneType2(schema3.returns, options);
}
function Integer2(options = {}) {
  return {
    ...options,
    [Kind2]: "Integer",
    type: "integer"
  };
}
function MappedIntrinsicPropertyKey2(K, M, options) {
  return {
    [K]: Intrinsic2(Literal2(K), M, options)
  };
}
function MappedIntrinsicPropertyKeys2(K, M, options) {
  return K.reduce((Acc, L) => {
    return { ...Acc, ...MappedIntrinsicPropertyKey2(L, M, options) };
  }, {});
}
function MappedIntrinsicProperties2(T, M, options) {
  return MappedIntrinsicPropertyKeys2(T["keys"], M, options);
}
function IntrinsicFromMappedKey2(T, M, options) {
  const P = MappedIntrinsicProperties2(T, M, options);
  return MappedResult2(P);
}
function ApplyUncapitalize2(value2) {
  const [first, rest3] = [value2.slice(0, 1), value2.slice(1)];
  return [first.toLowerCase(), rest3].join("");
}
function ApplyCapitalize2(value2) {
  const [first, rest3] = [value2.slice(0, 1), value2.slice(1)];
  return [first.toUpperCase(), rest3].join("");
}
function ApplyUppercase2(value2) {
  return value2.toUpperCase();
}
function ApplyLowercase2(value2) {
  return value2.toLowerCase();
}
function FromTemplateLiteral32(schema3, mode, options) {
  const expression = TemplateLiteralParseExact2(schema3.pattern);
  const finite2 = IsTemplateLiteralExpressionFinite2(expression);
  if (!finite2)
    return { ...schema3, pattern: FromLiteralValue2(schema3.pattern, mode) };
  const strings = [...TemplateLiteralExpressionGenerate2(expression)];
  const literals = strings.map((value2) => Literal2(value2));
  const mapped3 = FromRest62(literals, mode);
  const union4 = Union3(mapped3);
  return TemplateLiteral2([union4], options);
}
function FromLiteralValue2(value2, mode) {
  return typeof value2 === "string" ? mode === "Uncapitalize" ? ApplyUncapitalize2(value2) : mode === "Capitalize" ? ApplyCapitalize2(value2) : mode === "Uppercase" ? ApplyUppercase2(value2) : mode === "Lowercase" ? ApplyLowercase2(value2) : value2 : value2.toString();
}
function FromRest62(T, M) {
  return T.map((L) => Intrinsic2(L, M));
}
function Intrinsic2(schema3, mode, options = {}) {
  return IsMappedKey3(schema3) ? IntrinsicFromMappedKey2(schema3, mode, options) : IsTemplateLiteral3(schema3) ? FromTemplateLiteral32(schema3, mode, schema3) : IsUnion3(schema3) ? Union3(FromRest62(schema3.anyOf, mode), options) : IsLiteral3(schema3) ? Literal2(FromLiteralValue2(schema3.const, mode), options) : schema3;
}
function Capitalize2(T, options = {}) {
  return Intrinsic2(T, "Capitalize", options);
}
function Lowercase2(T, options = {}) {
  return Intrinsic2(T, "Lowercase", options);
}
function Uncapitalize2(T, options = {}) {
  return Intrinsic2(T, "Uncapitalize", options);
}
function Uppercase2(T, options = {}) {
  return Intrinsic2(T, "Uppercase", options);
}
function Not3(schema3, options) {
  return {
    ...options,
    [Kind2]: "Not",
    not: CloneType2(schema3)
  };
}
function FromProperties122(P, K, options) {
  const Acc = {};
  for (const K2 of globalThis.Object.getOwnPropertyNames(P))
    Acc[K2] = Omit2(P[K2], K, options);
  return Acc;
}
function FromMappedResult92(R, K, options) {
  return FromProperties122(R.properties, K, options);
}
function OmitFromMappedResult2(R, K, options) {
  const P = FromMappedResult92(R, K, options);
  return MappedResult2(P);
}
function FromIntersect62(T, K) {
  return T.map((T22) => OmitResolve2(T22, K));
}
function FromUnion82(T, K) {
  return T.map((T22) => OmitResolve2(T22, K));
}
function FromProperty22(T, K) {
  const { [K]: _, ...R } = T;
  return R;
}
function FromProperties132(T, K) {
  return K.reduce((T22, K2) => FromProperty22(T22, K2), T);
}
function OmitResolve2(T, K) {
  return IsIntersect3(T) ? Intersect3(FromIntersect62(T.allOf, K)) : IsUnion3(T) ? Union3(FromUnion82(T.anyOf, K)) : IsObject22(T) ? Object22(FromProperties132(T.properties, K)) : Object22({});
}
function Omit2(T, K, options = {}) {
  if (IsMappedKey3(K))
    return OmitFromMappedKey2(T, K, options);
  if (IsMappedResult3(T))
    return OmitFromMappedResult2(T, K, options);
  const I = IsSchema3(K) ? IndexPropertyKeys2(K) : K;
  const D = Discard2(T, [TransformKind2, "$id", "required"]);
  const R = CloneType2(OmitResolve2(T, I), options);
  return { ...D, ...R };
}
function FromPropertyKey22(T, K, options) {
  return {
    [K]: Omit2(T, [K], options)
  };
}
function FromPropertyKeys22(T, K, options) {
  return K.reduce((Acc, LK) => {
    return { ...Acc, ...FromPropertyKey22(T, LK, options) };
  }, {});
}
function FromMappedKey32(T, K, options) {
  return FromPropertyKeys22(T, K.keys, options);
}
function OmitFromMappedKey2(T, K, options) {
  const P = FromMappedKey32(T, K, options);
  return MappedResult2(P);
}
function Parameters2(schema3, options = {}) {
  return Tuple2(CloneRest2(schema3.parameters), { ...options });
}
function FromRest72(T) {
  return T.map((L) => PartialResolve2(L));
}
function FromProperties142(T) {
  const Acc = {};
  for (const K of globalThis.Object.getOwnPropertyNames(T))
    Acc[K] = Optional2(T[K]);
  return Acc;
}
function PartialResolve2(T) {
  return IsIntersect3(T) ? Intersect3(FromRest72(T.allOf)) : IsUnion3(T) ? Union3(FromRest72(T.anyOf)) : IsObject22(T) ? Object22(FromProperties142(T.properties)) : Object22({});
}
function Partial2(T, options = {}) {
  if (IsMappedResult3(T))
    return PartialFromMappedResult2(T, options);
  const D = Discard2(T, [TransformKind2, "$id", "required"]);
  const R = CloneType2(PartialResolve2(T), options);
  return { ...D, ...R };
}
function FromProperties152(K, options) {
  const Acc = {};
  for (const K2 of globalThis.Object.getOwnPropertyNames(K))
    Acc[K2] = Partial2(K[K2], options);
  return Acc;
}
function FromMappedResult102(R, options) {
  return FromProperties152(R.properties, options);
}
function PartialFromMappedResult2(R, options) {
  const P = FromMappedResult102(R, options);
  return MappedResult2(P);
}
function FromProperties162(P, K, options) {
  const Acc = {};
  for (const K2 of globalThis.Object.getOwnPropertyNames(P))
    Acc[K2] = Pick2(P[K2], K, options);
  return Acc;
}
function FromMappedResult112(R, K, options) {
  return FromProperties162(R.properties, K, options);
}
function PickFromMappedResult2(R, K, options) {
  const P = FromMappedResult112(R, K, options);
  return MappedResult2(P);
}
function FromIntersect72(T, K) {
  return T.map((T22) => PickResolve2(T22, K));
}
function FromUnion92(T, K) {
  return T.map((T22) => PickResolve2(T22, K));
}
function FromProperties172(T, K) {
  const Acc = {};
  for (const K2 of K)
    if (K2 in T)
      Acc[K2] = T[K2];
  return Acc;
}
function PickResolve2(T, K) {
  return IsIntersect3(T) ? Intersect3(FromIntersect72(T.allOf, K)) : IsUnion3(T) ? Union3(FromUnion92(T.anyOf, K)) : IsObject22(T) ? Object22(FromProperties172(T.properties, K)) : Object22({});
}
function Pick2(T, K, options = {}) {
  if (IsMappedKey3(K))
    return PickFromMappedKey2(T, K, options);
  if (IsMappedResult3(T))
    return PickFromMappedResult2(T, K, options);
  const I = IsSchema3(K) ? IndexPropertyKeys2(K) : K;
  const D = Discard2(T, [TransformKind2, "$id", "required"]);
  const R = CloneType2(PickResolve2(T, I), options);
  return { ...D, ...R };
}
function FromPropertyKey32(T, K, options) {
  return {
    [K]: Pick2(T, [K], options)
  };
}
function FromPropertyKeys32(T, K, options) {
  return K.reduce((Acc, LK) => {
    return { ...Acc, ...FromPropertyKey32(T, LK, options) };
  }, {});
}
function FromMappedKey42(T, K, options) {
  return FromPropertyKeys32(T, K.keys, options);
}
function PickFromMappedKey2(T, K, options) {
  const P = FromMappedKey42(T, K, options);
  return MappedResult2(P);
}
function ReadonlyOptional2(schema3) {
  return Readonly2(Optional2(schema3));
}
function RecordCreateFromPattern2(pattern2, T, options) {
  return {
    ...options,
    [Kind2]: "Record",
    type: "object",
    patternProperties: { [pattern2]: CloneType2(T) }
  };
}
function RecordCreateFromKeys2(K, T, options) {
  const Acc = {};
  for (const K2 of K)
    Acc[K2] = CloneType2(T);
  return Object22(Acc, { ...options, [Hint2]: "Record" });
}
function FromTemplateLiteralKey2(K, T, options) {
  return IsTemplateLiteralFinite2(K) ? RecordCreateFromKeys2(IndexPropertyKeys2(K), T, options) : RecordCreateFromPattern2(K.pattern, T, options);
}
function FromUnionKey2(K, T, options) {
  return RecordCreateFromKeys2(IndexPropertyKeys2(Union3(K)), T, options);
}
function FromLiteralKey2(K, T, options) {
  return RecordCreateFromKeys2([K.toString()], T, options);
}
function FromRegExpKey2(K, T, options) {
  return RecordCreateFromPattern2(K.source, T, options);
}
function FromStringKey2(K, T, options) {
  const pattern2 = IsUndefined5(K.pattern) ? PatternStringExact2 : K.pattern;
  return RecordCreateFromPattern2(pattern2, T, options);
}
function FromIntegerKey2(_, T, options) {
  return RecordCreateFromPattern2(PatternNumberExact2, T, options);
}
function FromNumberKey2(_, T, options) {
  return RecordCreateFromPattern2(PatternNumberExact2, T, options);
}
function Record2(K, T, options = {}) {
  return IsUnion3(K) ? FromUnionKey2(K.anyOf, T, options) : IsTemplateLiteral3(K) ? FromTemplateLiteralKey2(K, T, options) : IsLiteral3(K) ? FromLiteralKey2(K.const, T, options) : IsInteger4(K) ? FromIntegerKey2(K, T, options) : IsNumber22(K) ? FromNumberKey2(K, T, options) : IsRegExp22(K) ? FromRegExpKey2(K, T, options) : IsString22(K) ? FromStringKey2(K, T, options) : Never2(options);
}
function Recursive2(callback, options = {}) {
  if (IsUndefined5(options.$id))
    options.$id = `T${Ordinal2++}`;
  const thisType = callback({ [Kind2]: "This", $ref: `${options.$id}` });
  thisType.$id = options.$id;
  return CloneType2({ ...options, [Hint2]: "Recursive", ...thisType });
}
function Ref2(unresolved, options = {}) {
  if (IsString5(unresolved))
    return { ...options, [Kind2]: "Ref", $ref: unresolved };
  if (IsUndefined5(unresolved.$id))
    throw new Error("Reference target type must specify an $id");
  return {
    ...options,
    [Kind2]: "Ref",
    $ref: unresolved.$id
  };
}
function RegExp22(unresolved, options = {}) {
  const expr = IsString5(unresolved) ? new globalThis.RegExp(unresolved) : unresolved;
  return { ...options, [Kind2]: "RegExp", type: "RegExp", source: expr.source, flags: expr.flags };
}
function FromRest82(T) {
  return T.map((L) => RequiredResolve2(L));
}
function FromProperties182(T) {
  const Acc = {};
  for (const K of globalThis.Object.getOwnPropertyNames(T))
    Acc[K] = Discard2(T[K], [OptionalKind2]);
  return Acc;
}
function RequiredResolve2(T) {
  return IsIntersect3(T) ? Intersect3(FromRest82(T.allOf)) : IsUnion3(T) ? Union3(FromRest82(T.anyOf)) : IsObject22(T) ? Object22(FromProperties182(T.properties)) : Object22({});
}
function Required2(T, options = {}) {
  if (IsMappedResult3(T)) {
    return RequiredFromMappedResult2(T, options);
  } else {
    const D = Discard2(T, [TransformKind2, "$id", "required"]);
    const R = CloneType2(RequiredResolve2(T), options);
    return { ...D, ...R };
  }
}
function FromProperties192(P, options) {
  const Acc = {};
  for (const K2 of globalThis.Object.getOwnPropertyNames(P))
    Acc[K2] = Required2(P[K2], options);
  return Acc;
}
function FromMappedResult122(R, options) {
  return FromProperties192(R.properties, options);
}
function RequiredFromMappedResult2(R, options) {
  const P = FromMappedResult122(R, options);
  return MappedResult2(P);
}
function RestResolve2(T) {
  return IsIntersect3(T) ? CloneRest2(T.allOf) : IsUnion3(T) ? CloneRest2(T.anyOf) : IsTuple3(T) ? CloneRest2(T.items ?? []) : [];
}
function Rest2(T) {
  return CloneRest2(RestResolve2(T));
}
function ReturnType2(schema3, options = {}) {
  return CloneType2(schema3.returns, options);
}
function Strict2(schema3) {
  return JSON.parse(JSON.stringify(schema3));
}
function Transform2(schema3) {
  return new TransformDecodeBuilder2(schema3);
}
function Unsafe2(options = {}) {
  return {
    ...options,
    [Kind2]: options[Kind2] ?? "Unsafe"
  };
}
function Void2(options = {}) {
  return {
    ...options,
    [Kind2]: "Void",
    type: "void"
  };
}
var __defProp2 = Object.defineProperty;
var __export2 = (target, all) => {
  for (var name in all)
    __defProp2(target, name, { get: all[name], enumerable: true });
};
var value_exports = {};
__export2(value_exports, {
  IsArray: () => IsArray5,
  IsAsyncIterator: () => IsAsyncIterator5,
  IsBigInt: () => IsBigInt5,
  IsBoolean: () => IsBoolean5,
  IsDate: () => IsDate5,
  IsFunction: () => IsFunction5,
  IsIterator: () => IsIterator5,
  IsNull: () => IsNull5,
  IsNumber: () => IsNumber5,
  IsObject: () => IsObject5,
  IsRegExp: () => IsRegExp4,
  IsString: () => IsString5,
  IsSymbol: () => IsSymbol5,
  IsUint8Array: () => IsUint8Array5,
  IsUndefined: () => IsUndefined5
});
var TypeBoxError2 = class extends Error {
  constructor(message2) {
    super(message2);
  }
};
var TransformKind2 = Symbol.for("TypeBox.Transform");
var ReadonlyKind2 = Symbol.for("TypeBox.Readonly");
var OptionalKind2 = Symbol.for("TypeBox.Optional");
var Hint2 = Symbol.for("TypeBox.Hint");
var Kind2 = Symbol.for("TypeBox.Kind");
var type_exports = {};
__export2(type_exports, {
  IsAny: () => IsAny22,
  IsArray: () => IsArray32,
  IsAsyncIterator: () => IsAsyncIterator32,
  IsBigInt: () => IsBigInt32,
  IsBoolean: () => IsBoolean32,
  IsConstructor: () => IsConstructor22,
  IsDate: () => IsDate32,
  IsFunction: () => IsFunction32,
  IsInteger: () => IsInteger22,
  IsIntersect: () => IsIntersect22,
  IsIterator: () => IsIterator32,
  IsKind: () => IsKind22,
  IsKindOf: () => IsKindOf22,
  IsLiteral: () => IsLiteral22,
  IsLiteralBoolean: () => IsLiteralBoolean2,
  IsLiteralNumber: () => IsLiteralNumber2,
  IsLiteralString: () => IsLiteralString2,
  IsLiteralValue: () => IsLiteralValue2,
  IsMappedKey: () => IsMappedKey22,
  IsMappedResult: () => IsMappedResult22,
  IsNever: () => IsNever22,
  IsNot: () => IsNot22,
  IsNull: () => IsNull32,
  IsNumber: () => IsNumber32,
  IsObject: () => IsObject32,
  IsOptional: () => IsOptional22,
  IsPromise: () => IsPromise22,
  IsProperties: () => IsProperties2,
  IsReadonly: () => IsReadonly22,
  IsRecord: () => IsRecord22,
  IsRecursive: () => IsRecursive2,
  IsRef: () => IsRef22,
  IsRegExp: () => IsRegExp32,
  IsSchema: () => IsSchema22,
  IsString: () => IsString32,
  IsSymbol: () => IsSymbol32,
  IsTemplateLiteral: () => IsTemplateLiteral22,
  IsThis: () => IsThis22,
  IsTransform: () => IsTransform22,
  IsTuple: () => IsTuple22,
  IsUint8Array: () => IsUint8Array32,
  IsUndefined: () => IsUndefined32,
  IsUnion: () => IsUnion22,
  IsUnionLiteral: () => IsUnionLiteral2,
  IsUnknown: () => IsUnknown22,
  IsUnsafe: () => IsUnsafe22,
  IsVoid: () => IsVoid22,
  TypeGuardUnknownTypeError: () => TypeGuardUnknownTypeError2
});
var TypeGuardUnknownTypeError2 = class extends TypeBoxError2 {
};
var KnownTypes2 = [
  "Any",
  "Array",
  "AsyncIterator",
  "BigInt",
  "Boolean",
  "Constructor",
  "Date",
  "Enum",
  "Function",
  "Integer",
  "Intersect",
  "Iterator",
  "Literal",
  "MappedKey",
  "MappedResult",
  "Not",
  "Null",
  "Number",
  "Object",
  "Promise",
  "Record",
  "Ref",
  "RegExp",
  "String",
  "Symbol",
  "TemplateLiteral",
  "This",
  "Tuple",
  "Undefined",
  "Union",
  "Uint8Array",
  "Unknown",
  "Void"
];
var PatternBoolean2 = "(true|false)";
var PatternNumber2 = "(0|[1-9][0-9]*)";
var PatternString2 = "(.*)";
var PatternBooleanExact2 = `^${PatternBoolean2}\$`;
var PatternNumberExact2 = `^${PatternNumber2}\$`;
var PatternStringExact2 = `^${PatternString2}\$`;
var TemplateLiteralParserError2 = class extends TypeBoxError2 {
};
var TemplateLiteralFiniteError2 = class extends TypeBoxError2 {
};
var TemplateLiteralGenerateError2 = class extends TypeBoxError2 {
};
var TemplateLiteralPatternError2 = class extends TypeBoxError2 {
};
var Object22 = _Object2;
var includePatternProperties2 = false;
var ExtendsResolverError2 = class extends TypeBoxError2 {
};
var ExtendsResult2;
(function(ExtendsResult22) {
  ExtendsResult22[ExtendsResult22["Union"] = 0] = "Union";
  ExtendsResult22[ExtendsResult22["True"] = 1] = "True";
  ExtendsResult22[ExtendsResult22["False"] = 2] = "False";
})(ExtendsResult2 || (ExtendsResult2 = {}));
var Ordinal2 = 0;
var TransformDecodeBuilder2 = class {
  constructor(schema3) {
    this.schema = schema3;
  }
  Decode(decode3) {
    return new TransformEncodeBuilder2(this.schema, decode3);
  }
};
var TransformEncodeBuilder2 = class {
  constructor(schema3, decode3) {
    this.schema = schema3;
    this.decode = decode3;
  }
  EncodeTransform(encode3, schema3) {
    const Encode2 = (value2) => schema3[TransformKind2].Encode(encode3(value2));
    const Decode2 = (value2) => this.decode(schema3[TransformKind2].Decode(value2));
    const Codec = { Encode: Encode2, Decode: Decode2 };
    return { ...schema3, [TransformKind2]: Codec };
  }
  EncodeSchema(encode3, schema3) {
    const Codec = { Decode: this.decode, Encode: encode3 };
    return { ...schema3, [TransformKind2]: Codec };
  }
  Encode(encode3) {
    const schema3 = CloneType2(this.schema);
    return IsTransform3(schema3) ? this.EncodeTransform(encode3, schema3) : this.EncodeSchema(encode3, schema3);
  }
};
var type_exports3 = {};
__export2(type_exports3, {
  Any: () => Any2,
  Array: () => Array22,
  AsyncIterator: () => AsyncIterator2,
  Awaited: () => Awaited2,
  BigInt: () => BigInt3,
  Boolean: () => Boolean3,
  Capitalize: () => Capitalize2,
  Composite: () => Composite2,
  Const: () => Const2,
  Constructor: () => Constructor2,
  ConstructorParameters: () => ConstructorParameters2,
  Date: () => Date22,
  Deref: () => Deref3,
  Enum: () => Enum2,
  Exclude: () => Exclude2,
  Extends: () => Extends2,
  Extract: () => Extract2,
  Function: () => Function3,
  Index: () => Index2,
  InstanceType: () => InstanceType2,
  Integer: () => Integer2,
  Intersect: () => Intersect3,
  Iterator: () => Iterator2,
  KeyOf: () => KeyOf2,
  Literal: () => Literal2,
  Lowercase: () => Lowercase2,
  Mapped: () => Mapped2,
  Never: () => Never2,
  Not: () => Not3,
  Null: () => Null2,
  Number: () => Number3,
  Object: () => Object22,
  Omit: () => Omit2,
  Optional: () => Optional2,
  Parameters: () => Parameters2,
  Partial: () => Partial2,
  Pick: () => Pick2,
  Promise: () => Promise22,
  Readonly: () => Readonly2,
  ReadonlyOptional: () => ReadonlyOptional2,
  Record: () => Record2,
  Recursive: () => Recursive2,
  Ref: () => Ref2,
  RegExp: () => RegExp22,
  Required: () => Required2,
  Rest: () => Rest2,
  ReturnType: () => ReturnType2,
  Strict: () => Strict2,
  String: () => String3,
  Symbol: () => Symbol22,
  TemplateLiteral: () => TemplateLiteral2,
  Transform: () => Transform2,
  Tuple: () => Tuple2,
  Uint8Array: () => Uint8Array22,
  Uncapitalize: () => Uncapitalize2,
  Undefined: () => Undefined2,
  Union: () => Union3,
  Unknown: () => Unknown2,
  Unsafe: () => Unsafe2,
  Uppercase: () => Uppercase2,
  Void: () => Void2
});
var Type2 = type_exports3;
var jwt = ({
  name = "jwt",
  secret,
  alg = "HS256",
  crit,
  schema: schema3,
  nbf,
  exp,
  ...payload
}) => {
  if (!secret)
    throw new Error("Secret can't be empty");
  const key = typeof secret === "string" ? new TextEncoder().encode(secret) : secret;
  const validator = schema3 ? m(Type2.Intersect([
    schema3,
    Type2.Object({
      iss: Type2.Optional(Type2.String()),
      sub: Type2.Optional(Type2.String()),
      aud: Type2.Optional(Type2.Union([Type2.String(), Type2.Array(Type2.String())])),
      jti: Type2.Optional(Type2.String()),
      nbf: Type2.Optional(Type2.Union([Type2.String(), Type2.Number()])),
      exp: Type2.Optional(Type2.Union([Type2.String(), Type2.Number()])),
      iat: Type2.Optional(Type2.String())
    })
  ]), {}) : undefined;
  return new Q0({
    name: "@elysiajs/jwt",
    seed: {
      name,
      secret,
      alg,
      crit,
      schema: schema3,
      nbf,
      exp,
      ...payload
    }
  }).decorate(name, {
    sign(morePayload) {
      let jwt2 = new SignJWT({
        ...payload,
        ...morePayload,
        nbf: undefined,
        exp: undefined
      }).setProtectedHeader({
        alg,
        crit
      });
      if (nbf)
        jwt2 = jwt2.setNotBefore(nbf);
      if (exp)
        jwt2 = jwt2.setExpirationTime(exp);
      return jwt2.sign(key);
    },
    async verify(jwt2) {
      if (!jwt2)
        return false;
      try {
        const data = (await jwtVerify(jwt2, key)).payload;
        if (validator && !validator.Check(data))
          throw new q("JWT", validator, data);
        return data;
      } catch (_) {
        return false;
      }
    }
  });
};
var src_default = jwt;

// src/auth/services.ts
var login = async ({ email, password }) => {
  const user = await prismaClient_default.user.findUnique({
    select: {
      id: true,
      password: true,
      active: true
    },
    where: {
      email
    }
  });
  const isValid = await Bun.password.verify(password, user?.password || "");
  if (isValid && user) {
    if (user.active)
      return user;
    throw new Error("User is inactive");
  }
  throw new Error("Invalid credentials");
};
var activation = async ({ activationCode }) => {
  try {
    const user = await prismaClient_default.user.findFirst({
      where: {
        activationCode
      }
    });
    if (user) {
      await prismaClient_default.user.update({
        where: { id: user.id },
        data: {
          activationCode: null,
          active: true
        }
      });
      return;
    }
    throw new Error("Not user to activate");
  } catch (e) {
    throw new Error("Not user to activate");
  }
};

// src/variables.ts
var SECRET_KEY = "everyone should be the leviathan, but no one can reach it.";

// src/auth/authRoutes.ts
var authRoutes = new Q0({ prefix: "/auth" }).use(src_default({
  name: "jwt",
  secret: SECRET_KEY
})).post("/", async ({ body, jwt: jwt2, cookie: { auth }, error: error3 }) => {
  try {
    const { id } = await login({ email: body.email, password: body.password });
    const jwtValue = await jwt2.sign({ id });
    if (id) {
      auth.set({
        value: jwtValue,
        httpOnly: true,
        maxAge: 7 * 86400,
        path: "/",
        domain: ".leviathanwar.com",
        secure: true,
        sameSite: "none"
      });
    }
    return {
      status: 200,
      message: `Completed! ${jwtValue}`
    };
  } catch (e) {
    return error3(401, errorHandler(e));
  }
}, {
  body: V.Object({
    email: V.String({ format: "email" }),
    password: V.String({ minLength: 8 })
  })
}).get("/logout", async ({ cookie: { auth }, error: error3 }) => {
  try {
    auth.remove();
    return {
      status: 200,
      message: "Completed!"
    };
  } catch (e) {
    return error3(401, errorHandler(e));
  }
}).post("/activate", async ({ body, error: error3 }) => {
  try {
    await activation({ activationCode: body.hash });
    return "User activated!";
  } catch (e) {
    return error3(401, errorHandler(e));
  }
}, {
  body: V.Object({
    hash: V.String()
  })
});

// src/server/server.ts
class Server {
  app;
  constructor() {
    this.app = new Q0;
    this.app.group("/api/v1", (app) => app.use(userRouter).use(authRoutes));
  }
  start() {
    this.app.listen(process.env.PORT || 3002, () => {
      console.log(`\uD83E\uDD8A Elysia is running at ${this.app.server?.hostname}:${this.app.server?.port}`);
    });
  }
}

// src/index.ts
(() => {
  const server = new Server;
  server.start();
})();

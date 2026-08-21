import type { OxlintConfig } from "oxlint";

import * as ChildProcess from "node:child_process";
import * as Fsp from "node:fs/promises";
import * as Module from "node:module";
import * as Os from "node:os";
import * as Path from "node:path";
import * as Util from "node:util";

const execFileAsync = Util.promisify(ChildProcess.execFile);

const validateWithOxlint = async (config: OxlintConfig): Promise<void> => {
    const oxlintBin: string = Path.join(
        Path.dirname(
            Module.createRequire(import.meta.url).resolve(
                "oxlint/package.json",
            ),
        ),
        "bin/oxlint",
    );

    const dir: string = await Fsp.mkdtemp(
        Path.join(Os.tmpdir(), "oxlint-integration-"),
    );

    const configPath: string = Path.join(dir, "oxlintrc.json");

    try {
        await Fsp.writeFile(configPath, JSON.stringify(config));

        await execFileAsync(
            process.execPath,
            [
                oxlintBin,
                "-c",
                configPath,
                "--print-config",
            ],
            {
                timeout: 5000,
            },
        );
    } catch (error) {
        const stderr: string =
            error instanceof Error && "stderr" in error
                ? String(error.stderr)
                : "";

        const stdout: string =
            error instanceof Error && "stdout" in error
                ? String(error.stdout)
                : "";

        const message: string =
            stderr.length > 0
                ? stderr
                : stdout.length > 0
                  ? stdout
                  : error instanceof Error
                    ? error.message
                    : String(error);

        throw new Error(message);
    } finally {
        await Fsp.rm(dir, {
            recursive: true,
            force: true,
        });
    }
};

export { validateWithOxlint };

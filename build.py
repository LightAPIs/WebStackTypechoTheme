# -*- coding: utf-8 -*-
import os
import tarfile
import zipfile
import argparse
import json


def make_zipfile(output_filename, source_dir, package_dir_name):
    with zipfile.ZipFile(output_filename, mode="w", compression=zipfile.ZIP_DEFLATED) as zf:
        for root, dirs, files in os.walk(source_dir):
            zf.write(root, os.path.join(package_dir_name, os.path.relpath(root, source_dir)))
            for file in files:
                filename = os.path.join(root, file)
                if os.path.isfile(filename):
                    arcname = os.path.join(package_dir_name, os.path.relpath(filename, source_dir))
                    zf.write(filename, arcname)


if __name__ == "__main__":
    ap = argparse.ArgumentParser(description="打包项目")
    ap.add_argument("-s", "--src", required=False, help="自定义项目源文件所在目录")
    ap.add_argument("-i", "--info", required=False, help="自定义项目信息文件路径")

    args = vars(ap.parse_args())
    build_dir = "build"
    print("************************************************")
    src_path = os.path.join(os.getcwd(), "src")
    if args["src"] and os.path.exists(args["src"]):
        src_path = args["src"]
    print("INFO:: 源文件路径: " + src_path)
    work_path = os.path.abspath(os.path.dirname(src_path))
    print("INFO:: 工作路径: " + work_path)

    build_path = os.path.join(work_path, build_dir)
    if not os.path.exists(build_path):
        os.makedirs(build_path)

    info_file = os.path.join(work_path, "info.json")
    if args["info"]:
        info_file = args["info"]
    if not os.path.exists(info_file):
        print("ERROR:: 没有找到需要打包的信息文件！")
        exit()

    info = {"name": "unknow", "version": "0.1", "package": "src"}
    with open(info_file, encoding="utf-8") as load_f:
        info = json.load(load_f)

    build_filename = info["name"] + "_v" + info["version"]
    print("INFO:: 打包文件名称: " + info["name"])
    print("INFO:: 打包文件版本: " + info["version"])
    print("INFO:: 压缩包根目录: " + info["package"])

    build_tar_file = os.path.join(build_path, build_filename + ".tar.gz")
    if os.path.exists(build_tar_file):
        os.remove(build_tar_file)
    with tarfile.open(build_tar_file, mode="w:gz") as tar:
        tar.add(src_path, arcname=info["package"])
        print("INFO:: 打包 tar: " + src_path)
        tar.close()
    print("INFO:: 已经生成打包文件至: " + build_tar_file)

    build_zip_file = os.path.join(build_path, build_filename + ".zip")
    if os.path.exists(build_zip_file):
        os.remove(build_zip_file)
    make_zipfile(build_zip_file, src_path, info["package"])
    print("INFO:: 已经生成打包文件至: " + build_zip_file)

    print("SUCCESS:: 打包操作已经完成。")
    print("************************************************")

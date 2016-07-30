#!/usr/bin/env python
# coding=utf-8

'''Make network profiles
'''

# Standard library imports.
from __future__ import division
from pprint import pprint
import sys
import os
import atexit
import gc

# Related third party imports.
import yaml

# Local application/library specific imports.
# import app_specific_mod

# Relevant ``__all__`` specification here.
# __all__ = ...

# GLOBAL CONSTANT names.  *if main* section at bottom sets global names too.

def on_exit():
    '''Actions to do on exit.'''
    print('on_exit', LOGF)

    # Invoke the garbage collector.
    gc.collect()

# Program name from file name.
PN = os.path.splitext(sys.argv[0])[0]

# Log file.
LOGF = ''.join([PN, '_log', '.txt'])

atexit.register(on_exit)
